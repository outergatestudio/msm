const noticias_db = [
  {
    img: 'src/noticias-estado/_trabajo-conjunto.png',
    copete: 'EMERGENCIA SANITARIA',
    titulo: 'Consejo Preventivo de Salud Municipal (CPS)',
    texto: 'Integrado por diferentes áreas municipales, este comité de emergencia se reúne periódicamente, y se conformó para diseñar y aplicar medidas de contención, y evitar el avance del Coronavirus en San Martín.',
  },
  {
    img: 'src/noticias-estado/_cps.png',
    copete: 'RED DE SALUD',
    titulo: 'Trabajo en conjunto',
    texto: 'El Consejo Preventivo de Salud reunió a los equipos de los Hospitales Thompson, Belgrano, Eva Perón, Anchorena, Corporación Médica y Santa María, con el objetivo de coordinar los esfuerzos y fortalecer la red de salud en el Municipio.',
  },
  {
    img: 'src/triage_.png',
    copete: 'THOMPSON, MARENGO Y FLEMING',
    titulo: 'Triage en los Hospitales Municipales',
    texto: 'San Martín fue una de las primeras ciudades en instalar un triage en las inmediaciones de su hospital municipal, siguiendo el protocolo de la Organización Mundial de la Salud, a fin de evitar el contacto entre los pacientes. Al Hospital Dr. Diego Thompson, luego se sumaron el Hospital Dr. Enrique Marengo y el Fleming.',
  },
  {
    img: 'src/noticias-estado/_mamparas.png',
    copete: 'MEDIDAS DE PROTECCIÓN',
    titulo: 'Protocolo local de acción',
    texto: 'En el marco del protocolo de acción que incluye medidas de limpieza, cuidado y prevención en los espacios municipales, se colocaron mamparas de vidrio en las recepciones y guardias de todos los hospitales y centros de salud para proteger a los equipos de salud.',
  },
  {
    img: 'src/noticias-estado/_contencion.png',
    copete: 'REFUERZO ALIMENTARIO',
    titulo: 'Red de contención social',
    texto: 'El Municipio incrementó los alimentos e insumos para 125 comedores y merenderos, hogares convivenciales, UDIs, Centros de Cuidado Infantil y Centros Juveniles, que en total suman más de 15 mil personas en situación de vulnerabilidad. Se sumarán 60 comedores y merenderos, para llegar a más de 50 mil vecinos y vecinas.',
  },
  {
    img: 'src/noticias-estado/_contencion-barrial.png',
    copete: 'DISPOSITIVO ESPECIAL',
    titulo: 'Asistencia y contención en los barrios de la ciudad',
    texto: 'Por iniciativa de sacerdotes y movimientos barriales, instalamos gazebos en las entradas de los barrios donde se lleva a cabo una intensa campaña de información y concientización, se entregan tapabocas, y se mide la temperatura de quienes ingresan al barrio para hacer una derivación al Sistema de Salud ante la presencia de síntomas compatibles con la enfermedad.',
  },
  {
    img: 'src/noticias-estado/_desinfeccion-barrial.png',
    copete: 'DISPOSITIVO ESPECIAL',
    titulo: 'Articulación con "El barrio cuida al barrio"',
    texto: 'Se realiza la desinfección de espacios públicos como veredas, plazas y centros comunitarios, se distribuyen insumos para la preparación de viandas para comedores, salitas y parroquias, y se trabaja especialmente con personas mayores para ofrecerles asistencia. Esta iniciativa en una primera etapa se está implementado en Villa Hidalgo, Carcova e Independencia.',
  },
  {
    img: 'src/noticias-estado/_asistencia.png',
    copete: 'PROGRAMA MUNICIPAL',
    titulo: 'Asistencia por aislamiento',
    texto: 'A través de un llamado telefónico se ofrece asistencia a quienes hayan regresado de un viaje en el exterior, y se realiza un seguimiento para detectar situaciones que requieran una atención integral inmediata.',
  },
  {
    img: 'src/noticias-estado/_control.png',
    copete: 'EN TODA LA CIUDAD',
    titulo: 'Control de precios y abastecimiento',
    texto: 'El equipo de Defensa al Consumidor recorre a diario diferentes supermercados, perfumerías y farmacias para verificar el abastecimiento de productos de primera necesidad y evitar sobreprecios. En el último mes se realizaron 127 inspecciones y se labraron 59 actas por sobreprecio en los productos de la canasta básica.'
  },
  {
    img: 'src/noticias-estado/_transito.png',
    copete: 'PUNTOS ESTRATÉGICOS',
    titulo: 'Operativos de control vehicular',
    texto: 'Personal de Seguridad Ciudadana y la Dirección de Tránsito, junto a la Policía de la Provincia de Buenos Aires realizan realizan a diario controles vehiculares en los ingresos a San Martín y distintos puntos de la ciudad. Hasta el momento, se secuestraron 113 autos y 50 motos por no contar con permiso de circulación durante la cuarentena.',
  },
  {
    img: 'src/noticias-estado/_intendentes.png',
    copete: 'CONTROLES VEHICULARES',
    titulo: 'Articulación en la Región Oeste',
    texto: 'El jefe comunal, junto con los intendentes de Tres de Febrero, Hurlingham, San Miguel, Morón e Ituzaingó coordinan los operativos de control en las calles y actúan de manera articulada en las áreas comunes de la región.',
  },
  {
    img: 'src/noticias-estado/_operativos-defensa.png',
    copete: 'DEFENSA CIVIL',
    titulo: 'Operativos de atención diaria de emergencias',
    texto: 'Con la incorporación de personal para asegurar su operatividad plena, el área de Defensa Civil realiza la atención de emergencias severas en vía pública, la derivación de referencias recibidas sobre incumplimiento del aislamiento, intervención frente a denuncias por estanques con agua por presunción de foco Dengue y asistencia en puntos de atención bancaria, entre otras acciones.',
  },
  {
    img: 'src/noticias-estado/_limpieza.png',
    copete: 'MANTENIMIENTO URBANO',
    titulo: 'Limpieza en las zonas de mayor circulación',
    texto: 'Personal de Mantenimiento Urbano realiza la limpieza de la vía pública con hidrolavadoras en zonas de circulación como veredas, paradas de colectivos, refugios del Metrobus y bancos de ciudad, y trabaja en el desmalezamiento de zonas que puedan ser posible foco de Dengue.',
  },
  {
    img: 'src/noticias-estado/_pymes.png',
    copete: 'EMPRESAS LOCALES',
    titulo: 'Programa de Acompañamiento a Pymes',
    texto: 'A través de esta iniciativa se brinda información y asistencia a las empresas afectadas por la pandemia, como las medidas y resoluciones nacionales, provinciales y municipales, se realizó una encuesta especial del Observatorio Socioeconómico de San Martín para conocer su situación actual y se implementó una línea de asistencia para PyMES: 11 3685 7913.',
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
