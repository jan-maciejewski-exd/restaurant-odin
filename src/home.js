export function loadHomePage() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const logo = document.createElement('img')
    content.appendChild(logo)
    logo.src = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/the-prancing-pony-in-the-lord-of-the-rings-the-fellowship-of-the-rings.jpg' 

} 