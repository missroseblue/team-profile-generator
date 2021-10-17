const Engineer = require("../lib/Engineer");

test("create a github username", () => {
    const github = "missroseblue";
    const employee = new Engineer("Sam", 1234, "you@email.com", github);
    expect(employee.github).toBe(github);
  });
  
  test("create Engineer role", () => {
    const role = "Engineer";
    const employee = new Engineer("Sam", 1234, "you@email.com", role);
    expect(employee.getRole()).toBe(role);
  });
  
 


