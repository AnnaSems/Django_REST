from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import User
from .serializer import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    serializer_class = UserModelSerializer
    queryset = User.objects.all()

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserModelSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, ):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserModelSerializer(user)
        return Response(serializer.data)
