## This is the backend for the "Books I might like" app. It uses Express and a MySQL database v8 with authentication

1. A user login table has been created to store username and passwords (the sql is in users.sql)
1. Validation is performed on registration
1. The passwords are encrypted with bcrypt
1. SQL injection is prevented with escapes
1. Authentication is with JWT
1. This provides a REST API with one GET endpoint to return the book data and two POST endpoints for sign up and login:
1. .env variables are used to protect private information

To use without the front end you can query with:

GET /api/main (secured route - need a JSON web token)

POST /api/sign-up (raw JSON parameters - username, password, password_repeat)

POST /api/login (raw JSON parameters - username, password)
