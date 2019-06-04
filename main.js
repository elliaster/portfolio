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
		$(".title").animate({left: "10vw"}, 600)
	} else if ($(".right").attr("data") === "unload") {
		right.removeClass("translate");
		$(".right").attr("data", "load");
		$(".title").animate({left: "30vw"}, 800)
	}
});

resume.click(function () {
	location.href = "";
});