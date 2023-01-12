const Intern = require('../lib/intern');

test('Intern', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');
    expect(intern.name).toEqual('Kameron');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('kfarshchian@gmail.com');
    expect(intern.school).toEqual('UofU');
});
test('name', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');

    expect(intern.getName()).toEqual('Kameron');
});
test('id', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');
    expect(intern.getId()).toEqual(1);
});
test('email', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');
    expect(intern.getEmail()).toEqual('kfarshchian@gmail.com');
});
test('role', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');
    expect(intern.getRole()).toEqual("Intern");
}); 
test('school', () => {
    const intern = new Intern('Kameron', 1, 'kfarshchian@gmail.com', 'UofU');
    expect(intern.school).toEqual('UofU');
}); 