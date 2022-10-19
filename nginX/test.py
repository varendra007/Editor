from urllib import response
import requests
from tqdm import tqdm
from time import sleep as sleep

hit = []
no = 10000

pb = tqdm(total=no)
for i in range(no):
    pb.update(n=1)
    response = requests.get("http://localhost")
    response = response.json()
    hit.append(response["app"])

for i in set(hit):
    print(f"Server {i} --  Hit: {hit.count(i)}, Ratio: {6*hit.count(i)/no}")
