const Employee = require('../lib/Employee');

// test("name of the test", function )
	//function has new variables
	//expectation of the test

test("checks if new Employee works", () => {
	const employee = new Employee();
	expect(typeof(employee)).toBe("object");
});

test ("check if correct name is stored", () => {
    const employee = new Employee("Bob", "12", "bob@gmx.com");
    expect (employee.name).toBe("Bob");
});    

test ("check if correct id is stored", () => {
    const employee = new Employee("Bob", "12", "bob@gmx.com");
    expect (employee.id).toBe("12");
});

test ("check if correct email is stored", () => {
    const employee = new Employee("Bob", "12", "bob@gmx.com");
    expect (employee.email).toBe("bob@gmx.com");
});

test ("check getName func", () => {
    const employee = new Employee("Bob", "12", "bob@gmx.com");
    expect(employee.getName()).toBe("Bob");
});