console.log("Conectado");

// Función para obtener una recomendación de ropa según la temperatura
function obtenerRecomendacion(temperatura) {
  if (temperatura >= 30) {
    return "Hace mucho calor. Te recomendamos usar ropa ligera, como camisetas y pantalones o shorts cortos.";
  } else if (temperatura >= 20 && temperatura < 30) {
    return "El clima es agradable. Puedes usar camisetas de manga corta.";
  } else if (temperatura >= 10 && temperatura < 20) {
    return "Está fresco. Te recomendamos usar un canguro o campera ligera.";
  } else {
    return "Hace frío. Es mejor que uses ropa abrigada, como un buzo o campera.";
  }
}

// Simulador interactivo que interactúa con el usuario para obtener la temperatura actual y el número de iteraciones deseadas.
// Utiliza un bucle "for" para simular cambios de temperatura y muestra la recomendación de ropa para cada iteración en la consola.
function simularClima() {
  let temperatura = prompt("Ingresa la temperatura actual:");
  let numIteraciones = prompt("Ingresa el número de iteraciones:");

  for (let i = 0; i < numIteraciones; i++) {
    console.log("Iteración " + (i + 1) + ":");
    console.log("Temperatura: " + temperatura + "°C");
    console.log(obtenerRecomendacion(temperatura));
    console.log("---------------------------");
    temperatura += Math.floor(Math.random() * 5) - 2; // Simulación de cambio de temperatura
  }
}

// Ejecutar el simulador
simularClima();



