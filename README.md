<img src="https://i.imgur.com/KvFHW2R.png">

## Get inspired about travelling with your friends again
https://holiday-hub.netlify.app/

## Dear User

Welcome to a travel app that has been created at a time when borders are still largely shut and global travel is increasingly more difficult to undertake. Despite the many obstacles we might face in order to reach distant places now (it can't be as bad as our ancestors' journeys though) our imaginations are always free and good times with friends are to be enjoyed anyways. This is the central idea of our app: a portal for live map collaboration among friends and like-minded people to get inspired, to discover places without limits. So, without further ado, our precious visitor, fasten your seatbelt and take on a journey with us! 

## Aim
Create an app with mapping functionality that would allow users to interact in real life using chat and to add and delete markers as well as to see updates made by their friends and companions.

# Installation and usage of the website

For those of you who would like to get involved with code
### Installation

- Clone or download the repository

### Usage

#### To Run the Server Processes Locally
1) to start the backend processes:
- `docker compose -f docker-compose-dev.yaml up`
3) set up the database and models with: 
- `docker exec -it dev_api sh`
- `flask db init`
- `flask db migrate`
- `flask db upgrade`
(if you get an error run commands again starting with flask db stamp head)
3) to run test server:
- `docker compose -f docker-compose.yaml -f docker-compose-test.yaml up`
-  `docker exec -it test_api sh`
4) to start tests:
- `run pytest`
5) to run coverage:
- `run pytest --cov-report term-missing --cov=.`

* to access docker databases
- `docker exec -it dev_db psql myDb -U user`
- `docker exec -it test_db psql testDb -U user`

#### To Run the Client Locally
1) navigate to the client folder;
2) in client/src/api/index.js:
- comment out production server urls and use local
3) `npm install`
4) `npm run dev`
5) to test client:
- `npm run test`
6) to run coverage
- `npm run coverage`

#### troubleshooting
If you are getting error messages about `wait-for-it.sh` file, (particulalrly Mac users) you'll need to check that the file has the right permissions (it should have an x at the end).
- `cd api` and run `ls -lah`. If there is no x at the end:
	- run `chmod +x "./wait-for-it.sh"` 
	- check your file by running `ls -lah` again.

## Technologies used

1. React
2. Redux
3. React Leaflet (mapping technology)
4. SQLAlchemy
5. Websockets
6. Docker Compose
7. React-Bootstrap front-end framework
8. Flask back-end framework (Python)
9. Axios for client network requests

## Design Processes

Main stages of the process were:
1. Initial brainstorming:
- with the group gather together online to create mind map of all the initial ideas for the app
- filter ideas base on everyone's most and leat favorite ideas
- further scrutinise ideas base on what was possible to achive in a week
- filter some functionality of the app using MoSCoW method (Must Haves, Should Haves, Could Haves and Would Haves)
- create Figma design for app and all the future pages
- create a mood board on Ayoa to unify our app style

![image](https://i.imgur.com/73p629F.png)

Component Map
![image](https://i.imgur.com/Sesr4eO.png)

Figma designs
<img src="https://i.imgur.com/UozIQoG.png" width="300"> <img src="https://i.imgur.com/Yee45mc.png" width="300"> 

## Teamwork approaches
1. Agile team working approach:
- For all tasks planning (Kanban board and Gantt chart) we used Ayoa Project management software.
- Mornings would start with a stand-up after which we would update each other on the work done so far and assign new tickets among the members. 
- Any major problems encountered would be solved by peer programming.
- Communication was crucial through central channel on Slack to ensure no duplicate or conflicting work was created. 
- Project was broken down into self-contained short sprints to deliver project on time and mitigate any rolling risks.

Ayoa Gantt Chart timeline 
![image](https://i.imgur.com/89dqpI6.png)

## Wins and Challenges

### Wins
1. Successfully integrated Websockets with Leaflet API for live map capabilities.
2. Implemented Redux flow for global state management in the app.
3. Created a functional, aesthetically pleasing travel app that is stable at performance.

### Challenges
1. Testing many components and layers of the application.
2. Docker Compose implementation with a new language for us - Python.
3. Persisting user login - achieved with Redux-Persist.

### Future Features
1. OAuth to allow secure login.
2. Ability to plan travel more elaborately (like travel routes and calendar).
3. Ability to add more details to holidays (like scheduled events and transportation).
4. Local weather and health updates (e.g. Covid).
5. Ability to share photos within holidays pages.
6. Email notifications to users on upcoming holidays and travel plans as well as friends' updates.
7. Make app function offline using a service worker or PWA builder. 
