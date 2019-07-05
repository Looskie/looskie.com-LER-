document.body.addEventListener('dblclick', () => {
    document.body.classList.remove('loaded');
    document.body.classList.add('hidding');
    setTimeout(function() {
        window.location.assign("https://www.looskie.com/LERAssets/Information/information.html");
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
    window.location.assign("https://www.looskie.com/LERAssets/Information/information.html");
    }, 1900);
});
