# games-store

Games store application

## How to run project

1. Open project in VSCode (for example)
2. Run command `npm i` in terminal (console) for installing all required packages (Node.js is required: <https://nodejs.org/en/>)
3. Start fake server `npx json-server --watch db.json --port 3001`
4. For builing project you can use the following commands:
   - `npm run build` - building production version. The project will be builded into `build` folder.
   - `npm run start` - building development hot-reloaded version with webpack-dev-server
