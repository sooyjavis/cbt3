
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const res = event.target.result;
        resolve(res);
      };
      reader.onerror = function (error) {
        reject(error);
      };
      const file = this.response;
      reader.readAsDataURL(file);
    };
    xhr.onerror = function (error) {
      reject(error);
    };
    xhr.send();
  });
}

function loadImageFromFileInput(fileInput) {
  return new Promise((resolve, reject) => {
    const file = fileInput.files[0];
    if (!file) {
      reject("No se ha seleccionado ningún archivo");
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const base64Data = event.target.result;
      resolve(base64Data);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const servicio = document.getElementById("servicio").value;
    const fechInicio = document.getElementById("fechInicio").value;
    const fechFin = document.getElementById("fechFin").value;
    const nombre = document.getElementById("nombre").value;
    const numeroTelefono = document.getElementById("numeroTelefono").value;
    const grupo = document.getElementById("grupo").value;
    const Dias = document.getElementById("Dias").value;
    const semestre = document.getElementById("semestre").value;
    const nombreInstitucion =
      document.getElementById("nombreInstitucion").value;
    const numeroTelefonoInst =
      document.getElementById("numeroTelefonoInst").value;
    const nombreRes = document.getElementById("nombreRes").value;
    const cargoSelect = document.getElementById("cargo");
    const direccion = document.getElementById("direccion").value;
    const num = document.getElementById("num").value;
    const colonia = document.getElementById("colonia").value;
    const municipio = document.getElementById("municipio").value;
    const correo = document.getElementById("correo").value;
    const nombreTut = document.getElementById("nombreTut").value;
    const telTut = document.getElementById("telTut").value;

    let cargo = cargoSelect.value;
    let otroInput = "";

    if (cargo === "Otro") {
      document.getElementById("otroCampoDiv").style.display = "block"; // Mostrar el campo "Otro" y el input asociado
      otroInput = document.getElementById("otroInput").value;
      if (!otroInput.trim()) {
        console.error('No se ha proporcionado un valor en el campo "Otro"');
        return; // Salir de la función si no se proporciona un valor en el campo "Otro"
      }
      cargo = otroInput; // Reemplazar el valor de cargo con el valor del campo "Otro"
    } else {
      document.getElementById("otroCampoDiv").style.display = "none"; // Ocultar el campo "Otro" y el input asociado si no se selecciona "Otro"
    }

    try {
      await generatePDF(
        servicio,
        fechInicio,
        fechFin,
        nombre,
        numeroTelefono,
        grupo,
        Dias,
        semestre,
        nombreInstitucion,
        numeroTelefonoInst,
        nombreRes,
        cargo,
        otroInput,
        direccion,
        num,
        colonia,
        municipio,
        correo,
        nombreTut,
        telTut
      );
      await generatePDF(servicio, nombre);
    } catch (error) {
      console.error("Error al generar PDF:", error);
    }
  });
});

async function generatePDF(
  servicio,
  fechInicio,
  fechFin,
  nombre,
  numeroTelefono,
  grupo,
  Dias,
  semestre,
  nombreInstitucion,
  numeroTelefonoInst,
  nombreRes,
  cargo,
  otroInput,
  direccion,
  num,
  colonia,
  municipio,
  correo,
  nombreTut,
  telTut
) {
  try {
    const image = await loadImage("oficial.jpg");

    const fileInput = document.getElementById("inputImage");
    const signatureImage = await loadImageFromFileInput(fileInput);
    const imageData = await loadImageDataFromInput(fileInput);

    const fileInput2 = document.getElementById("inputImage2");
    const secondImage = await loadImageFromFileInput(fileInput2);

    const pdf = new jsPDF("p", "pt", "letter");

    // Agrega la imagen al PDF
    pdf.addImage(
      image,
      "PNG",
      0,
      0,
      565,
      792,
      pdf.internal.pageSize.width,
      pdf.internal.pageSize.height
    );

    const imageWidth = 390;
    const imageHeight = 200;
    const imageWidthF = 80;
    const imageHeightF = 110;
    const pdfWidth = pdf.internal.pageSize.width;
    const pdfHeight = pdf.internal.pageSize.height;
    const x = (pdfWidth - imageWidth) / 2 - 20;
    const y = (pdfHeight - imageHeight) / 2 + 120;
    const radius = 10;

    pdf.addImage(signatureImage, "PNG", x, y, imageWidth, imageHeight);

    const x2 = (pdfWidth + 253) / 2 + 15;
    const y2 = (pdfHeight - 763) / 2 + 50;

    pdf.addImage(secondImage, "PNG", x2, y2, imageWidthF, imageHeightF);

    let cargoMostrado = cargo;
    if (cargo === cargoMostrado) {
      cargoMostrado = otroInput;
    }

    pdf.setFontSize(10);
    pdf.text(servicio, 250, 95);

    pdf.setFontSize(10);
    pdf.text(fechInicio, 245, 108);

    pdf.setFontSize(10);
    pdf.text(fechFin, 310, 108);

    pdf.setFontSize(10);
    pdf.text(nombre, 173, 142);

    pdf.setFontSize(10);
    pdf.text(numeroTelefono, 280, 157);

    pdf.setFontSize(10);
    pdf.text(grupo, 120, 155);

    pdf.setFontSize(10);
    pdf.text(Dias, 180, 170);

    pdf.setFontSize(10);
    pdf.text(semestre, 120, 183);

    pdf.setFontSize(10);
    pdf.text(nombreInstitucion, 50, 240);

    pdf.setFontSize(10);
    pdf.text(numeroTelefonoInst, 390, 240);

    pdf.setFontSize(10);
    pdf.text(nombreRes, 50, 275);

    pdf.setFontSize(10);
    pdf.text(cargo, 390, 275);

    //pdf.setFontSize(10);
    //pdf.text(otroInput, 390,275);

    pdf.setFontSize(10);
    pdf.text(direccion, 50, 310);

    pdf.setFontSize(10);
    pdf.text(num, 50, 320);

    pdf.setFontSize(10);
    pdf.text(colonia, 50, 330);

    pdf.setFontSize(10);
    pdf.text(municipio, 50, 340);

    pdf.setFontSize(10);
    pdf.text(correo, 380, 315);

    pdf.setFontSize(10);
    pdf.text(nombreTut, 245, 370);

    pdf.setFontSize(10);
    pdf.text(telTut, 255, 385);

    pdf.setFontSize(10);
    pdf.text(nombre, 80, 672);

    pdf.setFontSize(10);
    pdf.text(nombreTut, 210, 672);

    pdf.setFontSize(10);
    pdf.text(nombreRes, 360, 672);


    const nombreArchivo = `REGISTRO DE ${servicio} DE ${nombre}.pdf`;
    pdf.save(nombreArchivo);
   } catch (error) {
    console.error("Error al generar PDF:", error);
  }
}

function loadImageDataFromInput(fileInput) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (error) {
        reject(error);
      };
      img.src = event.target.result;
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(fileInput.files[0]);
  });
}