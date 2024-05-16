// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Created an empty employee array to put my employee data into
  const employeesArray = []
  
  let addEmployee = true

  //Used while loop to collect employee data
  while (addEmployee) {
    let employeeFirstName = window.prompt("Enter first name:");
    let employeeLastName = window.prompt("Enter last name:");
    let employeeSalary = window.prompt("Enter salary:");

    //Created a variable that says numerically the employee salary equals 0
    //Then used an if loop and isNaN method to check if the user inputed salary is a number.
    //If the inputed salary is a number than the inputed salary is changed from a string to a number using parseInt and numEmployeeSalary is assigned that value
    //If employeeSalary isn't a number than numEmployeeSalary stays 0
    let numEmployeeSalary = 0

    if (!isNaN(employeeSalary)) {
      numEmployeeSalary = parseInt(employeeSalary);
    }

    //Used the push method to put my object of variables into the array of employeeArray
    employeesArray.push({firstName: employeeFirstName, lastName: employeeLastName, salary: numEmployeeSalary})

    addEmployee = window.confirm("Do you want to add another employee?");
  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  //Created an index i and a variable salarySum equal to 0
  let i = 0;
  let salarySum = 0

  //Used a while loop and the length of employeeArray to sum all of the salaries together and then divided the sum by employeeArray.length to get the average
  while (i < employeesArray.length) {
    salarySum = salarySum + employeesArray[i].salary;
    i++
  }
  const salaryAverage = salarySum/employeesArray.length;
  //Logs the average salary to the console using a template literal string
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${salaryAverage}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  //Used the math object and the random and floor methods to create a random index variable. Then used the index variable in a template literal string to select and display a winner to the console
  const index = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[index].firstName} ${employeesArray[index].lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
