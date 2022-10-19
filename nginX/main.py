from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/")
def home():
    return {"app": os.environ["APP"]}