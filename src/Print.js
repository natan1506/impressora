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

    // function Popup(data) {
    //   var mywindow = window.open('', 'my div', 'height=400,width=600');
    //   mywindow.document.write('<html><head><title>my div</title>');
    //   mywindow.document.write('</head><body >');
    //   mywindow.document.write(data);
    //   mywindow.document.write('</body></html>');

    //   mywindow.document.close();
    //   mywindow.focus();

    //   mywindow.print();
    //   mywindow.close();

    //   return true;
    // }

    // function generateTag(volumes, weights, order){

    //   var dados="";

    //     var Etiqueta=window.document;
    //     dados=
          
    //   Popup(dados);
    // }
  },

  printNote() {

  }
}

export { Print }