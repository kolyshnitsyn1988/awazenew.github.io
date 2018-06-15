$(document).ready(function(){
    
    // навигационное меню //
    $(".menu-icon").click(function(e){
        e.preventDefault();
        $this = $(this)
        if($this.hasClass("is-opened")){
            $this.addClass("is-closed").removeClass("is-opened");
        }else{
            $this.removeClass("is-closed").addClass("is-opened");
        }
    });
    $(".menu-icon-cross").click(function(){
        if ($(".top_mnu").is(":visible")){
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
// навигационное меню //

// всплывающее окно
    $(".popup").magnificPopup();
    $(".popup_content").magnificPopup({
      type:"inline",
      midClick: true
    })
    $("a").mPageScroll2id({
        offset: 50,
        speed: 100
    });


// всплывающее окно


// анимация элементов формы //
    $(".field-input").focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });
    $(".field-input").blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

    // анимация элементов формы //
    
    // parallax
   
    // parallax

    
    
    
// сортировка списка портфолио //
    $('#portfolio_wrapp').mixItUp();
// сортировка списка портфолио //

// элементы списка портфолио //
    $('.projects_list_wrapp').click(function(){
        $('.projects_list_wrapp li').removeClass("active");
        $(this).addClass("active");
    });
    
// элементы списка портфолио //




// фиксированное меню ///////////////////////////
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header_wrapp = document.getElementsByClassName(".header_wrapp");
            if (distanceY > shrinkOn) {
                $(".header_wrapp").addClass("smaller");
            } else {
                if ($(".header_wrapp").has("smaller")) {
                $(".header_wrapp").removeClass("smaller");
                }
            }
        });
    }
    window.onload = init();

// фиксированное меню ///////////////////////////

    $(".owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        slideSpeed: 1400,
        paginationSpeed: 400,
        singleItem: true
    });
    
})
