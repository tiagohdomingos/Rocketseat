function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // » modo explicado do toggle «
  // if(html.classList.contains('light')) {
  // html.classList.remove('light')
  // } else {
  //  html.classlist.add('light')}

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/defit cdr logo 2 para pagina light.png")
    img.setAttribute("alt", "Foto logo Defit light")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/defit cdr logo 2 para pagina.png")
    img.setAttribute("alt", "Foto logo Defit")
  }
}
