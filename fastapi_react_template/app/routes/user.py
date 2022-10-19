from bson import ObjectId
from fastapi import APIRouter
from ..models.user import User
from ..config.db import conn
from ..schemas.user import serializeDict, serializeList
from bson import ObjectId

user = APIRouter()

@user.get('/')
async def get_all_users():
    return serializeList(conn.local.user.find())

@user.get('/{id}')
async def get_by_id(id):
    return serializeDict(conn.local.user.find_one({"_id": ObjectId(id)}))

@user.post('/')
async def create_user(user: User):
    conn.local.user.insert_one(dict(user))
    return serializeList(conn.local.user.find())

@user.put('/{id}')
async def update_user(id, user:User):
    conn.local.user.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(user)})
    return serializeDict(conn.local.user.find_one({"_id": ObjectId(id)}))

@user.delete('/{id}')
async def delete_user(id):
    temp = conn.local.user.find_one({"_id": ObjectId(id)})
    conn.local.user.find_one_and_delete({"_id": ObjectId(id)})
    return serializeDict(temp)