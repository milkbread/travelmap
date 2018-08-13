from django.contrib.gis.db import models


class POI(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=600, null=True)

    TYPES = (
        (0, 'Aussichtspunkt'),
        (1, 'Bademöglichkeit'),
        (2, 'Unterkunft'),
    )
    type = models.IntegerField(choices=TYPES)

    geomety = models.PointField()

    # Returns the string representation of the model.
    def __str__(self):
        return self.name


class Route(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=600, null=True)

    TYPES = (
        (0, 'Autoroute'),
        (1, 'Wanderung'),
    )
    type = models.IntegerField(choices=TYPES)

    geomety = models.LineStringField()

    # Returns the string representation of the model.
    def __str__(self):
        return self.name
