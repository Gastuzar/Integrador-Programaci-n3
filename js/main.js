
const cargarCategorias = () => { 
    const listaCategorias = document.getElementById("lista-categorias");  //Selecciono el elemento ul del HTML donde se mostrarán las categorías
    categorias.forEach(categoria => { //recorro el array de categorías y por cada una creo un elemento li con un enlace a la categoría
        listaCategorias.innerHTML += `<li class="aside__li"><a href="#">${categoria}</a></li>`;
    });
} 

cargarCategorias();

const cargarProductos = () => {
    let contenedorProductos = document.getElementById("contenedor-productos"); 
    productos.forEach(producto => { 
        contenedorProductos.innerHTML += `
        <article class="article">
            <img src="${producto.imagen}" alt="${producto.nombre} imagen" class="article__img">
            <h3 class="article__title">${producto.nombre}</h3>
            <p class="article__description">${producto.descripcion}</p>
            <p class="article__price">Precio: <strong class="article__strong">$${producto.precio}</strong></p>
            <button class="article__button-ver" data-id="${producto.id}">Ver Detalles</button>
            <button class="article__button-agregar" data-id="${producto.id}">Agregar al carrito</button>
        </article>
        `;
    });
}
cargarProductos();

const botonesAgregar = document.querySelectorAll(".article__button-agregar"); //Selecciono todos los botones de agregar al carrito
botonesAgregar.forEach(boton => { //agrego un evento de clic a cada boton para mostrar los detalles del producto o agregarlo al carrito
    boton.addEventListener("click", () => {
        alert("Producto agregado al carrito"); //Muestro una alerta al hacer clic en el botón de agregar al carrito
    });
});
