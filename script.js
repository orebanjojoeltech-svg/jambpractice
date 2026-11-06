const subjects = {
  Mathematics: {
    icon: "∑", color: "#477859", bg: "#edf4eb",
    topics: ["Number bases and numeration", "Fractions, decimals and percentages", "Indices, logarithms and surds", "Algebra and equations", "Sequences and variation", "Geometry and mensuration", "Trigonometry", "Statistics and probability"],
    questions: [
      { topic: "Number bases", text: "Express 101101₂ in base ten.", options: ["43", "45", "41", "47"], answer: 1, explanation: "Expand by powers of 2: 1(32) + 0(16) + 1(8) + 1(4) + 0(2) + 1(1) = 45." },
      { topic: "Algebra", text: "If 3x − 7 = 11, what is the value of x?", options: ["4", "5", "6", "7"], answer: 2, explanation: "Add 7 to both sides to get 3x = 18. Divide by 3: x = 6." },
      { topic: "Percentages", text: "A bag costs ₦8,000. Its price is reduced by 15%. What is the new price?", options: ["₦6,600", "₦6,800", "₦7,200", "₦7,600"], answer: 1, explanation: "15% of ₦8,000 is ₦1,200. The reduced price is ₦8,000 − ₦1,200 = ₦6,800." },
      { topic: "Quadratic equations", text: "Find the roots of x² − 5x + 6 = 0.", options: ["1 and 6", "−2 and −3", "2 and 3", "−1 and −6"], answer: 2, explanation: "Factor the expression: (x − 2)(x − 3) = 0. Therefore x = 2 or x = 3." },
      { topic: "Geometry", text: "The angles of a triangle are x, 2x and 3x. Find the largest angle.", options: ["60°", "90°", "100°", "120°"], answer: 1, explanation: "Angles in a triangle sum to 180°. So 6x = 180°, x = 30° and the largest angle is 3x = 90°." },
      { topic: "Statistics", text: "Find the mean of 4, 6, 8 and 10.", options: ["6", "7", "8", "9"], answer: 1, explanation: "The mean is the sum divided by the number of values: (4 + 6 + 8 + 10) ÷ 4 = 7." }
    ]
  },
  English: {
    icon: "Aa", color: "#8a6343", bg: "#f7f0e8",
    topics: ["Comprehension and summary", "Lexis and structure", "Synonyms and antonyms", "Idioms and figures of speech", "Sentence interpretation", "Word stress and intonation", "Vowels and consonants", "Question tags"],
    questions: [
      { topic: "Lexis and structure", text: "Choose the word nearest in meaning to “diligent”.", options: ["Careless", "Hardworking", "Impatient", "Talkative"], answer: 1, explanation: "Diligent means careful and persistent in one's work; hardworking is the closest option." },
      { topic: "Antonyms", text: "Choose the word opposite in meaning to “scarce”.", options: ["Rare", "Limited", "Abundant", "Costly"], answer: 2, explanation: "Scarce means in short supply. Abundant means available in large quantities, so it is the opposite." },
      { topic: "Grammar", text: "Neither the teacher nor the students _____ ready for the trip.", options: ["is", "was", "are", "has"], answer: 2, explanation: "With “neither … nor”, the verb agrees with the nearer subject. “Students” is plural, so use “are”." },
      { topic: "Question tags", text: "You have completed the assignment, _____?", options: ["haven't you", "have you", "didn't you", "don't you"], answer: 0, explanation: "A positive statement with “have” takes a negative tag with the same auxiliary: “haven't you?”" },
      { topic: "Idioms", text: "To “keep an eye on” someone means to _____ them.", options: ["avoid", "watch", "challenge", "imitate"], answer: 1, explanation: "“Keep an eye on” is an idiom meaning to watch or pay attention to someone or something." },
      { topic: "Concord", text: "The news _____ encouraging.", options: ["are", "were", "is", "have been"], answer: 2, explanation: "“News” is an uncountable noun and takes a singular verb: “The news is encouraging.”" }
    ]
  },
  Chemistry: {
    icon: "⚗", color: "#5c68a0", bg: "#eff0f8",
    topics: ["Separation of mixtures", "Atomic structure and periodicity", "Chemical bonding", "Mole concept and stoichiometry", "Acids, bases and salts", "Rates of reaction and equilibrium", "Electrolysis and redox", "Organic chemistry"],
    questions: [
      { topic: "Atomic structure", text: "How many protons are present in an atom of sodium with atomic number 11?", options: ["10", "11", "12", "23"], answer: 1, explanation: "The atomic number of an element equals the number of protons in its nucleus. Sodium has 11 protons." },
      { topic: "Separation of mixtures", text: "Which method is most suitable for separating ethanol from water?", options: ["Filtration", "Sublimation", "Fractional distillation", "Magnetic separation"], answer: 2, explanation: "Ethanol and water are miscible liquids with different boiling points, so fractional distillation separates them." },
      { topic: "Acids and bases", text: "What is the pH of a neutral aqueous solution at 25°C?", options: ["0", "5", "7", "14"], answer: 2, explanation: "At 25°C, a neutral aqueous solution has equal hydrogen and hydroxide ion concentrations and a pH of 7." },
      { topic: "Chemical bonding", text: "The bond formed by transfer of electrons from one atom to another is _____ bonding.", options: ["covalent", "metallic", "hydrogen", "ionic"], answer: 3, explanation: "Ionic bonding involves electron transfer, producing oppositely charged ions held together by electrostatic attraction." },
      { topic: "Mole concept", text: "How many moles are in 18 g of water? (H₂O = 18 g mol⁻¹)", options: ["0.5", "1", "2", "18"], answer: 1, explanation: "Number of moles = mass ÷ molar mass = 18 g ÷ 18 g mol⁻¹ = 1 mol." },
      { topic: "Rates of reaction", text: "Which change usually increases the rate of reaction between solid magnesium and dilute acid?", options: ["Using larger magnesium pieces", "Lowering the temperature", "Using powdered magnesium", "Diluting the acid"], answer: 2, explanation: "Powdered magnesium has a greater surface area exposed to the acid, increasing the frequency of effective collisions." }
    ]
  },
  Physics: {
    icon: "◉", color: "#a36a4e", bg: "#f8f0eb",
    topics: ["Measurements and units", "Motion, forces and equilibrium", "Work, energy and power", "Heat and temperature", "Waves, sound and light", "Electric fields and circuits", "Magnetism and electromagnetism", "Modern physics"],
    questions: [
      { topic: "Motion", text: "A car travels 150 m in 10 s. What is its average speed?", options: ["10 m s⁻¹", "15 m s⁻¹", "25 m s⁻¹", "1500 m s⁻¹"], answer: 1, explanation: "Average speed = distance ÷ time = 150 m ÷ 10 s = 15 m s⁻¹." },
      { topic: "Electricity", text: "A 4 Ω resistor carries a current of 3 A. What is the potential difference across it?", options: ["0.75 V", "7 V", "12 V", "24 V"], answer: 2, explanation: "By Ohm's law, V = IR = 3 A × 4 Ω = 12 V." },
      { topic: "Work and energy", text: "A force of 20 N moves an object 5 m in the direction of the force. How much work is done?", options: ["4 J", "25 J", "100 J", "200 J"], answer: 2, explanation: "Work done = force × distance in the direction of the force = 20 N × 5 m = 100 J." },
      { topic: "Waves", text: "A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed?", options: ["12.5 m s⁻¹", "46 m s⁻¹", "54 m s⁻¹", "200 m s⁻¹"], answer: 3, explanation: "Wave speed v = frequency × wavelength = 50 Hz × 4 m = 200 m s⁻¹." },
      { topic: "Heat", text: "The SI unit of specific heat capacity is _____ .", options: ["J kg⁻¹ K⁻¹", "J kg K", "W m⁻¹", "N kg⁻¹"], answer: 0, explanation: "Specific heat capacity is energy per unit mass per unit temperature rise, measured in joules per kilogram per kelvin." },
      { topic: "Density", text: "An object has mass 240 g and volume 80 cm³. Find its density.", options: ["0.33 g cm⁻³", "2 g cm⁻³", "3 g cm⁻³", "320 g cm⁻³"], answer: 2, explanation: "Density = mass ÷ volume = 240 g ÷ 80 cm³ = 3 g cm⁻³." }
    ]
  },
  Biology: {
    icon: "❋", color: "#54815e", bg: "#edf4ed",
    topics: ["Cell structure and organisation", "Nutrition and digestion", "Transport and respiration", "Ecology and the environment", "Reproduction and development", "Genetics and evolution", "Coordination and homeostasis", "Classification of organisms"],
    questions: [
      { topic: "Cell biology", text: "Which organelle is the main site of aerobic respiration in a eukaryotic cell?", options: ["Ribosome", "Mitochondrion", "Golgi body", "Vacuole"], answer: 1, explanation: "Mitochondria are the principal site of aerobic respiration and ATP production in eukaryotic cells." },
      { topic: "Ecology", text: "Green plants are called producers because they _____ .", options: ["feed on animals", "make organic food from simple substances", "decompose dead matter", "absorb ready-made food from soil"], answer: 1, explanation: "Producers, such as green plants, use photosynthesis to make organic food from carbon dioxide and water." },
      { topic: "Transport", text: "Which tissue transports water and mineral salts from the roots of a flowering plant?", options: ["Phloem", "Epidermis", "Xylem", "Cambium"], answer: 2, explanation: "Xylem vessels conduct water and dissolved mineral salts from the roots towards the rest of the plant." },
      { topic: "Genetics", text: "If T (tall) is dominant over t (short), what fraction of offspring from Tt × Tt is expected to be short?", options: ["None", "One quarter", "One half", "Three quarters"], answer: 1, explanation: "The cross gives TT, Tt, Tt and tt. Only tt is short, so 1 out of 4 (one quarter) is expected to be short." },
      { topic: "Nutrition", text: "Which enzyme begins the digestion of starch in the human mouth?", options: ["Pepsin", "Lipase", "Salivary amylase", "Trypsin"], answer: 2, explanation: "Salivary amylase, also called ptyalin, begins starch digestion in the mouth." },
      { topic: "Classification", text: "Which characteristic is shared by all mammals?", options: ["They lay hard-shelled eggs", "They have feathers", "Females possess mammary glands", "They breathe through gills"], answer: 2, explanation: "Mammary glands, which produce milk for young, are a defining characteristic of mammals." }
    ]
  }
};

const yearSelect = document.querySelector("#year-select");
const subjectGrid = document.querySelector("#subject-grid");
const questionContent = document.querySelector("#question-content");
const questionHeading = document.querySelector("#question-heading");
const questionCount = document.querySelector("#question-count");
const progressFill = document.querySelector("#progress-fill");
const topicList = document.querySelector("#topic-list");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const practiceView = document.querySelector("#practice-view");
const syllabusView = document.querySelector("#syllabus-view");
const breadcrumbCurrent = document.querySelector("#breadcrumb-current");
let selectedSubject = "";
let questionIndex = 0;
let selectedAnswer = null;
let answerRevealed = false;
let year = localStorage.getItem("jambPracticeYear") || "2025";

for (let currentYear = 2025; currentYear >= 2010; currentYear--) {
  const option = document.createElement("option");
  option.value = String(currentYear);
  option.textContent = currentYear;
  yearSelect.append(option);
}
yearSelect.value = year;
yearSelect.addEventListener("change", () => {
  year = yearSelect.value;
  localStorage.setItem("jambPracticeYear", year);
  if (selectedSubject) renderQuestion();
});

function renderSubjectCards() {
  subjectGrid.innerHTML = "";
  Object.entries(subjects).forEach(([name, subject]) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `subject-card${selectedSubject === name ? " selected" : ""}`;
    card.style.setProperty("--subject-color", subject.color);
    card.style.setProperty("--subject-bg", subject.bg);
    card.setAttribute("aria-pressed", String(selectedSubject === name));
    card.innerHTML = `<span class="subject-icon">${subject.icon}</span><span class="subject-name">${name}</span><span class="subject-meta">${subject.questions.length} practice questions</span><span class="subject-arrow">↗</span>`;
    card.addEventListener("click", () => {
      selectedSubject = name;
      questionIndex = 0;
      selectedAnswer = null;
      answerRevealed = false;
      renderSubjectCards();
      renderQuestion();
    });
    subjectGrid.append(card);
  });
}

function renderTopics() {
  topicList.innerHTML = "";
  subjects[selectedSubject].topics.slice(0, 5).forEach(topic => {
    const item = document.createElement("li");
    item.textContent = topic;
    topicList.append(item);
  });
}

function renderQuestion() {
  const subject = subjects[selectedSubject];
  if (!subject) return;
  const question = subject.questions[questionIndex];
  questionHeading.textContent = `${selectedSubject} · ${year} practice`;
  questionCount.textContent = `${questionIndex + 1} / ${subject.questions.length}`;
  progressFill.style.width = `${((questionIndex + 1) / subject.questions.length) * 100}%`;
  renderTopics();
  questionContent.innerHTML = "";

  const topic = document.createElement("span");
  topic.className = "question-topic";
  topic.textContent = question.topic;
  const prompt = document.createElement("p");
  prompt.className = "question-prompt";
  prompt.textContent = question.text;
  const options = document.createElement("div");
  options.className = "options-list";
  options.setAttribute("role", "group");
  options.setAttribute("aria-label", "Answer choices");

  question.options.forEach((text, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.disabled = answerRevealed;
    if (selectedAnswer === index) button.classList.add("selected");
    if (answerRevealed && index === question.answer) button.classList.add("correct");
    if (answerRevealed && index === selectedAnswer && selectedAnswer !== question.answer) button.classList.add("incorrect");
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const optionText = document.createElement("span");
    optionText.textContent = text;
    button.append(letter, optionText);
    button.setAttribute("aria-pressed", String(selectedAnswer === index));
    button.addEventListener("click", () => {
      selectedAnswer = index;
      answerRevealed = true;
      renderQuestion();
    });
    options.append(button);
  });

  questionContent.append(topic, prompt, options);
  if (answerRevealed) {
    const feedback = document.createElement("div");
    const isCorrect = selectedAnswer === question.answer;
    feedback.className = `feedback ${isCorrect ? "correct-feedback" : "incorrect-feedback"}`;
    feedback.setAttribute("role", "status");
    const result = document.createElement("strong");
    result.textContent = isCorrect ? "That's right! " : `The correct answer is ${String.fromCharCode(65 + question.answer)}. `;
    const explanation = document.createElement("span");
    explanation.textContent = question.explanation;
    feedback.append(result, explanation);
    questionContent.append(feedback);
  }
  prevButton.disabled = questionIndex === 0;
  nextButton.disabled = !answerRevealed;
  nextButton.innerHTML = questionIndex === subject.questions.length - 1 ? 'Finish practice <span>✓</span>' : 'Next question <span>→</span>';
}

prevButton.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex -= 1;
    selectedAnswer = null;
    answerRevealed = false;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!answerRevealed) return;
  const total = subjects[selectedSubject].questions.length;
  if (questionIndex < total - 1) {
    questionIndex += 1;
    selectedAnswer = null;
    answerRevealed = false;
    renderQuestion();
    return;
  }
  questionHeading.textContent = "Practice set complete!";
  questionCount.textContent = `${total} / ${total}`;
  progressFill.style.width = "100%";
  topicList.innerHTML = "<li class=\"topic-placeholder\">Choose another topic or subject to keep going.</li>";
  questionContent.innerHTML = `<div class="empty-state"><div class="empty-illustration">✦</div><h3>Well done — you showed up.</h3><p>You completed the ${selectedSubject} ${year} practice set. Pick a subject card to try another set.</p></div>`;
  prevButton.disabled = true;
  nextButton.disabled = true;
});

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.view));
});
document.querySelector("#open-syllabus").addEventListener("click", () => showView("syllabus"));

function showView(view) {
  const showingSyllabus = view === "syllabus";
  practiceView.classList.toggle("hidden", showingSyllabus);
  syllabusView.classList.toggle("hidden", !showingSyllabus);
  breadcrumbCurrent.textContent = showingSyllabus ? "Syllabus checklist" : "Practice";
  document.querySelectorAll(".nav-item").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
}

function renderSyllabus() {
  const container = document.querySelector("#syllabus-subjects");
  Object.entries(subjects).forEach(([name, subject]) => {
    const card = document.createElement("section");
    card.className = "syllabus-subject-card";
    const heading = document.createElement("div");
    heading.className = "syllabus-subject-title";
    const icon = document.createElement("span");
    icon.className = "subject-icon";
    icon.style.setProperty("--subject-color", subject.color);
    icon.style.setProperty("--subject-bg", subject.bg);
    icon.textContent = subject.icon;
    const title = document.createElement("h2");
    title.textContent = name;
    const count = document.createElement("span");
    count.textContent = `${subject.topics.length} topic areas`;
    heading.append(icon, title, count);
    card.append(heading);
    subject.topics.forEach((topic, index) => {
      const label = document.createElement("label");
      label.className = "syllabus-topic";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = localStorage.getItem(`jamb-topic-${name}-${index}`) === "true";
      checkbox.addEventListener("change", () => localStorage.setItem(`jamb-topic-${name}-${index}`, String(checkbox.checked)));
      const text = document.createElement("span");
      text.textContent = topic;
      label.append(checkbox, text);
      card.append(label);
    });
    container.append(card);
  });
}

renderSubjectCards();
renderSyllabus();