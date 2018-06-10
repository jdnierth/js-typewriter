(function () {

    // Configuration object
    var settings = {
        j: 0,
        speed: 50
    };

    // Intialization
    function init() {
        var nodes = document.getElementsByClassName('typewriter');

        for (var i = 0, len = nodes.length; i < len; i++) {

            // Get the copy of the dom node
            var txt = nodes[i].innerHTML;

            // Clear out the data
            nodes[i].innerHTML ='';

            // Start the type writer effect
            startTypeWriter(nodes[i], txt);
        }
    }

    /**
     * Splits the text to write into characters and appends each character to the dom node.
     *
     * @param {object} node the dome node that the type writer effect has to be processed within
     * @param {string} txt the copy to write
     */
    function typeWriter(node, txt) {
        if (settings.j < txt.length) {
            node.innerHTML += txt.charAt(settings.j);
            node.style.opacity = 1;
            settings.j++;
            startTypeWriter(node, txt);
        }
    }

    /**
     * Initial call to the type writer effect.
     * 
     * @param {object} node the dome node that the type writer effect has to be processed within
     * @param {string} txt the copy to write
     */
    function startTypeWriter(node, txt) {
        setTimeout(function (node) {
            typeWriter(node, txt);
        }, settings.speed, node);
    }

    init();

}());