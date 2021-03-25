import { Buttons } from './Buttons.js';

const TagNote = {
  init() {
    const button = document.getElementById("buttonTagNote");

    button.addEventListener("click", (event) => {
      TagNote.render();
    })
  },
  
  render() {
    document.body.innerHTML = "";

    document.body.innerHTML = `
    <div class="card mb-3 shadow p-3 mb-5 rounded" id="etiquetas">
      <div class="card-header bg-transparent">Impressão de Etiquetas para Nota</div>
      <div class="card-body text-secondary">
        <form>
          <div class="form-group row mb-3">
            <label for="remetente" class="col-sm-auto col-form-label">Remetente</label>
            <div class="col-sm">
              <input type="text" class="form-control" id="remetente" name="remetente">
            </div>
          </div>

          <div class="form-group row mb-3">
            <label for="destinatario" class="col-sm-auto col-form-label">Destinatário</label>
            <div class="col-sm">
              <input type="text" class="form-control" id="destinatario" name="destinatario">
            </div>
          </div>

          <div class="form-group row mb-3">
            <label for="nota" class="col-sm-auto col-form-label">Nota</label>
            <div class="col-sm">
              <input type="text" class="form-control" id="nota" name="nota">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col">
              <div class="form-group row">
                <label for="volume" class="col-sm-auto col-form-label">Volumes</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="volume" name="volume">
                </div>
              </div>
            </div>
            <div class="col">
              <div class="form-group row">
                <label for="peso" class="col-sm-auto col-form-label">Peso(Kg)</label>
                <div class="col-sm">
                  <input type="text" class="form-control" id="peso" name="peso">
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-auto">
              <button type="button" name="gerar" id="generateTagNote" class="btn btn-lg btn-outline-primary">Gerar tiqueta</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button class="btn btn-lg btn-outline-primary btn-floating rounded-circle" id="toBack">
      <i class="fas fa-arrow-left"></i>
    </button>
    `;


    const back = document.getElementById("toBack");

    back.addEventListener("click", (event) => {
      Buttons.render();
    })
  }
}

export { TagNote };