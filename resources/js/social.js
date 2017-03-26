var socialIcons = document.getElementById("social");
var items = socialIcons.getElementsByTagName("i");
window.onresize = window.onload = function () {
    if (window.innerWidth >= 770){
      for (var i = 0; i < items.length; i++)  {
        if(items[i].classList.contains('fa-1x')) {
          items[i].className = items[i].className.replace
          ( /(?:^|\s)fa-1x(?!\S)/g , 'fa-2x' )
        }
      }
    } else {
      for (var i = 0; i < items.length; i++)  {
        if(items[i].classList.contains('fa-2x')) {
          items[i].className = items[i].className.replace
          ( /(?:^|\s)fa-2x(?!\S)/g , 'fa-1x' )
        }
      }
    }
  }
