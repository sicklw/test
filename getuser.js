const elementoUser = document.querySelector("body > nav.navigation-container > ul > li.navigation-item.navigation-right-side-item.has-items > a > span").innerText;
const elementoAvatar = document.querySelector("body > header > div > div.avatar");
const avatarComputado = window.getComputedStyle(elementoAvatar);

const backgroundImage = avatarComputado.backgroundImage;

const regex = /figure=([^&]+)/;
const regex2 = /url\("([^?]+)\?figure=/;

const match = backgroundImage.match(regex);
const match2 = backgroundImage.match(regex2);

const conteudo = match ? match[1] : null;
const linkBeforeFigure = match2 ? match2[1] : null;

localStorage.setItem("nickname", elementoUser);
localStorage.setItem("avatar", conteudo);
localStorage.setItem("linkAPI", linkBeforeFigure);
