<template>
  <div class="firstContainer">
    <!-- <app-header></app-header> -->
    <header>
        <nav class="menu opacity0">
            <div class="logo"> <a href="#"> Mariano <span>Vatri</span> </a> </div>
            <div>
                <ul class="d-flex">
                    <li><a class="menu-button" href="#aboutMe">Acerca de mi</a></li>
                    <li><a class="menu-button" href="#services">Servicios</a></li>
                    <li><a class="menu-button" href="#skills">Habilidades</a></li>
                    <li><a class="menu-button" href="#proyectos">Proyectos</a></li>
                    <li><a class="menu-button" href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <body>
      <video src="../assets/programador.mp4" autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>
      <section class="white, text" id="aboutMe">
          <div> 
            <img class="fotoPerfil"  src="../assets/profilePhoto.png">
          </div>
          <div class="aboutMe">
              <div class="d-flex">
                <h1 class="title">Acerca de mi...</h1>
              </div>
              <h3 class="titulo">¿Quién soy?</h3>
              <h3>
                Soy un joven apasionado por la programación, un desarrollador web motivado y experimentado 
                que busca un puesto desafiante en el que pueda utilizar mis habilidades 
                para crear sitios web y aplicaciones innovadores fáciles de usar.
              </h3>
              <div class="button-container"> <a target="_blank" class="button"
                      href="https://drive.google.com/drive/folders/1kZOE3JXJUJTU7FsOqC33KvU08xCAY5-z">Ver mi CV</a> 
              </div>
          </div>
      </section>
      <section class="red" id="services">
          <h1>Servicios</h1>
          <h3 class="titulo">Que ofrezco</h3>
          <div class="servicios scroll-content fadeTop">
              <div class="d-flex container jc-sa">
                  <div class="card p3"> <img src="https://cdn-icons-png.flaticon.com/128/45/45135.png" alt="">
                      <h2>Diseño web</h2>
                      <h3>Planificar y diseñar interfaces digitales.</h3>
                  </div>
                  <div class="card p3"> <img src="http://cdn.onlinewebfonts.com/svg/img_565446.png" alt="">
                      <h2>Desarrollo web</h2>
                      <h3>Construir y mantener interfaces digitales.</h3>
                  </div>
                  <div class="card p3"> <img src="https://www.splashtop.com/wp-content/uploads/iphone-portrait.png"
                          alt="">
                      <h2>Diseño Responsive</h2>
                      <h3>Adaptabilidad y visualización de interfaces digitales.</h3>
                  </div>
              </div>
          </div>
      </section>
      <section class="white" id="skills">
          <h2>Habilidades</h2>
          <h3 class="titulo">Adquiridas</h3>
          <div class="habilidades">
              <div class="onebox fadeLeft scroll-content">
                  <h2>Mis habilidades</h2>
                  <h3>
                    Esta sección brinda un vistazo a las habilidades que he cultivado con esfuerzo. Mi compromiso constante con la mejora me mantiene en la búsqueda constante de nuevas tecnologías para aprender y dominar.
                  </h3>
                                        <h2>Mi experiencia</h2>
                                        <div class="button-container"> <a target="_blank" class="button"
                      href="https://drive.google.com/drive/folders/1kZOE3JXJUJTU7FsOqC33KvU08xCAY5-z">Ver mi CV</a> 
              </div>

              </div>
              <div class="onebox contenedor-caja fadeRight scroll-content">
                  <div class="d-flex">
                      <div class="caja"> 
                        <img src="../assets/skills/html5.svg" alt="html5">
                      </div>
                      <div class="caja"> 
                        <img src="../assets/skills/css3.svg" alt="css3">
                      </div>
                      <div class="caja"> 
                        <img src="../assets/skills/javascript.svg" alt="javascript">
                      </div>
                      <div class="caja"> 
                        <img src="../assets/skills/vuejs.svg" alt="vue.js">
                      </div>
                  </div>
                  <div class="d-flex">
                      <div class="caja"> 
                        <img src="../assets/skills/angular.svg" alt="angular">
                      </div>
                      <div class="caja"> 
                        <img src="../assets/skills/git.svg" alt="git">
                      </div>
                      <div class="caja"> 
                        <img src="../assets/skills/github.svg" alt="github">
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <div v-if="colorPickerVisible" class="boxColors">
        <div class="color-box" id="color1" @click="changeColor('#a52a2a')">Clasico</div>
        <div class="color-box" id="color2" @click="changeColor('#004080')">Blue</div>
        <div class="color-box" id="color3" @click="changeColor('#4CAF50')">Verde</div>
        <div class="color-box" id="color4" @click="changeColor('#FFA500')">Naranja</div>
        <div class="color-box" id="color5" @click="changeColor('#800080')">Morado</div>
      </div>
      <div class="floating-button" @click="toggleColorPicker">
        <span>Cambiar</span>
        <span>Color</span>
      </div>
      <div class="scroll-up-btn"> <a href="#aboutMe"> 
        <img src="https://cdn-0.emojis.wiki/emoji-pics/softbank/upwards-button-softbank.png" alt=""> </a> 
      </div>
      <section class="red" id="proyectos">
          <h1>Proyectos</h1>
          <h3 class="titulo">Profesionales</h3>
          <div v-for="proyecto in profesionalProyects" :key="proyecto.nombre" class="servicios scroll-content fadeTop">
            <div class="container">
              <div class="card p3">
                <a :href="proyecto.enlace" target="_blank">
                  <img class="previewImgProyect" :src="imageSrc('ImagenesProyectos', proyecto.image)" alt="">
                </a>
                <hr>
                <a :href="proyecto.enlace" target="_blank">{{ proyecto.nombre }}</a>
                <h4>{{ proyecto.descripcion }}</h4>
                <div class="stack-tecnologico">
                  <h5>Stack Tecnológico FRONT:</h5>
                  <div class="tecnologias">
                    <img v-for="tecnologia in proyecto.tecnologia" :key="tecnologia" :title="tecnologia" :src="imageSrc('skills', tecnologia)">
                  </div>
                </div>
                <div class="project-actions">
                  <a :href="proyecto.enlace" target="_blank">
                    <button class="button-ir-al-proyecto">Explorar Proyecto</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="servicios scroll-content fadeTop">
            <div class="container">
              <div class="card p3"> 
                <a href="https://simplebuypro.com/" target="_blank">
                  <img
                    src="../assets/ImagenesProyectos/simplebuy.png"
                    alt="">
                </a>
                <hr>
                  <a href="https://simplebuypro.com/"
                    target="_blank">Simple Buy</a>
                <h4>Comencé el proyecto desde cero utilizando <span class="vue">Vue.js</span> y diseñé un sistema de compras personalizado para cumplir con los requisitos de la empresa. Contribuí creando componentes exclusivos que no estaban disponibles en línea, adaptándolos a las necesidades del proyecto. Continúo trabajando en el proyecto, añadiendo nuevas funcionalidades y mejoras.</h4>
                <a href="https://simplebuypro.com/" target="_blank">
                  <button class="button-ir-al-proyecto">
                    Explorar Proyecto
                  </button>
                </a>
              </div>
            </div>
          </div> -->
          <h3 class="titulo">Personales</h3>
          <div class="servicios scroll-content fadeTop">
              <div class="container">
                  <div class="card p3 w-45"> 
                    <a href="https://cashregisterangular.netlify.app/" target="_blank">
                      <img
                        src="https://lh3.googleusercontent.com/pw/AM-JKLWgee75xDiiH0vpwwzfKtyxMwmCi1DujDSbYVt7WKYg9MovNBC3XmUyrEkjkR2wIv4lk2vFk-WBUxvjTveo4o2Bx4AGU7NlrWEf_YzDrHA2IC8ibUBMoLuXJ2pC9CigA7uc_DaarOlKGLrevHmcTknljA=w1351-h632-no?authuser=0"
                        alt="">
                    </a>
                    <hr>
                      <a href="https://cashregisterangular.netlify.app/"
                        target="_blank">Caja Registradora</a>
                    <h4>Una ingeniosa aplicación de caja registradora construida con <span class="angular">Angular</span>. Simplifica la gestión de transacciones y ventas de forma eficiente, perfecta para negocios pequeños y medianos.</h4>
                    <a href="https://cashregisterangular.netlify.app/" target="_blank">
                      <button class="button-ir-al-proyecto">
                        Explorar Proyecto
                      </button>
                    </a>
                  </div>

                  <div class="card p3 w-45">
                    <a href="https://marsproyect.netlify.app/" target="_blank">
                      <img
                           src="../assets/ImagenesProyectos/mars.png"
                           alt="">
                    </a>
                    <hr>
                    <a href="https://marsproyect.netlify.app/" target="_blank">Proyecto Marte</a>
                    <h4>El proyecto "OUTFITTING A MARS HABITAT" creado con <span class="vue">Vue.js</span> en un solo dia, desarrollado para el "NASA Space Apps Challenge 2022," es una iniciativa que aborda el desafío de crear un hábitat sostenible en Marte.</h4>
                    <a href="https://marsproyect.netlify.app/" target="_blank">
                      <button class="button-ir-al-proyecto">
                        Explorar Proyecto
                      </button>
                    </a>
                  </div>
                  
                  <div class="card p3 w-45"> 
                    <a href="https://pagepizzeria.netlify.app"
                          target="_blank">
                      <img
                            src="../assets/ImagenesProyectos/pizzeria.jpg"
                            alt="">
                    </a>
                    
                      <hr>
                       <a href="https://pagepizzeria.netlify.app" target="_blank">Pizzeria "Don César"</a>
                      <h4>Pagina que recrea la experiencia de una pizzería. CCreada con <span class="angular">Angular</span> , esta página brinda a los visitantes la oportunidad de explorar un menú ficticio de pizzas, conocer las ofertas y disfrutar de una simulación virtual de un restaurante de pizza.</h4>
                      <a href="https://pagepizzeria.netlify.app" target="_blank">
                        <button class="button-ir-al-proyecto">
                          Explorar Proyecto
                        </button>
                      </a>
                  </div>

              </div>
          </div>
      </section>
      <section id="contacto" class="white">
        <h1>Contacto</h1>
        <div class="contacto fadeLeft scroll-content">
          <a target="_blank" href="https://www.linkedin.com/in/mariano-vatri-649007151/" class="fa fa-linkedin"><img src="../assets/linkedin.svg" alt="logoLinkedin"></a>
          <a target="_blank" href="https://github.com/marianovatri" class="fa fa-github"><img src="../assets/github.svg" alt="logoGithub"></a>
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=+543564335655&amp;text=Hola,+hemos+visto+tu+perfil%2C+tenemos+una+oferta+que+te+puede+interesar.&amp;app_absent=0" class="fa fa-whatsapp"><img src="../assets/whatsapp.svg" alt="whatsappLogo"></a>
          <a target="_blank" href="https://www.instagram.com/vatrimariano/?hl=es-la" class="fa fa-instagram"> <img src="../assets/instagram.svg" alt="instagramLogo"></a>
          <a target="_blank" href="https://www.facebook.com/mariano.vatri/" class="fa fa-facebook"> <img src="../assets/facebook.svg" alt="facebookLogo"></a>
        </div>
      </section>
    </body>
    <footer class="opacity0">
      <p>Created By <span>Mariano Vatri</span> |®  2021 All rights reserved.</p>
    </footer>
<!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {

      colorPickerVisible: false,

      profesionalProyects: [
        {
          nombre: 'Simple Buy',
          image: 'simplebuy.png',
          enlace: 'https://simplebuypro.com/',
          descripcion: 'SimpleBuy es un sistema de compras personalizado para cumplir con los requisitos de la empresa. Contribuí desde el inicio del proyecto hasta la actualidad, cree componentes exclusivos que no estaban disponibles en línea, adaptándolos a las necesidades del proyecto. Continuo trabajando en el proyecto, añadiendo nuevas funcionalidades y mejoras.',
          tecnologia: ['vuejs.svg','pinia.png','sass.svg']
        }
      ],
    }
  },

  props: {
    msg: String
  },

  methods: {

    toggleColorPicker() {
      this.colorPickerVisible = !this.colorPickerVisible;
    },

    changeColor(selectedColor) {
      document.documentElement.style.setProperty('--userColor', selectedColor)
      this.colorPickerVisible = false;

    },

    imageSrc(src, image) {
      return require(`@/assets/${src}/${image}`);
    },
  },

  mounted() {

    let lastScroll = 0;

    const nav = document.querySelector('nav');

    if (lastScroll == 0) {
      nav.classList.add('visible');
    }

    window.addEventListener('scroll', function()  {

      const footer = document.querySelector('footer');

      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {           
        nav.classList.remove('visible');
        footer.classList.add('visible');
      } else {        
        nav.classList.add('visible');
        footer.classList.remove('visible');
      }

      lastScroll = currentScroll;

      let elements = document.getElementsByClassName('scroll-content');
      let screenSize = window.innerHeight;

      if (elements != null) {
        for(var i = 0; i < elements.length; i++) {
          let element = elements[i];
      
          if(element.getBoundingClientRect().top < screenSize) {     
            element.classList.add('visible');
          } else {      
            element.classList.remove('visible');
          }
        }    
      }
      
    });

    const upnav = document.querySelector('.scroll-up-btn');
    
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 100) {
        upnav.classList.add('show')
      } else {
        upnav.classList.remove('show')
      }
    }

    // window.addEventListener('scroll', watchMenu);

    
    // function watchMenu() {
    //   nav.style.top = `-${
    //     nav.clientHeight < window.scrollY ?
    //     nav.clientHeight : 0
    //   }px`;
    // }

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./estilos.sass";
</style>
