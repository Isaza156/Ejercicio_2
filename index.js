var total = 0
var participantes = 5
var artefactos = 0
var puntos = 0
var acumulador = 0
var nombre = ""
var i = 0
var n = 0

for (i = 0; i < participantes; i++){
    nombre = prompt("Digite su nombre")
    artefactos = prompt("Digite la cantidad de artefactos")

for (n = 0; n < artefactos; n++){
    puntos = prompt("Digite la cantidad de puntos del artefacto " + (n+1))
    acumulador += puntos
}
    document.write("La cantidad de puntos de " + nombre + " fue de " + acumulador + "<br>")

if (acumulador >= 250){
    document.write("El participante " + nombre + " cumplió con el minimo de puntos" + "<br>")

} else {
    document.write("El participante " + nombre + " no cumplió con el minimo de puntos" + "<br>")
}
    total += acumulador
    acumulador = 0
}
if (total >= 1250){

    document.write("Se cumplió el objetivo de 1250 puntos y liberaron a Will" + "<br>")

} else {

    document.write("El pueblo de Hawkins esta condenado a su destrucción" + "<br>")
}
