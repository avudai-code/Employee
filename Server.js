const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

const employeeRoutes = require('./routes/employee');
const userRoutes = require('./routes/user');



app.use('/employees', employeeRoutes);
app.use('/getemployees', employeeRoutes);
app.use('/register', userRoutes);





mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/db",{
   useNewUrlParser:true,
   useUnifiedTopology:true
},(err) =>{
   if(err){
      console.log(err)
   }else{
      console.log("successfully connected")
   }
})





app.listen(4000, () => {
   console.log("Server is running on port 4000");
});