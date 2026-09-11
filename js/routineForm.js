const routineStorageKey = "kratos-routine";

function showRoutineStatus(message) {
	const status = document.querySelector("#routine-status");
	if (status) {
		status.textContent = message;
	}
}

export function initRoutineForm() {
	const form = document.querySelector("#routine-form");
	if (!form) {
		return;
	}

	const savedRoutine = JSON.parse(localStorage.getItem(routineStorageKey) || "null");
	if (savedRoutine) {
		form.elements.routineName.value = savedRoutine.name;
		form.elements.level.value = savedRoutine.level;
		form.elements.notes.value = savedRoutine.notes;
		showRoutineStatus(`Rutina guardada: ${savedRoutine.name}`);
	}

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(form);
		const routine = {
			name: formData.get("routineName").trim(),
			level: formData.get("level"),
			notes: formData.get("notes").trim()
		};

		localStorage.setItem(routineStorageKey, JSON.stringify(routine));
		showRoutineStatus(`Rutina guardada: ${routine.name}`);
	});
}