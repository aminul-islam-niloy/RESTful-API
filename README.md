
# RESTful API with Node.js and MongoDB

Create an API that can handle CRUD operations.


## Project Structure
```markdown

node-js/
├── config/
│   └── config.js
├── routes/
│   └── user.route.js
├── views/
│   └── index.html
├── app.js
├── package.json
└── .env
```


## Installation

If you want to clone this repo:
```markdown
 git clone https://github.com/aminul-islam-niloy/RESTful-API.git
 ```   

To set up your project, follow these steps:

1. **Initialize your project**: Create a new directory for your project and navigate into it.

    ```bash
    mkdir node-js
    cd node-js
    npm init -y
    ```

2. **Install dependencies**: Install the required npm packages.

    ```bash
    npm install express mongoose dotenv nodemon body-parser cors mongodb
    ```

## Usage

To start the server, run:

```bash
npm start


By default, the server will run on `http://localhost:4000`.

## Database Setup

This project uses MongoDB as the database. To connect to your MongoDB database, you need to set the `DB_URL` environment variable in a `.env` file.

Example `.env` file:


port: 4000
DB_URL=mongodb://
username:password@localhost:27017/database_name
```

Replace `username`, `password`, and `database_name` with your MongoDB credentials and database name.

## API Routes

This project provides the following API routes:

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a user by ID.
- `POST /api/users`: Create a new user.
- `PATCH /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

For detailed information on each route and how to use them, refer to the documentation in the `routes` directory.


```
Example POST request body:
```markdown
{
  "name": "John Doe",
  "age": 30,
  "phone": "123-456-7890",
  "address": "123 Main St"
}
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
