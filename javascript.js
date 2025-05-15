function upDate(previewPic) {
    let image = document.getElementById("image");
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt;
  }
  
  function unDo() {
    let image = document.getElementById("image");
    image.style.backgroundImage = "url('')";
    image.innerHTML = "Hover over an image below to display here.";
  }
  