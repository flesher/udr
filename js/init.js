var windowW = $(window).width();
var windowH = $(window).height();
var circles = [];

var items = {
	"item1" : {
		"x"       : 2*windowW / 5,
		"y"       : windowH / 5,
		"scale"   : 1,
		"heading" : 83,
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item2" : {
		"x"       : 3*windowW / 5,
		"y"       : windowH / 5,
		"scale"   : 1,
		"heading" : 26,
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item3" : {
		"x"       : 4*windowW / 5,
		"y"       : windowH /5,
		"scale"   : 1,
		"heading" : 192,
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item4" : {
		"x"       : 2*windowW / 5,
		"y"       : 2*windowH /4,
		"scale"   : 1,
		"heading" : 14,
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item5" : {
		"x"       : 3*windowW / 5,
		"y"       : 2*windowH /4,
		"scale"   : 1,
		"heading" : 5,
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item6" : {
		"x"       : 4*windowW / 5,
		"y"       : 2*windowH / 4,
		"scale"   : 1,
		"heading" : "Lorem",
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item7" : {
		"x"       : 2*windowW / 5,
		"y"       : 4*windowH / 5,
		"scale"   : 1,
		"heading" : "Lorem",
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item8" : {
		"x"       : 3*windowW / 5,
		"y"       : 4*windowH / 5,
		"scale"   : 1,
		"heading" : "Lorem",
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	},

	"item9" : {
		"x"       : 4*windowW / 5,
		"y"       : 4*windowH / 5,
		"scale"   : 1,
		"heading" : "Lorem",
		"subheading" : "TAPAS NEARBY HAVE HAPPY HOUR RUNNING",
		"copy"    : "The Meridian is surrounded by some great places to eat: if you are entertaining, looking for a quick bite or just get away from the usual menu, you will be spoiled for choice.",
		"map"     : 'img/map.png'
	}
}


function init() {

	for (var key in items){
		var circle = new shape(key, items[key].x, items[key].y, items[key].scale, items[key].heading, items[key].subheading, items[key].copy, items[key].map);
		circles.push(circle);			
	}

	
}

