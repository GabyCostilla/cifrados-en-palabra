// Función para convertir una frase a Base64
function fraseABase64(frase) {
    const base64 = Buffer.from(frase).toString('base64');
    return base64;
  }
  
  // Función para decodificar una cadena Base64 a frase original
  function base64AFrase(base64) {
    const fraseOriginal = Buffer.from(base64, 'base64').toString('utf-8');
    return fraseOriginal;
  }
  
  // Ejemplo de uso
  const fraseOriginal = "Zaiby";
  const fraseEnBase64 = fraseABase64(fraseOriginal);

  console.log("Frase en Base64:", fraseEnBase64);
  