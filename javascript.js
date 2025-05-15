function upDate(previewPic) {
    let image = document.getElementById("image");
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt; // Actualiza el texto con el 'alt' de la imagen
  }
  
  function unDo() {
    let image = document.getElementById("image");
    image.style.backgroundImage = "url('')"; // Elimina la imagen de fondo
    image.innerHTML = "Hover over an image below to display here."; // Restablece el texto
  }
  