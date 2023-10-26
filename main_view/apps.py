from django.apps import AppConfig


class MainScreenConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main_screen'


class MainViewConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main_view'
