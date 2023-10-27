// Funci�n para abrir el popup
function openPopup() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("popup").style.display = "block";
};

// Funci�n para cerrar el popup
function closePopup() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("popup").style.display = "none";
};

// Obt�n una referencia al formulario y a los campos que deseas validar
const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("email");
const mensajeTextArea = document.getElementById("mensaje");

// Agrega un controlador de eventos al formulario para la validaci�n
formulario.addEventListener("submit", function (event) {
    // Det�n el env�o del formulario para realizar la validaci�n
    event.preventDefault();

    // Realiza la validaci�n
    if (nombreInput.value.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        nombreInput.focus();
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correoInput.value)) {
        alert("Por favor, ingresa un Email correcto.");
        correoInput.focus();
    } else if (mensajeTextArea.value.trim() === "") {
        alert("Por favor, ingresa un Email correcto.");
        correoInput.focus();
    } else {
        // Si la validaci�n es exitosa, puedes enviar el formulario
        formulario.submit();
    }
});