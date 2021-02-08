
function wrapText(ctx, text, align, x, y, maxWidth, lineHeight, color, font, fontSize) {
  var words = text.split(' ');
  var line = '';

  if (font || fontSize) {
    ctx.font = `500 ${fontSize} ${font}, monospace`
  }
  else {
    ctx.font = "500 30px Bebas Neue, monospace"
  }

  ctx.textAlign = "center";
  ctx.textAlign = align;

  ctx.fillStyle = "white";
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
  canvas.width = 720;
  canvas.height = 1280;
  render();
}


function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(bandeiraCustomizada, 0, 0, c.width, c.height);

  let scaleX1 = imageRangeX1;
  let scaleX2 = imageRangeX2;
  let scaleX3 = imageRangeX3;

  let centerX = c.width / 2;
  let centerY = c.height / 2;

  let upperNome = username.value;

  select2.style.display = "none";
  select3.style.display = "none";

  labelsFile2.style.display = "none";
  labelsFile3.style.display = "none";

  var userPhoto1 = new Image();
  var userPhoto2 = new Image();
  var userPhoto3 = new Image();

  let centerXPhoto = c.width / 2;
  let centerYPhoto = c.height / 2;

  radios.forEach((radio) => {
    if(radio.checked){
      if(radio.value == "1pessoa") {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(pin, 400, 600, 180, 180);

        username.placeholder = "Nome completo do participante"
        select2.style.display = "none";
        select3.style.display = "none";

        userName2.style.display = "none";
        userName3.style.display = "none";

        file2.style.display = "none";
        file3.style.display = "none";

        positionX2.style.display = "none"
        positionX3.style.display = "none"

        size2.style.display = "none"
        size3.style.display = "none"

        wrapText(ctx, upperNome, "center", centerX + 10, centerY + 170, 300, 30)

        if (placeholder1.src != "#") {
          userPhoto1.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX1.max = userPhoto1.width;

            var width = userPhoto1.width * (scaleX1 / 1000);
            var height = userPhoto1.height * (scaleX1 / 1000);

            ctx.drawImage(userPhoto1, centerXPhoto - width / 2, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto1.src = placeholder1.src;
        }
      }

      if(radio.value == "2pessoas") {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(pin, 200, 600, 140, 140);
        ctx.drawImage(pin2, 470, 600, 140, 140);

        username.placeholder = "Nome completo do primeiro palestrante"
        select2.style.display = "inline";
        select3.style.display = "none";

        labelsFile2.style.display = "inline";
        labelsFile3.style.display = "none";

        file2.style.display = "none";
        file3.style.display = "none";

        positionX2.style.display = "inline"
        positionX3.style.display = "none"

        size2.style.display = "inline"
        size3.style.display = "none"

        wrapText(ctx, upperNome, "center", centerX - 110, centerY + 120, 200, 30, "white")

        userName2.style.display = "inline";
        userName3.style.display = "none";
        let upperName2 = userName2.value;

        wrapText(ctx, upperName2, "center", centerX + 130, centerY + 120, 200, 30, "white")

        if (placeholder1.src != "#") {
          userPhoto1.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX1.max = userPhoto1.width;

            var width = userPhoto1.width * (scaleX1 / 1000);
            var height = userPhoto1.height * (scaleX1 / 1000);

            ctx.drawImage(userPhoto1, centerXPhoto - width / 2 - 120, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto1.src = placeholder1.src;
        }

        if (placeholder2.src != "#") {
          userPhoto2.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX2.max = userPhoto2.width;

            var width = userPhoto2.width * (scaleX2 / 1000);
            var height = userPhoto2.height * (scaleX2 / 1000);

            ctx.drawImage(userPhoto2, centerXPhoto - width / 2 + 120, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto2.src = placeholder2.src;
        }


      }
      if(radio.value == "3pessoas") {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(pin, 150, 600, 100, 100);
        ctx.drawImage(pin2, 380, 600, 100, 100);
        ctx.drawImage(pin3, 620, 600, 100, 100);

        select2.style.display = "inline";
        select3.style.display = "inline";


        labelsFile2.style.display = "inline";
        labelsFile3.style.display = "inline";

        wrapText(ctx, upperNome, "center", centerX - 230, centerY + 120, 150, 30)

        userName2.style.display = "inline";
        userName3.style.display = "inline";

        positionX2.style.display = "inline"
        positionX3.style.display = "inline"

        size2.style.display = "inline"
        size3.style.display = "inline"

        let upperName2 = userName2.value;
        let upperName3 = userName3.value;

        wrapText(ctx, upperName2, "center", centerX + 10, centerY + 120, 150, 30, "white")
        wrapText(ctx, upperName3, "center", centerX + 250, centerY + 120, 150, 30, "white")

        if (placeholder1.src != "#") {
          userPhoto1.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX1.max = userPhoto1.width;

            if (userPhoto1.width / userPhoto1.height === 1) {
              var width = userPhoto1.width * (scaleX1 / 1000);
              var height = userPhoto1.height * (scaleX1 / 1000);

            } else {
              var width = userPhoto1.width * (scaleX1 / 1000);
              var height = userPhoto1.height * (scaleX1 / 1000);

            }

            ctx.drawImage(userPhoto1, centerXPhoto - width / 2 - 235, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto1.src = placeholder1.src;
        }

        if (placeholder2.src != "#") {
          userPhoto2.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX2.max = userPhoto2.width;

            var width = userPhoto2.width * (scaleX2 / 1000);
            var height = userPhoto2.height * (scaleX2 / 1000);

            ctx.drawImage(userPhoto2, centerXPhoto - width / 2, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto2.src = placeholder2.src;
        }

        if (placeholder3.src != "#") {
          userPhoto3.addEventListener("load", () => {
            ctx.globalCompositeOperation = "destination-over";

            rangeX3.max = userPhoto3.width;

            var width = userPhoto3.width * (scaleX3 / 1000);
            var height = userPhoto3.height * (scaleX3 / 1000);

            ctx.drawImage(userPhoto3, centerXPhoto - width / 2 + 240, centerYPhoto - (height / 2) - 50, width, height);

          })
          userPhoto3.src = placeholder3.src;
        }
      }
    }

    radio.addEventListener("change", (event) => {
      bandeiraCustomizada.src = `./images/${event.target.value}.png`;

      return event.target.value
    })
  })

  let cityTxt = city.value;
  wrapText(ctx, cityTxt, "center", centerX + 70, centerY - 230, 250, 30, "white")

  let dateTxt = date.value;
  wrapText(ctx, dateTxt, "center", centerX, centerY + 300, 400, 30, "#0090ff")

  let localTxt = local.value;
  wrapText(ctx, localTxt, "center", centerX, centerY + 350, 400, 30, "white")

  let addressTxt = address.value;
  wrapText  (ctx, addressTxt, "center", centerX, centerY + 380, 400, 30, "white", "Montserrat", "24px")

  dataUrl = c.toDataURL();
}
