import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsBody-styles.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js'
import '@cells-components/coronita-icons';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-body></cells-body>
```

##styling-doc

@customElement cells-body
*/
export class CellsBody extends LitElement {
  static get is() {
    return 'cells-body';
  }

  // Declare properties
  static get properties() {
    return {  
      item1:{type:Array},
      item2:{type:Array},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.item1=[];
    this.item2=[];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-body-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
    <div class="general">
    <img src="../src/imagen.jpeg">
    <div class="header">
      <div class="line1">456 votes</div>
      <div class="line2">Preheadline</div>
      <div class="line3">Headline</div>
      <div class="line4">Paragraph title</div>
      <div info=${this.title}> </div>
      <div class="lista1">${this.item1.map((i)=>html`
      <div>${i}</div>
      `)}</div>

      <div class="lista2">${this.item2.map((i)=>html`
      <div><bbva-core-icon icon="coronita:bullet1" class="marker-icon"></bbva-core-icon>${i}</div>
      `)}
      </div>
    <bbva-button-default class="btn-Delete"><bbva-core-icon icon="coronita:delete" class="icon-delete"></bbva-core-icon>Delete</bbva-button-default>   
      
    <bbva-button-default class="btn-Modify" >Modify</bbva-button-default>  
   
      </div>
      </div>
    
    `;
  }
}
