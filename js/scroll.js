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

! function($) {
    $(document).ready(function() { 
        console.log('Paralax JQuery is working...');        
        
        //-- Parallax
        (function() {
            if($(window).width() > 1000 ){
                $(window).scroll(function(e){
                    var bg = $('.paralax');
                    var yPos = -($(window).scrollTop() / bg.data('speed'));
                    var coords = '50% '+ yPos + 'px';
                    bg.css({ backgroundPosition: coords});
                })
                
                $('.fade_in').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated fadeIn',
                    offset: 10
                });
                
                $('.fade_in_left').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated fadeInLeft',
                    offset: 10
                });

                $('.fade_in_right').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated fadeInRight',
                    offset: 10
                });

                $('.fade_in_up').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated fadeInUp',
                    offset: 10
                });
                
                $('.fade_in_down').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated fadeInDown',
                    offset: 10
                });
                
                
                $('.zoom_in').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated zoomIn',
                    offset: 10
                });
                
                $('.zoom_in_left').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated zoomInLeft',
                    offset: 10
                });
                
                $('.zoom_in_right').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated zoomInRight',
                    offset: 10
                });
                
                $('.zoom_in_down').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated zoomInDown',
                    offset: 10
                });
                
                $('.zoom_in_up').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated zoomInUp',
                    offset: 10
                });
                
                $('.roll_in').addClass('hidden').viewportChecker({
                    classToAdd: 'visible animated rollIn',
                    offset: 10
                });
            }
        })(); 
        
        $('.slimmenu').slimmenu(
        {
            resizeWidth: '3000',
            collapserTitle: 'Main Menu',
            animSpeed:'medium',
            indentChildren: true,
            childrenIndenter: '&raquo;'
        });
        
        //-- Scroll to       
        $('#scroll-btn').on('click', function(e){
            $.scrollTo('#scroll', 800);
        });
    });
}(jQuery);
    
  