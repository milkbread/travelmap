from django.contrib.gis import admin
from .models import POI, Route

admin.site.register(POI, admin.GeoModelAdmin)
admin.site.register(Route, admin.GeoModelAdmin)
