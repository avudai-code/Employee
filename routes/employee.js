const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', (req, res) => {
   const employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      mobileNo: req.body.mobileNo,
      salary: req.body.salary
   });
   employee.save((err) => {
    if (err) return console.error(err);
    console.log("New employee added to database");
 });
})

router.get('/', (req, res) => {
    Employee.find((err, employees) => {
       if (err) return res.status(500).send("There was a problem finding the employees.");
       res.status(200).send(employees);
    });
 });
 
 router.delete('/:id', (req, res) => {
   Employee.findByIdAndRemove(req.params.id, (err, employee) => {
     if (err) {
       return res.status(500).send("There was a problem deleting the employee.");
     }
     if (!employee) {
       return res.status(404).send("Employee not found.");
     }
     res.status(200).send("Employee deleted successfully.");
   });
 });
 
module.exports = router;
