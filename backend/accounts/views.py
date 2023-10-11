from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from accounts.serailizers import UserRegistrationSerializer, UserLoginSerializer, UserProfileSreializer, UserResetPasswordSreializer, SendPasswordResetEmailSreializer
from django.contrib.auth import authenticate
from accounts.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

# Create your views here.

# Creating token manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistrationView(APIView):
    renderer_classes=[UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user= serializer.save()
            token= get_tokens_for_user(user)
            return Response({'token': token,'msg': 'Registration Successful'}, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginView(APIView):
    renderer_classes=[UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email= serializer.data.get('email')
            password= serializer.data.get('password')
            user = authenticate(email=email, password= password)
            if user is not None:
                token= get_tokens_for_user(user)
                return Response({'token': token,'msg': 'Login Successful'}, status = status.HTTP_200_OK)
            else:
                return Response({'errors': {'non_field_errors': ['Email or Password is not valid']}}, status = status.HTTP_404_NOT_FOUND)
           
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
class UserProfileView(APIView):
    renderer_classes=[UserRenderer]
    permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        serializer= UserProfileSreializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SendResetPasswordEmailView(APIView):
    renderer_classes=[UserRenderer]
    def post(self, request, format=None):
        current_domain = request.META['HTTP_HOST']
        serializer= SendPasswordResetEmailSreializer(data=request.data, context={'current_domain': current_domain})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg': 'A password reset link was sent. Please check your email.'}, status = status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserResetPasswordView(APIView):
    renderer_classes=[UserRenderer]
    def post(self, request, uid, token, format=None):
        serializer= UserResetPasswordSreializer(data=request.data, context={'uid': uid, 'token': token})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg': 'Reset Password Successful.'}, status = status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)