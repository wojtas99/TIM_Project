from django.urls import path
from main_view import views
urlpatterns = [
    path('login', views.login, name="Login"),
    path('signup', views.signup, name="Signup"),
    path('dashboard', views.dashboard, name="Dashboard"),
    ]
