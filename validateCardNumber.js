function validateCardNumber(cardArray) {
    const cardNumber = cardArray.join('');

    if (!/^\d+$/.test(cardNumber)) {
        return { valid: false, reason: 'invalid characters' };
    }

    const length = cardNumber.length;
    const firstDigit = cardNumber[0];

    if (length === 16 && firstDigit === '37') {
        return { valid: true, issuer: 'American Express' };
    }

    if (length === 16) {
        if (firstDigit === '4') {
            return { valid: true, issuer: 'Visa Card' };
        }
        if (firstDigit === '5') {
            return { valid: true, issuer: 'MasterCard' };
        }
        if (firstDigit === '6') {
            return { valid: true, issuer: 'Discover Card' };
        }
    }

    if (length !== 15 && length !== 16) {
        return { valid: false, reason: 'invalid length' };
    }

    return { valid: false, reason: 'invalid start digit' };
}