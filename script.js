console.log('hi')

const recipeIngs = document.querySelector('.recipe-ingredients')

recipeIngs.addEventListener('click', (e)=>{
    console.log()
    e.target.closest('.ingredient').classList.toggle('checked')
})