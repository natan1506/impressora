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
    <div class="card border-secondary mb-3" id="etiquetas">
      <div class="card-header">Impressão de Etiquetas para Nota</div>
      <div class="card-body text-secondary">
      

        <form>
          <div class="form-group">
            <label for="remetente" class="">Remetente:</label>
            <input id="remetente" type="text" name="Remetente" />
            <br /><br />
          </div>

          <label for="destinatario">Destinatário:</label>
          <input id="destinatario" type="text" name="Destinatário" size="60" />
          <br /><br />

          <label for="nota">Nota:</label>
          <input id="nota" type="text" name="Nota" size="20" />

          <label for="volume">Volumes:</label>
          <input id="volume" type="text" name="Volumes" size="20" />
          <br />
          <br />
          <label for="peso">Peso(Kg):</label>
          <input id="peso" type="text" name="Peso" size="20" />
          <input type="submit" name="gerar" onclick="GerarEtiquetas()" />
        </form>
      </div>
    </div>
    `;
  }
}

export { TagNote };