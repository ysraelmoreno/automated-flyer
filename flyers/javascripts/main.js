function wrapText(ctx, text, align, x, y, maxWidth, lineHeight, color, font, fontSize) {
  var words = text.split(' ');
  var line = '';

  if (font || fontSize) {
    ctx.font = `500 ${fontSize} ${font}, monospace`
  }
  else {
    ctx.font = "500 60px Bebas Neue, monospace"
  }

  ctx.textAlign = "center";
  ctx.textAlign = align;

  ctx.fillStyle = color;

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }

  ctx.fillText(line, x, y);
}

function demo() {
  c.width = 720;
  c.height = 1280;
  render();
}

function verifyPin(value, ctx, name, positionX, positionY) {
  if(value === "bemvindo"){
    wrapText(ctx, name, "center", positionX, positionY + 400, 650, 30, "white", "Montserrat", "30px");

  } else if (value === "1mes"
  || value === "2mes" || value === "3mes"
  || value === "4mes" || value === "5mes"
  || value === "6mes" || value === "7mes"
  || value === "8mes" || value === "9mes"
  || value === "10mes" || value === "11mes" || value === "12mes" ) {
    wrapText(ctx, name, "center", positionX, positionY - 210, 650, 30, "white", "Montserrat", "30px");

  } else if (value === "superlider") {
    wrapText(ctx, name, "center", positionX, positionY - 270, 650, 30,  "black", "Montserrat", "30px");

  } else {
    wrapText(ctx, name, "center", positionX, positionY + 420, 650, 40, "black", "Montserrat", "30px");

  }

}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(bandeiraCustomizada, 0, 0, c.width, c.height);
  let scaleX = imageRangeX;

  let centerX = c.width / 2;
  let centerY = c.height / 2;

  let upperNome = username.value;

  verifyPin(select.value, ctx, upperNome, centerX, centerY)

  var userPhoto = new Image();
  let centerXPhoto = c.width / 2;
  let centerYPhoto = c.height / 2;

  if (placeholder.src != "#") {
    userPhoto.addEventListener("load", () => {
      ctx.globalCompositeOperation = "destination-over";

      rangeX.max = userPhoto.width;

      var width = userPhoto.width * (scaleX / 1000);
      var height = userPhoto.height * (scaleX / 1000);

      ctx.drawImage(userPhoto, centerXPhoto - width / 2, centerYPhoto - (height / 2) + 60, width, height);

    })
    userPhoto.src = placeholder.src;
  }

  dataUrl = c.toDataURL();
}
