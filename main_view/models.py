from django.db import models
from django.contrib.auth.models import User


class sportGroups(models.Model):
    discipline = models.CharField(max_length=50, default="")
    trainer_name = models.CharField(max_length=50, default="")
    actual_size = models.IntegerField(default=0)
    max_size = models.IntegerField(default=0)
    start_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    trainer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = "sportGroups"


class Membership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(sportGroups, on_delete=models.CASCADE)

    class Meta:
        db_table = "membership"
