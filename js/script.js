// Scroll to top function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scrollButton").style.display = "block";
    } else {
        document.getElementById("scrollButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}

// Image pop-up
$(document).ready(function() {

    $(".popup_image").on('click', function() {
      w2popup.open({
        title: "<div>" + $(this).attr('alt') + "</div>",
        body: '<div class="w2ui-centered"><img src="' + $(this).attr('src') + '"></img></div>',
        width: '800',
        height: '600',
        showMax: 'true',
        color: '#000',
        keyboard: 'true',
        opacity: '0.5',
      });
    });
  
  });