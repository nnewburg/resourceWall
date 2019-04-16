Resource Wall
=====================
Collaborated with: https://github.com/kcdporter && https://github.com/xiadongdev

Resource Wall is a Social Media app allowing users to share posts to a public board. Posts include a title, description, image,keyword and link. Users have the ability to like, comment, and rate other posts. The likes and comments are linked to the currently logged in user. Likes are responsive and increment if a user has not liked a post and decrement if they have liked it.
There is also a search feature based on posts the user has liked or by keyword.


## Getting Started


1. git clone `git@github.com:nnewburg/resourceWall.git`
2. change directory to resource wall
3. npm i
4. Update the .env file with your correct local information
5. Fix to binaries for sass `npm rebuild node-sass`
6. Run migrations: `npm run knex migrate:latest` Check the migrations folder to see what gets created in the DB
7. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
8. Run the server: `npm run local`
9. Visit `http://localhost:8080/`

## Screenshots

!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall1.png?raw=true)
!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall2.png?raw=true)
!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall3.png?raw=true)
!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall4.png?raw=true)
!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall5.png?raw=true)
!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall6.png?raw=true)

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Body-parser 1.15 or above
- Cookie-parser 1.4.4 or above
- Cookie-session 1.3.3 or above
- Dotenv 2.0.0 or above
- Ejs 2.4.1 or above
- Express 4.13.4 or above
- Knex 0.11.7 or above
- Knex-logger 0.1 or above
- Morgan 1.7 or above
- Node-sass-middleware 0.9.8 or above
- PG 6.02 or above

