// CORRECCIÓN SCROLL
const headerMsm = document.getElementById("msm");
var headerMsmOrigin = 0;

let element = headerMsm;
while(element = element.previousElementSibling){
  if(!isNaN(element.offsetHeight)) headerMsmOrigin += element.offsetHeight;
}

const links = document.getElementsByTagName("a");
for(let link of links){
  let href = link.getAttribute("href");
  if(href != null && href.startsWith("#") && href.length > 1){
    link.addEventListener("click", function(e){
      e.preventDefault();
      let headerHeight = document.getElementById("msm").offsetHeight;
      let target = document.querySelector(href).offsetTop - headerHeight;
      let stickyBanner = () => {
        if(document.getElementById("banner-ays")){
          return document.getElementById("banner-ays").offsetHeight;
        }
        return 0;
      }
      if(target > window.innerHeight - headerHeight - stickyBanner()) target -= stickyBanner();
      window.scrollTo(0, target);
    });
  }
}

// MENÚ MOBILE
const hamburguer = document.getElementById("hamburguer");
const mobileMenu = document.getElementById("mobile-menu");

const closeMenu = () => {
  mobileMenu.classList.remove("on");
  window.requestAnimationFrame(() => {
    document.body.removeEventListener("click", closeMenu);
  });
}

hamburguer.addEventListener("click", () => {
  mobileMenu.classList.add("on");
  window.requestAnimationFrame(() => {
    document.body.addEventListener("click", closeMenu);
  });
});

// INFO DASHBOARD
let activos = document.getElementsByClassName("db-activos");
let recuperados = document.getElementsByClassName("db-recuperados");
let fallecidos = document.getElementsByClassName("db-fallecidos");
let afectados = document.getElementsByClassName("db-afectados");
let atencionPublica = document.getElementsByClassName("db-atencion-publica");
let atencionPrivada = document.getElementsByClassName("db-atencion-privada");

for(let activo of activos) activo.textContent = dashboardData.activos;
for(let recuperado of recuperados) recuperado.textContent = dashboardData.recuperados;
for(let fallecido of fallecidos) fallecido.textContent = dashboardData.fallecidos;
for(let afectado of afectados) afectado.textContent = dashboardData.activos + dashboardData.recuperados + dashboardData.fallecidos;

for(let caso of atencionPublica) caso.textContent = dashboardData.atencionPublica;
for(let caso of atencionPrivada) caso.textContent = dashboardData.atencionPrivada;
// dashboardData.freeze();

// SHARE ACTION
const shareBtns = document.getElementsByClassName("share");
const shareWarning = document.getElementById("share-warning");

if(shareBtns.length) {
  for(let share of shareBtns){
    share.addEventListener("click", function(e){
      e.preventDefault();
      copyText = document.createElement("input");
      copyText.classList.add("copy-text");
      copyText.value = this.getAttribute("href");
      document.querySelector("body").appendChild(copyText);

      copyText.select();
      copyText.setSelectionRange(0, 99999); /* celulares */

      document.execCommand("copy");

      if(shareWarning){
        shareWarning.classList.add("on");
        setTimeout(() => {
          shareWarning.classList.remove("on");
        }, 2500);
      }

      document.querySelector("body").removeChild(copyText);
    })
  }
}

// PRINT DATE
const dashboardDate = document.getElementById("db-fecha");
if(dashboardDate){
  let fecha = new Date();
  let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  dashboardDate.textContent = `Datos al: ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
}

// FIX DESPLEGABLES
const drops = document.querySelectorAll("button[drop-down]");
for(let drop of drops){
  drop.addEventListener("click", function(){
    let targetScroll =  drops[0].offsetTop - headerMsm.offsetHeight;
    window.scrollTo(0, targetScroll);
  })
}
