const Employee = require('../lib/Employee');

test('employee', () => {
    const employee = new Employee('Kameron', 1, 'kfarshchian@gmail.com');
    expect(employee.name).toEqual('Kameron');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('kfarshchian@gmail.com');
});
test('name', () => {
    const employee = new Employee('Kameron', 1, 'kfarshchian@gmail.com');

    expect(employee.getName()).toEqual("Kameron");
});
test('id', () => {
    const employee = new Employee('Kameron', 1, 'kfarshchian@gmail.com');

    expect(employee.getId()).toEqual(1);
});
test('email', () => {
    const employee = new Employee('Kameron', 1, 'kfarshchian@gmail.com');
    expect(employee.getEmail()).toEqual('kfarshchian@gmail.com');
});
test('role', () => {
    const employee = new Employee('Kameron', 1, 'kfarshchian@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 