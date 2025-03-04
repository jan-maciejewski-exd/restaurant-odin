export function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const card = document.createElement("div");
    content.appendChild(card);
    card.innerHTML = 'This is a description of a restaurant';
}