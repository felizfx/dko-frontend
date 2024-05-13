const alert = document.getElementsByClassName("alert")[0];
const email = document.getElementsByName("email")[0];
const username = document.getElementsByName("username")[0];
const forms = document.getElementsByClassName("form")[0];
const password = document.getElementsByName("password")[0];
const confirmPassword = document.getElementsByName("confirm-password")[0];
const signupBtn = document.getElementById("signup");
const forgotPassword = document.getElementById("forgotpassword");

export default {
	alert,
	email,
	username,
	forms,
	password,
	confirmPassword,
	signupBtn,
	forgotPassword,
};