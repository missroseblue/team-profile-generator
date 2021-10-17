const Intern = require("../lib/Intern");

test("create intern's school", () => {
    const school = "UCLA";
    const employee = new Intern("Sam", 1234, "you@email.com", school);
    expect(employee.getSchool()).toBe(school);
})

test("Create Intern role", () => {
  const role = "Intern";
  const employee = new Intern("Sam", 1234, "you@email.com", role);
  expect(employee.getRole()).toBe(role);
});

