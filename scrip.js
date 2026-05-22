const elementos = document.querySelectorAll('.anim');

const activar = () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', activar);
window.addEventListener('load', activar);
