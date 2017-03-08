//function that builds the grid in #container
function createGrid(x) {
	for (var rows = 0; rows < x; rows++) {
		for (var col = 0; col < x; col++) {
			$("#container").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(520/x);
	$(".grid").height(520/x);
};

$(document).ready(function() {
	createGrid(16);
});