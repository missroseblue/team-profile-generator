const Manager = require("../lib/Manager");

test("create a github office number", () => {
    const officeNumber = "Room 1207";
    const employee = new Manager("Sam", 1234, "you@email.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });
  
  test("create Manager role", () => {
    const role = "Manager";
    const employee = new Manager("Sam", 1234, "you@email.com", role);
    expect(employee.getRole()).toBe(role);
  });
  
 

