# MindPeace- Mental health help and awareness platform

## About The Project

MindPeace is an mental health and awareness platform that provides the community with the resources they need to battle mental health issues. The application brings the best features like community help, guides, quizzes, music therapy, real-time appointment scheduling, and personal insight to oneself, of all existing apps to one platform as well.

## Features

- The platform has been divided into various parts to provide enough information about mental health.
- Types section provides an overview of the existing mental illnesses.
- Guide section provides different directions and indications of mental illnesses.
- Guide section is sub-divided into Adult, Teenager and Children, based on age-wise mental health issues.
- Cyberbullying section is implemented to provide awareness about cyberbullying.
- A fully-featured music therapy solution built into the platform itself, where users can browse and listen to clinically proven playlists of music according to their age group.
- The Diary section features a personal diary for the user in which the user can store notes and information about their feelings, which can be retrieved on command by the user.
- A fully-fledged Appointments section is implemented where users can view all registered professional therapists and can do one-to-one consultations with any available therapist in the real-time chat feature.
- Firebase authentication gateway is used for authentication purposes.
- Interactive and responsive UI.
- Graphical and visual innovative effects are implemented.
- Latest technologies are used.


## Tech Stack

- `Frontend:` Reactjs, Material-UI, SCSS
- `Backend:` Nodejs, Expressjs, MongoDB, Socket.io, Firebase

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Nodejs should be installed in the device. Along with Nodejs, any code editor should also be installed.

### Installation

Clone the repository
   ```sh
   git clone https://github.com/supanthapaul/mindpeace.git
   ```  
### Setup Server
To run the server, open the `backend` directory and create a `.env` file. The `.env` file must contain the following keys with appropriate values,
  
* `MONGOURL` - should correspond to the MongoDB connection string

After this, run the following commands from your terminal within the `backend` directory,  
* `npm install` (to install all the dependencies)
* `npm start`  

The server should start at [http://localhost:5000](http://localhost:5000), unless otherwise specified in `.env`.  

### Setup Client
To run the react client, open the `frontend` directory and run the following commands,  
* `npm install` (to install all the dependencies)
* `npm start`  
* Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  

**The code and the description of the music therapy can be found** [here.](https://github.com/IUC4801/mindpeace-music-therapy)

## Machine configuration
- `OS:` Windows 10 64 bit
- `RAM:` 8 GB 
- `Processor:` 11th Gen Intel(R) Core(TM) i5


## Dependencies
* [React.js](https://reactjs.org/)
* [Material UI](https://v4.mui.com/)
* [SCSS](https://sass-lang.com/)
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/)
* [Socket.io](https://socket.io/)
* [MongoDB](https://www.mongodb.com/)
* [Firebase](https://firebase.google.com/)

## Demo
The frontend client is live at: [https://epics-project.vercel.app/](https://epics-project.vercel.app/) and the music therapy is live at: [https://mindpeace-music-therapy.vercel.app/](https://mindpeace-music-therapy.vercel.app/)
