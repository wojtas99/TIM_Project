from django.db import models





class sportGroups(models.Model):
    discipline = models.CharField(max_length=50, default="")
    trainer_name = models.CharField(max_length=50, default="")
    actual_size = models.IntegerField(default=0)
    max_size = models.IntegerField(default=0)

    class Meta:
        db_table = "sportGroups"


