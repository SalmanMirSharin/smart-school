from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from accounts.manager import UserManager

# Create your models here.

class User(AbstractBaseUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ("teacher", "Teacher"),
        ("student", "Student"),
        ("office_staff", "Office_Staff")
    )
    email = models.EmailField(verbose_name="Email", max_length=155, unique=True,)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.CharField(max_length=15, choices=ROLE_CHOICES, default="admin")
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    ceated_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "role"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        if self.is_admin:
            return True
        elif perm == "smartschoolb.add_teacher":
            return self.is_teacher
        elif perm == "smartschoolb.add_student":
            return self.is_student
        elif perm == "smartschoolb.add_office_staff":
            return self.is_office_staff
        else:
            return False


    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app 'app_label'?"
        # Simplest possible answer: Yes, always
        return True
    
    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    
    @property
    def is_teacher(self):
        if self.role == "teacher":
            return True
        
    @property
    def is_student(self):
        if self.role == "student":
            return True
    
    @property
    def is_office_staff(self):
        if self.role == "office_staff":
            return True