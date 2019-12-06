$(document).ready(function () {
    initialize();

    $("button").hover(
        function () {
            $(this).toggleClass("hovered");
        },
        function () {
            $(this).toggleClass("hovered");
        });

    $("#about").click(function () {
        transitionAside(this);
    });
    $("#donate").click(function () {
        this.style.color = "#707070";
        transitionAside(this);
    });
    $("#contact").click(function () {
        transitionAside(this);
    });
    $("#gallery").click(function () {
        transitionAside(this);
    });


    //Loads the initial home page for the user. Calls createAside() and createMain() with 0 as the selector 
    function initialize() {
        createContent(0);
    }

    //Navigates to the About Us section of the site
    function transitionAside(el) {
        $(".menu-item").not(el).toggleClass("not-selected");
        el.classList.add("selected");
        el.classList.remove("hovered");
        el.disabled = true;
        $("#back-button").css("display", "block");

    }

    /** createAside() & createMain() **

    Takes a selector argument (an integer from 0-4). This corresponds as the following:
        0 - Initial load of the site. The home page.
        1 - Clicking on the "About Us" button
        2 - Clicking on the "Donate Now" button
        3 - Clicking on the "Contact Us" button
        4 - Clicking on the "Photo Gallery" button
        5 - Clicking on the "Back" button
    This integer is used in a switch-case to load the target pages, changing the content of those pages
    based on the content expected from the button selected by the user.

     **/

    function createContent(selector) {
        switch (selector) {

            case 0:
                $("nav").append('<button id="about" class="menu-item">ABOUT US</button><button id="donate" class="menu-item">DONATE NOW</button><button id="contact" class="menu-item">CONTACT US</button><button id="gallery" class="menu-item">PHOTO GALLERY</button>');
                $("main").append('<div><h1>Urban Wildlife Rehabilitation</h1></div>');
                break;
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:

                break;
            default:
                $("nav").clear();
                $("main").clear();
                $("nav").append('<button id="about" class="menu-item">ABOUT US</button><button id="donate" class="menu-item">DONATE NOW</button><button id="contact" class="menu-item">CONTACT US</button><button id="gallery" class="menu-item">PHOTO GALLERY</button>');
                $("main").append('<div><h1>Urban Wildlife Rehabilitation</h1></div>');
                break;
        }
    }

}); //WRAPPER


/* LANDING PAGE
$("nav").append('<button id="about" class="menu-item">ABOUT US</button><button id="donate" class="menu-item">DONATE NOW</button><button id="contact" class="menu-item">CONTACT US</button><button id="gallery" class="menu-item">PHOTO GALLERY</button>');
$("main").append('<div><h1>Urban Wildlife Rehabilitation</h1></div>');
*/
