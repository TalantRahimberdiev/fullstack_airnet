
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from app.models import User, Task
from app.serializers import User_Ser,Task_Ser


@api_view(['GET'])
def user_list(request):
    if request.method == 'GET':
        data = User.objects.all()
        serializer = User_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def task_list(request,pk):
    if request.method == 'GET':
        data = Task.objects.filter(user_id=pk)
        serializer = Task_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def tasksByPk(request,pk):
    if request.method == 'GET':
        data = Task.objects.filter(id=pk)
        serializer = Task_Ser(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def add(request):
    if request.method == 'POST':
        serializer = Task_Ser(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        print(serializer)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def task_update_remove(request, details):
    try:
        task =Task.objects.get(pk=details)
    except Task.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = Task_Ser(task, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)