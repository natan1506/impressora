import { Buttons } from './Buttons.js';
import { NewVolume } from './NewVolume.js';
import { Print } from './Print.js';

const TagInitial = {
  init() {
    const button = document.getElementById("buttonTagInitial");

    button.addEventListener("click", (event) => {
      TagInitial.render();
    })
  },
  
  render() {
    document.body.innerHTML = "";

    document.body.innerHTML = `
      <div class="d-none d-print-block div-print" height=400 width=600 id="divPrint"></div>
      <div class="card card mb-3 shadow p-3 mb-5 rounded mb-3 d-print-none">
        <div class="card-header bg-transparent row">
          <div class="col align-middle">
            <span>Impressão Etiquetas para Pedido</span>
          </div>
          <div class="col-auto">
            <button class="btn btn-sm btn-outline-primary" id="newVolume">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="card-body text-secondary">
         
          <div id="volumes">
            <div class="row mb-3">
              <div class="col">
                <div class="form-group row">
                  <label for="volume" class="col-4 col-form-label">Volume</label>
                  <div class="col-sm">
                    <input type="number" class="form-control form-control-sm volume" name="volumeInitial">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-group row">
                  <label for="peso" class="col-sm-auto col-form-label">Peso(Kg)</label>
                  <div class="col-sm">
                    <input type="text" class="form-control form-control-sm weight" name="weightInitial">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row mb-3">
            <label for="order" class="col-2 col-form-label"># pedido</label>
            <div class="col-sm">
              <input type="text" class="form-control form-control-sm" id="order" name="order">
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-auto">
              <button type="button" name="gerar" id="generateTagInitial" class="btn btn-sm btn-outline-primary">Gerar tiqueta</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-sm btn-outline-primary btn-floating rounded-circle d-print-none" id="toBack"><i class="fas fa-arrow-left"></i></button>
    `;

    $('.weight').mask('##00.00', {reverse: true});

    const back = document.getElementById("toBack");
    const newVolume = document.getElementById("newVolume");
    const generateTagInitial = document.getElementById("generateTagInitial");


    back.addEventListener("click", (event) => {
      Buttons.render();
    })

    newVolume.addEventListener("click", (event) => {
      NewVolume.render();
    })

    generateTagInitial.addEventListener("click", (event) => {
      TagInitial.print();
    })
    
  },

  print(){
    let volume = document.querySelectorAll('[name="volumeInitial"]');
    let weight = document.querySelectorAll('[name="weightInitial"]');
    const order = document.getElementById('order').value;

    let volumeCount = 0;
    let weightCount = 0;
    let volumes = [].map.call(volume, function (input) {
      return input.value;
    });
    let weights = [].map.call(weight, function (input) {
      return input.value;
    });

    volumes.forEach(element => {
      volumeCount += parseInt(element)
    });

    for (let i = 0; i < weights.length; i++) {
      const volume = parseInt(volumes[i]);
      const weight = parseFloat(weights[i]);

      weightCount = (volume * weight) + weightCount;
    }

    if(!order || !volumeCount || !weightCount){
      alert("preencha todos os campos!");
    }else{
      Print.printInitial({volumeCount, weightCount, order})
    }
    
  }
}

export { TagInitial };