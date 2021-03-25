const NewVolume = {
  render() {
    console.log(document.getElementById("volumes"));
    $("#volumes").append(`
      <div class="row mb-3">
        <div class="col">
          <div class="form-group row">
            <label for="volume" class="col-sm-auto col-form-label">Volume</label>
            <div class="col-sm">
              <input type="number" class="form-control" name="volumeInitial">
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
    `);

    $('.weight').mask('##00.00', {reverse: true});

  }
}

export { NewVolume }