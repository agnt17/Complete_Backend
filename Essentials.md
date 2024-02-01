Here we will learn about Backend development taught by Hitesh Sir

All request and response functionality is handeled by Express js library so whenever we have to us req and res means wee need to include the express in our file.

There is always a listen functionality at the server side means it always listens wheenever we get to that page or home route....means server has a listen methos that listens the requests from client side and give response.

```
************************************************Basic Commands***********************************************
To start the node app: npm init
This command is used to create a node app

To install Express: npm i express
```

// what is express js:

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is designed to make the process of building web applications and APIs with Node.js easier.

Features: Routing, Middlewares, Template Engines, RESTful Api Dev to develpo backend for SPA's.

****\*\*\*\*****\*\*\*****\*\*\*\*****Breaking the Generala stuff to understand it easily******\*\*******\*\*******\*\*******

`const express = require('express'); `-----> Now this line means that we require the express form express library.

`const app = express();`------> This line is so powerful it means it gaves the all power of express library to a variable name app and now this variable can perform all functionalities of express like get, post, delete etc.

```
app.get('/', (req, res)=>{
res.send("This is the data that is send by server to the client side.")
})
```

Now above line means that the server is attacked at '/' route and the attacker wants to know the data at '/' route so our poor route will eventually give the response using res.send() .Now inside the parentheses it could be any message that our app wants to send.

````const port = 8000

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})

```

