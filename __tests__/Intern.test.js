const Intern = require('../lib/Intern');

test("checks if new Engineer works", () => {
	const intern = new Intern();
	expect(typeof(intern)).toBe("object");
});

test ("check if correct name is stored", () => {
    const intern = new Intern("Bob", "12", "bob@gmx.com","havard1");
    expect (intern.name).toBe("Bob");
});    

test ("check if correct id is stored", () => {
    const intern = new Intern("Hans", "13", "hans@gmx.com","havard2");
    expect (intern.id).toBe("13");
});

test ("check if correct email is stored", () => {
    const intern = new Intern("Jesse", "14", "jesse@gmx.com","havard3");
    expect (intern.email).toBe("jesse@gmx.com");
});

test ("check if correct school is stored", () => {
    const intern = new Intern("Abbey", "15", "abbey@gmx.com","havard4");
    expect (intern.school).toBe("havard4");
});

test ("check getName func", () => {
    const intern = new Intern("Carl", "16", "carl@gmx.com","havard5");
    expect(intern.getName()).toBe("Carl");
});

test ("check getEmail func", () => {
    const intern = new Intern("Matt", "17", "matt@gmx.com","havard6");
    expect(intern.getEmail()).toBe("matt@gmx.com");
});


test ("check getRole func", () => {
    const intern = new Intern("Sam", "18", "sam@gmx.com","havard7");
    expect(intern.getRole()).toBe("Intern");
});

test ("check getSchool func", () => {
    const intern = new Intern("Luca", "19", "luca@gmx.com","havard8");
    expect(intern.getSchool()).toBe("havard8");
});