from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    release_year = models.IntegerField()
    genre = models.CharField(max_length=50)
    watched = models.BooleanField(default=False)
    rating = models.IntegerField(default=0)
    review = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='movie_images/', blank=True, null=True)

    def __str__(self):
        return self.title
