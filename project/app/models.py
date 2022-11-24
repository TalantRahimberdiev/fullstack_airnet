
from django.db import models

class User(models.Model):
   firstname=models.CharField(max_length=33)
   lastname = models.CharField(max_length=33)

   def __str__(self):
      return "%s %s" % (self.firstname, self.lastname )


class Task(models.Model):
   user_id=models.ForeignKey(User, on_delete=models.CASCADE, null=True)
   description = models.CharField(max_length=133)
   time=models.DateField()
   completed=models.BooleanField()

   def __str__(self):
      return self.description


