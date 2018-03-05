function resizeHeaderOnScroll() {
  console.log('Scroll')
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 20,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
  
}
console.log('Working...')
window.addEventListener('scroll', resizeHeaderOnScroll);


/*
! function($) {
    $(document).ready(function(){
        console.log('working...')
    });
}(jQuery);
*/