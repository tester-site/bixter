var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},

    menu: function() {
      $('.header_block_menu').on('click',function(e){
          e.preventDefault();
          $(this).toggleClass('open');
          $('.header_block_mob').toggleClass('open');
      })
    },
	
    main: function() {
        $('.faq_item').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('open')) {
                $(this).addClass('open').find('.faq_text').slideDown();
            }else {
                $(this).removeClass('open').find('.faq_text').slideUp();
            }
        });
        
        let a = 'Показать еще',
            b = 'Свернуть';
        
        if($('.faq_more').text() != a && $('.faq_more').text() != b ) {
            $('.faq_more').text(a);
        }
        
        $('.faq_more').on('click',function(){
            
            let a = 'Показать еще',
                b = 'Свернуть';
            
            if($(this).text() == a) {
                $(this).text(b);
                $('.faq_item:not(:visible)').slideDown()
            }else if($(this).text() == b) {
                $(this).text(a);
                $('.faq_item:nth-child(4) ~ *').slideUp()
            }
        })
        
        let slider = $('.slider_block');
        slider.owlCarousel({
            items: 3,
            loop:true,
            margin:30,
            nav: false,
            responsive : {
                0 : {
                    items: 1,
                },

                480 : {
                    items: 1,
                },

                768 : {
                    items: 2,   
                },
                900: {
                    items: 3
                },
            }

        });
        
        $('.slider_nav:not(.slider_nav_blog) > a').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('slider_left')) {
                slider.trigger('prev.owl.carousel');
            }else {
                slider.trigger('next.owl.carousel');
            }
        });
        
        
        let slider2 = $('.section_more_slider');
        slider2.owlCarousel({
            items: 3,
            loop:true,
            margin:30,
            nav: false,
            responsive : {
                0 : {
                    items: 1,
                },

                480 : {
                    items: 1,
                },

                768 : {
                    items: 2,   
                },
                900: {
                    items: 3
                },
            }

        });
        
        $('.slider_nav.slider_nav_blog > a').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('slider_left')) {
                slider2.trigger('prev.owl.carousel');
            }else {
                slider2.trigger('next.owl.carousel');
            }
        });
//        
        
        
        
        
        $('input[type="tel"]').mask('+38(000)000-00-00');
        
        $('.worth_tab a').on('click',function(e){
            e.preventDefault();
            $('.worth_tab a, .worth_item').removeClass('active');
            $(this).addClass('active');
            $('.worth_item').eq($(this).index()).addClass('active');
        });
        
        
        if($('.footer_top').length) {

        
            function getScrollTop() {
                
                var scrOfY = 0;
                if( typeof( window.pageYOffset ) == "number" ) {
                    scrOfY = window.pageYOffset;
                }else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
                    scrOfY = document.body.scrollTop;
                }else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
                    scrOfY = document.documentElement.scrollTop;
                }
                return scrOfY;
                
            }
            
            let footer_top = $('footer').position().top + $('.footer_top').innerHeight() ;
            
            $(window).scroll(function() {
                fixPaneRefresh();
            });

            function fixPaneRefresh(){
               
                let top  = getScrollTop() + ($(window).height())  ;
                if (top > footer_top) {
                    $('.footer_top')
                        
                        .removeClass('fixed');
                }else {
                    $('.footer_top').addClass('fixed');
                }
                
            }
        }
    },
};

$(function() {
	Common.init();
});