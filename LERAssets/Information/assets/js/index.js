(function($) { "use strict";
        var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();
})(jQuery);

// Following code coded by Looskie com.looskie.cody

document.body.addEventListener('dblclick', () => {
    setTimeout(function() {
        window.location.assign("https://www.Looskie.com/LERAssets/Information/prices");
    }, 1900);
})


document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		document.body.classList.add('loaded');
	}, 100)
});

document.querySelector('.projects-link').addEventListener('click', () => {
	document.body.classList.remove('loaded');
	document.body.classList.add('hidding');
    setTimeout(function() {
    window.location.assign("https://looskie.com/LERAssets/Information/prices");
    }, 1900);
});
