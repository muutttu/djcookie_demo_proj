from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "djcookie_demo_proj.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import djcookie_demo_proj.users.signals  # noqa F401
        except ImportError:
            pass
