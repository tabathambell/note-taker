# Note Taker

## Description
The overall use of this application is to be able to take notes and save them on the sidebar that is fetched from a json file. The notes are saved to the json flie using get and post routes in a server using Express.js. The notes are able to be deleted by hitting the trashcan button and they are removed from the json file in the back end.

The project went much smoother than the previous challenges; creating your own server is a much better way to handle code and data to ensure that everything runs properly. Beginning most of the code in the server.js file made everything a lot easier, ensuring that everything works in a single flie before divying it out into different files in the library folder and then into the routes folder. There were a few issues with syntax and missing forward slashes in the pathing, but that was quick debugging before it was able to work well. The primary Express codes that were used were primarily app, router, get, post, and res.json. 

The welcome page was linked by using 'get pathing' and ensuring that they are being linked to the proper directories on the back end. 

The delete buttons were created and ended up working by using the delete function through a router/app. IndexOf and Splice were the two codes that I used in order to make it work. I made a const function using index in order to tell 'splice' what the index is in order to properly execute the delete. The second part of the splice was telling the function to only delete the single piece of data.

## Screenshot of Web Page
!(https://i.imgur.com/cG21SHe.png)
!(https://i.imgur.com/r3TNHEt.png)
!(https://i.imgur.com/3EtNKmt.png)
!(https://i.imgur.com/frnPg24.png)

## Link to Heroku Deployment
[Link to Page](https://tmb-note-taker.herokuapp.com/)

## Link to Github Repository
[Link to Page](https://github.com/tabathambell/note-taker/)