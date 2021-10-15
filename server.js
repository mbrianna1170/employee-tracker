const db = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

// start employee-tracker
const startTracker = () => {
  inquirer
  .prompt({
      type: 'list',
      name: 'start',
      message: 'Welcome! What would you like to do?',
      choices: ['View Departments', 'View Employees', 'View Roles', 'View All', 'Exit']
  })
  .then(function(userInfo) {
    switch (userInfo.start) {
      case "View Departments":
      viewDepartments();
      break;
      case "View Employees":
      viewEmployees();
      break;
      case "View Roles":
        viewRoles();
        break;
      

    }
  })
};

//view departments
function viewDepartments() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, function (err, res) {
    console.table(res);
    startTracker();
  })
}

startTracker();
















