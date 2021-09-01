# Simple Form Application

This is an application with simple submit form.

## Tech Stacks
### Back-End
- Node.js
- Express.js
- MongoDB
- Typescript

### Front-End
- React.js(CRA)
- Material UI

## How to Run on Local Machine
### Back-End
Before running the back-end, you must confirm the mongodb installed.

- You should configure the environment variables first.
```bash
cd server
cp .env.example .env
```

And change the port the server will serve at.
The default port is 8080.

- Install the dependencies and run the server.
```bash
yarn # install dependences.
yarn dev # run for development.
yarn build # build
yarn start # run in production
```

### Front-End
- Before running the front-end, you also need to confirm the environment variables.

```bash
cd front-end
cp .env.example .env
```

- Then run the server on local.
```bash
yarn # install dependencies.
yarn start # run for development
yarn build # build
```
