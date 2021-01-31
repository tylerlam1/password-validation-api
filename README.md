# Password Validation Application

This is a simple API used to validate passwords coming from the client. Passwords are hashed with SHA256 before being sent over HTTPS.

You can set up your own server password by creating a `.env` file and adding the following into it:
```dosini
SERVER_PASSWORD=secret
```