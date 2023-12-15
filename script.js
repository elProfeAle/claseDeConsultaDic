let titulo =
    document.querySelector('h1')


let botonImagen =
    document.querySelector('#botonImagen')

let botonReset =
    document.querySelector('#botonReset')
botonReset.style.fontSize = '30px'

let imagenSeleccion = 
document.querySelector('img')

botonImagen.onclick =
    function () {
        //alert('Muy bien')
        console.log('tirar bomba')
        botonImagen.style.backgroundColor = 'lightblue'
        botonImagen.style.color = 'white'
        botonImagen.style.fontSize = '20px'
        imagenSeleccion.src =
        'seleccion2.jpg'
    }
botonReset.onclick =
    function () {
        //alert('Muy bien')
        console.log('no tirar bomba')
        botonImagen.style.backgroundColor = 'white'
        botonImagen.style.color = 'black'
        botonImagen.style.fontSize = '11px'
        imagenSeleccion.src =
        'seleccion.jpg'
    }
  
/*
Como empezar el examen 
1) Creamos el archivo html y css
2) Incluimos el archivo .js en HTML fuera de la etiqueta body.
3) Colocar identificadores o clases a los elementos HTML. El que quieran
4) En el archivo js, verificar lo siguiente: 
    a) Los identificadores, es decir, id, deben ser llamados con el 
    hashtag #. Ej: let text = document.querySelector('#desc')
    b) Las clases, es decir, class, deben ser llamados con el 
    punto . . Ej: let text = document.querySelector('.heading')
    c) Los elementos HTML, deben ser llamados por su nombre. 
    Ej: let text = document.querySelector('h1')
5) Verificar que las variables utilizadas, esten creadas con la palabra
reservada let. 
6) Verificar que los elementos esten bien escritos, mayúsculas y minúsculas. 
7) LEER LA TEORÍA 
*/