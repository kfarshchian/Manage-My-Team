const Manager = require('../lib/manager');

test('Manager', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);
    expect(manager.name).toEqual('Kameron');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('kfarshchian@gmail.com');
    expect(manager.officeNumber).toEqual(1001);
});
test('name', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);

    expect(manager.getName()).toEqual('Kameron');
});
test('id', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);
    expect(manager.getId()).toEqual(1);
});
test('email', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);
    expect(manager.getEmail()).toEqual('kfarshchian@gmail.com');
});
test('role', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);
    expect(manager.getRole()).toEqual("Manager");
}); 
test('office Number', () => {
    const manager = new Manager('Kameron', 1, 'kfarshchian@gmail.com', 1001);
    expect(manager.officeNumber).toEqual(1001);
}); 