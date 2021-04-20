# comp-2523-final-project devHouse

Refer to this Notion for updated instructions: https://www.notion.so/Final-Project-devHouse-68c7ac80db914dc297f11eee2ffcf73f  
https://www.notion.so/COMP2523-Term-Project-69075ecf73d7423dbb62a4be748c72ad  
Draft database organization: https://miro.com/app/board/o9J_lQhc25Y=/  
Trello Board: https://trello.com/b/i8U2N9oy/devhouse  
Notes: https://www.notion.so/Week-9-Heroku-deployment-with-TS-ccd31e1c7e844d0889603fdda37b3715

# Breakdown of Work:

### Megan Kuo:

I worked on the following tasks:

Branch: authentication

1. Set up Heroku - Set up the initial files for Heroku to read from the master branch on our GitHub Repo. Fixed a broken Heroku due to errors in the package.json.
2. Authentication Mock Services - This task makes the functions that interact with the database. It is used by passport to authenticate login user exists.
3. PassportConfig - This file is responsible for setting up the strategy to Passport. It takes the user and serializes it into sessions
4. Passport Middleware - This file initializes passport.
5. Authentication Middleware - I attempted to implement ensure authenticated so that users can only access the feed of the user is logged in. But I was unable to implement it without breaking the app.
6. Authentication Service - Attempted to implement the same functions from the mock authentication with a SQL server. But I was unable to return an object that implements IUser to pass to passport.
7. Attempted to help Jo Jo retrieve posts from a database...
8. Implemented logout function that destroys the session cookie.

#### Research:

1. Studied how the imports and exports are connected.
2. Referenced the Passport Lab for how passport logs in a user.
3. https://www.tutorialkart.com/nodejs/nodejs-mysql-result-object/ One of the links I looked at to try and return an object from the sql queries.

### Jo Jo Lam:

I worked on the following tasks:

Branch: addPost

I worked on the following tasks / successfully using the mockDB:

1. Get all post by the current user (enabled by the success of megan's auth)
2. Create post
3. Can delete post
4. Can click into post to view commments
5. Can add comment to that post
6. Updated to show current user's name and email on posts.ejs
8. Created post table in cleardb using workbench

#### Research:

Researched and attempted in branch jojosPlayground to deal with postservice thats hooked up to cleardb

1. Can grab posts from db and print to consoleee
2. Researched and failed with Megan to get ejs to display the said posts
3. referenced database labs
4. Kinda assisted Linda in successfully pushing new user info from registration
5. Understand that i need to write sql statements to create post, delete post, create comments, search for posts/people
6. helped and failed to troubleshoot linda

### Linda Nguyen:

Assigned: Authentication / Registration

Branch: linda/authentication

I worked on the following tasks:

1. Based on Megan's helpful groundwork, I was able to implement the ability for a user to "register" (by pushing a user to the Heroku ClearDB / or MySQL database locally.

- Required creating a Database Configuration file (and assigning \_db to our database)

3. Successfully throw the correct error messages when a registration does not work.

- When an email already exists / password for that email
- When a username already exists
- Database set up in MySQL locally and on Heroku to match IUser interface
- Troubleshoot Database set up to be able to "toggle" between local and online database as necessary.

5. Attempted to authenticate user to be able to go to login but failed to implement the logic behind serialize/deserialize in my part of the tasks
6. Attempted to use bcrypt but failed to implement it successfully to have the hash / salt
7. Assisted Megan and Jojo with hooking up their parts to ClearDB on Heroku
8. Tried to troubleshoot with Megan and Jojo on their parts of the code

#### Research:

1. I tried to study the project files to understand how the structure worked.
2. I took a look at our older labs (Passport, and Express labs) to understand more about how authentication and the express server works.
3. I used older labs from our COMP 2350 (Database) class in order to help with connecting a real database to our project.
4. I used this post: https://stackoverflow.com/questions/18496540/node-js-mysql-connection-pooling to help me understand more about pooling and what it was doing in conjunction with the step above.
5. I watched parts of the videos that was uploaded about or project.
   a. OOP Passport Overview
   b. Troubleshooting student's problems with passport implementation
6. Researched more on OOP and Express.
   https://www.youtube.com/watch?v=F2qsnYkF-5M&ab_channel=TravisTidwell

# SOLID Principles

## Single responsibility principle

- Most classes are responsible for one thing such as the PassportConfig and authentication and post service classes
- There are also instances where we have broken this principle because we not able to to make the code work (ie. the functions where we were accessing the database and manipulating the returned data)

## Open closed principle

- We did not use this principle in this project. No classes extend another class.

## Liskov substitution principle

- Almost all implemented interfaces had the methods implemented. There was some confusion with IAuthentication as we tried to implement the real database but all functions were implemented for the mock dataabse.

## Interface segregration principle

- Was not necessary for this particular project.

## Dependency inversion principle

- Most classes are very loosely coupled with other modules. They take in an instance of a class in their constructor instead of creating the instance inside the class (ie. server.ts shows how new instances are passed into the classes that use them)
