from django.conf.urls import url
from django.contrib.gis import admin
from django.urls import path
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    path('admin/', admin.site.urls),
]
