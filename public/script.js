import paths from "./src/paths.js";

/* eslint-disable no-undef */
const token = localStorage.getItem("token");

if(!token) {
	window.location.href = paths.signin;
}

if(token) {
	fetch("http://localhost:8080/api/v1/user", {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${token}`
		}
	})
		.then(response => {
			if (response.status !== 200) {
				window.location.href = paths.signin;
				localStorage.clear();
			}
		});
}