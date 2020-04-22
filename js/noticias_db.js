const noticias_db = [
  {
    img: 'src/noticias-estado/_control.png',
    copete: 'En toda la ciudad',
    titulo: 'Control de precios y abastecimiento',
    texto: 'El equipo de Defensa al Consumidor recorre a diario diferentes supermercados, perfumerías y farmacias para verificar el abastecimiento de productos de primera necesidad y evitar sobreprecios.'
  },
  {
    img: 'src/noticias-estado/_contencion.png',
    copete: 'Refuerzo alimentario',
    titulo: 'Red de contención social',
    texto: 'El Municipio incrementó los alimentos e insumos para 125 comedores y merenderos, hogares convivenciales, UDIs, Centros de Cuidado Infantil y Centros Juveniles, que en total suman más de 15 mil personas en situación de vulnerabilidad.',
  },
  {
    img: 'src/noticias-estado/_transito.png',
    copete: 'Puntos estratégicos',
    titulo: 'Operativos de control vehicular',
    texto: 'Personal de Seguridad Ciudadana y la Dirección de Tránsito, junto a la Policía de la Provincia de Buenos Aires realizan operativos en calles y avenidas de la ciudad, a fin de asegurar el cumplimiento de la cuarentena.',
  },
  {
    img: 'src/noticias-estado/_asistencia.png',
    copete: 'Programa municipal',
    titulo: 'Asistencia por aislamiento',
    texto: 'A través de un llamado telefónico se ofrece asistencia a quienes hayan regresado de un viaje en el exterior, y se realiza un seguimiento para detectar situaciones que requieran una atención integral inmediata. ',
  }
]

// <article>
//   <img>
//   <div>
//     <p class="copete-noticias">En toda la ciudad</p>
//     <h3 class="titulo-tareas black">Control de precios y abastecimiento </h3>
//     <p class="cuerpo-noticias interlined">El equipo de Defensa al Consumidor recorre a diario diferentes supermercados, perfumerías y farmacias para verificar el abastecimiento de productos de primera necesidad y evitar sobreprecios.</p>
//   </div>
// </article>

const printNoticias = (elem) => {
  for(let noticia of noticias_db){
    // Artículo contenedor
    let article = document.createElement("article");
    article.classList.add("grid-servicios");
    elem.appendChild(article);
    // Imagen
    let img = document.createElement("img");
    img.classList.add("img-act");
    img.setAttribute("src", noticia.img);
    article.appendChild(img);
    // Info
    let info = document.createElement("div");
    info.classList.add("info");
    article.appendChild(info);
    // Copete
    let copete = document.createElement("p");
    copete.classList.add("copete-noticias");
    copete.textContent = noticia.copete;
    info.appendChild(copete);
    // Título
    let titulo = document.createElement("h3");
    titulo.classList.add("titulo-tareas", "black");
    titulo.textContent = noticia.titulo;
    info.appendChild(titulo);
    // Texto
    let texto = document.createElement("p");
    texto.classList.add("cuerpo-noticias", "interlined");
    texto.textContent = noticia.texto;
    info.appendChild(texto);
  }
}
