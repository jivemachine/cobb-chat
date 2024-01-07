# cobb-chat

### **A fun little messaging app**
**backend**

- node.js 
- express - running node server 
- cors - call the server from elsewhere
- axios - api calls from chat engine.io
- **resource.**[^1]
- nodemon - runs the node.js server in development mode
- **resource**[^2]

Then add boilerplate code from this [blog](https://blog.chatengine.io/fullstack-chat/nodejs-reactjs)
- copy and paste their index.js code 
'''
const express = require("express");
const cors = require("cors");
const axios = require("axios);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
'''




[^1]: In the backend folder ```npm i express cors axios```
[^2]: In backend folder ```npm i --save-dev nodemon```
