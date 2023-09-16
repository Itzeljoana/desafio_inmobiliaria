const venta = document.querySelector('#venta')

const propiedades_renta = [
    {
    id: 1,
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 2,
    bano: 2,
    costo: 10000,
    smoke: false,
    pets: true
    },
    {
    id: 2,
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://images.milenio.com/cm_IBp9n8hYdIiXP7JwfMN3jN9I=/942x532/uploads/media/2020/03/20/comprar-casa-campo-posibilidades-debes.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: ' 89 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    bano: 2,
    costo: 10000,
    smoke: false,
    pets: true
    },
    {
    id: 3,
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://assets.easybroker.com/property_images/1382775/51484676/EB-EH2775.jpg?version=1661529867',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 2,
    bano: 2,
    costo: 10000,
    smoke: true,
    pets: false
    },
    {
    id: 4,
    nombre: 'Apartamento de lujo en zona exclusiva con alberca',
    src: 'https://canalhogar.com/wp-content/uploads/2023/01/Disenos-de-Casas-Modernas-Interiores-y-Exteriores.jpeg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '12 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 2,
    bano: 2,
    costo: 10000,
    smoke: true,
    pets: false
    }  
]

let template = ""



for(let propiedad of propiedades_renta){
    const permitido = '<p class="text-success"> <i class="fas fa-smoking"></i> permitido fumar</p>'
    const permitidoPets = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'

    template +=`
    <div class="col-md-6 mb-4">
    <div class="card" id=${propiedad.id}>
    <img
      src= ${propiedad.src}
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body" >
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
        ${propiedad.descripcion}     
      <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${propiedad.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.bano} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
${propiedad.smoke === true ? permitido : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
   
        <p class="text-success">
${propiedad.pets === true ? permitidoPets : '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permite mascotas</p>'}
      </p>
    </div>
  </div> 
  </div> 
 
    `;

    
}
venta.innerHTML = template;
    