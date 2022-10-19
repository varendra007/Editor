from django.db import models
import random 
import string

def generate_unique_code():
    length = 6
    while True:
        code1 = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code1).count()==0: break
    return code1

class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    craeted_at = models.DateTimeField(auto_now_add=True)