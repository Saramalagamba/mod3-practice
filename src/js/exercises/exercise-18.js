/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/
function transformhashtag(text) {
    textWhithoutaccent = replaceText(text);
    textHashtag = "#" + textWhithoutaccent.charAt(0).toUpperCase();
    console.log(textHashtag);
    for (i = 1; i < textWhithoutaccent.length; i++) {
        if (textWhithoutaccent.charAt(i-1) === " ") {
            textHashtag += textWhithoutaccent.charAt(i).toUpperCase();
        } else {
            textHashtag += textWhithoutaccent.charAt(i).toLowerCase();
        }
    }
    return textHashtag.replaceAll(" " , "");
}
showContent(18, transformhashtag("Programando en Javascript"));