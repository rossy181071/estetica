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

  }

  render() {
    return html`
      <div id="main">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <p>${this.paragraph1}</p>
        <img src="${this.image1Url}">
        <p>${this.paragraph2}</p>
        <li><i>${this.list1Element1}</i></li>
        <li><i>${this.list1Element2}</i></li>
        <li><i>${this.list1Element3}</i></li>
        <li><i>${this.list1Element4}</i></li>
        <li><i>${this.list1Element5}</i></li>
        <li><i>${this.list1Element6}</i></li>
           
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
      #Estetica {
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
