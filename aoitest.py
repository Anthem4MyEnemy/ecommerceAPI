import requests
import json

url = "localhost:5000/api/users/615b65ecbb78a9ef2b48aec6"

payload = json.dumps({
  "username": "Testingupdate"
})
headers = {
  'token': 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWI2NWVjYmI3OGE5ZWYyYjQ4YWVjNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMzODA0MTEsImV4cCI6MTYzMzYzOTYxMX0.35BZTSH-gBkXhtWWT_F2ygoYkKJTfRFHjKXat1Ew1rY',
  'Content-Type': 'application/json'
}

response = requests.request("GET", "http://localhost:5000/api/users/615b65ecbb78a9ef2b48aec6")

print(response.text)
