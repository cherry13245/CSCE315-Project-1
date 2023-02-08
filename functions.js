function toggleStyleSheet() {
	// Task 1
	// Steps
	// 1 (a) Get style element by ID (hint: getElementById)

	// 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)

	// 1 (c) Determine new stylesheet file name

	// 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)

	// TASK 2
	// 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
	// hint: localStorage.setItem(name, value)
	console.log("called");
	if (
		document.getElementById("mainStyleSheet").getAttribute("href") ===
		"styles.css"
	) {
		document
			.getElementById("mainStyleSheet")
			.setAttribute("href", "styles2.css");
		localStorage.setItem("style", "styles2.css");
	} else {
		document
			.getElementById("mainStyleSheet")
			.setAttribute("href", "styles.css");
		localStorage.setItem("style", "styles.css");
	}
}

window.onload = function () {
	// TASK 2
	// TODO: Make the last div color persist even when someone refreshes the page.
	// Steps
	// 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
	let style = localStorage.getItem("style") || "styles.css";
	console.log(style);
	// 2 (b) get html style element by ID
	document.getElementById("mainStyleSheet").setAttribute("href", style);
	// 2 (c) replace href attribute of html element.
};
