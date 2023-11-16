from django.urls import path, include
from rest_framework import routers
from .views import ProductoViewSet

router= routers.DefaultRouter()
router.register(r'',ProductoViewSet)

urlpatterns =[

    path('', include(router.urls)),
]