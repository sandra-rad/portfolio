jQuery(document).ready(function($) {
	$( ".menu-wrapper" ).click(function() {
        $(".hello-message-wrapper").hide();
        $(".menu-wrapper").hide();
        $(".span-cv").hide();
        $(".grid-container").css( "grid-template-columns", "10% 87% 3%" );
        $(".four").css( "background", "linear-gradient(to right,  #ffffff 0%,#ffffff 80%,#ffb914 80%,#ffb914 100%)" );
      
        $(".exit-wrapper").show();
        $(".menu-list").show();
      });
});