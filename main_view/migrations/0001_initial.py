# Generated by Django 4.2.3 on 2024-01-19 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='sportGroups',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discipline', models.CharField(default='', max_length=50)),
                ('trainer_name', models.CharField(default='', max_length=50)),
                ('actual_size', models.IntegerField(default=0)),
                ('max_size', models.IntegerField(default=0)),
                ('start_date', models.DateField(blank=True, null=True)),
                ('start_time', models.TimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'sportGroups',
            },
        ),
    ]
