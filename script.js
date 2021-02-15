AOS.init();
const navBar = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const nav_uno = document.querySelector('#nav1')
navBar.addEventListener('click', function (){
menu.classList.toggle('menu2');
nav_uno.classList.toggle('open');
});
  const boton_guardar = document.querySelector('#btn-guardar');
  const input_text = document.querySelector('#nombre');
  const input_text_dos =  document.querySelector('#email');
  let validar = () => {
       let inputs_requeridos = document.querySelectorAll('#formulario [required]');
       let error = false;
       let texto = input_text.value;
       let correo = input_text_dos.value;
       let exp = /([A-Za-z\s]{6,20})(?!.*?[\W_0-9])/;
       let exp_dos = /^([a-z0-9_\.-]+)@([a-z\.]+)\.([a-z]{2,6})(?!.*?\W)/;
       for (let i = 0; i < inputs_requeridos.length; i++) {
           if (inputs_requeridos[i].value == '') {
               inputs_requeridos[i].classList.add('has-error');
               error = true;
           }
           
       }
        if((exp.test(texto) == false) || (exp_dos.test(correo) == false)) {
          input_text.classList.add('has-error');
          input_text_dos.classList.add('has-error');
          error = true;
          
        }

        if((exp.test(texto) == true) && (exp_dos.test(correo) == true)){
         input_text.classList.remove('has-error');
         input_text_dos.classList.remove('has-error');
         error = false;
         
        }

       return error;
   };
   let limpiar = () => {
         nombre.value = "";
         email.value = "";
     };
  let obtener_datos = () => {
  let error = validar();
     if (error) {
         Swal.fire({
             'title': 'Sus datos no se pudieron enviar',
             'text': 'Por favor revise todos los campos',
             'icon': 'warning'
         });
     } else {
             console.log(nombre.value);
             console.log(email.value);
             Swal.fire({
               
                 'title': 'Proceso realizado con éxito',
                 'text': 'Sus datos se enviaron adecuadamente',
                 'icon': 'success'
             }).then(() => {
                 limpiar();
             });
         }
     }
  if(boton_guardar){
    boton_guardar.addEventListener('click', obtener_datos);
  }