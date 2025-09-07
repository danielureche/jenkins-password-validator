const validatePassword = require('../src/validator');

test('Password with all requirements should be valid', () => {
    expect(validatePassword('StrongP@ss1')).toBe(true);
});

test('Password without uppercase should be invalid', () => {
    expect(validatePassword('weakp@ss1')).toBe(false);
});

test('Password without number should be invalid', () => {
    expect(validatePassword('WeakPass!')).toBe(false);
});

test('Password too short should be invalid', () => {
    expect(validatePassword('S@1a')).toBe(false);
});
