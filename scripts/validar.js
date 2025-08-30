const fields = Array.from(document.querySelectorAll('.field'))

const submitButton = document.querySelector('#btn-submit')

const errorMessage = document.querySelector('#msg')


submitButton.addEventListener('click', (event) => {

    const isEmpty = fields.some((field) => {
    
        if(field.type === 'radio'){
            
            return false;

        } else {
            
            return field.value.trim() === '';
        }
    })


    if(isEmpty){
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        event.preventDefault();

        errorMessage.classList.add('error')

        errorMessage.textContent = 'Por favor, preencha todos os campos'


        fields.forEach(() => {

            setTimeout(() => {

            errorMessage.classList.remove('error')

            errorMessage.textContent = ''

            }, 3000)
        })

    } else {
        
        fields.forEach((field) => {
            
            if(field.type === 'radio') {

                if(field.checked) console.log(field.value)

            }
            
        })
    }
    
})