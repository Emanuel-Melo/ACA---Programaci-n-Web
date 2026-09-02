export function initScrollAnimation() {
	const anatomyLayout = document.querySelector(".anatomy-layout");
	let scrollFrame;

	window.addEventListener("scroll", () => {
		if (scrollFrame) {
			return;
		}

		scrollFrame = window.requestAnimationFrame(() => {
			const progress = Math.min(window.scrollY / 800, 1);

			anatomyLayout.style.setProperty("--scroll-progress", progress);
			anatomyLayout.classList.toggle("scrolled", progress >= 0.98);
			scrollFrame = null;
		});
	}, { passive: true });
}
