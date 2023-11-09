document.addEventListener("DOMContentLoaded", () => {
	const regBtn = document.getElementById("reg-btn");
	regBtn.addEventListener("click", () => {
		// console.log("hello");
		const handleLogin = () => {
			const fName = document.getElementById("fname").value;
			const lName = document.getElementById("lname").value;
			const email = document.getElementById("register-email").value;
			const password = document.getElementById("password").value;
			const confirmPassword = document.getElementById("confirm-password").value;
			const error = document.getElementById("error");

			if (fName && lName && email && password && confirmPassword) {
				alert("Successfully registered !");
			} else {
				alert("All fields are mandatory !");
				error.innerHTML = `All fields are mandatory !`;
			}
		};
		handleLogin();
	});
});
