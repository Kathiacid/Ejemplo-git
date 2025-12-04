const boton1=document.getElementById('top')

boton1.addEventListener('click',()=>{
    window.scrollTo({
        top:500,
        behavior:'smooth'
    })
})

const boton2=document.getElementById('bot')

boton2.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})