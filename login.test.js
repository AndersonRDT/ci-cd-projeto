const login = require('./login');

test('login correto', () => {
  expect(login('eduardo.lino@pucr.br', '123456')).toBe('sucesso');
});

test('email errado', () => {
  expect(login('errado@email.com', '123456')).toBe('erro');
});

test('senha errada', () => {
  expect(login('eduardo.lino@pucr.br', '000')).toBe('erro');
});

test('email vazio', () => {
  expect(login('', '123456')).toBe('erro');
});

test('senha vazia', () => {
  expect(login('eduardo.lino@pucr.br', '')).toBe('erro');
});