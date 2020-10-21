const button = document.getElementById('button');
const container = document.getElementById('container');

button.addEventListener('click',() => {
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = 'This notification is awesome!';

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
})