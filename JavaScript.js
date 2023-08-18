  //Funcion para ocultar los formularios
  function mostrarFormulario(idFormulario) {
    const formularios = document.querySelectorAll('div[id^="ejercicio"]');
    formularios.forEach(formulario => {
      if (formulario.id === idFormulario) {
        formulario.style.display = 'block';
      } else {
        formulario.style.display = 'none';
      }
    });
  }


  //funcion para calcular el IMC de una persona
     function calcularBmi() {
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const bmi = calculateBmi(peso, altura);
        mostrarResultado(bmi);
    }
    
    function calculateBmi(peso, altura) {
        return peso / (altura * altura);
    }
    
    var resultElement = document.getElementById("result");
    function mostrarResultado(bmi) {
        if (bmi < 18.5) {
            resultElement.innerHTML = "Bajo de peso";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultElement.innerHTML = "Peso Normal";
        } else if (bmi > 24.9 && bmi <= 29.9) {
            resultElement.innerHTML = "Sobrepeso";
        } else {
            resultElement.innerHTML = "Obeso";
        }
    }

    //funcion para covertir numeros de likes a string
      function convertirLikes() {
        const numero = parseInt(document.getElementById("numeroLikes").value);
    
        if (numero >= 1000000) {
          document.getElementById("resultadoLikes").textContent = (numero / 1000000) + "M";
        } else if (numero >= 1000) {
          document.getElementById("resultadoLikes").textContent = (numero / 1000) + "K";
        } else {
          document.getElementById("resultadoLikes").textContent = numero.toString();
        }
      }
    

    //Validar contraseña
    function validarContraseña() {
      const usuario = document.getElementById("usuario").value;
      const contrasena = document.getElementById("contrasena").value;
      const validacion = validarContraseñaFunc(usuario, contrasena);
      mostrarResultadoValidacion(validacion);
    }
    
    function validarContraseñaFunc(usuario, contrasena) {
      if (usuario === "admin" && contrasena === "secreto") {
        return "Válida";
      } else {
        return "No válida";
      }
    }
    
    const validacionResult = document.getElementById("validacionResult");
    function mostrarResultadoValidacion(validacion) {
      validacionResult.textContent = `La contraseña es ${validacion}`;
    }





    // función para calcular impuestos
    function calcularImpuestos() {
        const edad = parseInt(document.getElementById("edad").value);
        const ingresos = parseFloat(document.getElementById("ingresos").value);
        const impuestos = calcularImpuestosFunc(edad, ingresos);
        mostrarResultadoImpuestos(impuestos);
    }
    
    function calcularImpuestosFunc(edad, ingresos) {
        if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
        } else {
        return 0;
        }
    }
    
    var impuestosResultElement = document.getElementById("impuestosResult");
    function mostrarResultadoImpuestos(impuestos) {
        impuestosResultElement.innerHTML = `Impuestos a pagar: $${impuestos}`;
    }


    //funcion para imprimir un arreglo
    function imprimirArreglo(arreglo) {
        const arregloResult = document.getElementById("arregloResult");
        arregloResult.innerHTML = ""; // Limpiar contenido previo
      
        arreglo.forEach((item, index) => {
          const li = document.createElement("li");
          li.textContent = `${index + 1}.--> ${item}`;
          arregloResult.appendChild(li);
        });
      }

    //funcion para contar caracteres
    function contarCaracteres() {
        const inputString = document.getElementById("inputString").value;
        const inputCaracter = document.getElementById("inputCaracter").value;
        const cantidad = numeroDeCaracteres(inputString, inputCaracter);
        mostrarResultado(cantidad);
      }
      
      function numeroDeCaracteres(string, caracter) {
        let contador = 0;
        for (let i = 0; i < string.length; i++) {
          if (string.charAt(i) === caracter) {
            contador++;
          }
        }
        return contador;
      }
      
      const caracteresResult = document.getElementById("caracteresResult");
      function mostrarResultado(cantidad) {
        caracteresResult.textContent = `El carácter aparece ${cantidad} veces en el string.`;
      }

      //funcion suma de arreglo
      function sumarArreglo() {
        const inputArray1 = document.getElementById("inputArray1").value;
        const numeros = inputArray1.split(",").map(Number);
        const suma = sumarArregloFunc(numeros);
        mostrarResultadoSuma(suma);
      }
      
      function sumarArregloFunc(numeros) {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
          suma += numeros[i];
        }
        return suma;
      }
      
      const sumaResult = document.getElementById("sumaResult");
      function mostrarResultadoSuma(suma) {
        sumaResult.textContent = `La suma de los elementos del arreglo es: ${suma}`;
      }
    
    //funcion para multiplicar arreglo
    function multiplicarArreglo() {
        const inputArray2 = document.getElementById("inputArray2").value;
        const numeros = inputArray2.split(",").map(Number);
        const multiplicacion = multiplicarArregloFunc(numeros);
        mostrarResultadoMultiplicacion(multiplicacion);
      }
      
      function multiplicarArregloFunc(numeros) {
        let multiplicacion = 1;
        for (let i = 0; i < numeros.length; i++) {
            multiplicacion = multiplicacion * numeros[i];
        }
        return multiplicacion;
      }
      
      const multiplicacionResult = document.getElementById("multiplicacionResult");
      function mostrarResultadoMultiplicacion(multiplicacion) {
        multiplicacionResult.textContent = `La multiplicación de los elementos del arreglo es: ${multiplicacion}`;
      }

    //funcion suma de arreglo por bloques
    function sumarArregloBloques() {
        const inputArray3 = document.getElementById("inputArray3").value;
        const numeros1 = inputArray3.split(",").map(Number);
        const inicio = parseInt(document.getElementById("inicio").value);
        const fin = parseInt(document.getElementById("fin").value);
        const suma1 = sumarArregloBloquesFunc(numeros1, inicio, fin);
        mostrarResultadoSuma(suma1);
      }
      
      function sumarArregloBloquesFunc(numeros1, inicio, fin) {
        let suma1 = 0;
        for (let i = inicio; i <= fin; i++) {
          suma1 += numeros1[i];
        }
        return suma1;
      }
      
      const sumaResulta = document.getElementById("sumaResulta");
      function mostrarResultadoSuma(suma1) {
        sumaResulta.textContent = `La suma de los elementos del arreglo en el rango es: ${suma1}`;
      }


    //funcion para encontrar valor maximo en un arreglo
    function encontrarMaximo() {
      const inputArray4 = document.getElementById("inputArray4").value;
      const numeros = inputArray4.split(",").map(Number);
      const maximo = encontrarMaximoFunc(numeros);
      mostrarResultadoMaximo(maximo);
    }
    
    function encontrarMaximoFunc(numeros) {
      let maximo = numeros[0];
      for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
          maximo = numeros[i];
        }
      }
      return maximo;
    }
    
    const maximoResult = document.getElementById("maximoResult");
    function mostrarResultadoMaximo(maximo) {
      maximoResult.textContent = `El número máximo en el arreglo es: ${maximo}`;
    }
    
    
      
      
      
      
      
      
      
  



    
    