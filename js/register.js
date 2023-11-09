document.addEventListener("DOMContentLoaded", () => {
	const regBtn = document.getElementById("reg-btn");
	regBtn.addEventListener("click", () => {
		console.log("hello");
		const handleLogin = () => {
			const fName = document.getElementById("fname");
			const lName = document.getElementById("lname");
			const email = document.getElementById("register-email");
			const password = document.getElementById("password");
			const confirmPassword = document.getElementById("confirm-password");

			if (fName && lName && email && password && confirmPassword) {
				alert("Successfully registered !");
			} else {
				alert("All fields are mandatory !");
			}
		};
	});
});
