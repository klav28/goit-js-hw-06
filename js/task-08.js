const formLogin = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === "") {
        return alert("Всі поля повинні бути заповнені");
    }

    console.log({
        email: email.value,
        password: password.value,
    });

    event.currentTarget.reset();
}

formLogin.addEventListener("submit", handleSubmit);
