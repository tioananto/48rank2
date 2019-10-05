$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#6d0012");
	},function() {
		$(this).css("background-color", "#380000");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#c60101");
	}, function() {
		$(this).css("background-color", "#0f0f0f");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
