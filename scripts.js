//Código para jugar a preguntas y respuestas con la funcion prompt();
//Este codigo fue creado el 27/7/2022 Por M.N.Couto, estudiante de JAP Uruguay.
//El testeo fue realizado en su mayor parte con la funcion alert();
//Feed-back: nahuelcouto@gmail.com

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////// THE PROMPT GAME /////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



function saludoBienvenida() {

    let pregunta = prompt(`Hola ` + nombre + `, ¿Cómo estas?`);
    let respuesta = pregunta;
    if (respuesta == `bien` || respuesta == `muy bien` || respuesta == `muy bien gracias` || respuesta == `Muy bien gracias` || respuesta == `Bien` || respuesta == `bien gracias` || respuesta == `Bien gracias`) {
        alert(`¡Me alegro! ` + nombre);
    } else if (respuesta == `mal` || respuesta == `Mal` || respuesta == `que te importa` || respuesta == `Que te importa` || respuesta == `muy mal`) {
        alert(`¡Que pena! ` + nombre);
    } else if (respuesta == `maso` || respuesta == `Maso` || respuesta == `mas o menos` || respuesta == `Mas o menos`) {
        alert(`¡Animos! ` + nombre);
    } else if (respuesta == `bien y vos?` || respuesta == `Bien y vos?` || respuesta == `Bien y vos` ||  respuesta == `Bien y tu?` ||  respuesta == `Bien y tu` || respuesta == `bien vos` || respuesta == `Bien vos` || respuesta == `muy bien y tu` || respuesta == `Muy bien y tu` || respuesta == `Muy bien y vos?` || respuesta == `bien y tu` || respuesta == `bien y vos`) {
        alert(`¡Muy bien! ¡Gracias por preguntar! \n\n              [♥__♥]\n\n` + nombre + ` ¡Es un gusto conocerte!`);
    } else {
        alert(`¡Es un gusto conocerte!`);
    }
}

function juegoPrompt() {
    let pregunta = prompt(nombre + `, jugemos a preguntas y respuestas, ¿te apetece? \n Selecciona una categoria: \n 1•••> Historia \n 2•••> Ciencia \n 3•••> Arte \n 4•••> Geografia \n 5•••> Entretenimiento \n\n 0•••> Escribe "no" para salir.`);
    let respuesta = pregunta;
    if (respuesta == `1` || respuesta == `Historia` || respuesta == `historia` || respuesta == `HISTORIA`) {
        let pregunta = prompt(`**************************Categoria Historia************************** \n Pregunta: ¿En qué año Cristóbal Colón descubrió América? \n\n Opcion 1)•••> En 1492 \n\n Opcion 2)•••> En 1592 \n\n Opcion 3)•••> En 1498`);
        let respuesta = pregunta;
        primeraPreguntaHistoria(respuesta);
    } else if (respuesta == `2` || respuesta == `Ciencia` || respuesta == `ciencia` || respuesta == `CIENCIA`) {
        let pregunta = prompt(`**************************Categoria Ciencia************************** \n\n ¿En qué año llegó el hombre a la Luna? \n\n Opcion 1)•••> En 1992 \n\n Opcion 2)•••> En 1976 \n\n Opcion 3)•••> En 1969`);
        let respuesta = pregunta;
        primeraPreguntaCiencia(respuesta);
    } else if (respuesta == `3` || respuesta == `Arte` || respuesta == `arte` || respuesta == `ARTE`) {
        let pregunta =  prompt(`**************************Categoria ARTE************************** \n\n Pregunta: ¿Quien fue el artista pintor del cuadro La Mona Lisa? \n\n Opcion 1)•••> Pablo Picasso \n\n Opcion 2)•••> Leonardo da Vinci \n\n Opcion 3)•••> Salvador Dali`);
        let respuesta = pregunta;
        primeraPreguntaArte(respuesta);
    } else if (respuesta == `4` || respuesta == `Geografia` || respuesta == `geografia` || respuesta == `geografía` || respuesta == `Geografía`) {
        let pregunta = prompt(`************************Categoria GEOGRAFIA************************ \n\n Pregunta: ¿Cual es el pais con mayor cantidad de habitantes actualmente? \n\n Opcion 1)•••> India \n\n Opcion 2)•••> Rusia \n\n Opcion 3)•••> China`);
        let respuesta = pregunta;
        primeraPreguntaGeografia(respuesta);
    } else if (respuesta == `5` || respuesta == `Entretenimiento` || respuesta == `entretenimiento`) {
        let pregunta = prompt(`**********************Categoria ENTRETENIMIENTO********************** \n Pregunta: ¿Cuantas temporadas tiene la serie de Nextflix "Stranger Things" actualmente? \n\n Opcion 1)•••> 3 \n\n Opcion 2)•••> 10 \n\n Opcion 3)•••> 4`);
        let respuesta = pregunta;
        primeraPreguntaEntretenimiento(respuesta);
    } else if (respuesta == `no` || respuesta == `No` || respuesta == `"No"` || respuesta == `"no"` || respuesta == `0` || respuesta == `Salir` || respuesta == `salir` || respuesta == `cero` || respuesta == `Cero` || respuesta == `"NO"` || respuesta == `NO` || respuesta == `no gracias` || respuesta == `no, gracias` || respuesta == `No gracias` || respuesta == `No, gracias` || respuesta == `no muchas gracias` || respuesta == `No muchas gracias` || respuesta == `No, muchas gracias` || respuesta == `No!`) {
        alert(`¡Que tengas un lindo día! ` + nombre);
    } else {
        juegoPrompt();
    }
}   

function intentaloNuevamente() {
    let pregunta = prompt(nombre + `, ¡Intentalo nuevamente! \n Selecciona una categoria: \n 1-•••> Historia \n 2-•••> Ciencia \n 3-•••> Arte \n 4-•••> Geografia \n 5-•••> Entretenimiento \n\n 0•••> Escribe "no" para salir.`);
    let respuesta = pregunta;
    if (respuesta == `1` || respuesta == `Historia` || respuesta == `historia` || respuesta == `HISTORIA`) {
        let pregunta = prompt(`**************************Categoria Historia************************** \n Pregunta: ¿En qué año Cristóbal Colón descubrió América? \n\n Opcion 1)•••> En 1492 \n\n Opcion 2)•••> En 1592 \n\n Opcion 3)•••> En 1498`);
        let respuesta = pregunta;
        primeraPreguntaHistoria(respuesta);
    } else if (respuesta == `2` || respuesta == `Ciencia` || respuesta == `ciencia` || respuesta == `CIENCIA`) {
        let pregunta = prompt(`**************************Categoria Ciencia************************** \n\n ¿En qué año llegó el hombre a la Luna? \n\n Opcion 1)•••> En 1992 \n\n Opcion 2)•••> En 1976 \n\n Opcion 3)•••> En 1969`);
        let respuesta = pregunta;
        primeraPreguntaCiencia(respuesta);
    } else if (respuesta == `3` || respuesta == `Arte` || respuesta == `arte` || respuesta == `ARTE`) {
        let pregunta =  prompt(`**************************Categoria ARTE************************** \n\n Pregunta: ¿Quien fue el artista pintor del cuadro La Mona Lisa? \n\n Opcion 1)•••> Pablo Picasso \n\n Opcion 2)•••> Leonardo da Vinci \n\n Opcion 3)•••> Salvador Dali`);
        let respuesta = pregunta;
        primeraPreguntaArte(respuesta);
    } else if (respuesta == `4` || respuesta == `Geografia` || respuesta == `geografia` || respuesta == `geografía` || respuesta == `Geografía`) {
        let pregunta = prompt(`************************Categoria GEOGRAFIA************************ \n\n Pregunta: ¿Cual es el pais con mayor cantidad de habitantes actualmente? \n\n Opcion 1)•••> India \n\n Opcion 2)•••> Rusia \n\n Opcion 3)•••> China`);
        let respuesta = pregunta;
        primeraPreguntaGeografia(respuesta);
    } else if (respuesta == `5` || respuesta == `Entretenimiento` || respuesta == `entretenimiento`) {
        let pregunta = prompt(`**********************Categoria ENTRETENIMIENTO********************** \n Pregunta: ¿Cuantas temporadas tiene la serie de Nextflix "Stranger Things" actualmente? \n\n Opcion 1)•••> 3 \n\n Opcion 2)•••> 10 \n\n Opcion 3)•••> 4`);
        let respuesta = pregunta;
        primeraPreguntaEntretenimiento(respuesta);
    } else if (respuesta == `no` || respuesta == `No` || respuesta == `NO` || respuesta == `no gracias` || respuesta == `no, gracias` || respuesta == `No gracias` || respuesta == `No, gracias` || respuesta == `no muchas gracias` || respuesta == `No muchas gracias` || respuesta == `No, muchas gracias` || respuesta == `No!`) {
        alert(`¡Que tengas un lindo día! ` + nombre);
    } else {
        juegoPrompt();
    }
}   

function primeraPreguntaArte(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Arte INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Arte CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Arte INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else {
       intentaloNuevamente();
    }
}

function primeraPreguntaCiencia(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Ciencia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Ciencia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Ciencia CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else {
        intentaloNuevamente();
    }
}

function primeraPreguntaHistoria(atribute) {
    if (atribute == `1` || atribute == `En 1492`) {
        alert(`Respuesta número 1 de Historia CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Historia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Historia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else {
        nuevaCategoria();
    }
}

function primeraPreguntaGeografia(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Geografía INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Geografía INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Geografía CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    }
    else {
        nuevaCategoria();
    }
}

function primeraPreguntaEntretenimiento(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Entretenimiento INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Entretenimiento INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Entretenimiento CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    }
    else {
        nuevaCategoria();
    }
}

//VUELVE A ELEGIR OTRA CATEGORIA:

function nuevaCategoria() {
    let pregunta = prompt(nombre + `, selecciona una nueva categoria \n Escribe una categoria: \n 1-•••> Historia \n 2-•••> Ciencia \n 3-•••> Arte \n 4-•••> Geografia \n 5-•••> Entretenimiento \n\n 0•••> Escribe "no" para salir.`);
    let respuesta = pregunta;
    if (respuesta == `1` || respuesta == `Historia` || respuesta == `historia` || respuesta == `HISTORIA`) {
        let pregunta = prompt(`**************************Categoria Historia************************** \n Pregunta: ¿Qué función tenían las pirámides de Egipto? \n\n Opcion 1)•••>  Eran monumentos funerarios \n\n Opcion 2)•••> Eran monumentos en honor a los dioses \n\n Opcion 3)•••> Eran monumentos para honrar en vida a sus faraones`);
        let respuesta = pregunta;
        segundaPreguntaHistoria(respuesta);
    } else if (respuesta == `2` || respuesta == `Ciencia` || respuesta == `ciencia` || respuesta === `CIENCIA`) {
        let pregunta = prompt(`**************************Categoria Ciencia************************** \n Pregunta: ¿Que pesa mas, un kilo de plomo o un kilo de plumas? \n\n Opcion 1)•••> Las plumas \n\n Opcion 2)•••> El plomo \n\n Opcion 3)•••> Ambas pesan lo mismo`);
        let respuesta = pregunta;
        segundaPreguntaCiencia(respuesta);
    } else if (respuesta == `3` || respuesta == `Arte` || respuesta == `arte` || respuesta == `ARTE`) {
       let pregunta =  prompt(`**************************Categoria ARTE************************** \n\n Pregunta: ¿Qué gran artista es conocido por haber pintado la Capilla Sixtina? \n\n Opcion 1)•••> Homero \n\n Opcion 2)•••> Don Quijote de la Mancha \n\n Opcion 3)•••> Miguel Angel`);
        let respuesta = pregunta;
        segundaPreguntaArte(respuesta);
    } else if (respuesta == `4` || respuesta == `Geografia` || respuesta == `geografia` || respuesta == `Geograífa` || respuesta == `geografía` || respuesta == `GEOGRAFÍA` || respuesta == `GEOGRAFIA`) {
        let pregunta = prompt(`************************Categoria GEOGRAFIA************************ \n\n Pregunta: ¿Cuál es la lengua más hablada del mundo? \n\n Opcion 1)•••> Ingles \n\n Opcion 2)•••> Chino Mandarin \n\n Opcion 3)•••> Español`);
        let respuesta = pregunta;
        segundaPreguntaGeografia(respuesta);
    } else if (respuesta == `5` || respuesta == `Entretenimiento` || respuesta == `entretenimiento` || respuesta == `ENTRETENIMIENTO`) {
        let pregunta = prompt(`**********************Categoria ENTRETENIMIENTO********************** \n Pregunta: ¿A qué saga de películas pertenece el personaje conocido como "Jack Sparrow"? \n\n Opcion 1)•••> Harry Potter \n\n Opcion 2)•••> El señor de los anillos \n\n Opcion 3)•••> Piratas del Caribe`);
        let respuesta = pregunta;
        segundaPreguntaEntretenimiento(respuesta);
    } else if (respuesta == `no` || respuesta == `No` || respuesta == `NO` || respuesta == `no gracias` || respuesta == `no, gracias` || respuesta == `No gracias` || respuesta == `No, gracias` || respuesta == `no muchas gracias` || respuesta == `No muchas gracias` || respuesta == `No, muchas gracias` || respuesta == `No!`) {
        alert(`¡Que tengas un lindo día! ` + nombre);
    } else {
        nuevaCategoria();
    }
}

function segundaPreguntaHistoria(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Historia CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    }  else if (atribute == `2`) {
        alert(`Respuesta número 2 de Historia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Historia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else {
        nuevaCategoria();
    }
}

function segundaPreguntaCiencia(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Ciencia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        primeraPreguntaCiencia();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Ciencia INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        primeraPreguntaCiencia();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Ciencia CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else {
        nuevaCategoria();
    }
}

function segundaPreguntaArte(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 Arte INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Arte INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Arte CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else {
        nuevaCategoria();
    }
}

function segundaPreguntaGeografia(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Geografía INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente(); 
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Geografía CORRECTA \n\n Felicidades! ` + nombre);
        nuevaCategoria();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Geografía INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else {
        nuevaCategoria();
    }
}

function segundaPreguntaEntretenimiento(atribute) {
    if (atribute == `1`) {
        alert(`Respuesta número 1 de Entretenimiento INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `2`) {
        alert(`Respuesta número 2 de Entretenimiento INCORRECTA \n\n ¡Vuelve a intentarlo! ` + nombre);
        intentaloNuevamente();
    } else if (atribute == `3`) {
        alert(`Respuesta número 3 de Entretenimiento CORRECTA \n\n ¡Felicidades! ` + nombre);
        nuevaCategoria();
    } else {
        nuevaCategoria();
    }
}

let nombre = prompt(`Hola, ¿Cuál es tu nombre?`);
saludoBienvenida();
juegoPrompt();


//Proxima version: mejoras generales y nuevo contenido.

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////  
///////////////////////// THE END ///////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////