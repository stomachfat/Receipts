from django.conf.urls import url
from rest_framework.authtoken import views as drf_views
urlpatterns = [
    url(r'^auth$', drf_views.obtain_auth_token, name='auth'),
]
# "token":"95c057db2feb07ebf3f888eece3078c325882f96"
