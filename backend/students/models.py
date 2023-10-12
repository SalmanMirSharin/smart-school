from django.db import models

# Create your models here.

class Student(models.Model):
    # Personal Information
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])

    # Contact Information
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(max_length=100)

    # Parent/Guardian Information
    guardian_name = models.CharField(max_length=100)
    guardian_phone_number = models.CharField(max_length=15)
    guardian_email = models.EmailField(max_length=100)

    # Academic Information
    roll_number = models.CharField(max_length=15)
    admission_date = models.DateField()
    current_class = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name} (Class {self.current_class})"