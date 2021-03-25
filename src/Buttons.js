import { TagInitial } from './TagInitial.js';
import { TagNote } from './TagNote.js';

const Buttons = {
  render() {

    document.body.innerHTML = "";

    document.body.innerHTML =  `
      <button type="button" class="btn btn-lg btn-outline-primary m-1" id="buttonTagInitial">Etiqueta para Pedido</button>
      <button type="button" class="btn btn-lg btn-outline-primary m-1"
      id="buttonTagNote">Etiqueta para Nota</button>`;

    TagInitial.init();
    TagNote.init();

  }
}

export { Buttons };