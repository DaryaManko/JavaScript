const input1 = document.querySelector('#val1')
console.dir(input1)
console.log(input.value)
input1.value = 20

//pobierz div-a
const pojemnikNaWyniki = document.querySelector('.wyniki')
pojemnikNaWyniki.textContent=input1.value

//reagowanie na klikniecie
const przeliczBtn = document.querySelector('#przelicz')
przeliczBtn.addEventListener('click',()=>{
    console.log('user wdusil buttona')
})