// =====================================================
// 🥗 DIET & EXERCISE PLANNER — Full JavaScript Logic
// =====================================================

// ---------- DATA: Weekly Diet Plans ----------
const dietPlans = {
  monday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Oatmeal with Banana", calories: 300, protein: 8 },
          { food: "Boiled Eggs (2)", calories: 140, protein: 12 },
          { food: "Green Tea", calories: 5, protein: 0 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Apple", calories: 95, protein: 0.5 },
          { food: "Almonds (10 pcs)", calories: 70, protein: 2.5 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Grilled Chicken Breast (150g)", calories: 250, protein: 38 },
          { food: "Brown Rice (1 cup)", calories: 215, protein: 5 },
          { food: "Mixed Salad", calories: 80, protein: 2 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Greek Yogurt", calories: 120, protein: 10 },
          { food: "Mixed Berries", calories: 60, protein: 1 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Grilled Fish (150g)", calories: 200, protein: 30 },
          { food: "Steamed Vegetables", calories: 90, protein: 3 },
          { food: "Whole Wheat Roti (1)", calories: 120, protein: 4 },
        ],
      },
    ],
  },
  tuesday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Whole Wheat Toast (2) + Peanut Butter", calories: 320, protein: 12 },
          { food: "Banana Smoothie", calories: 180, protein: 5 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Walnuts (8 pcs)", calories: 100, protein: 2 },
          { food: "Orange", calories: 62, protein: 1 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Paneer Tikka (150g)", calories: 280, protein: 22 },
          { food: "Quinoa (1 cup)", calories: 220, protein: 8 },
          { food: "Cucumber Raita", calories: 60, protein: 3 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Protein Bar", calories: 200, protein: 20 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Chicken Soup", calories: 150, protein: 15 },
          { food: "Multigrain Bread (2 slices)", calories: 160, protein: 6 },
          { food: "Sautéed Broccoli", calories: 55, protein: 3 },
        ],
      },
    ],
  },
  wednesday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Poha with Peanuts", calories: 270, protein: 7 },
          { food: "Boiled Egg (1)", calories: 70, protein: 6 },
          { food: "Masala Chai", calories: 60, protein: 1 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Banana", calories: 105, protein: 1.3 },
          { food: "Pumpkin Seeds (1 tbsp)", calories: 50, protein: 3 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Rajma Curry (1 cup)", calories: 210, protein: 13 },
          { food: "Steamed Rice (1 cup)", calories: 200, protein: 4 },
          { food: "Onion Salad", calories: 30, protein: 0.5 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Sprouts Chaat", calories: 130, protein: 8 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Egg Bhurji (3 eggs)", calories: 280, protein: 21 },
          { food: "Whole Wheat Roti (2)", calories: 240, protein: 8 },
          { food: "Green Salad", calories: 40, protein: 1 },
        ],
      },
    ],
  },
  thursday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Idli (3) + Sambar", calories: 250, protein: 8 },
          { food: "Coconut Chutney", calories: 50, protein: 1 },
          { food: "Coffee", calories: 30, protein: 1 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Mango (1 cup)", calories: 100, protein: 1.4 },
          { food: "Cashews (8 pcs)", calories: 80, protein: 2 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Tandoori Chicken (200g)", calories: 320, protein: 45 },
          { food: "Jeera Rice (1 cup)", calories: 210, protein: 4 },
          { food: "Mint Chutney", calories: 15, protein: 0.5 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Whey Protein Shake", calories: 130, protein: 25 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Dal Tadka (1 cup)", calories: 180, protein: 12 },
          { food: "Whole Wheat Roti (2)", calories: 240, protein: 8 },
          { food: "Palak Paneer (small)", calories: 200, protein: 10 },
        ],
      },
    ],
  },
  friday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Moong Dal Cheela (2)", calories: 200, protein: 12 },
          { food: "Curd (1 cup)", calories: 100, protein: 8 },
          { food: "Green Tea", calories: 5, protein: 0 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Papaya (1 cup)", calories: 55, protein: 0.8 },
          { food: "Flax Seeds (1 tbsp)", calories: 55, protein: 2 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Fish Curry (150g)", calories: 220, protein: 28 },
          { food: "Brown Rice (1 cup)", calories: 215, protein: 5 },
          { food: "Cabbage Stir-fry", calories: 70, protein: 2 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Peanut Butter Crackers", calories: 180, protein: 6 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Mushroom Stir-fry", calories: 120, protein: 5 },
          { food: "Grilled Tofu (100g)", calories: 140, protein: 15 },
          { food: "Multigrain Roti (1)", calories: 130, protein: 5 },
        ],
      },
    ],
  },
  saturday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Aloo Paratha (1) + Curd", calories: 350, protein: 10 },
          { food: "Lassi (1 glass)", calories: 150, protein: 5 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Trail Mix (handful)", calories: 140, protein: 4 },
          { food: "Guava", calories: 68, protein: 2.5 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Chicken Biryani (1 plate)", calories: 400, protein: 25 },
          { food: "Raita (1 cup)", calories: 70, protein: 4 },
          { food: "Onion Salad", calories: 25, protein: 0.5 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Dark Chocolate (2 squares)", calories: 100, protein: 2 },
          { food: "Banana", calories: 105, protein: 1.3 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Chole (1 cup)", calories: 200, protein: 12 },
          { food: "Bhature (1)", calories: 260, protein: 5 },
          { food: "Green Salad", calories: 40, protein: 1 },
        ],
      },
    ],
  },
  sunday: {
    meals: [
      {
        name: "🌅 Breakfast",
        items: [
          { food: "Pancakes (3) + Honey", calories: 380, protein: 8 },
          { food: "Fresh Juice", calories: 110, protein: 1 },
        ],
      },
      {
        name: "🍎 Mid-Morning Snack",
        items: [
          { food: "Mixed Fruits Bowl", calories: 120, protein: 1.5 },
        ],
      },
      {
        name: "🍛 Lunch",
        items: [
          { food: "Mutton Curry (150g)", calories: 350, protein: 30 },
          { food: "Steamed Rice (1 cup)", calories: 200, protein: 4 },
          { food: "Dal Fry (1 cup)", calories: 170, protein: 10 },
        ],
      },
      {
        name: "🕐 Afternoon Snack",
        items: [
          { food: "Ice Cream (1 scoop)", calories: 140, protein: 2 },
          { food: "Almonds (8 pcs)", calories: 56, protein: 2 },
        ],
      },
      {
        name: "🌙 Dinner",
        items: [
          { food: "Grilled Chicken Salad", calories: 280, protein: 35 },
          { food: "Garlic Bread (2 pcs)", calories: 180, protein: 4 },
          { food: "Tomato Soup", calories: 90, protein: 2 },
        ],
      },
    ],
  },
};

// ---------- DATA: Weekly Exercise Plans ----------
const exercisePlans = {
  monday: {
    focus: "💪 Chest & Triceps",
    exercises: [
      { name: "Push-ups", detail: "4 × 15 reps", burn: 80 },
      { name: "Bench Press", detail: "4 × 12 reps", burn: 100 },
      { name: "Incline Dumbbell Press", detail: "3 × 12 reps", burn: 90 },
      { name: "Tricep Dips", detail: "3 × 15 reps", burn: 70 },
      { name: "Tricep Rope Pushdown", detail: "3 × 15 reps", burn: 60 },
      { name: "Cardio – Treadmill", detail: "15 min", burn: 150 },
    ],
  },
  tuesday: {
    focus: "🦵 Legs & Glutes",
    exercises: [
      { name: "Barbell Squats", detail: "4 × 12 reps", burn: 130 },
      { name: "Lunges", detail: "3 × 15 each leg", burn: 100 },
      { name: "Leg Press", detail: "4 × 12 reps", burn: 110 },
      { name: "Leg Curls", detail: "3 × 15 reps", burn: 60 },
      { name: "Calf Raises", detail: "4 × 20 reps", burn: 50 },
      { name: "Cardio – Cycling", detail: "15 min", burn: 140 },
    ],
  },
  wednesday: {
    focus: "🏋️ Back & Biceps",
    exercises: [
      { name: "Pull-ups", detail: "4 × 10 reps", burn: 90 },
      { name: "Barbell Rows", detail: "4 × 12 reps", burn: 100 },
      { name: "Lat Pulldown", detail: "3 × 12 reps", burn: 80 },
      { name: "Dumbbell Bicep Curls", detail: "3 × 15 reps", burn: 60 },
      { name: "Hammer Curls", detail: "3 × 12 reps", burn: 50 },
      { name: "Cardio – Jump Rope", detail: "10 min", burn: 130 },
    ],
  },
  thursday: {
    focus: "🧘 Yoga & Flexibility",
    exercises: [
      { name: "Sun Salutation", detail: "5 rounds", burn: 70 },
      { name: "Warrior Pose", detail: "Hold 30s × 3", burn: 40 },
      { name: "Downward Dog", detail: "Hold 30s × 3", burn: 35 },
      { name: "Pigeon Pose", detail: "Hold 45s each", burn: 30 },
      { name: "Cat-Cow Stretch", detail: "3 min", burn: 25 },
      { name: "Meditation", detail: "10 min", burn: 15 },
    ],
  },
  friday: {
    focus: "🏃 HIIT & Cardio",
    exercises: [
      { name: "Burpees", detail: "4 × 12 reps", burn: 120 },
      { name: "Mountain Climbers", detail: "3 × 30 sec", burn: 80 },
      { name: "Box Jumps", detail: "3 × 15 reps", burn: 90 },
      { name: "High Knees", detail: "3 × 30 sec", burn: 70 },
      { name: "Plank Hold", detail: "3 × 60 sec", burn: 40 },
      { name: "Sprints", detail: "5 × 100m", burn: 150 },
    ],
  },
  saturday: {
    focus: "🤸 Shoulders & Abs",
    exercises: [
      { name: "Overhead Press", detail: "4 × 12 reps", burn: 90 },
      { name: "Lateral Raises", detail: "3 × 15 reps", burn: 50 },
      { name: "Front Raises", detail: "3 × 12 reps", burn: 45 },
      { name: "Crunches", detail: "4 × 20 reps", burn: 60 },
      { name: "Leg Raises", detail: "3 × 15 reps", burn: 50 },
      { name: "Russian Twists", detail: "3 × 20 reps", burn: 55 },
    ],
  },
  sunday: {
    focus: "🛌 Active Recovery",
    exercises: [
      { name: "Light Walk", detail: "30 min", burn: 120 },
      { name: "Foam Rolling", detail: "15 min", burn: 30 },
      { name: "Stretching Routine", detail: "15 min", burn: 40 },
      { name: "Deep Breathing", detail: "10 min", burn: 10 },
    ],
  },
};

// ---------- DATA: Common Foods for Quick-Add ----------
const commonFoods = [
  { food: "Chicken Breast (100g)", calories: 165, protein: 31 },
  { food: "Egg (1 whole)", calories: 70, protein: 6 },
  { food: "Rice (1 cup)", calories: 200, protein: 4 },
  { food: "Banana", calories: 105, protein: 1.3 },
  { food: "Milk (1 cup)", calories: 150, protein: 8 },
  { food: "Paneer (100g)", calories: 265, protein: 18 },
  { food: "Whey Protein Scoop", calories: 120, protein: 24 },
  { food: "Oats (1 cup)", calories: 300, protein: 10 },
  { food: "Apple", calories: 95, protein: 0.5 },
  { food: "Dal (1 cup)", calories: 180, protein: 12 },
  { food: "Curd (1 cup)", calories: 100, protein: 8 },
  { food: "Almonds (10 pcs)", calories: 70, protein: 2.5 },
  { food: "Roti (1)", calories: 120, protein: 4 },
  { food: "Fish (100g)", calories: 130, protein: 26 },
  { food: "Peanut Butter (1 tbsp)", calories: 95, protein: 4 },
];

// =====================================================
// STATE
// =====================================================
let selectedDay = "monday";
let calculatorFoods = [];

// =====================================================
// DOM ELEMENTS
// =====================================================
const dayButtons = document.querySelectorAll(".day-btn");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

const mealCardsEl = document.getElementById("mealCards");
const dailySummaryEl = document.getElementById("dailySummary");
const exerciseCardsEl = document.getElementById("exerciseCards");
const exerciseSummaryEl = document.getElementById("exerciseSummary");

const foodNameInput = document.getElementById("foodName");
const foodCaloriesInput = document.getElementById("foodCalories");
const foodProteinInput = document.getElementById("foodProtein");
const foodQuantityInput = document.getElementById("foodQuantity");
const addFoodBtn = document.getElementById("addFoodBtn");
const quickAddGrid = document.getElementById("quickAddGrid");
const foodTableBody = document.getElementById("foodTableBody");
const totalCaloriesEl = document.getElementById("totalCalories");
const totalProteinEl = document.getElementById("totalProtein");
const clearAllBtn = document.getElementById("clearAllBtn");

// =====================================================
// RENDER: Diet Plan
// =====================================================
function renderDietPlan() {
  const plan = dietPlans[selectedDay];
  let totalCal = 0, totalProt = 0, totalCarbs = 0, totalFat = 0;

  mealCardsEl.innerHTML = "";

  plan.meals.forEach((meal) => {
    const card = document.createElement("div");
    card.className = "meal-card";

    let listHTML = "";
    meal.items.forEach((item) => {
      totalCal += item.calories;
      totalProt += item.protein;
      listHTML += `
        <li>
          <span>${item.food}</span>
          <span>
            <span class="food-cal">${item.calories} cal</span> · 
            <span class="food-prot">${item.protein}g P</span>
          </span>
        </li>`;
    });

    card.innerHTML = `<h3>${meal.name}</h3><ul>${listHTML}</ul>`;
    mealCardsEl.appendChild(card);
  });

  // Estimate carbs & fat (rough approximation)
  totalCarbs = Math.round(totalCal * 0.45 / 4);
  totalFat = Math.round(totalCal * 0.25 / 9);

  dailySummaryEl.innerHTML = `
    <div class="summary-card">
      <div class="label">Total Calories</div>
      <div class="value cal">${totalCal}</div>
    </div>
    <div class="summary-card">
      <div class="label">Protein</div>
      <div class="value prot">${totalProt.toFixed(1)}g</div>
    </div>
    <div class="summary-card">
      <div class="label">Carbs (est.)</div>
      <div class="value carbs">${totalCarbs}g</div>
    </div>
    <div class="summary-card">
      <div class="label">Fat (est.)</div>
      <div class="value fat">${totalFat}g</div>
    </div>
  `;
}

// =====================================================
// RENDER: Exercise Plan
// =====================================================
function renderExercisePlan() {
  const plan = exercisePlans[selectedDay];
  let totalBurn = 0;
  let totalDuration = plan.exercises.length; // rough count

  exerciseCardsEl.innerHTML = "";

  const card = document.createElement("div");
  card.className = "exercise-card";

  let rows = "";
  plan.exercises.forEach((ex) => {
    totalBurn += ex.burn;
    rows += `
      <div class="ex-item">
        <span class="ex-name">${ex.name}</span>
        <span class="ex-detail">${ex.detail}</span>
        <span class="ex-burn">🔥 ${ex.burn} cal</span>
      </div>`;
  });

  card.innerHTML = `<h3>${plan.focus}</h3>${rows}`;
  exerciseCardsEl.appendChild(card);

  exerciseSummaryEl.innerHTML = `
    <div class="summary-card">
      <div class="label">Exercises</div>
      <div class="value dur">${plan.exercises.length}</div>
    </div>
    <div class="summary-card">
      <div class="label">Est. Calories Burned</div>
      <div class="value burn">${totalBurn}</div>
    </div>
  `;
}

// =====================================================
// RENDER: Calorie Calculator
// =====================================================
function renderQuickAddButtons() {
  quickAddGrid.innerHTML = "";
  commonFoods.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "quick-add-btn";
    btn.textContent = item.food;
    btn.addEventListener("click", () => {
      calculatorFoods.push({ ...item, quantity: 1 });
      renderFoodTable();
    });
    quickAddGrid.appendChild(btn);
  });
}

function renderFoodTable() {
  foodTableBody.innerHTML = "";
  let totalCal = 0;
  let totalProt = 0;

  calculatorFoods.forEach((item, index) => {
    const cal = item.calories * item.quantity;
    const prot = item.protein * item.quantity;
    totalCal += cal;
    totalProt += prot;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.food}</td>
      <td>${item.quantity}</td>
      <td style="color:#ffab40;font-weight:600">${cal}</td>
      <td style="color:#69f0ae;font-weight:600">${prot.toFixed(1)}g</td>
      <td><button class="remove-btn" data-index="${index}">✕</button></td>
    `;
    foodTableBody.appendChild(tr);
  });

  totalCaloriesEl.textContent = totalCal;
  totalProteinEl.textContent = totalProt.toFixed(1) + "g";

  // Bind remove buttons
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"));
      calculatorFoods.splice(idx, 1);
      renderFoodTable();
    });
  });
}

// =====================================================
// EVENT LISTENERS
// =====================================================

// Day buttons
dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    dayButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDay = btn.getAttribute("data-day");
    renderDietPlan();
    renderExercisePlan();
  });
});

// Tab buttons
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Add food to calculator
addFoodBtn.addEventListener("click", () => {
  const name = foodNameInput.value.trim();
  const cal = parseFloat(foodCaloriesInput.value);
  const prot = parseFloat(foodProteinInput.value);
  const qty = parseInt(foodQuantityInput.value) || 1;

  if (!name || isNaN(cal) || isNaN(prot)) {
    alert("Please fill in food name, calories, and protein.");
    return;
  }

  calculatorFoods.push({ food: name, calories: cal, protein: prot, quantity: qty });
  renderFoodTable();

  // Reset inputs
  foodNameInput.value = "";
  foodCaloriesInput.value = "";
  foodProteinInput.value = "";
  foodQuantityInput.value = "1";
  foodNameInput.focus();
});

// Enter key to add food
[foodNameInput, foodCaloriesInput, foodProteinInput, foodQuantityInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addFoodBtn.click();
  });
});

// Clear all calculator items
clearAllBtn.addEventListener("click", () => {
  calculatorFoods = [];
  renderFoodTable();
});

// =====================================================
// INITIAL RENDER
// =====================================================
renderDietPlan();
renderExercisePlan();
renderQuickAddButtons();
