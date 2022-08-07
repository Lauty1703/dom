let tarjeta=document.getElementById("box-cards-ofertas");

let productos=[{
    id: 1,
    nombre: 'helado de crema ',
    codigo: '0111202',
    precio: 2500,
    imagen: './img/oferta1.jpg',
    descripcion_corta: 'helado de crema y oreo de 1 kilo',
    descripcion: 'la mejor combinacion de de galletitas oreo y crema americana'
}, {
    id: 2,
    nombre: 'helado de dulce de leche ',
    codigo: '2100240',
    precio: 2000,
    imagen: './img/oferta2.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',
    descripcion: 'Heladera Side By Side. Cap.bruta 584L/neta 527L. Color Acero Inoxidable. Controles externos c/display Digital. Fabricadora de Hielo. Alarma de puerta abierta. Luz LED. Estantes de vidrio. Modo vacaciones. EE: A+.'
},{
    id: 3,
    nombre: 'helado de frutilla ',
    codigo: '2195461',
    precio: 1850,
    imagen: './img/oferta3.jpg',
    descripcion_corta: 'helado cofler de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 4,
    nombre: 'helado de chocolate',
    codigo: '2192034',
    precio: 2000,
    imagen: './img/oferta4.jpg',
    descripcion_corta: 'helado coffee de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 5,
    nombre: 'galletas de chocolate',
    codigo: '1694810',
    precio: 1850,
    imagen: './img/oferta5.jpg',
    descripcion_corta: 'helado de galletas de chocolate 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}
,{
    id: 6,
    nombre: 'helado de galleta de cholate',
    codigo: '1964785',
    precio: 1900,
    imagen: './img/oferta6.jpg',
    descripcion_corta: 'helado nestle de galleta de chocolate de 1 kilo',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}];

console.log(tarjeta);


let genardorTarjeta = () => {
    return ( tarjeta.innerHTML=productos.map((x)=>{
        return  `<div class="col-sm 12 col-md 2  col-lg 3 d-flex ">
        <div class="container d-flex justify-content-around text-center" id="productos"> 
           <div class="card" style="width: 25rem;" id="card">
                <img class="img-carousel" src="${x.imagen}" class="card-img-top" alt="imagen de helados en cono">
                    <div class="card-body">
                       <h3 class="card-title">${x.nombre}</h3>
                       <h4 class="card-textDescrip">${x.descripcion_corta}</h4>
                        <p class="card-text">$${x.precio}</p>
                        <a href="#" class="btn btn-ofertas w-100 text-btn-a" >comprar</a>
                   </div>
             </div>
       </div>
  </div>`
      }).join("")); 
}
genardorTarjeta()
