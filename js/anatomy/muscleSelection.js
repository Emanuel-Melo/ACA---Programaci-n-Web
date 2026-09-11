import { getMuscles } from "./muscles.js";
import { getMuscleExercise } from "./muscleExercises.js";

function getExercisePanel() {
	return document.querySelector(".exercise-popover");
}

function cloneMuscleIntoPopover(musculo) {
	const targetGroup = document.querySelector(".exercise-popover-svg-content");
	if (!targetGroup) {
		return;
	}

	targetGroup.innerHTML = "";
	const clone = musculo.cloneNode(true);

	clone.querySelectorAll("path").forEach((path) => {
		path.style.setProperty("fill", "#e6b85c", "important");
		path.style.setProperty("stroke", "#efe3cf", "important");
		path.style.setProperty("stroke-width", "1.5", "important");
	});

	clone.classList.add("popover-muscle-clone");
	targetGroup.appendChild(clone);
}

export function initMuscleSelection() {
	const anatomySvg = document.querySelector(".anatomy-container svg");

	function selectMuscle(musculo) {
		getMuscles().forEach((item) => {
			item.classList.remove("seleccionado");
			item.querySelectorAll("path").forEach((path) => {
				path.classList.remove("seleccionado");
				path.style.removeProperty("fill");
				path.style.removeProperty("stroke");
			});
		});

		const seleccionado = true;
		musculo.classList.add("seleccionado");
		const [muscleName, exerciseName] = getMuscleExercise(musculo.id);
		const exercisePanel = getExercisePanel();

		exercisePanel.querySelector(".exercise-popover-muscle").textContent = muscleName;
		exercisePanel.querySelector(".exercise-popover-name").textContent = exerciseName;
		exercisePanel.querySelector(".muscle-stat-value").textContent = muscleName;
		exercisePanel.classList.add("visible");
		exercisePanel.setAttribute("aria-hidden", "false");
		exercisePanel.style.setProperty("transform", "translateY(0)", "important");

		musculo.querySelectorAll("path").forEach((path) => {
			path.classList.toggle("seleccionado", seleccionado);
			if (seleccionado) {
				path.style.setProperty("fill", "#e6b85c", "important");
				path.style.setProperty("stroke", "#efe3cf", "important");
			} else {
				path.style.removeProperty("fill");
				path.style.removeProperty("stroke");
			}
		});

		cloneMuscleIntoPopover(musculo);
	}

	anatomySvg.addEventListener("click", (event) => {
		const musculo = event.target.closest(".musculo");
		if (musculo) {
			selectMuscle(musculo);
		}
	});

	getExercisePanel().querySelector(".exercise-popover-close").addEventListener("click", () => {
		const exercisePanel = getExercisePanel();
		exercisePanel.classList.remove("visible");
		exercisePanel.setAttribute("aria-hidden", "true");
		exercisePanel.style.removeProperty("transform");
	});
}
