from pydantic import BaseModel

class User(BaseModel):
    fname: str
    lname: str
    email: str