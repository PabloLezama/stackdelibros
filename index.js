const conjuntoDeLibros = []
var botonAñadir = document.getElementById("anadir");
botonAñadir.addEventListener("click", clickAñadir)
var botonEliminar = document.getElementById("quitar");
botonEliminar.addEventListener("click", clickEliminar);
var boton



function clickAñadir(){
    var nombreLibroAgregado = document.getElementById('librosUsuario').value;
    
    if (nombreLibroAgregado === "") {
        alert("Escriba el nombre de su libro");
    } else {
        document.getElementById("librosUsuario").value = "";
        conjuntoDeLibros.push(nombreLibroAgregado);
        toggleCartel();
        console.log(conjuntoDeLibros);
        insertarLibros();
    }
}

function clickEliminar(){
    var nombreLibroAgregado = document.getElementById('librosUsuario').value;

        document.getElementById("librosUsuario").value = "";
        conjuntoDeLibros.pop(nombreLibroAgregado);
        toggleCarteEliminadol();
        console.log(conjuntoDeLibros);
        insertarLibros();
    }


function toggleCartel() {
    var divAgregado = document.getElementById('libroAgregado');
    var divEliminado = document.getElementById('libroEliminado');
    var nombreLibroAgregado = document.getElementById('librosUsuario').value;
    
    // Si el div agregado está visible, lo oculta y muestra el div eliminado
    if (nombreLibroAgregado == " " && divAgregado.style.display === 'none') {
        divAgregado.style.display = 'block';
        divEliminado.style.display = 'none';

    } else { // Si el div agregado no está visible, lo muestra y oculta el div eliminado
        divAgregado.style.display = 'block';
        divEliminado.style.display = 'none';
    }
}
function toggleCarteEliminadol() {
    var divAgregado = document.getElementById('libroAgregado');
    var divEliminado = document.getElementById('libroEliminado');
    
    // Si el div eliminado está visible, lo oculta y muestra el div agregado
    if (divEliminado.style.display === 'none') {
        divEliminado.style.display = 'block';
        divAgregado.style.display = 'none';
    } else { // Si el div eliminado no está visible, lo muestra y oculta el div agregado
        divEliminado.style.display = 'block';
        divAgregado.style.display = 'none';
    }
}


function insertarLibros(){
    let modeloTabla='<table>';
    modeloTabla = modeloTabla+'<tr> <th id="tablaInserta">Lista de libros</th> </tr>';
    conjuntoDeLibros.forEach(libro => {
      modeloTabla=modeloTabla+'<tr>';
        modeloTabla=modeloTabla+'<td>'+libro+'</td>'
        modeloTabla=modeloTabla+'</tr>';
    });
    modeloTabla = modeloTabla+ '</table>';
    document.getElementById("lista").innerHTML=modeloTabla;
}





