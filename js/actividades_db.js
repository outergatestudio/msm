const actividades_db = [
  {
    category: 'Arte y entretenimiento',
    id: 'art-y-entr',
    articles: [
      {
        img: 'src/actividades/01_Gasometro.jpg',
        title: 'El Gasómetro',
        text: 'A través de esta historia de Mundo San Martín, vas a conocer los secretos del tanque de gas ubicado en la Avenida Gral. Paz y Constituyentes, construído a fines de los años 40, y que hoy es una fuente inagotable de mitos y leyendas.',
        href: 'https://www.youtube.com/watch?v=6GNdUFgSzZo'
      },
      {
        img: 'src/actividades/05_DrRossetti.jpeg',
        title: 'El Dr. López Rosetti',
        text: 'Apasionado por la medicina desde sus comienzos en el colegio José Hernández de Villa Ballester, el Dr. Daniel López Rosetti es un destacado médico y docente del país. No te pierdas sus consejos para cuidar nuestra salud.',
        href: 'https://www.youtube.com/watch?v=7KN27ckjuU4'
      },
      {
        img: 'src/actividades-listado/2/El Primer Pumpa_.jpg',
        title: 'El primer Pumpa',
        text: 'Daniel y su hijo Joaquín, fundaron el primer equipo nacional de rugby inclusivo formado por personas con discapacidad intelectual. La historia de Joaquín, vecino de San Andrés, inspiró y cambió la vida de cientos de personas a través del deporte.',
        href: 'https://www.youtube.com/watch?v=vS2xUrKt8A4'
      },
      {
        img: 'src/actividades-listado/2/El Entrerriano.jpg',
        title: 'El Entrerriano',
        text: 'Los Talas del Entrerriano es una de las parrillas más conocidas de San Martín, ubicada en José León Suárez. Pero no muchos conocen quién es el entrerriano, Oscar Bopp, el asador más famoso y vecino de la ciudad desde hace más de 30 años.',
        href: 'https://www.youtube.com/watch?v=Z1tf-jgREUw'
      },
      {
        img: 'src/actividades-listado/2/La fabrica de fóforos.jpg',
        title: 'La fábrica de fósforos',
        text: 'Ubicada en José León Suárez, funciona hace casi 60 años y es la más importante de todo el país. Por día genera 40 millones de fósforos para algunas de las marcas que seguramente reconocerás en las góndolas de los supermercados.',
        href: 'https://www.youtube.com/watch?v=BX3FRtutjb4'
      },
      {
        img: 'src/actividades-listado/2/El último cine de barrio.jpg',
        title: 'El último cine de barrio',
        text: 'Son varias las generaciones de familias que disfrutaron una película en el cine del Colegio José Hernández de Villa Ballester. Lo construyó Alberto Soteras, ex alumno de la institución y proyectorista de la sala que cada año convoca a cientos de vecinos.',
        href: 'https://www.youtube.com/watch?v=CII9hc564W4'
      },
      {
        img: 'src/actividades-listado/2/cooperativa Norte.jpg',
        title: 'La Cooperativa Norte',
        text: 'Dedicada a la fabricación de cuadernos, anotadores e índices telefónicos, la Cooperativa Norte es una empresa de Villa Zagala recuperada por sus trabajadores/as, quienes además de conservar su fuente laboral, lograron ser una marca presente en todo el país.',
        href: 'https://www.youtube.com/watch?v=1Un4tF2rKEs'
      },
      {
        img: 'src/actividades/09_pancho46.jpg',
        title: 'El Pancho 46',
        text: 'Con más de 50 años de historia, El Pancho 46 es un emblema de la ciudad que recibe a artistas, músicos y deportistas de todo el país. Mundo San Martín te cuenta la historia de la panchería más famosa y popular de la zona.',
        href: 'https://www.youtube.com/watch?v=4heCLOG71MI'
      },
      {
        img: 'src/actividades-listado/2/Mauricio Kartun.jpg',
        title: 'Mauricio Kartun',
        text: 'El dramaturgo, escritor y maestro del teatro, creció en San Andrés, pasando las tardes entre su querido club 3 de Febrero y las calles del barrio. Muchas de las obras que hoy podemos disfrutar, están inspiradas en aquellas vivencias de su juventud.',
        href: 'https://www.youtube.com/watch?v=B501e-n7vzY'
      },
      {
        img: 'src/actividades-listado/2/La moto del CHe.jpg',
        title: 'La moto del Che Guevara',
        text: 'La réplica de “La Poderosa”, la moto del Che Guevara en la película “Diarios de Motocicleta”, se construyó en un taller de Villa Ballester, y el mecánico a cargo de esta compleja tarea, Gustavo Agra, cuenta cómo le llegó este inusual pedido.',
        href: 'https://www.youtube.com/watch?v=3mINtPw4Z6o'
      },
      {
        img: 'src/actividades-listado/2/La orquesta sinfónica Municipal.jpg',
        title: 'La Orquesta Sinfónica Municipal',
        text: 'Con un repertorio que incluye obras clásicas y melodías de películas infantiles, hace más de 50 años que la Orquesta comparte su música con la comunidad, con grandes funciones en el emblemático Complejo Plaza, y en los diferentes rincones de San Martín.',
        href: 'https://www.youtube.com/watch?v=CMQAY3z0w8c'
      },
      {
        img: 'src/actividades-listado/2/El Museo del Tango.jpg',
        title: 'El museo del Tango',
        text: 'Pascual Zappino, vecino de San Andrés, construyó un increíble museo con más de 10.000 canciones originales en su casa. Además de un antiguo gramófono, la colección incluye discos de todo tipo, cuadros y posters de los maestros del Tango.',
        href: 'https://www.youtube.com/watch?v=hSctlO4kAFc'
      },
      {
        img: 'src/actividades-listado/2/La voz del tren.jpeg',
        title: 'La voz del tren',
        text: '“Ud. está en la estación Miguelete. Próxima estación, San Martín”. La encargada de realizar la locución de los avisos del servicio de subtes y trenes para brindar información a los pasajeros, se llama Viviana Nelli, y es vecina de nuestra ciudad.',
        href: 'https://www.youtube.com/watch?v=vMhfnR5FQF8'
      },
      {
        img: 'src/actividades-listado/2/El artisita más cotizado.jpg',
        title: 'El artista mejor cotizado',
        text: 'Sus inicios fueron en Villa Ballester, y hoy, Helmut Ditsch, está en la cima del arte mundial. Su cuadro del Glaciar Perito Moreno "Cosmigonon", se vendió en 1,5 millones de dólares y se convirtió en el pintor más cotizado de la historia argentina.',
        href: 'https://www.youtube.com/watch?v=Q0_mexH2ZWw'
      },
      {
        img: 'src/actividades-listado/2/Cómo fabricar un auto en casa.jpg',
        title: 'Cómo fabricar un auto en casa',
        text: 'Un docente de San Martín construyó un auto de 1929 desde cero, usando solo viejos planos de una fábrica inglesa. Lito Luciani dedicó 15 años de su vida a construir el auto de sus sueños, y logró lo imposible gracias a su increíble dedicación.',
        href: 'https://www.youtube.com/watch?v=vEfcTNZwuYw'
      },
      {
        img: 'src/actividades-listado/2/Centro de Atención Primaria.jpg',
        title: 'El Centro de Atención Primaria',
        text: 'Conocé la historia del CAPS N° 3 de Villa Concepción, uno de los 26 centros de salud de San Martín, que se convirtió en un lugar de referencia y pertenencia de los vecinos y las vecinas del primer barrio obrero del país.',
        href: 'https://www.youtube.com/watch?v=kA4USRgGCoE'
      },
      {
        img: 'src/actividades-listado/_cuentabuelas.png',
        title: 'La hormiga Petronila, por Las Cuentabuelas',
        text: 'A través del programa San Martín Lee, las Cuentabuelas relatan historias para niños y niñas. Te presentamos la historia de La hormiga Petronila, de Liliana Cinetto, narrada por la Abuela Loló.',
        href: 'https://www.youtube.com/watch?v=RgDwfu1WIf4'
      },
      {
        img: 'src/actividades-listado/_cia-juvenil.png',
        title: 'Compañía Juvenil de Danza',
        text: '“No lo dejes ir”, show realizado en el marco de la 6° Gala Solidaria de Ballet de Marianela Núñez, que fusiona la danza académica con la música y el baile popular. Reviví uno de los mejores momentos de la vida cultural de San Martín.',
        href: 'https://www.youtube.com/watch?v=suuyCIrDctk'
      },
      {
        img: 'src/actividades-listado/_nacional-danza-cont.png',
        title: 'Compañía Universitaria de Danza de la UNSAM',
        text: 'Espectáculo de danza contemporánea interpretado por la Compañía Universitaria de la UNSAM, grabado en vivo durante la 6° Gala Solidaria de Ballet, realizada en la Sociedad Alemana de Gimnasia de Villa Ballester en 2019.',
        href: 'https://www.youtube.com/watch?v=TQOyI31pGv8'
      },
      {
        img: 'src/actividades-listado/_museo-jhernandez.png',
        title: 'De visita por el Museo Histórico José Hernández',
        text: 'Recorrido visual y narrado por el museo ubicado en la histórica Chacra Pueyrredón, lugar de nacimiento del escritor y poeta José Hernández, autor de El Martín Fierro, la obra más importante de la literatura gauchesca.',
        href: 'https://www.youtube.com/watch?v=6mdT2h_hMM8'
      },
      {
        img: 'src/actividades-listado/_museo-rosas.png',
        title: 'De visita por el Museo Juan Manuel de Rosas',
        text: 'No te pierdas este recorrido visual por la antigua casa que perteneció a Juan Manuel de Rosas y fue utilizada como asentamiento militar hace más de 170 años, y hoy funciona como museo en el barrio de San Andrés.',
        href: 'https://www.youtube.com/watch?v=h8MAYie-Pek'
      },
      {
        img: 'src/actividades-listado/2/Mariana Baggio.jpg',
        title: 'Mariana Baggio nos comparte su día',
        text: 'La cantante y compositora de música infantil, nos comparte algunas canciones, especialmente para los niños y niñas de la ciudad, y un mensaje para acompañar a las familias durante la cuarentena.',
        href: 'https://www.youtube.com/watch?v=H4AGdidpKbQ'
      },
      {
        img: 'src/actividades-listado/2/Antonio Tarrago Ros.jpg',
        title: 'Antonio Tarragó Ros nos comparte su día',
        text: 'El gran músico, compositor e intérprete folklórico nos regala la magia de un chamamé y nos pide que nos quedemos en casa para cuidarnos mientras cumplimos con el aislamiento social, preventivo y obligatorio.',
        href: 'https://www.youtube.com/watch?v=ZIE0Gfa_kHQ'
      },
      {
        img: 'src/actividades-listado/_yamila-cafrune.png',
        title: 'Yamila Cafrune nos comparte su día',
        text: 'La cantante y compositora nos comparte una hermosa media zamba para disfrutar en familia. Desde su casa le dedica a los vecinos y vecinas San Martín un fragmento musical de Paisaje de Catamarca.',
        href: 'https://www.youtube.com/watch?v=EeRHOQZJ-To'
      },
      {
        img: 'src/actividades-listado/2/Pablo Picotto.jpg',
        title: 'Pablo Picotto nos comparte su día',
        text: 'A través de uno de sus personajes más característicos y divertidos, Oscar Amarilla, el comediante nos envía un saludo especial y cuenta cómo es su día a día en la cuarentena, y la importancia de seguir compartiendo risas en este contexto.',
          href: 'https://www.youtube.com/watch?v=8gywpwJgL_M'
      },
      {
        img: 'src/actividades-listado/2/Miss Bolivia.jpg',
        title: 'Miss Bolivia nos comparte su día',
        text: 'La cantante y psicóloga, más conocida como Miss Bolivia, cuenta cómo está aprovechando el tiempo durante la cuarentena: familia, jardinería, música, y un mensaje muy especial para San Martín.',
        href: 'https://www.youtube.com/watch?v=HrPIDm0n-iY'
      },
      {
        img: 'src/actividades-listado/2/Martin Pugliese.jpg',
        title: 'Martín Pugliese nos comparte su día',
        text: 'El comediante de Stand Up nos revela sus trucos culinarios y de yoga para no aburrirse durante la cuarentena, mientras prepara nuevas sorpresas para su nuevo show, con el que espera visitar San Martín muy pronto.',
        href: 'https://www.youtube.com/watch?v=ItuV1TkZAaA'
      }
    ]
  },
  {
    category: 'Clases y talleres',
    id: 'clas-y-tall',
    articles: [
      {
        img: 'src/actividades/02_historieta.png',
        title: 'Dibujemos historietas',
        text: 'Consejos del ilustrador y vecino de San Martín, Juan Plana Sabatez, en especial para quienes piensan que no saben dibujar: solo necesitás lápiz, papel y hoja ¡Animate y empezá con una figura sencilla!.',
        href: 'https://www.youtube.com/watch?v=aPTFrZ8_Ywo'
      },
      {
        img: 'src/actividades-listado/2/Metegol csero.jpg',
        title: 'Metegol casero, ideas para jugar',
        text: 'Seguí las instrucciones para armar este famoso juego con elementos que hay en tu casa y disfrutar de un lindo momento en familia. ¡Es muy fácil de armar y súper divertido!',
        href: 'https://www.youtube.com/watch?v=24RYEzmni1Q'
      },
      {
        img: 'src/actividades-listado/2/Bolsa Jackson.jpg',
        title: 'Bolsa Jackson, ideas para jugar',
        text: 'Con una bolsa de supermercado, un pedacito de papel, marcadores y pegamento, podés armar divertidos personajes, hacerlos bailar, desfilar, cantar y jugar competencias para ver cuál es el más original.',
        href: 'https://www.youtube.com/watch?v=-T4herpQYSA'
      },
      {
        img: 'src/actividades-listado/2/Tenis Lavandina.jpg',
        title: 'Tenis lavandina, ideas para jugar',
        text: 'Seguramente en tu casa contás con envases de productos que utilizás para mantener la higiene del hogar ¡No los tires cuando los termines! Podés reutilizarlos y armar un entretenido juego.',
        href: 'https://www.youtube.com/watch?v=uqmWhClyuGQ'
      },
      {
        img: 'src/actividades-listado/2/Carrera de botes.jpg',
        title: 'Carrera de botes, ideas para jugar',
        text: 'Que el aislamiento no te quite las ganas de pasear... ¡en bote!. Para este divertido juego solo necesitás corchos, banditas elásticas, palillos de madera, pegamento, y pedacitos de goma eva.',
        href: 'https://www.youtube.com/watch?v=-TimRQRL7Is'
      }
    ]
  },
  {
    category: 'Vida saludable',
    id: 'vida-salud',
    articles: [
      {
        img: 'src/actividades-listado/_ritmos-latinos.png',
        title: 'Movete con Ritmos latinos',
        text: 'Rutina para que puedas hacer ejercicio, bailar y divertirte en tu casa, con la guía de la profesora Soledad Robin, instructora de Ritmos latinos del Programa de Actividades Saludables.',
        href: 'https://www.youtube.com/watch?v=b5sxjC9VF9g&t='
      },
      {
        img: 'src/actividades-listado/2/Ejercicios de elajacion.jpg',
        title: 'Ejercicios de relajación',
        text: 'Para cuidar tu salud emocional, la profesora Mabel Montes comparte a través de un encuentro virtual, diferentes ejercicios de respiración y elongación, que podés hacer para relajarte y cargarte de energía positiva.',
        href: 'https://www.youtube.com/watch?v=W68pyVCnSPI'
      },
      {
        img: 'src/actividades-listado/_aquagym.png',
        title: 'Ejercicios de Aquagym',
        text: 'Las profesoras de esta actividad en el Centro Cultural y Deportivo Municipal Peretz, Eva y Ale, comparten ejercicios aeróbicos para que puedas realizar desde tu casa, y cuidar tu salud física a través de indicaciones y ejemplos visuales.',
        href: 'https://www.youtube.com/watch?v=2Dsk-WJRDI0'
      }
    ]
  },
  // {
  //   category: 'Educación',
  //   id: 'educac',
  //   articles: [
  //     {
  //       img: '',
  //       title: 'Control de precios y abastecimiento',
  //       text: 'El equipo de Defensa al Consumidor recorre a diario diferentes supermercados, perfumerías y farmacias para verificar el abastecimiento de productos de primera necesidad y evitar sobreprecios.',
  //       href: '#'
  //     },
  //     {
  //       img: '',
  //       title: 'Control de precios y abastecimiento',
  //       text: 'El equipo de Defensa al Consumidor recorre a diario diferentes supermercados, perfumerías y farmacias para verificar el abastecimiento de productos de primera necesidad y evitar sobreprecios.',
  //       href: '#'
  //     }
  //   ]
  // }
]

const printActividades = (elem) => {
  for(let categoryObj of actividades_db){
    // Artículo contenedor
    let catArticle = document.createElement("article");
    catArticle.classList.add("act-articulos");
    catArticle.id = categoryObj.id;
    elem.appendChild(catArticle);
    // Enlace en banner
    let catLink = document.createElement("a");
    catLink.classList.add("t-magenta");
    catLink.setAttribute("href", `#${categoryObj.id}`);
    catLink.textContent = categoryObj.category.toUpperCase();
    let banner;
    if(banner = document.querySelector("#banner-ays nav")){
      banner.appendChild(catLink);
    }
    // Título de categoría
    let title = document.createElement("h3");
    title.classList.add("t-magenta", "black");
    title.textContent = categoryObj.category;
    catArticle.appendChild(title);
    // Artículos internos
    for(let article of categoryObj.articles){
      // Grilla
      let gridNode = document.createElement("div");
      gridNode.classList.add("grid-actividades");
      catArticle.appendChild(gridNode);
      // Imagen
      let img = document.createElement("img");
      img.classList.add("img-act");
      img.setAttribute("src", article.img);
      gridNode.appendChild(img);
      // Info
      let info = document.createElement("div");
      gridNode.appendChild(info);
      let cat = document.createElement("p");
      cat.classList.add("act-categoria");
      cat.textContent = categoryObj.category;
      let tit = document.createElement("p");
      tit.classList.add("act-titulo", "black");
      tit.textContent = article.title;
      let des = document.createElement("p");
      des.classList.add("act-desarrollo");
      des.textContent = article.text;
      let link = document.createElement("a");
      link.classList.add("act-link", "t-magenta");
      link.setAttribute("href", article.href);
      link.setAttribute("target", "_blank");
      link.textContent = 'Ir al video';

      info.appendChild(cat);
      info.appendChild(tit);
      info.appendChild(des);
      info.appendChild(link);
      // Compartir
      let share = document.createElement("a");
      share.classList.add("act-compartir", "share");
      gridNode.appendChild(share);
      let shareTxt = document.createElement("p");
      shareTxt.classList.add("t-magenta");
      shareTxt.textContent = 'Compartir';
      let shareImg = document.createElement("img");
      shareImg.classList.add("act-share");
      shareImg.setAttribute("src", "assets/icon_share-mag.svg");

      // share.appendChild(shareTxt);
      // share.appendChild(shareImg);
    }
  }
}
