# usemytools-backend

## What is it?

 Pitch: Tired of loaning out your tools to a neighbor and losing them? This is an app to post 
 your tools and lend them out to other app users.

 Minimum Requirements: 
 [x] Users can log in and create a profile. 
 [x] They can then set up items they have available - anything from a shovels to power washers to tile saws.
 [x] Users will be able to Create, Read, Update and Delete data. 
 [] A 2nd user can log in and see items that users have available and request to borrow.

 Minimum Coding Requirements
 [x] Sprint 1 - Build a Web API: Incorporated middleware for code reuse and deployed the API to a hosting platform. The API is configured to dinamically load configuration and secrets using environment variables
 [x] Sprint 2 - Adding Data Persistence: Added data persisntece with a normalized data model that ensures data integrity and consistency.
 [x] Sprint 3 - Authentication and Testing: Authentication and automated unit tests for core business logic.

 Stretch Requirements: 
 [] Add a map for loaners to set limits on how far they are willing to lend their tools out, and how far borrowers are willing to drive to borrow something. 
 [] Add a review system into the app so that the social aspect is there to ensure that neighbors are good borrowers before you approve a request.

## How to install the project?

### Download Project Files

- **Fork** and **Clone** this repository.
- **CD into the folder** where you cloned the repository.
- ** Setup these environment variables**
-   JWT_SECRET: a secret used to create and verify the authentication token.

## API Endpoints

### Auth Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                          |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` sent inside the `body` of the request. **Hashes** password before saving to the database. Returns the id of the new user and a JWT token to be used to access restricted endpoints. |
| POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a JWT token to be used to access restricted endpoints.                                            |

### TOOLS Endpoints

| Method | Endpoint           | Description                                                                                                                                                                                 |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /api/tools  | Retrieves a list of all the tools created by all the users.                                                                                                                        |
| GET    | /api/tools/:id  | Retrieves a tool specified by the `id` provided.                                                                                                                                  |
| POST   | /api/tools  | If all required fields (tool name) are met, creates a tool.                                                                                                                              | 
| DELETE | /api/tools/:id  | Only author can delete. This deletes the tool with the specified `id`.                                                                                                                   |
| PUT    | /api/tools/:id  | Only author can update the tool with the specified `id`.                                                                                                                                |


## Data Models

See schema here: https://dbdesigner.page.link/HycDzyWZMyuaMFmt9

### Users Data Model

| Field          | Type      | Description                                     |
| -------------- | --------- | ----------------------------------------------- |
| id             | Increment | ID of the newly created user.           |
| username       | String    | Username of user                                |
| password       | String    | Encrypted password of user.                     |

### Tools Data Model

| Field          | Type    | Description                                     |
| -------------- | --------- | ----------------------------------------------- |
| id             | Increment | ID of the newly created tool.                   |
| tool_name      | String    | Name of the tool that was created.              |
| user_id        | Integer   | User id of the user. Foreign key ID in Users.|
| borrower_id    | Integer   | User id of the tool that was created. If Empty it is not borrowed            |