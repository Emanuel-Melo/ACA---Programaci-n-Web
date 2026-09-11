export function initNavigation() {
	const links = document.querySelectorAll(".main-nav a");
	const sections = document.querySelectorAll("main section[id]");

	if (!links.length) {
		return;
	}

	links.forEach((link) => {
		link.addEventListener("click", () => {
			links.forEach((item) => item.classList.remove("active"));
			link.classList.add("active");
		});
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			const activeLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
			links.forEach((link) => link.classList.toggle("active", link === activeLink));
		});
	}, { threshold: 0.35 });

	sections.forEach((section) => observer.observe(section));
}
