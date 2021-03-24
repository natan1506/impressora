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
      <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Impressão Etiquetas para Pedido</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    `;
  }
}

export { TagInitial };