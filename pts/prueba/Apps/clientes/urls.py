from django.urls import path, include
from rest_framework import routers
from .views import ClienteViewSet

router= routers.DefaultRouter()
router.register(r'',ClienteViewSet)

urlpatterns =[

    path('', include(router.urls)),
]