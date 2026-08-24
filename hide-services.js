(function () {
    function hideServices() {
        var services = document.getElementById("divTDRequests");

        if (services) {
            services.style.setProperty("display", "none", "important");
        }
    }

    function start() {
        hideServices();

        var observer = new MutationObserver(function () {
            hideServices();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
