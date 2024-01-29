from django.urls import path, re_path
from main_view import views
urlpatterns = [
    path('login', views.login, name="Login"),
    path('signup', views.signup, name="Signup"),
    path('dashboard', views.dashboard, name="Dashboard"),
    path('creategroup', views.create_group, name="Create_group"),
    path('joingroup', views.join_group, name="Join_group"),
    re_path(r'^group/(\d+)', views.update_group, name='Update_group'),
    path('manage', views.show_group, name="Show_Group"),
    re_path(r'^groupsquad/(\d+)', views.group_squad, name='group_suqad'),
    ]
