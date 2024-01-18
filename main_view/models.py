from django.db import models

fields = ['id', 'group_name', 'trainer_name', 'max_size', 'actual_size']


class sportGroups(models.Model):
    id = models.IntegerField(primary_key=True)
    discipline = models.CharField(max_length=50, null=True, blank=True)
    trainer_name = models.CharField(max_length=20, null=True, blank=True)
    max_size = models.IntegerField(default=0)
    actual_size = models.IntegerField(default=0)

    class Meta:
        db_table = "sportGroups"


