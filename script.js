function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const numUppercase = parseInt(document.getElementById('uppercase').value);
    const numLowercase = parseInt(document.getElementById('lowercase').value);
    const numNumbers = parseInt(document.getElementById('numbers').value);

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    
    let password = '';

    for (let i = 0; i < numUppercase; i++) {
        password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    }

    for (let i = 0; i < numLowercase; i++) {
        password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    }

    for (let i = 0; i < numNumbers; i++) {
        password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    }

    const remainingLength = length - (numUppercase + numLowercase + numNumbers);

    if (remainingLength > 0) {
        const allChars = upperCaseChars + lowerCaseChars + numberChars;
        for (let i = 0; i < remainingLength; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    document.getElementById('password').value = password;
}