import createAlert from "../../src/create-alert.js";
import dom from "../../src/dom.js";
import paths from "../../src/paths.js";

const token = document.getElementsByName("token")[0];
const email = localStorage.getItem("email");

if(!email) {
	window.location.href = paths.forgotPassword;
}

dom.forms.addEventListener("submit", e => {
	e.preventDefault();

	if(dom.password.value !== dom.confirmPassword.value) return createAlert("As senhas não estão iguais");

	fetch(`http://localhost:8080/api/v1/auth/changepassword?token=${token.value}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password: dom.password.value
		})
	})
		.then(response => {
			if(response.status !== 200) return createAlert("Verifique as informações fornecidas");
			window.location.href = paths.signin;
			return response.json();
		});
	localStorage.clear();
});