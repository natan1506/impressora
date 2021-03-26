const Print = {
  printInitial({ volumeCount, weightCount, order }) {
    $("#divPrint").empty();
    $("#divPrint").append(
      "<table border=0 width=400px>"+
        "<tr height=50>"+
          "<td style='font-family:Calibri;font-size:15px;font-weight:bold' >#PEDIDO: "+ order +"</td>"+
        "</tr>"+
        "<tr height=50>"+
          "<td style='font-family:Calibri;font-size:10px;font-weight:bold' >VOLUMES: "+ volumeCount +"</br>PESO(Kg):"+ weightCount +"</td>"+
        "</tr>"+
      "</table>"
    );

    window.print();
  },

  printNote({remetente, destinatario, nota, pedido, volumes, media}) {
    $("#divPrint").empty();

    for (let i = 0 ; i < volumes; i++) {
      $("#divPrint").append(
        "<br>"+
        "<table border=0 width=400px>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:15px;font-weight:bold' >REMETENTE:"+remetente+"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:15px;font-weight:bold' >DESTINATÁRIO:"+destinatario+"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:15px;font-weight:bold' >NOTA:  "+nota+"</tr></td>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:10px;font-weight:bold' >VOLUMES:  "+ parseInt(i + 1) +" / "+ volumes +"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:10px;font-weight:bold'>PESO(Kg):"+ media +"</td>"+
          "</tr>"+
          "<tr >"+
            "<td style='font-family:Calibri;font-size:10px;font-weight:bold'>#PEDIDO:"+ pedido +"</td>"+
          "</tr>"+
        "</table>"
      );
    }

    window.print();

  }
}

export { Print }