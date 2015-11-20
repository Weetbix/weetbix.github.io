$(function() {
    if (Modernizr.history) {
        // Override the click event for anchors starting with /
        // This will most likely break things when linking directly
        // to images and such but I'll deal with that later.
        $("a[href^='/']").click(function(e) {
            e.preventDefault();
            
            _href = $(this).attr("href");

            // change the url without a page refresh and add a history entry.
            history.pushState(null, null, _href);

            // load the content
            loadContent(_href);
        });

    }
});

// Replace main-content div with main-content div from provided url
function loadContent(href){
    var mainContent = $("#main-content");
    
    mainContent.fadeOut(200, function(){
        mainContent.load(href + " #main-content",
            function(){
                mainContent.fadeIn(200);            
        })
    })
}