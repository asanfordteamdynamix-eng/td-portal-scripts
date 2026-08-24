(function () {
    function testServices() {
        var services = document.getElementById("divTDRequests");

        if (services) {
            services.style.backgroundColor = "red";
            services.style.border = "5px solid yellow";
        }
    }

    function start() {
        testServices();

        var observer = new MutationObserver(function () {
            testServices();
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
