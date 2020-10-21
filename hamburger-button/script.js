const button = document.getElementById('button')
const navigation = document.getElementById('navigation')

button.addEventListener('click', () => {
    navigation.classList.toggle('active');
    button.classList.toggle('active');
})