document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const terms = document.getElementById("terms").checked;

        if (name === "") {
            alert("Ingresa tu nombre");
            return;
        }

        if (age === "" || age < 18) {
            alert("Debes ser mayor de 18 años");
            return;
        }

        if (email === "") {
            alert("Ingresa tu correo electrónico");
            return;
        }

        if (phone === "") {
            alert("Ingresa tu teléfono");
            return;
        }

        if (!terms) {
            alert("Por favor, acepte los términos y condiciones");
            return;
        }

        form.submit();
    });
});