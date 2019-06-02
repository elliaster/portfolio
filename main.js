// variable declaration
const
	menu = $(".menu"),
	resume = $(".resume"),
	vd = $(".vd"),
	dd = $(".dd"),
	wcp = $(".wcp"),
	data = $(".menu").attr("data"),
	right = $(".right")
;

menu.click(function () {
	if ($(".right").attr("data") === "load") {
		right.addClass("translate");
		$(".right").attr("data", "unload");
	} else if ($(".right").attr("data") === "unload") {
		right.removeClass("translate");
		$(".right").attr("data", "load");
	}
});

resume.click(function () {
	location.href = "";
});