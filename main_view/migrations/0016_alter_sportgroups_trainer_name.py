# Generated by Django 4.2.3 on 2024-01-18 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_view', '0015_alter_sportgroups_actual_size_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sportgroups',
            name='trainer_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
