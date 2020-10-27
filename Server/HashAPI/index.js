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
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

// const DATA = require('./models/index')

const app = express();
app.use(cors())
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
          Authorization: `Bearer ${process.env.TOKEN}`}})
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
           Authorization: `Bearer ${process.env.TOKEN}`}})
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
            Authorization: `Bearer ${process.env.TOKEN}`}})
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
