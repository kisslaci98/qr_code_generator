const form = document.getElementById("generate-form");
const qr = document.getElementById("qr-code");

function onGeneration(e) {
    e.preventDefault();

    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === '') {
        alert("Please enter a URL")
    } else {
        generateQRCode(url, size)
        
        setTimeout(() => {
            const saveUrl = qr.querySelector("img").src;
            createSaveButton(saveUrl);
        }, 100);
    }

    console.log(url, size);
}

function generateQRCode(url, size) {
    const qrcode = new QRCode('qr-code', {
        text: url,
        width: size,
        height: size
    })
}

function clearUI() {
    qr.innerHTML = '';
    const saveLink = document.getElementById("save-link");
    if (saveLink) {
        saveLink.remove();
    }
}

function createSaveButton(saveUrl) {
    const link = document.createElement("a");
    link.id = "save-link";
    link.href = saveUrl;
    link.download = "qr-code";
    link.innerHTML = "Save Image";
    document.getElementById("generated").appendChild(link);
}

form.addEventListener("submit", onGeneration)