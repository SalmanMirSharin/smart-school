from rest_framework import serializers
from accounts.models import User
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError, force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from accounts.utils import Util


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'role', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    # Validating password and confirm password while Registration
    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            raise serializers.ValidationError("Password and confirm password don't match.")
        return data

    def create(self, validated_data):  # Fix the argument name here
        return User.objects.create_user(**validated_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email= serializers.EmailField(max_length=155)

    class Meta:
        model = User
        fields = ['email', 'password']

class UserProfileSreializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'role']

class SendPasswordResetEmailSreializer(serializers.Serializer):
    email = serializers.EmailField(max_length=155)

    class Meta:
        fields = ['email']

    def validate(self, data):
        email = data.get('email')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            # print('Encoded UID: ', uid)
            token = PasswordResetTokenGenerator().make_token(user)
            # print('Password reset token: ', token)
            current_domain = self.context.get('current_domain')
            
            if current_domain:
                # print("===========================================================")
                link = f'http://{current_domain}/api/user/reset_password_email/{uid}/{token}'
                print(link)
                body = 'Click following link to reset your password ' + link
                data = {
                    'subject': 'Reset Your CodeFussion Smart School Account Password',
                    'body': body,
                    'to_email': user.email
                }
                # Send Email
                Util.send_email(data)
                return data

        else:
            raise serializers.ValidationError('You are not a registered user')


class UserResetPasswordSreializer(serializers.Serializer):
    password= serializers.CharField(max_length=255, style={'input_type': 'password'}, write_only=True)
    password2= serializers.CharField(max_length=255, style={'input_type': 'password'}, write_only=True)
    class Meta:
        fields = ['password', 'password2']

    def validate(self, data):
        try:
            password= data.get('password')
            password2= data.get('password2')
            uid= self.context.get('uid')
            token=self.context.get('token')
            if password != password2:
                raise serializers.ValidationError("Password and confrim password doesn't match.")
            id= smart_str(urlsafe_base64_decode(uid))
            user= User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError('Token is not valid or expired')
            user.set_password(password)
            user.save()
            return data
        
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError('Token is not valid or expired')