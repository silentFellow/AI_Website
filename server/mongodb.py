from motor import motor_asyncio

URL = "mongodb+srv://silentFellow:R36QaYF0U71lIedV@cluster0.ppdi5nj.mongodb.net/?retryWrites=true&w=majority"
client = motor_asyncio.AsyncIOMotorClient(URL)

db = client.aiweb
userCollection = db.users
eventCollection = db.events

async def find_user(userName):
  res = await userCollection.find_one({"userName": userName})
  return res

async def add_user(userData):
  doc = userData
  res = await userCollection.insert_one(doc)
  return doc

async def remove_user(userName):
  res = userCollection.find_one_and_delete({'userName': userName})
  return res

async def add_event(eventData):
  doc = eventData
  res = await eventCollection.insert_one(doc)
  return doc