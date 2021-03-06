const Print = {
  printInitial({ volumeCount, weightCount, order }) {
    let date = new Date();
    $("#divPrint").empty();
    $("#divPrint").append(
      "<div width=400px style='min-height:200px' class='d-flex flex-column justify-content-between'>"+
        "<table border=0>"+
          "<tr height=50>"+
            "<td style='font-size:25px;font-weight:bold' >#PEDIDO: "+ order.toUpperCase() +"</td>"+
          "</tr>"+
          "<tr height=50>"+
            "<td style='font-size:20px;font-weight:400' >VOLUMES:  "+ volumeCount +"</td>"+
        "</tr>"+
          "<tr height=50>"+
            "<td style='font-size:20px;font-weight:400' >PESO(Kg): "+ weightCount +" Kg</td>"+
          "</tr>"+
        "</table>"+
        "<div class='row justify-content-end'>"+
          "<div class='col-auto'>"+
            "<span style='font-size:10px;'>"+ date.toLocaleString('pt-BR', { timeZone: 'UTC' }) +"</span>"+
          "</div>"+
        "</div>"+
      "</div>"
    );

    window.print();
  },

  printNote({remetente, destinatario, nota, pedido, volumes, media}) {
    $("#divPrint").empty();
    let dados = "";
    let date = new Date();

    for (let i = 0 ; i < volumes; i++) {
      dados += "<br>"+
      "<div width=400px style='min-height:200px' class='d-flex flex-column justify-content-between'>"+
        "<table border=0>"+
          "<tr >"+
            "<td style='font-size:15px;font-weight:bold' >REMETENTE:  <span style='font-size:15px;'>"+ remetente.toUpperCase() +"</span></td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-size:15px;font-weight:bold' >DESTINATÁRIO:  <span style='font-size:15px;'>"+ destinatario.toUpperCase() +"</span></td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-size:15px;font-weight:bold' >NOTA:  <span style='font-size:15px;'>"+ nota.toUpperCase() +"</span></tr></td>"+
          "<tr >"+
            "<td style='font-size:12px;font-weight:bold' >VOLUMES:  "+ parseInt(i + 1) +" / "+ volumes +"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-size:12px;font-weight:bold'>PESO(Kg):  "+ media +"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-size:12px;font-weight:bold'>#PEDIDO:  "+ pedido +"</td>"+
          "</tr>"+
        "</table>"+
        "<div class='row justify-content-end'>"+
          "<div class='col-auto'>"+
            "<span style='font-size:10px;'>"+ date.toLocaleString('pt-BR', { timeZone: 'UTC' }) +"</span>"+
          "</div>"+
        "</div>"+
      "</div>"
      ;
    }

    Print.popUp(dados)
  },

  popUp(dados){

    var mywindow = window.open('', 'Impressão de Etiqueta de Nota', 'height=400,width=600');
    mywindow.document.write('<html><head><title>Impressão de Etiqueta de Nota</title><link rel="stylesheet" href="assets/css/bootstrap.css" />');
    mywindow.document.write('</head><body onafterprint="self.close()">');
    mywindow.document.write(dados);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();

    mywindow.print();
    window.onafterprint = function(event) { mywindow.close() };

    return true;
  }
}

export { Print }