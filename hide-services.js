(function () {
    function hideServices() {
        var services = document.getElementById("divTDRequests");

        if (services) {
            services.style.display = "none";
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", hideServices);
    } else {
        hideServices();
    }
})();
