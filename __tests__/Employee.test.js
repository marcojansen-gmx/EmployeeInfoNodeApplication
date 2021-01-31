const Employee = require('../lib/Employee');

test("checks if new Employee works", () => {
	const employee = new Employee();
	expect(typeof(employee)).toBe("object");
});

test ("check if correct name is stored", () => {
    const employee = new Employee("Bob", "12", "bob@gmx.com");
    expect (employee.name).toBe("Bob");
});    

test ("check if correct id is stored", () => {
    const employee = new Employee("Hans", "13", "hans@gmx.com");
    expect (employee.id).toBe("13");
});

test ("check if correct email is stored", () => {
    const employee = new Employee("Jesse", "14", "jesse@gmx.com");
    expect (employee.email).toBe("jesse@gmx.com");
});

test ("check getName func", () => {
    const employee = new Employee("Carl", "15", "carl@gmx.com");
    expect(employee.getName()).toBe("Carl");
});

test ("check getEmail func", () => {
    const employee = new Employee("Matt", "16", "matt@gmx.com");
    expect(employee.getEmail()).toBe("matt@gmx.com");
});


test ("check getRole func", () => {
    const employee = new Employee("Sam", "17", "sam@gmx.com");
    expect(employee.getRole()).toBe("Employee");
});

