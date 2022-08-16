function QR(){
    
    var Qr = document.getElementById("file").files[0];
    var readQr = new FileReader();

    if (file) {
        readQr.readAsDataURL(Qr);
        readQr.onloadend = function () {

            document.getElementById("imgQr").src = readQr.result;
            const imagen=document.getElementById("imgQr");
        }
    }
}
    document.getElementById('urlImag').addEventListener("change", 
    function(){     
        document.getElementById('imgQr').src=this.value;
    });

/* ---------------------------------------------- */

function Model(){

    var Model = document.getElementById("fileModel").files[0];
    var readModel = new FileReader();

    if (file) {
        readModel.readAsDataURL(Model);
        readModel.onloadend = function () {

            document.getElementById("imgModel").src = readModel.result;
            const imagen=document.getElementById("imgModel");
        }
    }
}
    document.getElementById('urlImag').addEventListener("change", 
    function(){ 
        document.getElementById('imgModel').src=this.value;
    });

/* ---------------------------------------------- */

function arPantalla(){
    
    if(document.getElementById("fileModel").files[0].name == 'Creeper.jpg'){

        var div = document.getElementById("camera");
        div.insertAdjacentHTML("beforeend",'<iframe src="Model-Creeper.html"></iframe>');
    }

    else if(document.getElementById("fileModel").files[0].name == 'Totoro.jpg'){

      var div = document.getElementById("camera");
      div.insertAdjacentHTML("beforeend",'<iframe src="Model-Totoro.html"></iframe>');

    }

    else if(document.getElementById("fileModel").files[0].name == 'Unicorn.jpg'){

      var div = document.getElementById("camera");
      div.insertAdjacentHTML("beforeend",'<iframe src="Model-Unicorn.html"></iframe>');

    }
    else{
      alert("Modelo no encontrado");
    }
}  