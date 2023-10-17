from pydantic import BaseModel

class users(BaseModel):
  userName: str
  password: str
  role: str