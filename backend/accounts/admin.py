from django.contrib import admin
from accounts.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.

class UserModelAdmin(BaseUserAdmin):
    list_display = ["id", "email", "first_name", "role"]
    list_filter = ["role"]  # Filter by role
    fieldsets = [
        ("User Credentials", {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["first_name", "last_name", "role"]}),
        ("Permissions", {"fields": ["is_admin", "is_teacher", "is_student", "is_staff"]}),
    ]

    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "first_name", "last_name", "role", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = []

# Now register the new UserAdmin...
admin.site.register(User, UserModelAdmin)