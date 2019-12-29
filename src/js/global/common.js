import React from "react";

// Resolution detect start
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("DOMContentLoaded", "optimizedResize");
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    if (window.innerWidth < 1169 && window.innerWidth > 767) {
        document.querySelector('html').classList.add("tablet");
        document.querySelector('html').classList.remove("mobile");
    } else if (window.innerWidth < 768) {
        document.querySelector('html').classList.add("mobile");
        document.querySelector('html').classList.remove("tablet");
    } else {
        document.querySelector('html').classList.remove("mobile", "tablet");
    }
});

// Resolution detect end

