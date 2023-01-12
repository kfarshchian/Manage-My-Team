const Engineer = require('../lib/engineer');

test('Engineer', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');
    expect(engineer.name).toEqual('Kameron');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('kfarshchian@gmail.com');
    expect(engineer.github).toEqual('kfarshchian');
});
test('name', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');

    expect(engineer.getName()).toEqual('Kameron');
});
test('id', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');
    engineer
    expect(engineer.getId()).toEqual(1);
});
test('email', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');
    expect(engineer.getEmail()).toEqual('kfarshchian@gmail.com');
});
test('role', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');
    expect(engineer.getRole()).toEqual('Engineer');
}); 
test('github', () => {
    const engineer = new Engineer('Kameron', 1, 'kfarshchian@gmail.com', 'kfarshchian');
    expect(engineer.github).toEqual('kfarshchian');
}); 