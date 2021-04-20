# comp-2523-final-project devHouse

Refer to this Notion for updated instructions: https://www.notion.so/Final-Project-devHouse-68c7ac80db914dc297f11eee2ffcf73f  
https://www.notion.so/COMP2523-Term-Project-69075ecf73d7423dbb62a4be748c72ad  
Draft database organization: https://miro.com/app/board/o9J_lQhc25Y=/  
Trello Board: https://trello.com/b/i8U2N9oy/devhouse  
Notes: https://www.notion.so/Week-9-Heroku-deployment-with-TS-ccd31e1c7e844d0889603fdda37b3715

# Breakdown of Work:

### Megan Kuo:
I worked on the following tasks:

1. <Insert Some Task Here> - This task is responsible for xyz functionality.
2. <Insert Some Task Here> - This task is responsible for xyz functionality.
3. <Insert Some Task Here> - This task is responsible for xyz functionality.

#### Research:

1. <Insert Video or Link to thing you needed to research>

### Jo Jo Lam:
I worked on the following tasks:

Branch: addPost

I worked on the following tasks / successfully using the mockDB:
1. Get all post by the current user
2. Create post
3. Can delete post
4. Can click into post to view commments
5. Can add comment to that post
6. Updated to show current user's name and email on posts.ejs
7. Hooked up to ClearDB
8. Created post table in cleardb using workbench

#### Research:
Researched and attempted in branch jojosPlayground to deal with postservice hooked up to cleardb

1. Can grab posts from db and print to console
2. Researched and failed to get ejs to display the said posts
3. Kinda assisted Linda in successfully pushing new user info from registration
4. Understand that i need to write sql statements to create post, delete post, create comments, search for posts/people


### Linda Nguyen:
Assigned: Authentication / Registration

Branch: linda/authentication

I worked on the following tasks:
1. Based on Megan's helpful groundwork, I was able to implement the ability for a user to "register" (by pushing a user to the Heroku ClearDB / or MySQL database locally.
 - Required creating a Database Configuration file (and assigning _db to our database)
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
