
from rest_framework import serializers
from .models import Task, User

class Task_Ser(serializers.ModelSerializer):

  class Meta:
    model = Task  
    fields = ( '__all__')

class User_Ser(serializers.ModelSerializer):

  class Meta:
    model = User 
    fields = ('__all__')
