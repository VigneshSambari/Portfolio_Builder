export const validateEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || email === '') {
    return 'Email is empty';
  } else if (!pattern.test(email)) {
    if (!email.includes('@')) {
      return 'Email must contain @';
    } else {
      return 'Invalid email format';
    }
  }

  return null;
};
  
export const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/.test(password);

  if (!password || password === '') {
    return 'Password is empty';
  } else if (password.length < 8) {
    return 'Password should be at least 8 characters';
  } else if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)) {
    return 'Password must contain uppercase, lowercase, digit, and special character';
  }

  return null;
};
