const db = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const NumberPrompt = require("inquirer/lib/prompts/number");

// start employee-tracker
const startTracker = () => {
  inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "Welcome! What would you like to do?",
      choices: [
        "View Departments",
        "View Employees",
        "View Roles",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Exit",
      ],
    })
    .then(function (userInfo) {
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
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Exit":
          exit();
          break;
      }
    });
};

// viewDepartments();
function viewDepartments() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, function (err, res) {
    console.table(res);
    startTracker();
  });
}

// addDepartment();
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Please enter a new department:",
      },
    ])
    .then(function (data) {
      const newDepartment = data.departmentName;
      const sql = `INSERT INTO departments (name)
    VALUES ("${newDepartment}")`;
      db.query(sql, function (err, res) {
        console.table(res);
        startTracker();
      });
    });
}

// viewEmployees();
function viewEmployees() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, function (err, res) {
    console.table(res);
    startTracker();
  });
}

// addRole();
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter employee's first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter employee's last name:",
      },
      {
        type: "input",
        name: "roleID",
        message: "Please enter the appropiate role ID:",
      },
      {
        type: "input",
        name: "managerID",
        message: "Please enter the appropiate manager ID:"
      }
    ])
    .then(function (data) {
      const firstName = data.firstName;
      const lastName = data.lastName;
      const roleID = data.roleID;
      const manager_id = data.managerID;
      const sql = `INSERT INTO role (first_name, last_name, role_id, manager_id)
      VALUES ("${firstName}", "${lastName}", ${roleID}, ${manager_id})`;
      db.query(sql, function (err, res) {
        console.table(res);
        startTracker();
      });
    });
}

// viewRoles();
function viewRoles() {
  const sql = `SELECT * FROM role`;
  db.query(sql, function (err, res) {
    console.table(res);
    startTracker();
  });
}

// addRole();
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter new role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter salary for new role:",
      },
      {
        type: "input",
        name: "department_id",
        message: "Please enter the appropiate department ID:",
      },
    ])
    .then(function (data) {
      const title = data.title;
      const salary = data.salary;
      const department_id = data.department_id;
      const sql = `INSERT INTO role (title, salary, department_id))
      VALUES ("${title}", ${salary}, ${department_id})`;
      db.query(sql, function (err, res) {
        console.table(res);
        startTracker();
      });
    });
}

// exit();
function exit() {
  console.log("Thank you for visiting. Goodbye!");
}

startTracker();
