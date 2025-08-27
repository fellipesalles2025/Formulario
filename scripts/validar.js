const fields = Array.from(document.querySelectorAll('.field'))

const submitButton = document.querySelector('#btn-submit')


submitButton.addEventListener('click', (event) => {

    event.preventDefault();

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

        fields.forEach((field) => {

            field.style.border = '2px solid red'

        })

    } else {
        
        fields.forEach((field) => {
            
            if(field.type === 'radio') {

                if(field.checked) console.log(field.value)

            } else {

                console.log(field.value)

            }

            
        })
    }
    
})