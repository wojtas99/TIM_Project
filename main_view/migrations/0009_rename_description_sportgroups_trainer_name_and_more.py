# Generated by Django 4.2.3 on 2024-01-18 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_view', '0008_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sportgroups',
            old_name='description',
            new_name='trainer_name',
        ),
        migrations.RemoveField(
            model_name='sportgroups',
            name='group_name',
        ),
        migrations.AddField(
            model_name='sportgroups',
            name='actual_size',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='sportgroups',
            name='discipline',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='sportgroups',
            name='max_size',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterModelTable(
            name='sportgroups',
            table='sportGroups',
        ),
    ]
