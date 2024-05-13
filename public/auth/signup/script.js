import createAlert from "../../../src/create-alert.js";
import dom from "../../src/dom.js";
import paths from "../../src/paths.js";

const signin = document.getElementById("signin");

dom.forms.addEventListener("submit", e => {
	e.preventDefault();

	if(dom.password.value !== dom.confirmPassword.value) return createAlert("As senhas precisam ser iguais");

	fetch("http://localhost:8080/api/v1/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: dom.username.value,
			email: dom.email.value,
			password: dom.password.value
		})
	})
		.then(response => response.json())
		.then(data => {
			if (data.statusCode === 400) return createAlert(data.message[0]);
			localStorage.setItem("token", data.acess_token);
			window.location.href = paths.main;
		});
});

signin.addEventListener("click", e => {
	e.preventDefault();
	window.location.href = paths.signin; 
});