const menuBtn = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".site-nav");
menuBtn.addEventListener("click", function () {
    topNav.classList.toggle("site-nav-open");
    menuBtn.classList.toggle("menu-open");
});

let timerInterval;
Swal.fire({
  title: 'Bienvenidos a mi Portafolio',
  html: 'Este mensaje se cerrara en <b></b> milisegundos.',
  timer: 8000,
  timerProgressBar: true,
  customClass: 'swal-wide',
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})