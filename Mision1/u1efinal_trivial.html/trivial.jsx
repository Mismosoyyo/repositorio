    
    //variables de lo que necesitamos
    
    var aciertos=0;
    var fallos=0;
    var geografia = "geografia ";
    var arte = "arte ";
    var espectaculo = "espectaculo ";
    var historia = "historia ";
    var cie = "cie ";
    var dep = "dep";
//hace un bucle donde si los acertos son menores de 4 y fallos menor de 3 sigue preguntandote de que quieres hacer la pregunta
    while(aciertos < 4 && fallos < 3) {
//aqui pregunta al usuario con que tema quiere empezar 
        var elec = prompt("Elige un tema: (" + geografia + arte + espectaculo + historia + cie + dep + "):");

        switch(elec) {
            case 'geografia': var geog = prompt("Capital de Francia:");
                        if(geog=='Paris') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;
                        }
                        geografia = "";// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        break;
            case 'arte': var art=prompt("¿Quién pintó Las Meninas?");
                        if(art=='Diego Velazquez') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;
                        }
                        arte="";// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        break;
            case 'espectaculo': var espectaculos = prompt("Obra famosa de teatro en gran via:");
                        if(espectaculos=='Rey leon') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;
                        }
                        espectaculo = "";// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        break;
            case 'historia': var histo=prompt("¿Quién descubrió Ámerica?:");
                        if(histo=='Cristobal Colon') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;
                        }
                        historia = "";// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        break;
            case 'cie': var ciencias=prompt("¿Qué es H2O?");
                        if(ciencias=='agua') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        }
                        cie="";
                        break;
            case 'dep': var deportes=prompt("¿Qué deporte practica Messi?");
                        if(deportes=='futbol') {// aqui es la respuesta correcta 
                            aciertos++;
                        }else {
                            fallos++;
                        }
                        dep="";// aqui una vez echo la pregunta la borra de la variable para q no te pregunte otra vez por ella
                        break;
            default: alert("No es una opción"); break;
            }
    }

    if(aciertos> 3){// si los aciertos son mayor a 3 ganas sino pierdes
        alert("Tienes "+aciertos+" aciertos, has ganado!");
    }else {
        alert("oooohhhh... has perdido,"+fallos);
    }