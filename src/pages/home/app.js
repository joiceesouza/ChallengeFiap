const getId1 = document.getElementById('calcular')

const testeName = 'Joice Fernanda'
console.log(testeName);

document.getElementById('userName').innerText = 'José Carlos'
document.getElementById('userRegister').innerText = 'Gerente'
document.getElementById('userEmail').innerText = 'josecarlos@gmail.com'
document.getElementById('clientName').innerText = 'Lais Melo'
document.getElementById('clientNameOne').innerText = 'Jorge Junior'
document.getElementById('clientNameTwo').innerText = 'Fernando Manuel'

getId1.addEventListener('click', () => {
    console.log('teste do click')
    window.location.href = '/challengeFiap/ChallengeFiap/src/pages/hero/index.html'
})







