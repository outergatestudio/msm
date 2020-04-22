/* HELPERS / CUSTOM METHODS */

// Verificar si un objeto/array/string/int se encuentra vacío
Object.prototype.isEmpty = function(){
  return Object.entries(this).length === 0;
}
Array.prototype.isEmpty = function(){
  return this.length === 0;
}
String.prototype.isEmpty = function(){
  return this.length === 0;
}
Number.prototype.isEmpty = function(){
  return this.valueOf() === 0;
}

// Comparar Arrays
const compare = (...arrs) => {
  for(let arr of arrs){
    if(typeof(arr) != "object") return false;
  }
  let test = JSON.stringify(arrs[0]);
  for(let i = 0; i < arrs.length; i++){
    if(JSON.stringify(arrs[i]) != test) return false;
  }
  return true;
}

// Obtener colección de propiedades
Object.prototype.getEntries = function(){
  return Object.entries(this);
}

// JSON ordenado (array de objetos)
Array.prototype.sortBy = function(prop = "id"){
  let ordered = this.sort((a, b) => {
    return (a[prop] > b[prop]) ? 1 : -1;
  });
  return ordered;
}

// Freezar objetos y arrays
Object.prototype.freeze = function(){
  Object.freeze(this);
  return true;
}
Array.prototype.freeze = function(){
  Object.freeze(this);
  return true;
}

// Crear animación/es a destino desde estilo actual
HTMLElement.prototype.animateTo = function (property, durationMs, timingFunction = "ease", fillMode = "forwards") {
  let from = {};
  let to = {};
  for(let prop in property){
    from[prop] = this.style.prop || window.getComputedStyle(this, null).getPropertyValue(prop) || undefined;
    to[prop] = property[prop];
  };
  this.animate([from, to], {
    duration: durationMs,
    easing: timingFunction,
    fill: fillMode
  });

  return this;
}


/* $_GET object */
const $_GET = {
  set newMembers(members) {
    for(let member in members){
      this[member] = members[member]
    }
  }
};
(function objGET(){
  let members = window.location.search.substr(1).split("&");
  for (let member of members) {
    if(member != ""){
      let temp = member.split("=");
      $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
  }
})();

// Obtener nombre del archivo desde URL
const getFileName = url => {
  while(url.indexOf("\\") >= 0){
    url = url.replace("\\", "/");
  }
  return url.substring(url.lastIndexOf('/')+1);
}

/* LOADERS */

class Loader {
  constructor(){
    this.resources = [];
    this.loaded = this.percentage = 0;
    this._onChange = ()=>false;
    this._onLoad = ()=>false;
  }

  evalPercentage(){
    this.percentage = Math.round((100 / this.resources.length) * this.loaded);
    if(this.percentage){
      // código al aumentar el porcentaje
      return this._onChange();
    }
  }
  exit(){
    // código al finalizar la carga
    return this._onLoad();
  }

  set addResources(resourcesArray){
    for(let resource of resourcesArray){
      if(!this.resources.includes(resource)) this.resources.push(resource);
    }
    return this;
  }
  set onChange(fx){
    this._onChange = fx;
    return this;
  }
  set onLoad(fx){
    this._onLoad = fx;
    return this;
  }
}


class ImgLoader extends Loader {
  constructor(autosearch = true, autoinit = 0){
    super();
    // this.imgObj = new Image();
    if(autosearch === true){
      // Cargar tags IMG
      for(let img of document.getElementsByTagName("img")){
        let resource = img.getAttribute("src");
        if(!this.resources.includes(resource)) this.resources.push(resource);
      };
      // Cargar background-images
      let tagsWithBg = ["body", "header", "section", "article", "footer", "div"];
      for(let tag of tagsWithBg){
        for(let elem of document.getElementsByTagName(tag)){
          let resource = "";
          if(elem.style.backgroundImage != ""){ // Para background-images inline
            let backgroundImg = elem.style.backgroundImage;
            if(backgroundImg.startsWith("url")){
              resource = backgroundImg.substring(4, backgroundImg.length - 1);
              resource = resource.replace(/['"]+/g, '');
            }
          } else { // Para background-images por sheets
            let backgroundImg = getComputedStyle(elem).backgroundImage;
            if(backgroundImg.startsWith("url")){
              resource = backgroundImg.substring(4, backgroundImg.length - 1);
              resource = resource.replace(/['"]+/g, '');
            }
          }
          if(resource != "" && !this.resources.includes(resource)) this.resources.push(resource);
        };
      }
    }
    if(autoinit > 0){
      setTimeout(()=>{
        if(this._onLoad !== false){
          this.init();
        }
      }, autoinit);
    }
    return this;
  }

  init(){
    if(this.resources.length > 0 && this.loaded < this.resources.length){
      let src = this.resources[this.loaded];
      let imgObj = new Image();
      this.evalPercentage();
      imgObj.onload = ()=>{
        this.loaded++;
        this.init();
      }
      imgObj.src = src;
    } else {
      this.evalPercentage();
      this.exit();
    }
  }
}

class VideoLoader extends Loader {
  constructor(autosearch = true, autoinit = 0){
    super();
    this.element = document.createElement('video');
    if(autosearch === true){
      let videoElements = document.getElementsByTagName("video");
      for(let video of videoElements){
        if(video.getAttribute("src")){
          this.resources.push(video.getAttribute("src"));
        } else {
          let sources = video.getElementsByTagName("source");
          for(let source of sources){
            this.resources.push(source.getAttribute("src"));
          }
        }
      }
    };
    if(autoinit > 0){
      setTimeout(()=>{
        if(this._onLoad !== false){
          this.init();
        }
      }, autoinit);
    }
    return this;
  }

  init(){
    if(this.resources.length > 0 && this.loaded < this.resources.length){
      this.element.src = this.resources[this.loaded];
      this.element.autoplay = true;
      this.element.oncanplaythrough = ()=>{
        this.loaded++;
        this.evalPercentage();
        this.init();
      };
    } else {
      this.evalPercentage();
      this.exit();
    }
  }
}

class AudioLoader extends Loader {
  constructor(autosearch = true, autoinit = 0){
    super();
    this.element = document.createElement('audio');
    if(autosearch === true){
      let audioElements = document.getElementsByTagName("audio");
      for(let audio of audioElements){
        if(audio.getAttribute("src")){
          this.resources.push(audio.getAttribute("src"));
        } else {
          let sources = audio.getElementsByTagName("source");
          for(let source of sources){
            this.resources.push(source.getAttribute("src"));
          }
        }
      }
    };
    if(autoinit > 0){
      setTimeout(()=>{
        if(this._onLoad !== false){
          this.init();
        }
      }, autoinit);
    }
    return this;
  }

  init(){
    if(this.resources.length > 0 && this.loaded < this.resources.length){
      this.element.src = this.resources[this.loaded];
      this.element.autoplay = true;
      this.element.oncanplaythrough = ()=>{
        this.loaded++;
        this.evalPercentage();
        this.init();
      };
    } else {
      this.evalPercentage();
      this.exit();
    }
  }
}


/* SLIDESHOW */
class Slideshow {
  constructor(elem){
    this.element = elem;
    this.slides = this.element.querySelectorAll("slide");
    this._currentSlide = 0;
    this._animationDelay = parseInt(this.element.getAttribute("autoplay")) || 0;
    this._state;

    if(this.slides.length){
      this.slides[this._currentSlide].setAttribute("active", "");

      if(this.element.hasAttribute("thumbnails")){
        this._hasThumbnails = true;
        this.thumbnails = document.createElement("thumbnails");
        for(let i = 0; i < this.slides.length; i++){
          let thumb = document.createElement("thumb");
          thumb.setAttribute("for", i);
          this.thumbnails.append(thumb);

          thumb.addEventListener("click", () => {
            this._currentSlide = thumb.getAttribute("for");
            this.changeSlide();
          })
        }
        this.element.append(this.thumbnails);
        this.thumbs = this.thumbnails.querySelectorAll("thumb");

        this.thumbs[this._currentSlide].setAttribute("active", "");
      } else {
        this._hasThumbnails = false;
      }

      if(this._animationDelay > 0){
        this._state = setTimeout(() => {
          this.next();
        }, this._animationDelay);
      }

      if(this.element.querySelector("button[type='prev']")){
        this.assign("prev", this.element.querySelector("button[type='prev']"));
      }
      if(this.element.querySelector("button[type='next']")){
        this.assign("next", this.element.querySelector("button[type='next']"));
      }

      // Drag on mobile
      // const dragActionMobile = event => {
      //   let targetPosX = (this._currentItem * this.getItemsWidth()) + (this._initPageX - event.changedTouches[0].pageX);
      //   this.itemsNode.scrollTo(targetPosX, 0);
      // }
      //
      // this.element.addEventListener("touchstart", e => {
      //   this._initPageX = e.changedTouches[0].pageX;
      // });
      // this.element.addEventListener("touchmove", e => {
      //   this._currentPageX = e.changedTouches[0].pageX;
      // });
      // this.element.addEventListener("touchend", e => {
      //   if(this._currentPageX > (this._initPageX + (this.getItemsWidth() / 2))){
      //     this.prev();
      //   } else if(this._currentPageX < (this._initPageX - (this.getItemsWidth() / 2))){
      //     this.next();
      //   }
      // });
    }
  }

  assign(action, elem){
    elem.addEventListener("click", () =>{
      this[action]();
    })
  }

  prev(){
    if (--this._currentSlide < 0) this._currentSlide = this.slides.length - 1;
    this.changeSlide();
  }

  next(){
    if (++this._currentSlide >= this.slides.length) this._currentSlide = 0;
    this.changeSlide();
  }

  changeSlide(){
    this.element.querySelector("slide[active]").removeAttribute("active");
    this.slides[this._currentSlide].setAttribute("active", "");

    if(this._hasThumbnails){
      this.element.querySelector("thumb[active]").removeAttribute("active");
      this.thumbs[this._currentSlide].setAttribute("active", "");
    }

    if(this._animationDelay > 0){
      clearTimeout(this._state);
      this._state = setTimeout(() => {
        this.next();
      }, this._animationDelay);
    }
  }

  restate(){
    this.slides = () => this.element.querySelectorAll("slide");
    this._animationDelay = parseInt(this.element.getAttribute("autoplay")) || 0;
    this.slides[this._currentSlide].setAttribute("active", "");

    if(this._animationDelay > 0){
      this._state = setTimeout(() => {
        this.next();
      }, this._animationDelay);
    }
  }
}

const slideshowObj = {"found":0, "success":0, "errors":0, "instances":[]}
for(let slideshow of document.querySelectorAll("slideshow")){
  slideshowObj.found++;
  if(slideshowObj.instances[slideshowObj.instances.length] = new Slideshow(slideshow)){
    slideshowObj.success++;
  } else {
    slideshowObj.errors++;
  };
}


/* CARROUSEL */
class Carrousel {
  constructor(elem){
    this.element = elem;
    this.itemsNode = this.element.querySelector("items");
    this.items = this.element.querySelectorAll("item");
    this.mayLoop = true;
    this._currentItem = 0;
    this._animationDelay = parseInt(this.element.getAttribute("autoplay")) || 0;

    if(this.element.querySelector("button[type='prev']")){
      this.assign("prev", this.element.querySelector("button[type='prev']"));
    }
    if(this.element.querySelector("button[type='next']")){
      this.assign("next", this.element.querySelector("button[type='next']"));
    }

    let originPos = this._currentItem * this.getItemsWidth();
    window.requestAnimationFrame(() => {
      this.itemsNode.scrollTo(originPos, 0);
    });

    const dragSensibility = 9;

    // Drag on desktop
    const dragActionDesktop = event => {
      this.itemsNode.scrollBy((event.movementX * (-dragSensibility)), 0);
    }

    this.itemsNode.addEventListener("mousedown", e => {
      this.itemsNode.addEventListener("mousemove", dragActionDesktop);
    });
    this.itemsNode.addEventListener("mouseup", e => {
      this.itemsNode.removeEventListener("mousemove", dragActionDesktop);
      let closestItem = Math.round(this.itemsNode.scrollLeft / this.getItemsWidth());
      this._currentItem = closestItem;
      this.jumpToCurrentItem();
    });

    // Drag on mobile
    // const dragActionMobile = event => {
    //   let targetPosX = (this._currentItem * this.getItemsWidth()) + (this._initPageX - event.changedTouches[0].pageX);
    //   this.itemsNode.scrollTo(targetPosX, 0);
    // }
    //
    // this.itemsNode.addEventListener("touchstart", e => {
    //   this._initPageX = e.changedTouches[0].pageX;
    // });
    // this.itemsNode.addEventListener("touchmove", e => {
    //   this._currentPageX = e.changedTouches[0].pageX;
    // });
    // this.itemsNode.addEventListener("touchend", e => {
    //   if(this._currentPageX > (this._initPageX + (this.getItemsWidth() / 2))){
    //     this.prev();
    //   } else if(this._currentPageX < (this._initPageX - (this.getItemsWidth() / 2))){
    //     this.next();
    //   }
    // });
  }

  getItemsWidth(){
    return this.items[0].clientWidth;
  }

  assign(action, elem){
    elem.addEventListener("click", () =>{
      this[action]();
    })
  }

  prev(){
    if(this._currentItem > 0){
      if(this.items[this._currentItem].offsetLeft > this.itemsNode.scrollLeft){
        while(this.items[this._currentItem].offsetLeft > this.itemsNode.scrollLeft){
          this._currentItem --;
        };
      } else {
        this._currentItem --;
      }
      this.jumpToCurrentItem();
    } else if(this.mayLoop) {
      this._currentItem = this.items.length - 1;
      this.jumpToCurrentItem();
    }
  }

  next(){
    let scrollLeftMax = this.itemsNode.scrollWidth - this.itemsNode.clientWidth - this.itemsNode.scrollLeft;
    // alert(scrollLeftMax);
    if(this._currentItem < (this.items.length - 1) && scrollLeftMax > 0){ // && this.itemsNode.scrollLeft < this.itemsNode.scrollLeftMax
      this._currentItem ++;
      this.jumpToCurrentItem();
    } else if(this.mayLoop) {
      this._currentItem = 0;
      this.jumpToCurrentItem();
    }
  }

  jumpToCurrentItem(){
    let target = this.items[this._currentItem].offsetLeft;
    this.itemsNode.scrollTo(target, 0);
  }
}

const carrouselObj = {"found":0, "success":0, "errors":0, "instances":[]}
for(let carrousel of document.querySelectorAll("carrousel")){
  carrouselObj.found++;
  if(carrouselObj.instances[carrouselObj.instances.length] = new Carrousel(carrousel)){
    carrouselObj.success++;
  } else {
    carrouselObj.errors++;
  };
}


/* DROPDOWN */
class DropDown {
  constructor(elem){
    this.element = elem;
    this.forId = elem.getAttribute("drop-down");
    this.forNode = document.getElementById(this.forId);
    this.timing = '0.5s ease';
    this.chain = false;
    if(this.element.hasAttribute("chain")){
      this.chain = this.element.getAttribute("chain");
    }

    if(this.element.hasAttribute("active")){
      this.forNode.style.height = this.forNode.scrollHeight + 'px';
    } else {
      this.forNode.style.height = '0px';
    }
    this.forNode.style.overflow = 'hidden';
    this.forNode.style.transition = `height ${this.timing}`;

    this.element.addEventListener("click", () => {
      if(!this.element.hasAttribute("active")){
        this.drop();
      } else {
        this.rise();
      }
    });
  }

  drop(){
    if(this.chain != false){
      for(let chainElem of dropDownObj.chains[this.chain]){
        chainElem.rise();
      }
    }
    window.requestAnimationFrame(() => {
      this.element.setAttribute("active", "");
      if(this.forNode.offsetHeight < 1){
        this.forNode.style.height = this.forNode.scrollHeight + 'px';
      } else {
        this.forNode.style.height = '0px';
      }
    })
  }

  rise(){
    this.element.removeAttribute("active");
    this.forNode.style.height = '0px';
  }
}

const dropDownObj = {"found":0, "success":0, "errors":0, "chains":{}, "instances":[]}
for(let dropDown of document.querySelectorAll("*[drop-down]")){
  dropDownObj.found++;
  if(dropDownObj.instances[dropDownObj.instances.length] = new DropDown(dropDown)){
    dropDownObj.success++;
    let dropDownElem = dropDownObj.instances[dropDownObj.instances.length - 1];
    if(dropDownElem.chain != false){
      if(dropDownObj.chains.hasOwnProperty(dropDownElem.chain)){
        dropDownObj.chains[dropDownElem.chain].push(dropDownElem);
      } else {
        dropDownObj.chains[dropDownElem.chain] = [dropDownElem];
      }
    }
  } else {
    dropDownObj.errors++;
  };
}
