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

- **API Calls**: Within the services, there are functions dedicated to making specific API calls, such as `createIssue`, `updateIssue`, `getIssues`, and `deleteIssue`. These functions encapsulate the logic for communicating with the server's endpoints.

#### Main Server Functionality

- **Integration with Server API**: The client's main function is to interface with the server's API. This is achieved by calling the appropriate functions from the manager service based on user interactions or application requirements.

- **User Interface**: While not explicitly mentioned, the client likely includes user interface components responsible for displaying retrieved data and interacting with users. These components would utilize the services to perform CRUD operations on issues.

## Instructions for Running the System

To execute this project locally, follow these steps:

1. Clone the repository to your local machine
   ```bash
   git clone https://github.com/AmandaFernandes0701/Sitemate-Full-Stack-Engineer---Challenge-Q2-24.git
   ```
2. Navigate to the project directory

3. Install project dependencies
   ```bash
   npm install
   ```
   
4. To start the backend development server, run
   ```bash
   npm start
   ```

5. To start the client-side system locally, via the terminal, input the following command
   ```bash
   src\functions\Sitemate-Full-Stack-Engineer---Challenge-Q2-24\src\client\apiClientFunction.js
   ```

6. After navigating to the directory mentioned in step 5, you can execute the following command in the terminal
   ```bash
    node apiClientFunction.js
   ```

7. To run unit tests, use the following command
   ```bash
   npm test
   ```

## Improvements

Given more time, there are several areas where I would improve the codebase:

- **Enhanced Security**: I would increase security measures, such as implementing authentication and authorization mechanisms to control access to the API endpoints.

- **Validation Improvements**: Adding more robust validation to ensure data integrity and prevent potential security vulnerabilities.

- **Error Handling**: Improving error handling to provide more informative and user-friendly error messages.

- **Code Modularity**: Modularizing functions and components to avoid repetition and improve code maintainability.

- **Unit Testing**: Strengthening unit tests to ensure comprehensive coverage and reliability of the codebase.

- **Enhancing Get Issue by ID Functionality**: I would invest more time in organizing and optimizing the functionality related to retrieving issues by their unique IDs. This would improve the overall user experience and efficiency of the application.

- **Frontend Development**: Given my passion for frontend development, I would create a responsive frontend with a user-friendly design, leveraging tools like Figma for UX/UI design. One of my previous projects, [Projeto-DTI](https://github.com/AmandaFernandes0701/Projeto-DTI), showcases my frontend skills and project organization.

## Note

Due to time constraints, some of these improvements were not feasible within the scope of this challenge. However, I'm excited about the opportunity to further enhance this project and contribute to the success of the Sitemate team. Additionally, I wouldn't include the .env file in the Git repository beacuse it has sensitive information. However, I did that in order to make it possible for the evaluators verifying my project.

Besides, it's important to ensure that the connection with the MongoDB database and Mongoose are functioning correctly as I decided to use them as the database to save the information. I find it very practical and easy to use, which is why I made this project choice.
