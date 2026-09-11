const muscleExercises = {
	Trapecio: ["Trapecio", "Encogimientos de hombros (Shrugs)"],
	Trapecio_frontal: ["Trapecio", "Encogimientos de hombros (Shrugs)"],
	Esternocleidomastoideo: ["Esternocleidomastoideo", "Flexión cervical con resistencia"],
	Omohioideo: ["Omohioideo", "Retracción cervical (chin tucks)"],
	Escaleno_medio: ["Escaleno medio", "Inclinación lateral del cuello con resistencia"],
	Escaleno_anterior: ["Escaleno anterior", "Flexión lateral y rotación cervical con resistencia"],
	Escaleno_posterior: ["Escaleno posterior", "Inclinación lateral del cuello con resistencia"],
	Deltoides_anterior: ["Deltoide anterior", "Press militar"],
	Deltoides_medio: ["Deltoide medio", "Elevaciones laterales"],
	Deltoides_posterior: ["Deltoide posterior", "Face Pull"],
	Pecho_adelante: ["Pectoral", "Press de banca"],
	Serrato_anterior: ["Serrato anterior", "Push-up Plus"],
	Oblicuo_externo_adelante: ["Oblicuo externo", "Russian Twist"],
	Oblicuo_interno: ["Oblicuo externo", "Russian Twist"],
	Oblicuo_externo_espalda: ["Oblicuo externo", "Russian Twist"],
	Inscripciones_tendinosas: ["Inscripciones tendinosas", "Crunch abdominal"],
	Recto_abdominal: ["Recto abdominal", "Elevación de piernas"],
	Cabeza_larga_del_biceps_braquial: ["Cabeza larga del bíceps braquial", "Curl inclinado con mancuernas"],
	Braquial: ["Braquial", "Curl martillo"],
	Cabeza_corta_del_biceps_braquial: ["Cabeza corta del bíceps braquial", "Curl predicador"],
	Supinador: ["Supinador", "Supinación de antebrazo con mancuerna"],
	Pronador: ["Pronador", "Pronación de antebrazo con banda elástica"],
	Palmares: ["Palmares", "Flexión de muñeca"],
	Tensor_de_la_fascia_lata: ["Tensor de la fascia lata", "Abducción de cadera en polea"],
	Sartorio: ["Sartorio", "Elevación de rodilla con resistencia"],
	Recto_femoral: ["Recto femoral", "Extensión de piernas"],
	Vasto_lateral: ["Vasto lateral", "Sentadilla frontal"],
	Aductor_largo: ["Aductor largo", "Aducción de cadera en máquina"],
	Vasto_medial: ["Vasto medial", "Sentadilla con talones elevados"],
	Gastrocnemios: ["Gastrocnemios", "Elevaciones de talones de pie"],
	Soleo: ["Sóleo", "Elevaciones de talones sentado"],
	Tibial_anterior: ["Tibial anterior", "Dorsiflexión con banda elástica"],
	Extensor_largo_de_los_dedos: ["Extensor largo de los dedos", "Extensión de dedos con banda"],
	Peroneo_largo: ["Peroneo largo", "Eversión de tobillo con banda"],
	Semimembranoso: ["Semimembranoso", "Peso muerto rumano"],
	Teres_menor: ["Teres menor", "Rotación externa acostado de lado"],
	Teres_mayor: ["Teres mayor", "Jalón al pecho agarre neutro"],
	Infraspinatus: ["Infraspinatus", "Rotación externa con banda"],
	Dorsal_ancho: ["Dorsal ancho", "Dominadas"],
	Erector_de_la_columna: ["Erector de la columna", "Peso muerto"],
	Cabeza_larga_del_tricep_braquial: ["Cabeza larga del tríceps braquial", "Extensión de tríceps por encima de la cabeza"],
	Cabeza_lateral_del_triceps_braquial: ["Cabeza lateral del tríceps braquial", "Jalón de tríceps en polea"],
	Anconeo: ["Ancóneo", "Fondos en banco"],
	Braquioradial: ["Braquiorradial", "Curl martillo"],
	Extensor_de_los_dedos: ["Extensor de los dedos", "Extensión de dedos con banda"],
	Extensor_cubital_del_carpo: ["Extensor cubital del carpo", "Extensión de muñeca con mancuerna"],
	Extensor_radial_del_carpo_largo_y_corto: ["Extensor radial del carpo largo y corto", "Extensión de muñeca agarre prono"],
	Gluteo_mayor: ["Glúteo mayor", "Hip Thrust"],
	Gluteo_medio: ["Glúteo medio", "Abducción de cadera"],
	Banda_iliotibial: ["Banda iliotibial", "Caminata lateral con banda"],
	Biceps_femora: ["Bíceps femoral", "Curl femoral tumbado"],
	Semitendinoso: ["Semitendinoso", "Peso muerto rumano"],
	Aductor_mayor: ["Aductor mayor", "Sentadilla sumo"],
	Gastrocnemio: ["Gastrocnemio", "Elevaciones de talones de pie"],
	Peroneo_corto: ["Peroneo corto", "Eversión de tobillo con banda"],
	Flexor_largo_del_dedo_gordo: ["Flexor largo del dedo gordo", "Flexión plantar con énfasis en el dedo gordo"]
};

const exerciseDetails = {
	"Encogimientos de hombros (Shrugs)": { equipment: "Mancuernas / Barra", reps: "3 – 4 × 10 – 15", description: "Los encogimientos de hombros elevan la escápula y fortalecen la parte superior de la espalda, aportando estabilidad al cuello y a la cintura escapular." },
	"Flexión cervical con resistencia": { equipment: "Banda elástica / Manual", reps: "3 × 10 – 12", description: "Esta maniobra invita al cuello a mantener una posición estable mientras se opone a la resistencia, reforzando la flexión cervical y la postura." },
	"Retracción cervical (chin tucks)": { equipment: "Manual / Pelota de estabilidad", reps: "3 × 12 – 15", description: "La retracción cervical ayuda a alinear la cabeza con la columna, reducir la tensión del cuello y mejorar el control postural." },
	"Inclinación lateral del cuello con resistencia": { equipment: "Banda elástica", reps: "3 × 10 – 12", description: "La inclinación lateral del cuello con resistencia activa los músculos del costado cervical y mejora la estabilidad del eje del cuello." },
	"Press militar": { equipment: "Barra / Mancuernas", reps: "4 × 8 – 10", description: "El press militar desarrolla la fuerza del deltoide anterior y del complejo escapular, apoyando la estabilidad y el empuje vertical." },
	"Elevaciones laterales": { equipment: "Mancuernas", reps: "3 – 4 × 12 – 16", description: "Las elevaciones laterales separan los brazos y aíslan el deltoide medio, mejorando el ancho y la definición de los hombros." },
	"Face Pull": { equipment: "Polea / Banda", reps: "3 × 12 – 15", description: "El face pull trabaja la cintura escapular y el deltoide posterior, corrigiendo la postura y reforzando la rotación externa." },
	"Press de banca": { equipment: "Barra / Bancos", reps: "4 × 6 – 8", description: "El press de banca moviliza el pecho, los hombros y los tríceps en un patrón de empuje horizontal para ganar fuerza global." },
	"Push-up Plus": { equipment: "Peso corporal", reps: "3 × 10 – 12", description: "El push-up plus exige control de la escápula y encaja el serrato anterior para reforzar la estabilidad del tórax en el empuje." },
	"Russian Twist": { equipment: "Peso / Medicine ball", reps: "3 × 15 – 20", description: "El Russian Twist activa el oblicuo junto con la core para favorecer la rotación del tronco y el control en movimiento." },
	"Crunch abdominal": { equipment: "Peso corporal", reps: "3 × 12 – 15", description: "El crunch abdominal enfatiza la contracción del recto abdominal y mejora el control de la flexión torácica." },
	"Elevación de piernas": { equipment: "Peso corporal / Banda", reps: "3 × 12 – 15", description: "La elevación de piernas estabiliza el tronco y trabaja la parte inferior del abdomen, fortaleciendo el control de la pelvis." },
	"Curl inclinado con mancuernas": { equipment: "Mancuernas / Banco", reps: "3 × 10 – 12", description: "El curl inclinado activa la cabeza larga del bíceps y favorece el trabajo de fuerza en una posición de apoyo más relajada." },
	"Curl martillo": { equipment: "Mancuernas", reps: "3 – 4 × 10 – 12", description: "El curl martillo desafía el bíceps, el braquial y los músculos del antebrazo con un agarre neutro y poca rotación." },
	"Curl predicador": { equipment: "Máquina / Banco", reps: "3 × 10 – 12", description: "El curl predicador aísla el bíceps y reduce el balance del movimiento para poner mayor énfasis en la fuerza y la ejecución." },
	"Supinación de antebrazo con mancuerna": { equipment: "Mancuerna", reps: "3 × 12 – 15", description: "La supinación activa el supinador y la cabeza del antebrazo, mejorando el manejo de la rotación y la fuerza de prensión." },
	"Pronación de antebrazo con banda elástica": { equipment: "Banda elástica", reps: "3 × 12 – 15", description: "La pronación con banda trabaja el pronador y la coordinación del antebrazo para controlar la rotación interna." },
	"Flexión de muñeca": { equipment: "Mancuerna / Barra", reps: "3 × 12 – 15", description: "La flexión de muñeca mejora la fuerza de la cara palmar del antebrazo y la estabilidad de la muñeca en tareas diarias." },
	"Abducción de cadera en polea": { equipment: "Polea / Banda", reps: "3 × 14 – 16", description: "La abducción en polea activa el tensor de la fascia lata y la banda iliotibial para reforzar la estabilidad lateral de la cadera." },
	"Elevación de rodilla con resistencia": { equipment: "Banda / Polea", reps: "3 × 12 – 15", description: "La elevación de rodilla se centra en el sartorio y el control frontal de la cadera, mejorando la coordinación y la marcha." },
	"Extensión de piernas": { equipment: "Máquina", reps: "4 × 10 – 12", description: "La extensión de piernas enfatiza la fuerza del cuádriceps y del recto femoral en una cadena de empuje sobre la rodilla." },
	"Sentadilla frontal": { equipment: "Barra / Bancos", reps: "4 × 8 – 10", description: "La sentadilla frontal trabaja el vasto lateral y el conjunto del cuádriceps con una postura profunda y estable." },
	"Aducción de cadera en máquina": { equipment: "Máquina", reps: "3 × 12 – 15", description: "La aducción en máquina fortalece el aductor largo y la zona interna de la cadera para producir fuerza de cierre." },
	"Sentadilla con talones elevados": { equipment: "Barra / Peso corporal", reps: "3 × 12 – 15", description: "La sentadilla con talones elevados aumenta la demanda del vasto medial y el control de la fase descendente." },
	"Elevaciones de talones de pie": { equipment: "Peso corporal / Barra", reps: "4 × 12 – 15", description: "Las elevaciones de talones de pie activan los gastrocnemios y fortalecen la fuerza plantar y la propulsión." },
	"Elevaciones de talones sentado": { equipment: "Máquina / Peso corporal", reps: "3 × 12 – 15", description: "Las elevaciones de talones sentado enfocan el sóleo, fortaleciendo la resistencia de la pantorrilla en posición sentada." },
	"Dorsiflexión con banda elástica": { equipment: "Banda elástica", reps: "3 × 15 – 20", description: "La dorsiflexión mejora la fuerza del tibial anterior y la capacidad de levantar el pie con control." },
	"Extensión de dedos con banda": { equipment: "Banda elástica", reps: "3 × 12 – 15", description: "La extensión de dedos con banda activa los extensores de los dedos y mejora la movilidad y coordinación de la articulación." },
	"Eversión de tobillo con banda": { equipment: "Banda elástica", reps: "3 × 14 – 16", description: "La eversión de tobillo fortalece los peroneos y ayuda a controlar la estabilidad lateral del tobillo." },
	"Peso muerto rumano": { equipment: "Barra / Mancuernas", reps: "4 × 8 – 10", description: "El peso muerto rumano sincroniza flexión del tronco, extensión de cadera e isquiotibiales para potenciar la fuerza de la cadena posterior." },
	"Rotación externa acostado de lado": { equipment: "Mancuerna / Banda", reps: "3 × 12 – 14", description: "La rotación externa acostado de lado activa el redondo menor y la cápsula externa del hombro, favoreciendo control y estabilidad." },
	"Jalón al pecho agarre neutro": { equipment: "Polea / Barra", reps: "4 × 8 – 12", description: "El jalón al pecho con agarre neutro trabaja el redondo mayor y la espalda media para crear fuerza de tracción estable." },
	"Rotación externa con banda": { equipment: "Banda elástica", reps: "3 × 12 – 15", description: "La rotación externa con banda refuerza el infraspinatus y favorece la estabilidad de la articulación glenohumeral." },
	"Dominadas": { equipment: "Barra fija", reps: "3 – 4 × 6 – 10", description: "Las dominadas piden tracción total y activan el dorsal ancho para ganar fuerza en la espalda y los brazos." },
	"Peso muerto": { equipment: "Barra / Mancuernas", reps: "4 × 8 – 10", description: "El peso muerto desarrolla la extensión de la cadera y la espalda con un patrón de levantamiento desde el suelo." },
	"Extensión de tríceps por encima de la cabeza": { equipment: "Polea / Mancuerna", reps: "3 × 10 – 12", description: "La extensión por encima de la cabeza activa la cabeza larga del tríceps y mejora la fuerza de empuje en el rango vertical." },
	"Jalón de tríceps en polea": { equipment: "Polea", reps: "3 × 12 – 15", description: "El jalón de tríceps en polea aisla la cabeza lateral del tríceps y favorece la fuerza de extensión del codo." },
	"Fondos en banco": { equipment: "Banco / Peso corporal", reps: "3 × 8 – 12", description: "Los fondos en banco desarrollan el ancóneo y los tríceps con una carga funcional de empuje hacia arriba." },
	"Hip Thrust": { equipment: "Barra / Banco", reps: "4 × 8 – 10", description: "El hip thrust carga la extensión de cadera y activa el glúteo mayor para generar potencia y fuerza en la cadera." },
	"Abducción de cadera": { equipment: "Máquina / Banda", reps: "3 × 14 – 16", description: "La abducción de cadera pule el glúteo medio y ayuda a mantener la pelvis estable en desplazamientos laterales." },
	"Caminata lateral con banda": { equipment: "Banda elástica", reps: "3 × 12 – 15", description: "La caminata lateral con banda activa la banda iliotibial y el glúteo medio para construir estabilidad en la cadera." },
	"Curl femoral tumbado": { equipment: "Máquina", reps: "3 × 10 – 12", description: "El curl femoral tumbado trabaja el bíceps femoral y la parte posterior del muslo, mejorando la flexión del rodilla y la fuerza de los isquiotibiales." },
	"Sentadilla sumo": { equipment: "Barra / Mancuernas", reps: "4 × 8 – 12", description: "La sentadilla sumo favorece la fuerza del aductor mayor y del tren inferior con una base más amplia de apoyo." },
	"Flexión plantar con énfasis en el dedo gordo": { equipment: "Banda / Peso corporal", reps: "3 × 12 – 15", description: "La flexión plantar focaliza el flexor largo del dedo gordo y ayuda al control del arco y la propulsión del tobillo." }
};

function buildExerciseDescription(muscleName, exerciseName) {
	if (exerciseDetails[exerciseName]?.description) {
		return exerciseDetails[exerciseName].description;
	}

	return `Este ejercicio está pensado para trabajar principalmente ${muscleName} mediante ${exerciseName}, favoreciendo la fuerza, el control corporal y la estabilidad de la zona.`;
}

export function getMuscleExercise(muscleId) {
	const fallbackMuscleName = muscleId.replaceAll("_", " ");
	const fallbackExerciseName = "Ejercicio por definir";
	const fallbackDescription = `Este ejercicio ayuda a trabajar la zona de ${fallbackMuscleName} con un enfoque de fuerza, control y estabilidad.`;
	const fallbackEquipment = "Peso corporal";
	const fallbackReps = "3 × 10 – 12";

	if (!muscleExercises[muscleId]) {
		return [fallbackMuscleName, fallbackExerciseName, fallbackDescription, fallbackEquipment, fallbackReps];
	}

	const [muscleName, exerciseName] = muscleExercises[muscleId];
	const detail = exerciseDetails[exerciseName] || { equipment: fallbackEquipment, reps: fallbackReps, description: fallbackDescription };
	const description = buildExerciseDescription(muscleName, exerciseName);

	return [muscleName, exerciseName, description, detail.equipment, detail.reps];
}