const Manager = require('../lib/Manager');

test("checks if new Manager works", () => {
	const manager = new Manager();
	expect(typeof(manager)).toBe("object");
});

test ("check if correct name is stored", () => {
    const manager = new Manager("Bob", "12", "bob@gmx.com","123");
    expect (manager.name).toBe("Bob");
});    

test ("check if correct id is stored", () => {
    const manager = new Manager("Hans", "13", "hans@gmx.com","1234");
    expect (manager.id).toBe("13");
});

test ("check if correct email is stored", () => {
    const manager = new Manager("Jesse", "14", "jesse@gmx.com","12345");
    expect (manager.email).toBe("jesse@gmx.com");
});

test ("check if correct officeNumber is stored", () => {
    const manager = new Manager("Abbey", "15", "abbey@gmx.com","123456");
    expect (manager.officeNumber).toBe("123456");
});

test ("check getName func", () => {
    const manager = new Manager("Carl", "16", "carl@gmx.com","1234567");
    expect(manager.getName()).toBe("Carl");
});

test ("check getEmail func", () => {
    const manager = new Manager("Matt", "17", "matt@gmx.com","12345678");
    expect(manager.getEmail()).toBe("matt@gmx.com");
});


test ("check getRole func", () => {
    const manager = new Manager("Sam", "18", "sam@gmx.com","123456789");
    expect(manager.getRole()).toBe("Manager");
});

test ("check getOfficeNumber func", () => {
    const manager = new Manager("Luca", "19", "luca@gmx.com","1234567890");
    expect(manager.getOfficeNumber()).toBe("1234567890");
});