import { Buttons } from './Buttons.js';
import { Print } from './Print.js';


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
    <div class="d-none d-print-block div-print" height=400 width=600 id="divPrint"></div>
    <div class="card mb-3 shadow p-3 mb-5 rounded d-print-none" id="etiquetas">
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

          <div class="form-group row mb-3">
            <label for="pedido" class="col-sm-auto col-form-label">#Pedido</label>
            <div class="col-sm">
              <input type="text" class="form-control" id="pedido" name="pedido">
            </div>
          </div>

          <div class="row mb-3">
            <div class="col">
              <div class="form-group row">
                <label for="volume" class="col-sm-auto col-form-label">Volumes</label>
                <div class="col-sm">
                  <input type="number" class="form-control" id="volumes" name="volumes">
                </div>
              </div>
            </div>
            <div class="col">
              <div class="form-group row">
                <label for="peso" class="col-sm-auto col-form-label">Peso(Kg)</label>
                <div class="col-sm">
                  <input type="text" class="form-control weight" id="peso" name="peso">
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

    $('.weight').mask('##00.00', {reverse: true});

    const back = document.getElementById("toBack");
    const generateTagNote = document.getElementById("generateTagNote");

    back.addEventListener("click", (event) => {
      Buttons.render();
    })
    generateTagNote.addEventListener("click", (event) => {
      TagNote.print();
    })
  },

  print(){
    const remetente = document.getElementById('remetente').value;
    const destinatario = document.getElementById('destinatario').value;
    const nota = document.getElementById('nota').value;
    const pedido = document.getElementById('pedido').value;
    const volumes = document.getElementById('volumes').value;
    const peso = document.getElementById('peso').value;


    if(!remetente || !destinatario || !nota || !pedido ||!volumes ||!peso){
      alert("preencha todos os campos!");
    }else{

      const division = parseInt(volumes) / parseFloat(peso);
      const media = division.toFixed(2);

      Print.printNote({remetente, destinatario, nota, pedido, volumes, media})
    }
    
  }
}

export { TagNote };