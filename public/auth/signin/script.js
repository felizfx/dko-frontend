import paths from "../../src/paths.js";
import createAlert from "../../src/create-alert.js";
import dom from "../../src/dom.js";

dom.forms.addEventListener("submit", e => {
	e.preventDefault();
	fetch("http://localhost:8080/api/v1/auth/signin", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: dom.email.value,
			password: dom.password.value
		})
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			if (data.statusCode === 400) return createAlert(data.message[0]);
			if (data.statusCode === 401) return createAlert(data.message);
			localStorage.setItem("token", data.acess_token);
			window.location.href = paths.main;
		});
});

dom.signupBtn.addEventListener("click", e => {
	e.preventDefault();
	window.location.href = paths.signup;
});

dom.forgotPassword.addEventListener("click", e => {
	e.preventDefault();
	window.location.href = paths.forgotPassword;
});