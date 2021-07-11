const d = document

export function formValidation() {
   const $form = d.querySelector('.formulario__form')  
   const $inputs = d.querySelectorAll('.formulario__form [validar]')  
  

   $inputs.forEach(input => {
       const $p = d.createElement('p')
       $p.id = input.name
       $p.textContent = input.title
       $p.classList.add('formulario__input-error')
       input.parentElement.insertAdjacentElement('afterend', $p)
   })

   d.addEventListener('keyup', e => {
       if(e.target.matches('.formulario__form [validar]')) {
           let $input = e.target
           let pattern = $input.pattern || $input.dataset.pattern
           //console.log($input, pattern)

           if(pattern && $input.value !== "") {
               let regex = new RegExp(pattern)
               if(!regex.exec($input.value)) {
                    d.getElementById($input.name).classList.add('formulario__input-error-activo')
                    $input.parentElement.parentElement.classList.add('formulario__grupo-incorrecto')
                    $input.parentElement.parentElement.classList.remove('formulario__grupo-correcto')
                    $input.nextSibling.nextSibling.classList.add('bxs-x-circle')
                    $input.nextSibling.nextSibling.classList.remove('bxs-check-circle')
                } else {
                    d.getElementById($input.name).classList.remove('formulario__input-error-activo')
                    $input.parentElement.parentElement.classList.remove('formulario__grupo-incorrecto')
                    $input.parentElement.parentElement.classList.add('formulario__grupo-correcto')
                    $input.nextSibling.nextSibling.classList.remove('bxs-x-circle')
                    $input.nextSibling.nextSibling.classList.add('bxs-check-circle')
               }
           } 
               if ($input.value === "") {
                    d.getElementById($input.name).classList.remove('formulario__input-error-activo')
                    $input.parentElement.parentElement.classList.remove('formulario__grupo-incorrecto')
                    $input.parentElement.parentElement.classList.remove('formulario__grupo-correcto')
                } 
           }
   })

   d.addEventListener('submit', e => {
       e.preventDefault()
        const $nombre = d.getElementById('nombrel')
        const $correo = d.getElementById('correol')
        const $asunto = d.getElementById('asuntol')

        if($nombre.value === "" || $correo.value === "" || $asunto.value === "") {
            $inputs.forEach(input => {
                d.getElementById(input.name).classList.add('formulario__input-error-activo')
                input.parentElement.parentElement.classList.add('formulario__grupo-incorrecto')
                input.parentElement.parentElement.classList.remove('formulario__grupo-correcto')
                input.nextSibling.nextSibling.classList.add('bxs-x-circle')
                input.nextSibling.nextSibling.classList.remove('bxs-check-circle')
            })
        } else {
            const $response = d.querySelector('.formulario__mensaje-exito')
            //console.log($response)
     
            fetch('https://formsubmit.co/ajax/xaviergaspa123@gmail.com', {
                method: 'POST',
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json)
                $response.classList.add('formulario__mensaje-exito-activo')
                $response.textContent = json.message
                document.querySelectorAll('.formulario__grupo-correcto').forEach((icon) => {
                     icon.classList.remove('formulario__grupo-correcto')
                 })
                $form.reset()
            })
            .catch(err => {
                 console.log(err)
                 $response.classList.add('formulario__mensaje-exito-activo')
                 let message = err.statusText || 'Ocurrio un error al enviar. Intentalo nuevamente'
                 $response.textContent = `Error ${err.status}: ${message}`
            })
            .finally(() => {
                 setTimeout(() => {
                     $response.classList.remove('formulario__mensaje-exito-activo')
                     $response.textContent = ""
                 }, 3000)
             })

        }
   })

}