/*
  Welcome! This is the entry point to the houserentportal-api

  Commented out the Database Code. 
  The Code is left here for use later.
*/

//Dependencies used in the api
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const SHA256 = require("crypto-js/sha256");

// const DATA = require('./models/index')

const app = express();

const url = 'https://demo.micropowermanager.com/api'

//Body parser which renders JSON formatted responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS setup
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/index', async(req, res) =>{
    await res.status(200).json({msg: "Welcome"})
})

app.get('/mini-grids', async(req, res) =>{
  try {
      const data = await fetch(`${url}/mini-grids`, {headers: {'content-type': 'application/json',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby5taWNyb3Bvd2VybWFuYWdlci5jb21cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MDM2NDQ4NTMsImV4cCI6MTYwMzY0ODQ1MywibmJmIjoxNjAzNjQ0ODUzLCJqdGkiOiJQUWd4STNZcDN6YUZpajd3Iiwic3ViIjoyMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xhwCbi_mrRh4uwLa7GuoCwkqccXHoSYg3A6RyxiMOXY'}})
      const response = await data.json()
      console.log(response.data)

      // const { id, cluster_id, name, created_at, updated_at, data_stream } = response.data[0]
      
      // const item = new DATA({id, cluster_id, name, created_at, updated_at, data_stream});
      // const items = await item.save();
      // console.log(items)

      res.status(200).json(response.data)
      
  } catch (error) {
      console.log(error);
      res.status(500).json(error)
  }
})

// app.get('/minigrids', async(req, res) => {
//   try {
//       const data = await DATA.find();
//       const response = await data.map(data => {
//         return {
//             _id: data._id,
//             id: data.id,
//             cluster_id: data.cluster_id,
//             name: data.name,
//             created_at: data.created_at,
//             updated_at: data.updated_at,
//             data_stream: data.data_stream,
//         }
//     })
//     res.status(200).json({response});
//     console.log(response)
//   } catch (error) { 
//       console.log(error);
//       res.status(500).json(error)
//    }
// })

app.get('/people', async(req, res) =>{
   try {
       const data = await fetch(`${url}/people`, {headers: {'content-type': 'application/json',
           Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby5taWNyb3Bvd2VybWFuYWdlci5jb21cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MDM1ODUyNjksImV4cCI6MTYwMzU4ODg2OSwibmJmIjoxNjAzNTg1MjY5LCJqdGkiOiJRMklxZkt1ZVgyWTN1SjlzIiwic3ViIjoyMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.QLrEmUJqm1-sTECABSYnVhQ3e8f-Fnt1xvCtMTsIHQc'}})
       const response = await data.json()
       console.log(response.data[0].addresses[0].city.mini_grid_id)


       res.status(200).json({response})
       
   } catch (error) {
       console.log(error);
       res.status(500).json(error)
   }
})

app.get('/tariffs', async(req, res) =>{
    try {
        const data = await fetch(`${url}/tariffs`, {headers: {'content-type': 'application/json',
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGVtby5taWNyb3Bvd2VybWFuYWdlci5jb21cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MDM2NDQ4NTMsImV4cCI6MTYwMzY0ODQ1MywibmJmIjoxNjAzNjQ0ODUzLCJqdGkiOiJQUWd4STNZcDN6YUZpajd3Iiwic3ViIjoyMiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xhwCbi_mrRh4uwLa7GuoCwkqccXHoSYg3A6RyxiMOXY'}})
        const response = await data.json()
        console.log(response)

        console.log(SHA256(response))
        
        res.status(200).json({response})
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
 })

// //Database Configuration
// const mongoose = require("mongoose");
// const DBurl = "mongodb://localhost:27017/eth-lagos";

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose.connect( DBurl , {
//     keepAlive: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//       console.log("Successfully connected to the database");
//   }).catch(err => {
//       console.log('Could not connect to the database. Exiting now...');
//       console.log(err)
//       process.exit();
  // });

//Error Handling set up
app.use((req, res, next) => {
  const error = new Error('404 Page Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

//Server COnfiguration
const port = 5000;  
app.listen(port, () => console.log(`App running on port ${port}!`))

module.exports = app;
