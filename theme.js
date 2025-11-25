function ToggleTheme(type) {
    localStorage.setItem("theme", type);
    if (type == "dark") {
        $("#theme-icon").removeClass("ph-moon");
        $("#theme-icon").addClass("ph-sun");
        $("body").addClass("dark");
        $("body").addClass("dark-theme");
    } else {
        $("#theme-icon").addClass("ph-moon");
        $("#theme-icon").removeClass("ph-sun");
        $("body").removeClass("dark");
        $("body").removeClass("dark-theme");
    }
}

$("#theme-toggle").click(function (e) {
    e.preventDefault();
    // ToggleTheme($("body").hasClass("dark") ? "light" : "dark");
    if ($("body").hasClass("dark")) {
        ToggleTheme("light");
    } else {
        ToggleTheme("dark");
    }
});

$(document).ready(function () {
    if (localStorage.getItem("theme") == "dark") {
        ToggleTheme("dark");
    }
});