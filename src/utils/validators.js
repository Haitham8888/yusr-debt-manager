function isValidDebtAmount(amount) {
    return typeof amount === 'number' && amount >= 0;
}

function isValidName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export { isValidDebtAmount, isValidName, isValidEmail };