
var miRuleta = new Winwheel({
    numSegments: 12,
    outerRadius: 170,
    segments: [
      { fillStyle: "#eb1c24", text: "0" },
      { fillStyle: "#e86f36", text: "1" },
      { fillStyle: "#fdaf43", text: "0" },
      { fillStyle: "#fff001", text: "1" },
      { fillStyle: "#bed63a", text: "0" },
      { fillStyle: "#66ad33", text: "1" },
      { fillStyle: "#009345", text: "0" },
      { fillStyle: "#01969c", text: "1" },
      { fillStyle: "#019cdf", text: "0" },
      { fillStyle: "#1b65ba", text: "1" },
      { fillStyle: "#652d90", text: "0" },
      { fillStyle: "#a1268e", text: "1" },


    ],
    
    animation: {
      type: "spinToStop",
      duration: 6,
      callbackFinished: "mensaje()",
      callbackAfter: "dibujarIndicador()"
    }
  });
  
  dibujarIndicador();

  var resultado;
  
  function prueba(){
    // alert(resultado);
    
    if (resultado > -1){
      spinningWheel.classList.remove("activeInfo"); //hide info box
      alertContinue.classList.add("activeInfo"); //show quiz box

    }


  

  }

  function resultNum(){
    var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
    if (SegmentoSeleccionado){
          resultado = SegmentoSeleccionado.text;
          // alert("Elemento seleccionado: " + SegmentoSeleccionado.text);
        }
        // contenedor.innerHTML = resultado;
        re();
        prueba();
  }


  function mensaje() {
    resultNum();
    miRuleta.stopAnimation(false);
    miRuleta.rotationAngle = 0;
    miRuleta.draw();
    dibujarIndicador();
  }
  
  function dibujarIndicador() {
    var ctx = miRuleta.ctx;
    ctx.strokeStyle = "transparent";
    ctx.fillStyle = "#321149";
    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.moveTo(170, 10);
    ctx.lineTo(230, 10);
    ctx.lineTo(200, 70);
    ctx.lineTo(170, 10);
    ctx.stroke();
    ctx.fill();
  }
  
  ////////////////////////////////////////////777
  // var miRuleta = new Winwheel({
  //   numSegments: 15,
  //   outerRadius: 170,
  //   segments: [
  //     { fillStyle: "#ffeb3b", text: "JavaScript" },
  //     { fillStyle: "#304ffe", text: "Pyhton" },
  //     { fillStyle: "#3949ab", text: "PHP" },
  //     { fillStyle: "#00bcd4", text: "Go" },
  //     { fillStyle: "#e91e63", text: "Ruby" },
  //     { fillStyle: "#ffeb3b", text: "JavaScript" },
  //     { fillStyle: "#304ffe", text: "Pyhton" },
  //     { fillStyle: "#3949ab", text: "PHP" },
  //     { fillStyle: "#00bcd4", text: "Go" },
  //     { fillStyle: "#e91e63", text: "Ruby" },
  //     { fillStyle: "#ffeb3b", text: "JavaScript" },
  //     { fillStyle: "#304ffe", text: "Pyhton" },
  //     { fillStyle: "#3949ab", text: "PHP" },
  //     { fillStyle: "#00bcd4", text: "Go" },
  //     { fillStyle: "#e91e63", text: "Ruby" }
  //   ],
  //   animation: {
  //     type: "spinToStop",
  //     duration: 5,
  //     callbackFinished: "mensaje()",
  //     callbackAfter: "dibujarIndicador()"
  //   }
  // });
  
  // dibujarIndicador();
  
  // function mensaje() {
  //   var SegmentoSeleccionado = miRuleta.getIndicatedSegment();
  //   alert("Elemento seleccionado: " + SegmentoSeleccionado.text);
  
  //   miRuleta.stopAnimation(false);
  //   miRuleta.rotationAngle = 0;
  //   miRuleta.draw();
  //   dibujarIndicador();
  // }
  
  // function dibujarIndicador() {
  //   var ctx = miRuleta.ctx;
  //   ctx.strokeStyle = "navy";
  //   ctx.fillStyle = "black";
  //   ctx.lineWidth = 2;
  //   ctx.beginPath();
  //   ctx.moveTo(170, 10);
  //   ctx.lineTo(230, 10);
  //   ctx.lineTo(200, 70);
  //   ctx.lineTo(170, 10);
  //   ctx.stroke();
  //   ctx.fill();
  // }
  