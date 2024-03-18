# Sitemate-Full-Stack-Engineer: Challenge-Q2-24

Welcome to my solution for Sitemate's Full Stack Engineer Challenge Q2 24. This repository serves as a showcase of my technical abilities, demonstrating my skills and suitability for joining the Sitemate team. It's a simple yet effective demonstration of what I can bring to the table :)

## Overview

In this project, Issues are represented as hard-coded JSON objects with just three attributes: id, title, and description. The client and server are designed to accept or send these hard-coded JSON objects according to each API call: Create, Read, Update & Delete.

## Technologies Used

- JavaScript
- ESLint
- Prettier
- MongoDB
- Mongoose
- ThunderClient for route configuration
- dotenv for database security
- Jest for unit testing

## Code Organization

### REST API Server

The server-side code is organized into the following directories within the `src` folder:

- `controllers`: Contains logic for handling requests and responses.
- `loaders`: Responsible for loading necessary configurations and initializing the application.
- `models`: Defines data models and interacts with the database.
- `tests`: Houses unit tests written using Jest.
- `validators`: Contains validation logic for incoming data.
- `routes`: Defines API endpoints and their corresponding controllers.

### REST API Client

The client-side code is organized within the `client` directory, containing the following components:

#### Services

- **Manager Service**: Handles the management of issues. It contains functions for creating, updating, and deleting issues. Additionally, it includes methods for fetching all issues or a specific issue from the server.

- **Requester Service**: Responsible for making HTTP requests to the server. It abstracts away the details of the HTTP communication, providing a cleaner interface for the manager service to interact with.

- **API Calls**: Within the services, there are functions dedicated to making specific API calls, such as `createIssue`, `updateIssue`, `deleteIssue`, `fetchIssues`, and `fetchIssueById`. These functions encapsulate the logic for communicating with the server's endpoints.

#### Main Server Functionality

- **Integration with Server API**: The client's main function is to interface with the server's API. This is achieved by calling the appropriate functions from the manager service based on user interactions or application requirements.

- **User Interface**: While not explicitly mentioned, the client likely includes user interface components responsible for displaying retrieved data and interacting with users. These components would utilize the services to perform CRUD operations on issues.

## Usage

To run the tests, simply execute `npm test` from the root directory. To start the server, run `npm start`.

## Note

Due to time constraints, I acknowledge that there are areas where the code could be improved. If time permitted, I would enhance data validation within the validators, implement middleware for route authentication based on user roles, and consider creating a `server` directory to better organize the codebase.
