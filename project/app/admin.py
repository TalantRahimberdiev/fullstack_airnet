
from django.contrib import admin

# Register your models here.

from app.models import User
from app.models import Task

admin.site.register(User)
admin.site.register(Task)