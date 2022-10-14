// BURGER
const burgerButton = document.getElementById('burger');
const burgerMenu = document.getElementById('menu');
const headerBlock = document.querySelector('header');

const toggleMenu = () => {
	document.body.classList.toggle('lock');
	burgerButton.classList.toggle('open');
	burgerMenu.classList.toggle('open');
	headerBlock.classList.toggle('open');
}

burgerButton.addEventListener('click', (event) => {
	event.stopPropagation();
	toggleMenu();
})

document.addEventListener('click', (event) => {
	if(document.body.classList.contains('lock')) {
		const target = event.target;
		const its_menu = target == burgerMenu || burgerMenu.contains(target);
		const its_btnMenu = target == burgerButton;
		const menu_is_active = burgerMenu.classList.contains('open');
		const navItem = target.classList.contains('menu__link');

		if (!its_menu && !its_btnMenu && menu_is_active || navItem) {
			toggleMenu();
		}
	}
});

// SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substring(1)

		document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
		})
	})
};

// project-tooltip
tippy('#tooltip-1', {
	content: 'Пример современных тенденций - современная методология разработки',
	duration: 400,
	delay: [0, 300],
	maxWidth: 265,
	theme: 'ametist',

});

	// MODAL window
	const modal = new GraphModal();