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

menu.click(function close () {
	if ($(".right").attr("data") === "load") {
		right.addClass("translate");
		$(".right").attr("data", "unload");
		$(".title").animate({left: "10vw"}, 600)
		$(".title span").animate({left: "5vw"}, 400);
	} else if ($(".right").attr("data") === "unload") {
		right.removeClass("translate");
		$(".right").attr("data", "load");
		$(".title").animate({left: "30vw"}, 800)
		$(".title span").animate({left: "10vw"}, 400);
	}
});

const links = {
	resume: "https://www.google.com",
	linkedin: "https://www.linkedin.com/in/mohammed-h-8043b913a/",
	github: "https://github.com/elliaster",
	twitter: "https://twitter.com/Elliaster_"
};

$(".links").click(function () {
	var index = $(".links").index(this);
	if (index == 0) {
		location.href = links.github
	} else if (index == 1) {
		location.href = links.linkedin
	} else if (index == 2) {
		location.href = links.twitter
	} else {
		location.href = links.resume
	}
});

$(".links").hover(function () {
	var index = $(".links").index(this), text = $("#sample-text");
	if (index == 0) {
		text.text("GitHub")
	} else if (index == 1) {
		text.text("LinkedIn")
	} else if (index == 2) {
		text.text("Twitter")
	} else if (index == 3) {
		text.text("Resume Download")
	}
});

$("#vd").click(function () {
	$("<div>").appendTo(".content").addClass("visual-design").animate({
		width: "100vw"
	}, 800);

	right.removeClass("translate");
	$(".right").attr("data", "load");
	$(".title").animate({left: "30vw"}, 800)
	$(".title span").animate({left: "10vw"}, 400);

	$(".view-cont h1").animate({
		right: "3.5vw"
	},400);
	setTimeout(() => {
		$("<button>").appendTo(".view-cont").addClass("homebtn");
	}, 600);
	
});

$(".homebtn").click(function () {
	
});