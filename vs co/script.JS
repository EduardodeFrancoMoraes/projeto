function toggleMode() {
 const html = document.documentElement
  html.classList.toggle('light') 
 
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
img.setAttribute('src', './assets/assets/avatar-light.png')
 } else {
img.setAttribute('src', './assets/assets/avatar.png')
 }

   const alt = document.querySelector("#profile")
   if(html.classList.contains('light')) {
   alt.setAttribute('alt', 'foto de miky brito usando oculos e camisa preta e fundo laranga')
   } else {
   alt.setAttribute('alt', 'foto de miky brito usando oculos de sol com blusa preta e camiseta preta no fundo azul e roxo')
   }


}

