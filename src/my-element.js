import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Este es el titulo de mi pagina
       */
      title: { type: String },
      /**
       * Este es el subtitulo de mi pagina
       */
      subtitulo: { type: String },
      /**
       * Este es mi parrafo 1
       */
      paragraph1: { type: String },
      /**
       * Esta es la 1 url de la imagen
       */

      Image1url: { type: String },
      /**
       *Este es mi parrafo 2
       */
      paragraph2: { type: String },
      /**
       * Este es el elemento 1 de la lista 1
       */
      list1Element1: { type: String },
      /**
       * Este es el elemento 2 de la lista 1
       */
      list1Element2: { type: String },
      /**
       * Este es el elemento 3 de la lista 1
       */
      list1Element3: { type: String },
      /**
       * Este es el elemento 4 de la lista 1
       */
      list1Element4: { type: String },
      /**
       * Este es el elemento 5 de la lista 1
       */
      list1Element5: { type: String },
      /**
       * Este es el elemento 6 de la lista 1
       */
      list1Element6: { type: String },
    }


  }

  constructor() {
    super()
    this.title = 'ESTETICA ROSSY'
    this.subtitulo = 'PERSONAL PROFESIONAL'
    this.paragraph1 = 'CALIDAD Y PRECIO'
    this.image1Url = 'https://2.bp.blogspot.com/-mw9Dvr4uX3E/WFmfyD-mk0I/AAAAAAAACwU/kX_WjxBZWTEhUkUn3-yL2e576U_3m-OAQCLcB/s1600/42478249_l.jpg'
    this.paragraph2 = 'Bienvenidos Ofrecemos Diferentes servicos Unisex como:'
    this.list1Element1 = 'Cortes con tijera'
    this.list1Element2 = 'Cortes con navaja'
    this.list1Element3 = 'Cortes con Maquina'
    this.list1Element4 = 'Rayos'
    this.list1Element5 = 'Tintes'
    this.list1Element6 = 'Efectos'
    this.paragraph3 = 'RAYOS'
    this.image2Url = 'https://i.pinimg.com/736x/37/55/be/3755be455cff92129b938f0cdbd95b7e.jpg'
    this.paragraph4 = 'CORTES A TIJERA Y MAQUINA'
    this.image3Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BaZYz_PfECR9emDZyqO_Hx3HqCQLmhEdr93Rqdhn_g&s'
    this.paragraph5 = 'EFECTOS EN CABELLO PARA MUJER Y HOMBRE'
    this.image4Url = 'https://cdn.pixabay.com/photo/2014/12/31/10/11/woman-584797_1280.jpg'
    this.paragraph6 = 'CORTE A NAVAJA LARGOS Y CORTOS, DAMA Y CABALLERO'    
    this.image5Url = 'https://i.ytimg.com/vi/qD146yhOUtI/maxresdefault.jpg'
    this.paragraph7 = 'ABIERTO DE LUNES A SABADO EN UN HORARIO DE 12:00 A 20:00 HRS'
    this.image6Url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2q1Kr6gUE-U-Ibh3F_QoDGzEXAwh93KuaqSeQ5B-Rg&s'


  }

  render() {
    return html`
      <div id="main">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <p>${this.paragraph1}</p>
        <img src="${this.image1Url}">
        <p>${this.paragraph2}</p>
        <ul>
        <li><i>${this.list1Element1}</i></li>
        <li><i>${this.list1Element2}</i></li>
        <li><i>${this.list1Element3}</i></li>
        <li><i>${this.list1Element4}</i></li>
        <li><i>${this.list1Element5}</i></li>
        <li><i>${this.list1Element6}</i></li>
        
      </ul>
        <p>${this.paragraph3}</p>
        <img src="${this.image2Url}">
        <p>${this.paragraph4}</p>
        <img src="${this.image3Url}">
        <p>${this.paragraph5}</p>
        <img src="${this.image4Url}">
        <p>${this.paragraph6}</p>
        <img src="${this.image5Url}">
        <p>${this.paragraph7}</p>
        <img src="${this.image6Url}">

     
      </div>`
  }
      

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }   
      body{
        background-color: plum;
      }
      p {
        background-color: chartreuse;
        font-family: Georgia;
        color: rgb(165, 42, 144);
      }
      #Estetica Rossy {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: blue;
      }
      div{
        padding: 15vw ;
      }
      #estetica {
        background-color: cadetblue;
      }
      img {
        width:25vw;
      }
      p {
        font-size:10vh;
      }
      h1{
        font-size:15vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
