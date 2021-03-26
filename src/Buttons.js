import { TagInitial } from './TagInitial.js';
import { TagNote } from './TagNote.js';

const Buttons = {
  render() {

    document.body.innerHTML = "";

    document.body.innerHTML =  `
      <div class="d-flex flex-column align-items-center">
        <img src="../assets/logo-ml.svg" alt="MarcaLaser" width="250"/>
        <div>
          <button type="button" class="btn btn-sm btn-outline-primary m-1" id="buttonTagInitial">Etiqueta para Pedido</button>
          <button type="button" class="btn btn-sm btn-outline-primary m-1"
          id="buttonTagNote">Etiqueta para Nota</button>
        </div>
      </div>
      `;

    TagInitial.init();
    TagNote.init();

  }
}

export { Buttons };