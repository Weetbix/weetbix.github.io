$(function () {
    addTitlesBelowImages();

    if (Modernizr.history) {
        
        history.replaceState({ path: window.location.pathname }, null, null);
        
        // Override the click event for anchors starting with /
        // This will most likely break things when linking directly
        // to images and such but I'll deal with that later.
        $(document).on("click", "a[href^='/']", function (e) {
            e.preventDefault();
            
            _href = $(this).attr("href");

            // change the url without a page refresh and add a history entry.
            history.pushState({ path: _href }, null, _href);

            // load the content
            loadContent(_href);
        });

        // We need to handle the popstate event which is called
        // when the back button is pressed.
        window.addEventListener('popstate', function (e) {
            if (e.state) {
                loadContent(e.state.path);
            }
        });

    }
});

// Replace main-content div with main-content div from provided url
// or the 404 page if not found.
function loadContent(href) {
    var mainContent = $("#main-content");

    mainContent.fadeOut(200, function () {
        mainContent.load(href + " #main-content",
            function (response, status, xhr) {
                if (status == "error") {
                    // Page doesnt exist. Show the 404.
                    mainContent.load("/404.html #main-content");
                }

                addTitlesBelowImages();
                mainContent.fadeIn(200);
            })
    })
}

// When showing md posts we want to add a span showing the title beneath
// the image.
function addTitlesBelowImages() {
    $("div.post img[title]").after(function () {
        return "<span class=\"image-title\">" + this.title + "</span>";
    });
}