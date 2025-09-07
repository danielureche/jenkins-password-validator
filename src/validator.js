function validatePassword(password) {
    const minLength = /.{8,}/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return (
        minLength.test(password) &&
        upperCase.test(password) &&
        number.test(password) &&
        specialChar.test(password)
    );
}

module.exports = validatePassword;
