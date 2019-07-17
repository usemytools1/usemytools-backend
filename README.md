# usemytools-backend

### Auth Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                          |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register | Creates a `user` sent inside the `body` of the request. **Hashes** password before saving to the database. Returns the id of the new user and a JWT token to be used to access restricted endpoints. |
| POST   | /api/auth/login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a JWT token to be used to access restricted endpoints.                                            |

### TOOLS Endpoints

| Method | Endpoint           | Description                                                                                                                                                                                 |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | Coming soon  | Retrieves a list of all the tools created by the logged in user.                                                                                                                        |
| GET    | Coming soon  | Retrieves a tool specified by the `id` provided.                                                                                                                                        |
| POST   | /api/tools  | If all required fields (tool name) are met, creates a tool.  |

| DELETE | Coming soon| Only author can delete. This deletes the tool with the specified `id`.                                                                                                      |
| PUT    | Coming soon  | Only author can update the tool with the specified `id`.                                 |
