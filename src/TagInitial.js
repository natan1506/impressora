import { Buttons } from './Buttons.js';
import { NewVolume } from './NewVolume.js';

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
      <div class="card card mb-3 shadow p-3 mb-5 rounded mb-3">
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
                  <label for="volume" class="col-sm-auto col-form-label">Volume</label>
                  <div class="col-sm">
                    <input type="number" class="form-control volume" name="volumeInitial">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-group row">
                  <label for="peso" class="col-sm-auto col-form-label">Peso(Kg)</label>
                  <div class="col-sm">
                    <input type="text" class="form-control weight" name="weightInitial">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-auto">
              <button type="button" name="gerar" id="generateTagInitial" class="btn btn-lg btn-outline-primary">Gerar tiqueta</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-lg btn-outline-primary btn-floating rounded-circle" id="toBack"><i class="fas fa-arrow-left"></i></button>
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

    weights.forEach(element => {
      weightCount += parseFloat(element)
    });

    console.log(volumes, volumeCount, weights, weightCount)
    
  }
}

export { TagInitial };