function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag imagem
  const image = document.querySelector("#profile img")

  let modeLight = html.classList.contains("light")
  // substituir a imagem
  // se tiver light mode adicionar a imagem
  //se tiver sem light mode manter a imagem normal
  modeLight
    ? image.setAttribute("src", "./assets/mobile/avatar-light.png")
    : image.setAttribute("src", "./assets/mobile/avatar.png")

  modeLight
    ? image.setAttribute("alt","Foto de Valdiney sorrindo usando óculos e camisa preta barba e fundo restaurante na praia")
    : image.setAttribute("alt","Selfie de Valdiney neutro usando óculos e camisa branca com o nascer do sol no fundo")
}
