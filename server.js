// const express = require("express");
// Import and require mysql2
const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
// Import and require
// Require console.table
// const consoleTable = require(console.table);
const PORT = process.env.PORT || 3001;
// const app = express();


// Connect to database
const employee_DB = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username, password
    user: "root",
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// prompt question function
const startApp = () => {
  inquirer
    .prompt({
      name: "questions",
      type: "list",
      message: "Welcome! What would you like to do?",
      choices: [
        "View all Departments?",
        "View all Roles?",
        "View all Employees?",
        "Add a Department?",
        "Add a Role?",
        "Add an Employee?",
        "Update an Employeee Role?",
        "Exit Program?",
      ],
    })
    .then((answer) => {
      if (answer.action === "Exit Program?") {
        exitProgram();
      } else {
        switch (Response.questions) {
          //view departments
          case "View all Departments?":
            veiwDepartments();
            break;

          //veiw roles
          case "View all Roles?":
            veiwRoles();
            break;

          //view employees
          case "View all Employees?":
            veiwEmployees();
            break;

          // add a department
          case "Add a Department?":
            addDepartment();
            break;

          // add a role
          case "Add a Role?":
            addRole();
            break;

          //add an employee
          case "Add an Employee":
            addEmployee();
            break;

          // update an employee role
          case "Update an Employeee Role?":
            updateRole();
            break;
        }
      }
    });
};

// View Functions
// departments
veiwDepartments = () => {
  conection.query(
    `SELECT * FROM departments_id, department.name;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// roles
veiwRoles = () => {
  db.query(
    `SELECT role.role_id, role.title, role.salary, role.department_id;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// employee
veiwEmployees = () => {
  db.query(
    `SELECT employee.employee_id, employeee.first_name, employee.last_name, employee.role_id, employee.manager_id;`,
    (err, res) => {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

//ADD FUNCTIONS
//department
// addDepartment = () => {
//   inquirer
//     .prompt([
//       {
//         name: "addDepartment",
//         type: "input",
//         message: "What is the department you would like to add?",
//       },
//     ])
//     .then((response) => {
//       db.query(
//         `INSERT INTO department SET ?`,
//         {
//           name: response.addDepartment,
//         },
//         (err, res) => {
//           if (err) throw err;
//           console.log(
//             `${response.addDepartment} successfully added to the database.`
//           );
//           startApp();
//         }
//       );
//     });
// };
// //add role
// addRole = () => {
//   db.query(`SELECT * FROM department`, (err, res) => {
//     if (err) throw err;
//     console.log("ADD ROLE DEPARTMENTS", res);
//     let departments = res.map(department => ({ department }));
//     inquirer.prompt([
//         {
//         name: 'title',
//         type: 'input',
//         message: 'What is the name of the role you want to add?'
//         },
//         {
//         name: 'salary',
//         type: 'input',
//         message: 'What is the salary of the role you want to add?'
//         },
//         {
//         name: 'name',
//         type: 'list',
//         message: 'Which department do you want to add the new role to?',
//         choices: department
//         },
//     ]).then((response) => {
//         db.query(`INSERT INTO role SET ?`,
//         {
//             title: response.title,
//             salary: response.salary,
//             department_id: response.deptName,
//         },
//         (err, res) => {
//             if (err) throw err;
//             console.log(`${response.title} successfully added to database!`);
//             startApp();
//         })
//     })
//   });
// };
// // add new employee
// addEmployee = () => {
//   db.query(`SELECT * FROM employee;`, (err, res) => {
//     if (err) throw err;
//     let employee = res.map(employee => ({employee: employee.first_name, last_name, value: employee.employee_id }));
//     inquirer.prompt([
//         {
//         name: 'first_name',
//         type: 'input',
//         message: 'What is the first name of the employee you want to add?'
//         },
//         {
//         name: 'last_name',
//         type: 'input',
//         message: 'What is the last name of the employee you want to add?'
//         },
//         {
//         name: 'role',
//         type: 'list',
//         message: 'Which title would you like to add to the employee?',
//         choices: title
//         },
//         {
//           name: 'manager',
//           type: 'list',
//           message: 'Which manager would you like to add to the employee?',
//           choices: employee
//           },
//     ]).then((response) => {
//         db.query(`INSERT INTO role SET ?`,
//         {
//             first_name: response.first,
//             last_name: response.last,
//             title: response.role,
//             manager_id: response.manager,
//         },
//         (err, res) => {
//             if (err) throw err;
//             console.log(`${response.firstName} ${response.lastName} successfully added to database!`);
//             startApp();
//         })
//     })
//   });
// 

//function to update the role of an employee
startApp();
