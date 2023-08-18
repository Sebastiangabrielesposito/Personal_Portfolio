const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit',async (e) =>{
    e.preventDefault()

    

    

     

    const data = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        address: document.querySelector('input[name="address"]').value,
        number: document.querySelector('input[name="number"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(data);
        if(response.ok){
            const alertSuccess = Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your message has been sent successfully',
                showConfirmButton: false,
                timer: 3000,
                // showClass: {
                //     popup: 'animate__animated animate__fadeInDown faster'
                // }
              }).then(()=>{
                contactForm.reset()
            })
        }else{
            const alertError = Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your message has not been sent',
                showConfirmButton: false,
                timer: 3000
              }).then(()=>{
                  contactForm.reset()
              })
        }

    } catch (error) {
        console.log('Error', error); 
        const alertWentWrong = Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong!',
            showConfirmButton: false,
            timer: 3000
        }).then(()=>{
            contactForm.reset()
        })
    }
})