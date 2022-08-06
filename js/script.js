let catalogoProductos = [{
    id: 1,
    nombre: 'helado de crema ',
    codigo: 'UN32T4300AGCZB',
    precio: 2500,
    imagen: './img/oferta1.jpg',
    descripcion_corta: 'helado de crema en pote de 1 kilo',
    descripcion: 'la mejor combinacion de de galletitas oreo y crema americana'
}, {
    id: 2,
    nombre: 'helado de dulce de lechede ',
    codigo: 'PHSB530XT',
    precio: 2000,
    imagen: './img/oferta2.jpg',
    descripcion_corta: 'Heladera side by side',
    descripcion: 'Heladera Side By Side. Cap.bruta 584L/neta 527L. Color Acero Inoxidable. Controles externos c/display Digital. Fabricadora de Hielo. Alarma de puerta abierta. Luz LED. Estantes de vidrio. Modo vacaciones. EE: A+.'
},{
    id: 3,
    nombre: 'helado de frutilla de',
    codigo: '553BFQ1201F',
    precio: 1850,
    imagen: './img/oferta3.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 4,
    nombre: 'helado de oreo',
    codigo: '553BFQ1201F',
    precio: 2000,
    imagen: './img/oferta4.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 5,
    nombre: 'helado de tramontana',
    codigo: '553BFQ1201F',
    precio: 1850,
    imagen: './img/oferta5.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 6,
    nombre: 'helado de durazno',
    codigo: '553BFQ1201F',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}];

let contenedorTarjeta=document.querySelector('.entrada')




for (const item of catalogoProductos) {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'card my-5 bg-light w-25';
    tarjeta.id = `${item.id}`;
    tarjeta.innerHTML = `
    <h4 class="card-header">${item.nombre}</h4>
    <img src="${item.imagen}" class="card-img-top imagenProducto" alt="${item.descripcion_corta}">
    <div class="card-body text-center">
        <p class="card-text">${item.descripcion}</p>
        <span id="precio">$ ${item.precio}</span>
    </div>
    <div class="card-footer"><a href="#" class="btn w-100 btn-primary">Comprar</a></div>`;
    contenedorTarjeta.append(tarjeta)
}