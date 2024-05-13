import createAlert from "../../src/create-alert.js";
import dom from "../../src/dom.js";
import paths from "../../src/paths.js";

dom.forms.addEventListener("submit", e => {
	e.preventDefault();
	fetch(`http://localhost:8080/api/v1/auth/forgotpassword?email=${dom.email.value}`, {
		method: "POST"
	})
		.then(response => {
			if (response.status === 404) return createAlert("Email não registrado na base");
			localStorage.setItem("email", dom.email.value);
			window.location.href = paths.resetPassword;
			return response.json();
		})
		.catch(e => {
			console.log(e);
		});
});