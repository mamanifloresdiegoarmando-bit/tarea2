function saludo()
{
    let nombre1 = document.getElementById("nombres").value;
    let apellido1 = document.getElementById("apellidos").value;

    document.getElementById("mensaje").textContent =
        "Hola " + nombre1 + " " + apellido1 + ", buenas tardes";
}


function calculo_nota()
{
    let teoria = parseFloat(document.getElementById("nota_teorica").value);
    let practica = parseFloat(document.getElementById("nota_practica").value);

    let suma = teoria + practica;

    let nombre1 = document.getElementById("nombres").value;
    let apellido1 = document.getElementById("apellidos").value;

    document.getElementById("nota_sumada").textContent =
   "El promedio de " + nombre1 + " " + apellido1 + " es: " + suma;
}