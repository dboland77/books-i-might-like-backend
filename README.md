## This is the backend for the "Books I might like" app. It uses Express and a MySQL database v8 with authentication

1. A user login table has been created to store username and passwords (the sql is in users.sql)
1. The passwords are encrypted with bcrypt
1. Authentication is with JWT
1. This provides a REST API with one GET endpoint
