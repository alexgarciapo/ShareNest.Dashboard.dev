$('#advanced-search-plus').on('click', function(e){
    $('#advanced-search, #advanced-search-minus').fadeIn(1000);
    $('#advanced-search-plus').hide();
});

$('#advanced-search-minus').on('click', function(e){
    $('#advanced-search, #advanced-search-minus').hide();
    $('#advanced-search-plus').fadeIn();
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
//    document.getElementById("navbar").style.top = "0";
      $('.header-search').fadeOut(300);
  } else {
//    document.getElementById("navbar").style.top = "-50px";
      $('.header-search').fadeIn(300);
  }
  prevScrollpos = currentScrollPos;
}


$(document).on('change keyup', '.required', function(e){
    let Disabled = true;
    
    $(".required").each(function() {
        let value = this.value
        
        if ((value)&&(value.trim() !='')) {
        
            Disabled = false
        }else{
            Disabled = true
            return false
        }
    });

    
    if(Disabled){
        
        $('.submit').addClass('bg-gray-400');
        $('.submit').addClass('hover:bg-gray-600');
        $('.submit').addClass('disabled');
        $('.submit').removeClass('bg-orange-500');
        $('.submit').removeClass('hover:bg-orange-600');
    }else{
        
        $('.submit').removeClass('bg-gray-400');
        $('.submit').removeClass('hover:bg-gray-600');
        $('.submit').removeClass('disabled');
        $('.submit').addClass('bg-orange-500');
        $('.submit').addClass('hover:bg-orange-600');
    }
});
