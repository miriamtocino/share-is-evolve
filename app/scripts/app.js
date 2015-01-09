"use strict";

document.addEventListener("DOMContentLoaded", function(event) {

    // Resize Window Height and apply to header
    function resize()
    {
        var window_height = window.innerHeight;
        document.getElementById("header").style.height = window_height + "px";
    }
    resize();

    window.onresize = function() {
        resize();
    };

    // Change background image of logo div
    var logo = document.getElementById('logo-animated'); // Get the logo div
    var images = new Array(
        'url(../images/logo-1.png)',
        'url(../images/logo-2.png)',
        'url(../images/logo-3.png)',
        'url(../images/logo-4.png)',
        'url(../images/logo-5.png)'
        );                                      // used to store all images
    var arrayLength = images.length;            // Get the length of images array
    var timeout;                                // Used to store the timer
    var currentIndex = 0;                       // Index number of current image

    logo.style.backgroundImage = images[0];

    // Function to move the images
    function move(newIndex) {                   // Creates the image from old to new one

        advance();                              // When image moves, call advance() again

        if (currentIndex === newIndex) {        // If current image is showing, then do nothing
            return;
        }

        if (newIndex > currentIndex) {          // If new item > current
          logo.style.backgroundImage = images[newIndex];  // Change the background image
        }
        currentIndex = newIndex;                // Set currentIndex to new image
    }

    function advance() {                        // Sets a timer between images

        clearTimeout(timeout);                  // Clear time stored in timeout
        // Start timer to run an anonymus function every 4 seconds
        timeout = setTimeout(function() {
            if (currentIndex < (arrayLength - 1)) {     // If not the last image
                move(currentIndex + 1);                 // Move to next image
            } else {                                    // Otherwise
                move(0);                                // Move to the first image
            }
        }, 3000);                                       // Miliseconds timer will wait
    }

    advance();
});

