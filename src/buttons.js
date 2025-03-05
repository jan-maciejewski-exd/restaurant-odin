export function renderActive(event) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove('active');
        event.target.classList.add('active');
    });
}