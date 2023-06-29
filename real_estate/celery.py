from __future__ import absolute_import
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', "real_estate.settings.development")

from celery import Celery
from real_estate.settings import base



app = Celery("real_estate")

app.config_from_object("real_estate.settings.development", namespace="CELERY")

app.autodiscover_tasks(lambda: base.INSTALLED_APPS)

