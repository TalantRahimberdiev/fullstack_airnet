
from django.urls import path
from app import views

urlpatterns = [
    path('', views.user_list),
    path('task/<int:pk>', views.task_list),
    path('task/add/', views.add),
    path('tasksByPk/<int:pk>', views.tasksByPk),
    path('task/update/<int:details>', views.task_update_remove),
    path('task/remove/<int:details>', views.task_update_remove),
]