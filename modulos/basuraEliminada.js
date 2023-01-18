
// ELEMENTO ICONO BASURA
    const basuraEliminada = () =>{
        const i = document.createElement("i");
        //línea html en js:  <i class="fas fa-trash-alt trashIcon icon"></i>
        i.classList.add("fas", "fa-trash-alt", "trashIcon" , "icon");
        i.addEventListener("click", tareaEliminada );
        return i;
    };

    const tareaEliminada = (event) => {
        const elementoParent = event.target.parentElement; /*target es un elemento del icono y se debe buscar imprimiendo el document de ese elemento, de esta forma se sabe que target es la propiedad que se necesitaS */
        elementoParent.remove(); /*se pueden agregar, remover, o usar propiedades */
    };

export default basuraEliminada;   