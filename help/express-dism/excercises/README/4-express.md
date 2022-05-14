# Exercise 4

The main point of this exercise is to be comfortable with express and creating routes. (GET and POST)

You are tasked to create a backend server which only main purpose is to create a random username generator.

1.  Create a new project called `exercise-4`
2.  In `index.js`, modify the codes accordingly such that you create the routes according to the following specification shown in the end of this file.
3.  Test your application using postman.

## Backend Specification

-   GET /api/username
    -   Should return a random username
    -   Sample return data (200 OK)
        ```json
        {
            "success": true,
            "username": "Blithesome-priscilla-65"
        }
        ```
-   GET /api/username/:count

    -   should return count number of usernames
    -   Sample return data (200 OK)
        ```json
        {
            "success": true,
            "username": [
                "tubby-wubby-45",
                "orange-kraken-24",
                "awesome-pawsome-20"
            ]
        }
        ```

-   POST /api/username

    -   accepts a body with the suffix and prefix
    -   should return a randomly generated username WITH the suffix and prefix with a status 200
    -   only returns status 400 (bad request) when there is no suffix OR prefix

    -   Sample body (200 OK)
        ```json
        {
            "suffix": "dumb",
            "prefix": "dumb"
        }
        ```
    -   Sample return data (200 OK)
        ```json
        {
            "success": true,
            "username": "dumb-funky-wunky-45-dumb"
        }
        ```
    -   Sample body (400 Bad Request)
        ```json
        {
            "suffix": "dumb"
        }
        ```
    -   Sample return data (400 Bad Request)
        ```json
        {
            "success": false,
            "username": "",
            "message": "You are missing either the prefix or the suffix"
        }
        ```
