const Employee = require("../lib/Employee");

test("create a employee name", () => {
  const name = "Sam";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("create a employee id", () => {
  const id = 1234;
  const employee = new Employee("Sam",id);

  expect(employee.id).toBe(id);
});

test("create a employee email", () => {
  const email = "you@email.com";
  const employee = new Employee("Sam",1234, email);

  expect(employee.email).toBe(email);
});
