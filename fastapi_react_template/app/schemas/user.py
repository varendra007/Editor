def userEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "fname": item["fname"],
        "lname": item["lname"],
        "email": item["email"]
    }

def usersEntity(items) -> list:
    return [userEntity(item) for item in items]

def serializeDict(item) -> dict:
    return {**{"_id":str(item["_id"])}, **{i:item[i] for i in item if i!="_id"}}

def serializeList(items) -> list:
    return [serializeDict(item) for item in items]