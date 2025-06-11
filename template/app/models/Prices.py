from django.db import models

class Prices(models.Model):
    plan=models.CharField(max_length=200)
    prices=models.DecimalField(max_digits=10,decimal_places=2)
    caracteristicas=models.CharField(max_length=250)

    def __str__(self):
        return self.plan