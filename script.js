function mostrarMensaje() {
    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });
}

function comprar(producto) {
    alert("Seleccionaste el producto: " + producto);
}

function enviarFormulario(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    alert("Gracias " + nombre + ", tu mensaje fue enviado correctamente.");
    document.querySelector("form").reset();
}