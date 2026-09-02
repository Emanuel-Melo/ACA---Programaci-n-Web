import { getMuscles } from "./muscles.js";

export function initMuscleSelection() {
	getMuscles().forEach((musculo) => {
		musculo.addEventListener("click", () => {
			musculo.classList.toggle("seleccionado");
		});
	});
}
