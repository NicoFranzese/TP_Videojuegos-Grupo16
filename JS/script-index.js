// Función para abrir el popup
function openPopup() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("popup").style.display = "block";
};

// Función para cerrar el popup
function closePopup() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("popup").style.display = "none";
};

// Obtén una referencia al formulario y a los campos que deseas validar
const formulario = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("email");
const mensajeTextArea = document.getElementById("mensaje");

// Agrega un controlador de eventos al formulario para la validación
formulario.addEventListener("submit", function (event) {
    // Detén el envío del formulario para realizar la validación
    event.preventDefault();

    // Realiza la validación
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
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    }
});