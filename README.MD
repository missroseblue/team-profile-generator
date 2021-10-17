# Team Profile Generator

## Description
The Team Profile Generator is a command-line-input application run in Node that requests information from the user about employees of an engineering team and generates an HTML file displaying that information. Before running the application the user must perform an npm install to install all required dependencies.

Upon launching the app, the user is asked to describe the first employee of their team. The user enters the team employee's name, selects that employee's role from a list (options include "Engineer," "Intern," and "Manager), enters the employee's ID (any string), enters the employee's email address, and then must enter another piece of information that will differ depending on what role was selected. If "Engineer" was selected, the app asks the user for the team employee's GitHub username; if "Intern" was selected, the employee's school is requested; and if "Manager" was chosen, the user is prompted for the Managers's office number.

When all information on the employee has been entered, the user is asked whether there are any more members they would like to add. If so, the user is asked the same questions about the new employees. If not, an HTML file is created with cards displaying the information on all the employees entered by the
## Technologies Used
This app was created using Object-Oriented Programming concepts, namely using classes and constructors to create "employee" objects based on information entered by the user. The app is run using Node.js, and uses the "Inquirer" and "FS" node modules. Files for different objects are also stored in separate .js files and passed among one another using module.exports and require.

This app uses concepts from Test-Driven Development. Jest is used to perform tests on all the class constructors to ensure that they behave as expected. The FS node module is used to generate an HTML file from strings written in JavaScript. Since the app will work no matter how many employees the user adds to the system, the HTML is built in a piecemeal fashion, starting with the head and part of the body. For each employee object created, a new column with a card inside containing the employee information is added. Then when the last member has been added, the last bit of the HTML is added to the file. One complication experienced during this process was that since the fs.appendFile method is asynchronous, the bottom part of the HTML could be added before the HTML containing information on the last employee had been added. In order to deal with this, the function that adds the employee information to the HTML was converted into a promise, and only once the promise was resolved would the bottom part of the HTML be added to the output file.
## Questions
If you have additional questions about my project, you can reach me at:\n
GitHub Username: missroseblue
Email: missroseblue@gmail.com
