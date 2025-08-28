//CONFIGURE THE SERVER -> Because you're taking the raw Express app and applying all required settings, middlewares, and routes before starting it. Think of it like configuring a car before a race—you install tires, fuel, and adjust seats before driving.

//Handles app logic (middleware, routes, error handling)


import express from 'express';
import cors  from 'cors';



const app =  express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());


//TEST ROUTE
app.get('/', (req, res)=>{
    res.send('API is running....');
})


export default app;



