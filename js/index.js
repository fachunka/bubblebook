// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 160
    }
});

var score = 0;

$('.prepend-button').on('click', function() {
    // create new item elements
    var $items = getItemElement();
    // prepend elements to container
    $grid.prepend($items)
        // add and lay out newly prepended elements
        .isotope('prepended', $items);
    if ($(".grid-item:nth-child(2)").hasClass("grid-item--blue")) {
        score = score + 100;
        $('.score').html(score);

    } else {
        console.log("your score will go down");
        console.log(score);
        score = score - 100;
        $('.score').html(score);
    }
    console.log("your score will go up");
    console.log(score);
});

$('.end-button').on('click', function() {
    var $items = getItemElement();
    // remove clicked element
    $grid.isotope('remove', $('.grid-item:first-child'))
        // layout remaining item elements
        .isotope('layout');
    $grid.prepend($items)
        .isotope('prepended', $items);
    if ($(".grid-item:nth-child(2)").hasClass("grid-item--blue")) {
        score = score - 100;
        $('.score').html(score);

    } else {
        console.log("your score will go up");
        console.log(score);
        score = score + 100;
        $('.score').html(score);
    }
    console.log("your score will go down");
    console.log(score);
});

// make <div class="grid-item grid-item--width# grid-item--height#" />
function getItemElement() {
    var $item = $("<div class='grid-item'></div>");
    // add width and height class
    var bRand = Math.random();
    var yRand = Math.random();
    var blueClass = bRand >= 0.5 ? 'grid-item--blue' : '';
    // var yellowClass = yRand >= 0.95 ? 'grid-item--yellow' : '';
    $item.addClass(blueClass);
    // $item.addClass(yellowClass);
    return $item;
}

   $('#showMsg').hide();

var sec = 30;
var timer = setInterval(function() {
   $('#hideMsg span').text(sec--);

   if (sec == -1) {
      $('#hideMsg').fadeOut('fast');
      clearInterval(timer);
    $('#showMsg').fadeIn('slow');
   }
}, 1000);



$('.retry').on('click', function() {
window.location.reload();
});


// var position = 1000;
//
// $(document).click(function() {
//     count();
// });
//
//
// function count() {
//     if (position > 900) {
//         $('.counter').text(position);
//         position--;
//         setTimeout(function() {
//             count();
//         }, 500);
//     }
//     else  {
//       confirm('Successful Message')
//           window.location.reload();
//     }
// }
