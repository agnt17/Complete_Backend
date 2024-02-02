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

\***\*\*\*\*\*\*\***\*\*\*\***\*\*\*\*\*\*\***Breaking the Generala stuff to understand it easily**\*\***\*\***\*\***\*\***\*\***\*\***\*\***

`const express = require('express'); `-----> Now this line means that we require the express form express library.

`const app = express();`------> This line is so powerful it means it gaves the all power of express library to a variable name app and now this variable can perform all functionalities of express like get, post, delete etc.

```
app.get('/', (req, res)=>{
res.send("This is the data that is send by server to the client side.")
})
```

Now above line means that the server is attacked at '/' route and the attacker wants to know the data at '/' route so our poor route will eventually give the response using res.send() .Now inside the parentheses it could be any message that our app wants to send.

```const port = 8000

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})
```

We have around 65535 virtual ports in our computer which are mostly free and can be used for various purposes so we generally take around 3000, 4000, 8000 etc... and make our app listen to all incoming requests at this port means if we assume that our computer is a server then for that app whatever requests will come our app listens those requests at that fucking port, and whenever it listens it will return a particular message.

//Axios library in Js:

Axios is a JavaScript library that is used to make HTTP requests. It works in both the browser and Node.js environments, allowing you to communicate with a server or an API from your application.
It supports all the HTTP methods like get, post, put, delete etc.

//********\*\*********\*\*\*********\*\*********How to connect Backend and Frontend********\*\*\*\*********\*\*\*\*********\*\*\*\*********

To do this we created both front end and backend in out CONNECTING_BACKEND_FRONTEND project and we fetch data from backend using Axios Library which works just as fetch but it have some merits like it converts all data in required format we dont need to parse data from 1 datatype to other datatype.
We use UseEffect hook in front end to fetch the data and then set it to the useState hook function.

Now till now we have only done fetching of data from backend but when we try to show that data we usually get an error called CORS ERROR that is this error appears due to cross origin means what usually happens is that due to secuity of our browser it happens because if it is not happening then any port can access our data and thus data kisi ke pass bhi chala jaega so this is default enabled by browser itself.

Now how to correct it is that we either install the cors application in our backend using npm and then it will work fine and also we could do is that means the second method is that we could use assign a /api to all the get functions and then use a proxy which could be setup in vite.config.js file and then on both backend(index.js or app.js) and frontend(App.jsx) files. Now this will connect backend and frontend apps

Now proxy has also a another role is that it not only appends the api or what we have provided to it but it also makes a that the incoming request is from the provided port. Currently this is not making so much sense.

But what usually happens is that initially we are making request from our frontend for which the default port provided by react is 5173 but after using this our app will behave that request is not coming from 5173 but from server port that is other than 5173 (8000 in our case). Due to this the CORS error will not even originate because the request is coming from same port on which data is stored itself.
