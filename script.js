//Accordian JavaScript Code.
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icons = accordian.querySelector('.icon');
    const answers = accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
        // icons.classList.toggle('active');
        // answers.classList.toggle('active');

        if(icons.classList.contains('active')){
            icons.classList.remove('active');
            answers.style.maxHeight=null;
        }
        else{
            icons.classList.add('active');
            answers.style.maxHeight=answers.scrollHeight+'px';
        }
    })
})