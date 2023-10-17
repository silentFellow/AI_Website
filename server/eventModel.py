from pydantic import BaseModel

class events(BaseModel):
  name: str
  lastDate: str
  link: str