from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'/blogs',views.blogViewSet)

urlpatterns = [
    path('',include(router.urls))
]
