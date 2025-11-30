from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def hello_world(request):
    """
    Simple hello world endpoint
    """
    return Response({
        'message': 'Hello from Django!',
        'status': 'success'
    })


@api_view(['GET', 'POST'])
def api_test(request):
    """
    Test endpoint that echoes back the request method and data
    """
    if request.method == 'GET':
        return Response({
            'method': 'GET',
            'message': 'This is a GET request'
        })
    elif request.method == 'POST':
        return Response({
            'method': 'POST',
            'message': 'This is a POST request',
            'data': request.data
        }, status=status.HTTP_201_CREATED)
