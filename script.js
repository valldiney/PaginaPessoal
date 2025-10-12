function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag imagem
  const image = document.querySelector("#profile img")

  // substituir a imagem
      // se tiver light mode adicionar a imagem
      //se tiver sem light mode manter a imagem normal
  html.classList.contains("light")
    ? image.setAttribute("src", "./assets/mobile/avatar-light.png")
    : image.setAttribute("src", "./assets/mobile/avatar.png")
}
