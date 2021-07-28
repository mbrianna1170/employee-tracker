const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// create connection to database
const db = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: 'Miso',
    database: 'mycompany'
},
console.log('Connected to the mycompany database')
);

// view all departments 
db.query(`SELECT roles.*, departments.name
AS dep_name
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id;`, (err, rows) => {
    console.log(rows);
});

// add a department 
// const sql = `INSERT INTO departments (name) 
//               VALUES (?)`;
// const params = ['Test'];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// delete a department 

// db.query(`DELETE FROM departments WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// view all roles
db.query(`SELECT * FROM roles`, (err, rows) => {
    console.log(rows);
});