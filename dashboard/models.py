from django.db import models

class Product(models.Model):
  name = models.CharField(max_length=255)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  total_reviews = models.IntegerField(default=0)
  rating = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
  image_url = models.URLField(blank=True, null=True)

  def __str__(self):
    return self.name
