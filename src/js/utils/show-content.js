function showContent(id, content) {
  document.getElementById("root").innerHTML += `
<div class="exercise">
  <h2 class="heading">Ejercicio ${id}</h2>
  <div onclick="toggleHide(${id})" id="toggle-${id}" class="toggle">Mostrar resultado</div>
  <div id="exercise-${id}" class="hidden">
  <pre>${JSON.stringify(content, undefined, 2)}</pre>
  </div>
</div>
`;
}

function toggleHide(id) {
  const toggleEl = document.getElementById(`toggle-${id}`);
  const contentEl = document.getElementById(`exercise-${id}`);
  const isHidden = contentEl.className.length > 0;
  console.log(isHidden);
  toggleEl.innerHTML = isHidden ? "Ocultar resultado" : "Mostrar resultado";
  contentEl.className = isHidden ? "" : "hidden";
}

function transformText(text){
  text = text.toLowerCase().replaceAll(" " , "");
  return text;  
}

function replaceText(text){
const accent = "áéíóúÁÉÍÓÚ";
const vowels = "aeiouAEIOU";
for (let i = 0; i < accent.length; i++ ){
text = text.replaceAll(accent.charAt(i) , vowels.charAt(i));
}
return text;
}

function reverseText(text){  
  let text2 = "";  
  for (let i = text.length -1 ; i >= 0; i-- ){
      text2 += text.charAt(i);
  }
  return text2;
}


