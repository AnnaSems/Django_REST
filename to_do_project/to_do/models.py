from django.db import models
from user.models import User

# Create your models here.


class Project(models.Model):
    project_name = models.CharField(max_length=80, unique=True)
    link = models.URLField(blank=True)
    users = models.ManyToManyField(
        User, related_name="соавторы")

    def __str__(self):
        return self.project_name


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.CharField(max_length=400)
    created_date = models.DateField(auto_now=True)
    updated_date = models.DateField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=False)
