from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Project, TODO
from .serializer import ProjectModelSerializer, TODOModelSerializer
# Create your views here.


class ProjectPagination(PageNumberPagination):
    page_size = 10


class TODOPagination(PageNumberPagination):
    page_size = 20


class ProjectModelViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectPagination
    filterset_fields = ['project_name']


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    pagination_class = TODOPagination
    filterset_fields = ['project', 'user']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
