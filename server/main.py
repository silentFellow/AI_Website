from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from userModel import users
from eventModel import events

from mongodb import (
  find_user, 
  add_user, 
  remove_user, 
  add_event
)

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=['*']
)

@app.get('/')
def home():
  return None

@app.get('/users/login/{userName}', response_model=users)
async def login(userName: str):
  res = await find_user(userName)
  if res:
    return res
  raise HTTPException(404)
  
@app.post('/users/add')
async def add(user: users):
  res = await add_user(user.model_dump())
  if res:
    return "User added successfully."
  raise HTTPException(404)

@app.delete('/users/remove/{userName}')
async def remove(userName: str):
  res = await remove_user(userName)
  if res:
    return "User removed successfully."

@app.post('/events/add', response_model=events)
async def add(event: events):
  res = await add_event(event.model_dump())
  if res:
    return res
  raise HTTPException(404)