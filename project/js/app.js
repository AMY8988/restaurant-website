function setActive(currentId) {
        $(".nav-link").removeClass("active");
        $(`.nav-link[href="${currentId}"]`).addClass("active")
}

setActive()
