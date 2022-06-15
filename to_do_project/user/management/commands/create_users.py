from django.contrib.auth.management.commands import createsuperuser
from user.models import User
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string


class Command(BaseCommand):
    help = u'Создание случайного пользователя'

    def add_arguments(self, parser):
        parser.add_argument('-p', '--prefix', type=int,
                            help='Префикс для создания  superuser', )
        parser.add_argument('-a', '--admin', action='store_true',
                            help='Создание учетной записи администратора')

    def handle(self, *args, **kwargs):
        prefix = kwargs['prefix']
        admin = kwargs['admin']
        prefix = kwargs['prefix']
        if admin:
            User.objects.create_superuser(
                'admin', 'admin@example.com', 'adminpass')
        if prefix:
            for i in range(prefix):
                email = get_random_string() + '@ya.ru'
                User.objects.create_user(
                    username=get_random_string(), email=email, password='123')
