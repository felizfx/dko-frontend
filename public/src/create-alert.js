/* eslint-disable no-undef */
import dom from "./dom.js";

let timeout;

export default function createAlert(message) {
	clearInterval(timeout);
	dom.alert.style.transform = "translateX(0%)";
	dom.alert.innerHTML = `
            <div class="alert-header">
                <h3><strong>${message}</strong></h3>  
            </div>
        `;
	timeout = setTimeout(() => {
		dom.alert.style.transform = "translateX(-250%)";
	}, 5000);
}