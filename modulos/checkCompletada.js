
//ELEMENTO CAJA DE CHECK
const checkCompletada = () => {
    const i = document.createElement("i"); /*el nombre de la constante es el nombre de la etiqueta html que está contenida en variable contenidoHTML */

    //línea html en js:  <i class="far fa-check-square icon"></i>
        i.classList.add("far", "fa-check-square", "icon"); /*todo el contenido de la clase de la etiqueta i*/
        i.addEventListener("click", tareacompletada);
    return i;
};

const tareacompletada = (evento) => {
   const elementoTarget = evento.target; /*target es un elemento del icono y se debe buscar imprimiendo el document de ese elemento, de esta forma se sabe /que target es la propiedad que se necesitaS */
       elementoTarget.classList.toggle("fas"); /*se pueden agregar, remover, o usar propiedades como toggle donde sólo funciona si escucha el evento */
      elementoTarget.classList.toggle("completeIcon"); /*estilo que se encuentra en css que coloca el check en color azul */
     elementoTarget.classList.toggle("far");
   }

export default checkCompletada;