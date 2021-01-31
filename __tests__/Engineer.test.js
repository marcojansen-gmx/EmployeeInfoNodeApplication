const Engineer = require('../lib/Engineer');

test("checks if new Engineer works", () => {
	const engineer = new Engineer();
	expect(typeof(engineer)).toBe("object");
});

test ("check if correct name is stored", () => {
    const engineer = new Engineer("Bob", "12", "bob@gmx.com","www.asd1.com");
    expect (engineer.name).toBe("Bob");
});    

test ("check if correct id is stored", () => {
    const engineer = new Engineer("Hans", "13", "hans@gmx.com","www.asd2.com");
    expect (engineer.id).toBe("13");
});

test ("check if correct email is stored", () => {
    const engineer = new Engineer("Jesse", "14", "jesse@gmx.com","www.asd3.com");
    expect (engineer.email).toBe("jesse@gmx.com");
});

test ("check if correct github is stored", () => {
    const engineer = new Engineer("Abbey", "15", "abbey@gmx.com","www.asd4.com");
    expect (engineer.github).toBe("www.asd4.com");
});

test ("check getName func", () => {
    const engineer = new Engineer("Carl", "16", "carl@gmx.com","www.asd5.com");
    expect(engineer.getName()).toBe("Carl");
});

test ("check getEmail func", () => {
    const engineer = new Engineer("Matt", "17", "matt@gmx.com","www.asd6.com");
    expect(engineer.getEmail()).toBe("matt@gmx.com");
});


test ("check getRole func", () => {
    const engineer = new Engineer("Sam", "18", "sam@gmx.com","www.asd7.com");
    expect(engineer.getRole()).toBe("Engineer");
});

test ("check getGithub func", () => {
    const engineer = new Engineer("Luca", "19", "luca@gmx.com","www.asd8.com");
    expect(engineer.getGithub()).toBe("www.asd8.com");
});