from django.urls import path, include
from rest_framework import routers
from .views import VentaViewSet

router= routers.DefaultRouter()
router.register(r'',VentaViewSet)

urlpatterns =[

    path('', include(router.urls)),
]