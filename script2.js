let edadUsuario =
Number(prompt('Ingresa tu edad'))


let texto = 
document.querySelector('p')
texto.style.fontSize = '80px'

if (edadUsuario >= 18) {
    texto.textContent = '✔️'    
} else {
    texto.textContent = '❌'  
}