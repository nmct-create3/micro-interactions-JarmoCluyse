let email = {},
	password = {},
	signInButton;

const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isValidPassword = function(password) {
    // Basis manier om e-mailadres te checken.
    if (password.length < 2){
        return false;
    }else{
        return true
    }

};

const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};

const getDom = function() {
	email.field = document.querySelector('.js-email-field');
	email.errorMessage = document.querySelector('.js-email-error-message');
	email.input = document.querySelector('.js-email-input');

	password.field = document.querySelector('.js-password-field');
	password.errorMessage = document.querySelector(
		'.js-password-error-message'
	);
	password.input = document.querySelector('.js-password-input');

	signInButton = document.querySelector('.js-sign-in-button');

	console.log('ok');
};

const addErrors = function(field) {
	field.classList.add('has-error');
};

const removeErrors = function(field) {
	field.classList.remove('has-error');
};

const doubleCheckEmail = function() {
	if (isValidEmailAddress(email.input.value)) {
		removeErrors(email.field);
		email.input.removeEventListener('input', doubleCheckEmail);
	} else {
		if (isEmpty(typedInput)) {
			email.errorMessage.innerHTML = 'the field is required';
		} else {
			email.errorMessage.innerHTML = 'the email is not valid';
		}
	}
};
const doubleCheckPassword = function() {
	if (isValidPassword(password.input.value)) {
		removeErrors(password.field);
		password.input.removeEventListener('input', doubleCheckPassword);
	} else {
		if (isEmpty(typedInput)) {
			password.errorMessage.innerHTML = 'the field is required';
		} else {
			password.errorMessage.innerHTML = 'the password is not valid';
		}
	}
};
const enableL = function() {
	email.input.addEventListener('blur', function(event) {
		console.log(event);
		const typedInput = event.target.value;
		if (!isValidEmailAddress(typedInput)) {
			addErrors(email.field);

			if (isEmpty(typedInput)) {
				email.errorMessage.innerHTML = 'the field is required';
			} else {
				email.errorMessage.innerHTML = 'the email is not valid';
			}

			email.input.addEventListener('input', doubleCheckEmail);
		}
    });
    password.input.addEventListener('blur', function(event) {
		console.log(event);
		const typedInput = event.target.value;
		if (!isValidPassword(typedInput)) {
			addErrors(password.field);

			if (isEmpty(typedInput)) {
				password.errorMessage.innerHTML = 'the field is required';
			} else {
				password.errorMessage.innerHTML = 'the password is not valid';
			}

			password.input.addEventListener('input', doubleCheckPassword);
		}
	});
};

document.addEventListener('DOMContentLoaded', function() {
	console.log('domcontent loaded 👍');
	getDom();
	enableL();
});
