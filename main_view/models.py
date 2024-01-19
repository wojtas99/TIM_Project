from django.db import models


class sportGroups(models.Model):
    discipline = models.CharField(max_length=50, default="")
    trainer_name = models.CharField(max_length=50, default="")
    actual_size = models.IntegerField(default=0)
    max_size = models.IntegerField(default=0)
    start_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)

    class Meta:
        db_table = "sportGroups"


