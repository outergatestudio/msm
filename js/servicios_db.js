const servicios_db = [
  {
    category: '',
    id: '',
    articles: [
      {
        img: 'src/servicios/central-transito.jpg',
        volanta: 'TRÁNSITO',
        title: 'Validez de las licencias de conducir',
        text: 'Las licencias con vencimiento entre el 15/2 y el 14/5 cuentan con una prórroga de 90 días de corrido a partir del día en que venció. Recordá que los turnos de renovación se encuentran suspendidos hasta nuevo aviso.',
        href: ''
      },
      {
        img: 'src/servicios/pagos-online.jpg',
        volanta: 'TASAS MUNICIPALES',
        title: 'Medios de pago online ',
        text: 'Pagá tus tasas de una manera fácil y segura a través de los medios digitales habilitados: Pago Mis Cuentas, Red Link, Tarjetas Visa, Mastercard, American Express, Interbanking, Mercado Pago, y adhesión al débito automático.',
        href: ''
      },
      {
        img: 'src/servicios/03_defensaalconsumidor.jpg',
        volanta: 'DEFENSA AL CONSUMIDOR',
        title: 'Tenés derechos, hacelos valer',
        text: 'Podés realizar una denuncia por aumento de precios o faltantes de productos esenciales en comercios a través de la web sanmartin.gov.ar, enviar mensajes de WhatsApp al +54 9 11 2282-5271, o un mail a ldefensaalconsumidor@sanmartin.gov.ar.',
        href: ''
      },
      {
        img: 'src/servicios/04_espaciomujeres-01.jpg',
        volanta: 'ESPACIO MUJERES',
        title: 'No estás sola, podemos ayudarte',
        text: 'Las líneas de asistencia y acompañamiento para víctimas de violencia de género continúan funcionando las 24 horas: el 147 (opción 1- emergencias) y el mail guardiageneromsm@gmail.com, además de la línea nacional 144.',
        href: ''
      },
      {
        img: 'src/servicios/05_turnostelefonicos.jpg',
        volanta: 'SALUD',
        title: 'Nuevas líneas de atención telefónica',
        text: 'Más de 100 voluntarios brindan asistencia telefónica y/o atención integral a vecinos/as mayores de 60 años que requieren ayuda y contención durante el aislamiento social. Si conocés a una persona mayor en esta situación podés enviar un mail a: cuidarnos@sanmartin.gov.ar‬.',
        href: ''
      },
      {
        img: 'src/servicios/07_tasasmunicipales.jpg',
        volanta: 'TASAS MUNICIPALES',
        title: 'Financiación en cuotas y sin interés',
        text: 'Nuevas facilidades de pago para las tasas ALSMI, Automotor, Monotasa y TiSEH, cuyos vencimientos operen entre el 1/ 4 y el 31/5. Abonando el 20%, podés financiar tus impuestos en hasta 3 y 6 cuotas, sin intereses.',
        href: ''
      },
      {
        img: 'src/servicios/08_vacunacion.jpg',
        volanta: 'SALUD',
        title: 'Vacunación antigripal en centros de salud',
        text: 'Consultá con tu centro de salud más cercano para programar la atención. Los grupos prioritarios son personal de salud, mayores de 65 años, niños/as de 6 meses a 2 años, y pacientes con factores de riesgo, que tengan orden médica.',
        href: ''
      },
      {
        img: 'src/servicios/09_thompson.png',
        volanta: 'SALUD',
        title: 'Nuevas líneas de atención en el Thompson',
        text: 'Para resolver la atención ambulatoria, turnos previos o consultas y ofrecer una mejor respuesta a las vecinas y vecinos, el Hospital Thompson abrió cuatro líneas telefónicas que funcionan de lunes a viernes, de 8 a 16 h: 15 2314 3528; 15 5312 3416; 15 3566 2898; y 15 6514 4918.',
        href: ''
      }
    ]
  },
]

const printServicios = (elem) => {
  for(let categoryObj of servicios_db){
    // Artículo contenedor
    let catArticle = document.createElement("article");
    catArticle.classList.add("act-articulos");
    catArticle.id = categoryObj.id;
    elem.appendChild(catArticle);
    // Artículos internos
    for(let article of categoryObj.articles){
      // Grilla
      let gridNode = document.createElement("div");
      gridNode.classList.add("grid-servicios");
      catArticle.appendChild(gridNode);
      // Imagen
      let img = document.createElement("img");
      img.classList.add("img-act");
      img.setAttribute("src", article.img);
      gridNode.appendChild(img);
      // Info
      let info = document.createElement("div");
      gridNode.appendChild(info);
      let vol = document.createElement("p");
      vol.classList.add("serv-volanta");
      vol.textContent = article.volanta;
      let tit = document.createElement("p");
      tit.classList.add("serv-titulo", "black");
      tit.textContent = article.title;
      let des = document.createElement("p");
      des.classList.add("serv-desarrollo");
      des.textContent = article.text;

      info.appendChild(vol);
      info.appendChild(tit);
      info.appendChild(des);
    }
  }
}
