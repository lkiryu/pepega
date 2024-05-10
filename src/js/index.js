const buttonYes = document.querySelector('.button-yes')
const buttonNo = document.querySelector('.button-no')
const sectionQuestion = document.querySelector('.question-section')
const sectionResponse = document.querySelector('.response-section')
const relogin = document.querySelector('.relogin')

buttonNo.addEventListener('mouseover', () =>{
    buttonNo.style.position = "absolute"
    buttonNo.style.top = Math.random()*90 + "vh"
    buttonNo.style.left = Math.random()*90 + "vw"
})

relogin.addEventListener('mouseover', ()=>{
    relogin.style.top = Math.random()*90 + "vh"
    relogin.style.left = Math.random()*90 + "vw"
})

buttonYes.addEventListener('click', () =>{
    sectionQuestion.classList.add('none')
    sectionResponse.classList.remove('none')
})