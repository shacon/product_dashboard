from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/products/", views.products, name="products"),
]