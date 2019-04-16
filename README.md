Resource Wall
=====================
Collaborated with:

Resource Wall is a Social Media app allowing users to share posts to a public board. Posts include a title, description, image,keyword and link. Users have the ability to like, comment, and rate other posts. The likes and comments are linked to the currently logged in user. Likes are responsive and increment if a user has not liked a post and decrement if they have liked it.
There is also a search feature based on posts the user has liked or by keyword.


## Getting Started


1. git clone git@github.com:nnewburg/resourceWall.git
2. change directory to resource wall
3. npm i
4. Update the .env file with your correct local information
5. Fix to binaries for sass `npm rebuild node-sass`
6. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
7. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
8. Run the server: `npm run local`
9. Visit `http://localhost:8080/`

## Screenshots

!["Screenshot of Resource Wall"](https://github.com/nnewburg/resourceWall/blob/master/docs/resourceWall1.png?raw=true)


## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
