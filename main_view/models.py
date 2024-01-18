from django.db import models



class sportGroups(models.Model):
    discipline = models.CharField(max_length=50)
    trainer_name = models.CharField(max_length=50)

    class Meta:
        db_table = "sportGroups"


