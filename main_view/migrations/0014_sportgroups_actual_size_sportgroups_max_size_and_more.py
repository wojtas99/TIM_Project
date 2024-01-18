# Generated by Django 4.2.3 on 2024-01-18 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_view', '0013_alter_sportgroups_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='sportgroups',
            name='actual_size',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='sportgroups',
            name='max_size',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='sportgroups',
            name='trainer_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
