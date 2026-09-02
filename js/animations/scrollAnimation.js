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
			scrollFrame = null;
		});
	}, { passive: true });
}
