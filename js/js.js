level = 0
tiempo = 0
arriba = 0
izquierda = 0
inicio = 0
ganaste = 0


function subirLv() {
    level += 1;
    document.getElementById("level").innerHTML = "level = "+level;
}

function moverAbajo() {
    if (inicio==0) {
        setInterval(sumarTiempo, 1000);
        inicio = 1;
    }
    if (izquierda===0&&arriba<200) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===100&&arriba<200) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===450&&arriba<300) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===350&&arriba<200&&arriba>50) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===200&&arriba<300&&arriba>50) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===300&&arriba<300&&arriba>150) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===50&&arriba<400&&arriba>250) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===100&&arriba>350&&arriba<450) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===200&&arriba>350&&arriba<450) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===400&&arriba>350&&arriba<450) {
        arriba += 50;
        document.getElementById("player").style.top = arriba+ "px";
    }
    victoria()
}

function moverArriba() {
    if (inicio==0) {
        setInterval(sumarTiempo, 1000);
        inicio = 1;
    }
    if (izquierda===0&&arriba<250&&arriba>0) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===100&&arriba<250&&arriba>0) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===450&&arriba<350&&arriba>0) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    }
     else if (izquierda===350&&arriba<250&&arriba>100) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } 
    else if (izquierda===200&&arriba<350&&arriba>100) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } 
    else if (izquierda===300&&arriba<400&&arriba>200) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===50&&arriba>300) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===100&&arriba>400) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===200&&arriba>400) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    } else if (izquierda===400&&arriba>400) {
        arriba -= 50;
        document.getElementById("player").style.top = arriba+ "px";
    }
    victoria()
}

function moverDerecha() {
    if (inicio==0) {
        setInterval(sumarTiempo, 1000);
        inicio = 1;
    }
    if (izquierda>=0&&izquierda<=50&&arriba===200) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=100&&izquierda<=150&&arriba===150) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=100&&izquierda<450&&arriba===0) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
     else if (izquierda<=300&&izquierda>=200&&arriba===100) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    } 
    else if (izquierda>=50&&izquierda<450&&arriba===300) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    } 
    else if (izquierda>=300&&izquierda<=300&&arriba===200) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=50&&izquierda<=50&&arriba===400) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=100&&izquierda<=150&&arriba===450) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=150&&izquierda<=350&&arriba===400) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=400&&izquierda<=400&&arriba===450) {
        izquierda += 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    victoria()
}

function moverIzquierda() {
    if (inicio==0) {
        setInterval(sumarTiempo, 1000);
        inicio = 1;
    }
    if (izquierda>=50&&izquierda<=100&&arriba===200) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=150&&izquierda<=200&&arriba===150) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=150&&izquierda<500&&arriba===0) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
     else if (izquierda<=350&&izquierda>=250&&arriba===100) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    } 
    else if (izquierda>=100&&izquierda<500&&arriba===300) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    } 
    else if (izquierda>=350&&izquierda<=350&&arriba===200) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=100&&izquierda<=100&&arriba===400) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=150&&izquierda<=200&&arriba===450) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=250&&izquierda<=400&&arriba===400) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    else if (izquierda>=450&&izquierda<=450&&arriba===450) {
        izquierda -= 50;
        document.getElementById("player").style.left = izquierda+ "px";
    }
    victoria()
}

function victoria () {
    if (arriba===450&&izquierda===450) {
    alert("Ganaste, bien ahí")
    ganaste = 1
    }
}

function sumarTiempo() {
    if (ganaste==0) {
        tiempo += 1;
        document.getElementById("tiempo").innerHTML = "tiempo: "+tiempo+" s";
    }
}

// function puls(event) {
//     let key = event.key

//     if (key="s") {
//     moverAbajo
//     }
// }

// document.getElementById("player").addEventListener("keydown", puls)
