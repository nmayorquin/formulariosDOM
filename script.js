import checkCompletada from "./modulos/checkCompletada.js";
import basuraEliminada from "./modulos/basuraEliminada.js";

//inmediately invoked function expression= IIFE: SEGURIDAD AL CÓDIGO PARA QUE EL CLIENTE NO PUEDA VER EN CONSOLA LA LÓGICA DE NEGOCIO, se debe encerrar este con lo siguiente
/*(() => {

/*DARLE FUNCIONALIDAD AL BOTON DE AGREGAR */

/*SE CREA CONSTANTE PARA EL BOTON */
const boton_formu = document.querySelector("[data-boton_formulario]");

/*METODO LISTENER
TODOS LOS ELEMENTOS SON OBJETOS Y POR ESO SE USAN MÉTODOS O FUNCIONES PARA SU LLAMADOY QUE SEAN EJECUTADOS
*/
/*FUNCIONES FLECHAS O FUNCIONES ANÓNIMAS */
/*boton_formu.addEventListener("click", function(evento){
    /*SE CREA CONSTANTE PARA EL INPUT*/
/*    evento.preventDefault;
    const input_info = document.querySelector("[data-texto_formulario]");
    console.log(input_info.value);

}) */
/*dentro del parentesis se pasan dos parámetros: EL EVENTO QUE QUEREMOS PASAR Y QUE QUEREMOS QUE SUCEDA CUANDO SUCEDA EL EVENTO */

/*FUNCIONES FLECHAS O FUNCIONES ANÓNIMAS: OTRA FORMA DE REPRESENTACIÓN DE UNA FUNCIÓN SIN USO DE LA PALABRA RESERVADA FUNCTION, SÓLO CON EL SIMBOLO DE FLECHA:*/
/*boton_formu.addEventListener("click",(evento) => {
    /*SE CREA CONSTANTE PARA EL INPUT*/
/*    evento.preventDefault();
    const input_info = document.querySelector("[data-texto_formulario]");
    console.log(input_info.value); 
}) */

/* CLASE 2: USO DE FUNCIÓN ANÓNIMA GUARDANDO EL RESULTADO EN UNA CONSTANTE DE UNA VEZ, QUEDA MAS LIMPIO EL CÓDIGO */
/*
const creartarea = (evento) =>{ /*en el parámetro evento se trae la información que se está guardando del event al dar click */
   /* evento.preventDefault();
    const input_info = document.querySelector("[data-texto_formulario]");
    const value = input_info.value;
    input_info.value = ""; /*value se guarda como variable vacía para que al generar la información el campo del input quede vacío y no con la información que se haya guardado */
   /* console.log(value);
};

    console.log(boton_formu);
    boton_formu.addEventListener("click", creartarea);*/

/*CLASE 3: REALIZAR IMPRESIÓN DEL ELEMENTO ESCRITO COPIANDO EL ESTILO DE HTML
paso 1: crear una variable de acuerdo al data en html del card de impresión
2. se corta todo lo contenido en el div de ese card en html y se coloca en este archivo con backticks
3. dentro de la etiqueta span en este archivo js se coloca la variable value con la respectiva sintaxis: signo pesos y corchetes
4. cuando se realiza en el servidos el ingreso de una frase, en consola se puede observar el valor de value.
5. para lograr que el contenido de ese input aparezca impreso en la página se usa innerHTML con la variable que se encuentra contenida en la data-cardEspejo
6. se logra observar el card impreso en pantalla, pero cada vez que se ingresa un nuevo dato pisa el anterior y no crea un elemento nuevo*/

/*const creartarea = (evento) =>{ /*en el parámetro evento se trae la información que se está guardando del event al dar click */
/*    evento.preventDefault();
    const input_info = document.querySelector("[data-texto_formulario]");
    const value = input_info.value;
    const copiaTarjeta = document.querySelector("[data-cardEspejo]"); /* esta constante es el card en html*/ 
/*    input_info.value = "";
    const contenidoHTML = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span> 
    </div>
     <i class="fas fa-trash-alt trashIcon icon"></i>
    </div>` /*uso de backticks o template strings, comillas invertidas para traer información de etiquetas html */
/*    copiaTarjeta.innerHTML = contenidoHTML;
    
    console.log(contenidoHTML);
};
    console.log(boton_formu);
    boton_formu.addEventListener("click", creartarea);

*/

/*CLASE 4: imprimir en pantalla cada uno de los textos que se coloquen en el input 
MODIFICACIONES GRANDES PARA LOGRARLO: 
1. quitar del archivo html todo el contenido que tiene la etiqueta ul porque está estático y no permite imprimir cualquier cantidad de veces que se ingrese un nuevo dato (tener en cuenta que para el ejercicio anterior se debe tener en el html el siguiente código dentro de ul:  <li class="card" data-cardEspejo></li>)
2. se coloca un card dentro de la etiqueta ul en el html
3. se crea el elemento li en lenguaje js con el metodo create element
4. se agrega a la variable copiatarjeta un método innerhtml que sirve para agregar elementos desde js, este elemento es eli y tiene que ser agregado a la variable contenidoHTML
5. se crea la variable que trae la información de data-list, llamada list
6. para agregar lo que trae el elemento data-list del html, y unirlo a todo el contenido de copiaTarjeta y contenidoHTML se usa el NODO appendchild (agregar elementos hijos) en este caso el contenido html es contenido hijo de lista
7. YA SE REALIZA LA IMPRESIÓN DE CADA TAREA PERO QUEDA SIN ESTILOS: ASÍ QUE DEBE TRAERSE LA CLASE QUE TENÍA LA ETIQUETA LI CON classList

*/  
    /*const creartarea = (evento) =>{ 
    evento.preventDefault();
    const input_info = document.querySelector("[data-texto_formulario]");
    const value = input_info.value;
    const list = document.querySelector("[data-list]");
    const copiaTarjeta = document.createElement("li"); /*se crea dentro de esta constante en elemento que en este caso, es una etiqueta li con el metodo createElement*/ 
    /*copiaTarjeta.classList.add("card"); /* la etiqueta li tenía esta clase, y es agregada ahora mediante java script. Lo que hace task.classList.add('card') es asignarle la clase "card" a la etiqueta li que se creó en JS para que se le apliquen los estilos del CSS, que tenía originalmente cuando fue eliminado del archivo index. TOCA RECORDAR QUE CLASE TENÍA EL ELEMENTO ELIMINADO IMPORTANTE!!!!!!!!!*/
    /*input_info.value = "";
    const contenidoHTML = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span> 
     <i class="fas fa-trash-alt trashIcon icon"></i>
    </div>` 
    copiaTarjeta.innerHTML = contenidoHTML;
    list.appendChild(copiaTarjeta); /*agregar elementos hijos a la variable list (trae por dentro ul desde html) */


    /*console.log(contenidoHTML);
};
    console.log(boton_formu);
    boton_formu.addEventListener("click", creartarea);
*/

/*CLASE 5: EN LA CLASE 4 YA SE AGREGA TEXTO Y SE EVIDENCIA EN PANTALLA AHORA SE INCLUYE LA FUNCIONALIDAD DEL CHECKBOZ PARA INDICAR QUE LA TAREA YA FUE REALIZADA
1. vamos a crear un elemento con la etiqueta i de contenidoHTML y que viva dentro de una función para que se active, la constante se llama checkCompletado y a su vez es una función flecha, y dentro se agregan los estilos a la variable i, uno a uno ya que classList.add solo recibe un parámetro
2. se debe crear variable para el elemento div span e i, e incluir dentro de esta nueva variable las clases porque representa todo lo que estaba por dentro de la etiqueta i
*/

    const creartarea = (evento) =>{ 
    evento.preventDefault();
    const input_info = document.querySelector("[data-texto_formulario]");
    const value = input_info.value;
    const list = document.querySelector("[data-list]");
    //CREACIÓN DE ELEMENTOS HTML CON JS
    const copiaTarjetaLi = document.createElement("li"); 
    copiaTarjetaLi.classList.add("card"); 
    input_info.value = "";
    

    // línea html en js: div de apertura y cierre 
    const copiaTarjetaDiv= document.createElement("div"); 
    

    // línea html en js: <span class="task">${value}</span>:
    const copiaTarjetaSpan= document.createElement("span"); 
    copiaTarjetaSpan.classList.add("task");
    copiaTarjetaSpan.innerText= value;
    copiaTarjetaDiv.appendChild(checkCompletada());
    copiaTarjetaDiv.appendChild(copiaTarjetaSpan);
    
    

    copiaTarjetaLi.appendChild(copiaTarjetaDiv);
    copiaTarjetaLi.appendChild(basuraEliminada());
    list.appendChild(copiaTarjetaLi); 
    
};

    boton_formu.addEventListener("click", creartarea);

//ELEMENTO CAJA DE CHECK
/*    const checkCompletada = () => {
        const i = document.createElement("i"); /*el nombre de la constante es el nombre de la etiqueta html que está contenida en variable contenidoHTML */

        //línea html en js:  <i class="far fa-check-square icon"></i>
/*        i.classList.add("far", "fa-check-square", "icon"); /*todo el contenido de la clase de la etiqueta i*/
/*        i.addEventListener("click", tareacompletada);
        return i;
    };

    const tareacompletada = (evento) => {
       const elementoTarget = evento.target; /*target es un elemento del icono y se debe buscar imprimiendo el document de ese elemento, de esta forma se sabe /que target es la propiedad que se necesitaS */
//       elementoTarget.classList.toggle("fas"); /*se pueden agregar, remover, o usar propiedades como toggle donde sólo funciona si escucha el evento */
 //      elementoTarget.classList.toggle("completeIcon"); /*estilo que se encuentra en css que coloca el check en color azul */
 //      elementoTarget.classList.toggle("far");
 //   }

// ELEMENTO ICONO BASURA
/*    const basuraEliminada = () =>{
        const i = document.createElement("i");
        //línea html en js:  <i class="fas fa-trash-alt trashIcon icon"></i>
        i.classList.add("fas", "fa-trash-alt", "trashIcon" , "icon");
        i.addEventListener("click", tareaEliminada );
        return i;
    };

    const tareaEliminada = (event) => {
        const elementoParent = event.target.parentElement; /*target es un elemento del icono y se debe buscar imprimiendo el document de ese elemento, de esta forma se sabe que target es la propiedad que se necesitaS */
/*        elementoParent.remove(); /*se pueden agregar, remover, o usar propiedades */
/*    };
})(); /*con el corchete y el cierre de paréntesis se define todo como una funci´pon, pero debe ser una función que se ejecute de inmediato así que se colocan los dos paréntesis al final PARA LLAMARLA DE INMEDIATO, en consola de desarrollador ya no aparecerán las funciones*/

/*CLASE 6: IMPLEMENTACIÓN DE MÓDULOS: PARA LA MODULAR EL CÓDIGO SE REALIZAN VARIOS JS QUE INCLUYAN FUNCIONES, PARTES DE CÓDIGO SE CREA CARPETA CON VARIOS ARCHIVOS, Y SE EXPORTAN LOS ARCHIVOS. EN ESTE ARCHIVO QUEDA TODO EL CÓDIGO PERO SE REALIZARÁN MÓDULOS*/
