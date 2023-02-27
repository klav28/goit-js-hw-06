const formLogin = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені");
    }

    console.log(`E-Mail: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

formLogin.addEventListener("submit", handleSubmit);
