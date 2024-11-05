function generarQR() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;

    if (!nombre || !telefono || !email) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const vCardData = `
        BEGIN:VCARD
        VERSION:3.0
        FN:${nombre}
        TEL:${telefono}
        EMAIL:${email}
        END:VCARD
    `.trim();

    const qr = new QRious({
        element: document.getElementById("qr"),
        value: vCardData,
        size: 200
    });

    alert("¡Código QR generado! Escanea para guardar el contacto.");
}
