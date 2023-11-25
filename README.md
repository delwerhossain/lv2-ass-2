# ass-2

This is a Node.js application that demonstrates the use of Express, Mongoose, bcrypt, Zod, and CORS.

## Prerequisites

To run this application, you will need to have the following installed on your system:

* Node.js (version 16.14.2 or higher recommended)
* TypeScript (version 4.7.3 or higher recommended)
* npm (Node Package Manager)

## Installation , Setup And Run

1. Clone this repository to your local machine.
2. Open a terminal window and navigate to the root directory of the cloned repository.
3. Install the dependencies by running the following command
npm install

Create a .env file in the root directory of the project and add the following environment variables:
DB_URI=<your MongoDB connection string>
PORT=<port number>

Replace <your MongoDB connection string> with the connection string for your MongoDB database. Replace <port number> with the port number you want the application to listen on (default: 3000).

Running the Application
Start the development server by running the following command:
npm run dev

Open a web browser and go to http://localhost:<port number>.
Testing the Application
There are no automated tests for this application.

Deployment
To deploy this application to a production environment, you will need to build the TypeScript code and then run the resulting JavaScript file.

Build the TypeScript code by running the following command:
npm run build


2. Run the JavaScript file by running the following command:


node ./dist/server.js

