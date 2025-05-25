const studyData = {
  plan: [
    {
      day: 1,
      math: "الأعداد المركبة",
      math_questions: 34,
      calculus: "المشتقات العليا",
      calculus_questions: 30,
      statics: "العزوم",
      statics_questions: 16,
      dynamics: "تكامل الدوال المتجهة",
      dynamics_questions: 25,
    },
    {
      day: 2,
      math: "الأعداد المركبة",
      math_questions: 35,
      calculus: "المشتقات العليا",
      calculus_questions: 32,
      statics: "العزوم",
      statics_questions: 35,
      dynamics: "تكامل الدوال المتجهة",
      dynamics_questions: 25,
      notes: "بداية الدراسة",
    },
    {
      day: 3,
      math: "الأعداد المركبة",
      math_questions: 35,
      calculus: "المشتقات العليا",
      calculus_questions: 32,
      statics: "العزوم",
      statics_questions: 34,
      dynamics: "تفاضل الدوال المتجهة",
      dynamics_questions: 32,
      notes: "متابعة الدراسة",
    },
    {
      day: 4,
      math: "الأعداد المركبة",
      math_questions: 34,
      calculus: "المشتقات العليا",
      calculus_questions: 31,
      statics: "العزوم",
      statics_questions: 35,
      dynamics: "تفاضل الدوال المتجهة",
      dynamics_questions: 32,
      notes: "نهاية دراسة العزوم والمشتقات العليا",
    },
    {
      day: 5,
      math: "نظرية ذات الحدين",
      math_questions: 35,
      calculus: "الاشتقاق الضمني والبارامتري",
      calculus_questions: 23,
      statics: "محصلة القوى المتوازية",
      statics_questions: 27,
      dynamics: "حركة الأجسام ذات الكتلة والعجلة",
      dynamics_questions: 25,
      notes: "بداية نظرية ذات الحدين",
    },
    {
      day: 6,
      math: "نظرية ذات الحدين",
      math_questions: 35,
      calculus: "الاشتقاق الضمني والبارامتري",
      calculus_questions: 23,
      statics: "محصلة القوى المتوازية",
      statics_questions: 27,
      dynamics: "حركة الأجسام ذات الكتلة والعجلة",
      dynamics_questions: 25,
      notes: "متابعة الدراسة",
    },
    {
      day: 7,
      math: "نظرية ذات الحدين",
      math_questions: 36,
      calculus: "المعدلات الزمنية",
      calculus_questions: 27,
      statics: "اتزان مجموعة القوى المستوية",
      statics_questions: 27,
      dynamics: "المصاعد",
      dynamics_questions: 23,
      notes: "نهاية نظرية ذات الحدين",
    },
    {
      day: 8,
      math: "النظام الإحداثي ثلاثي الأبعاد",
      math_questions: 22,
      calculus: "المعدلات الزمنية",
      calculus_questions: 27,
      statics: "اتزان مجموعة القوى المستوية",
      statics_questions: 28,
      dynamics: "المصاعد",
      dynamics_questions: 23,
      notes: "بدء النظام الإحداثي",
    },
    {
      day: 9,
      math: "النظام الإحداثي ثلاثي الأبعاد",
      math_questions: 21,
      calculus: "سلوك الدالة",
      calculus_questions: 26,
      statics: "الازدواج",
      statics_questions: 30,
      dynamics: "البكرات",
      dynamics_questions: 21,
      notes: "إكمال النظام الإحداثي",
    },
    {
      day: 10,
      math: "المتجهات في الفراغ",
      math_questions: 26,
      calculus: "سلوك الدالة",
      calculus_questions: 26,
      statics: "الازدواج",
      statics_questions: 30,
      dynamics: "البكرات",
      dynamics_questions: 21,
      notes: "بداية المتجهات",
    },
    {
      day: 11,
      math: "المتجهات في الفراغ",
      math_questions: 25,
      calculus: "تطبيقات القيم العظمى والصغرى",
      calculus_questions: 24,
      statics: "محصلة القوى المتوازية",
      statics_questions: 27,
      dynamics: "الدفع",
      dynamics_questions: 22,
      notes: "مراجعة أو تعويض",
    },
    {
      day: 12,
      math: "الضرب القياسي",
      math_questions: 33,
      calculus: "تطبيقات القيم العظمى والصغرى",
      calculus_questions: 24,
      statics: "اتزان القوى المستوية",
      statics_questions: 27,
      dynamics: "الدفع",
      dynamics_questions: 22,
      notes: "بداية الضرب القياسي",
    },
    {
      day: 13,
      math: "الضرب القياسي",
      math_questions: 33,
      calculus: "التكامل",
      calculus_questions: 30,
      statics: "الازدواج",
      statics_questions: 31,
      dynamics: "الشغل",
      dynamics_questions: 24,
      notes: "إكمال الضرب القياسي",
    },
    {
      day: 14,
      math: "الضرب الاتجاهي",
      math_questions: 37,
      calculus: "التكامل",
      calculus_questions: 30,
      statics: "محصلة القوى المتوازية",
      statics_questions: 27,
      dynamics: "الشغل",
      dynamics_questions: 24,
      notes: "بداية الضرب الاتجاهي",
    },
    {
      day: 15,
      math: "الضرب الاتجاهي",
      math_questions: 36,
      calculus: "التكامل المحدد",
      calculus_questions: 29,
      statics: "اتزان القوى المستوية",
      statics_questions: 28,
      dynamics: "طاقة الحركة",
      dynamics_questions: 23,
      notes: "إكمال الضرب الاتجاهي",
    },
    {
      day: 16,
      math: "معادلة الخط المستقيم",
      math_questions: 27,
      calculus: "التكامل المحدد",
      calculus_questions: 29,
      statics: "الازدواج",
      statics_questions: 30,
      dynamics: "طاقة الحركة",
      dynamics_questions: 24,
      notes: "بداية معادلة الخط المستقيم",
    },
    {
      day: 17,
      math: "معادلة الخط المستقيم",
      math_questions: 27,
      calculus: "تطبيقات التكامل",
      calculus_questions: 23,
      statics: "الازدواج",
      statics_questions: 31,
      dynamics: "مبدأ الشغل والطاقة",
      dynamics_questions: 19,
      notes: "إكمال معادلة الخط المستقيم",
    },
    {
      day: 18,
      math: "معادلة المستوي",
      math_questions: 33,
      calculus: "تطبيقات التكامل",
      calculus_questions: 22,
      statics: "الازدواج",
      statics_questions: 30,
      dynamics: "مبدأ الشغل والطاقة",
      dynamics_questions: 19,
      notes: "بداية معادلة المستوي",
    },
    {
      day: 19,
      math: "معادلة المستوي",
      math_questions: 33,
      calculus: "على المساحات والحجوم",
      calculus_questions: 37,
      statics: "الازدواج",
      statics_questions: 30,
      dynamics: "طاقة الوضع",
      dynamics_questions: 23,
      notes: "متابعة معادلة المستوي",
    },
    {
      day: 20,
      math: "معادلة المستوي",
      math_questions: 34,
      calculus: "على المساحات والحجوم",
      calculus_questions: 37,
      statics: "اتزان القوى المستوية",
      statics_questions: 27,
      dynamics: "طاقة الوضع",
      dynamics_questions: 22,
      notes: "إكمال معادلة المستوي",
    },
    {
      day: 21,
      math: "معادلة المستوي",
      math_questions: 33,
      calculus: "القدرة",
      calculus_questions: 27,
      statics: "مراجعة عامة",
      statics_questions: 30,
      dynamics: "القدرة",
      dynamics_questions: 27,
      notes: "مراجعة شاملة",
    },
    {
      day: 22,
      math: "مراجعة عامة",
      math_questions: 34,
      calculus: "مراجعة عامة",
      calculus_questions: 30,
      statics: "مراجعة عامة",
      statics_questions: 30,
      dynamics: "مراجعة عامة",
      dynamics_questions: 30,
      notes: "مراجعة شاملة",
    },
    {
      day: 23,
      math: "مراجعة عامة",
      math_questions: 35,
      calculus: "مراجعة عامة",
      calculus_questions: 30,
      statics: "مراجعة عامة",
      statics_questions: 30,
      dynamics: "مراجعة عامة",
      dynamics_questions: 30,
      notes: "مراجعة شاملة",
    },
    {
      day: 24,
      math: "مراجعة عامة",
      math_questions: 35,
      calculus: "مراجعة عامة",
      calculus_questions: 30,
      statics: "مراجعة عامة",
      statics_questions: 30,
      dynamics: "مراجعة عامة",
      dynamics_questions: 30,
      notes: "مراجعة شاملة",
    },
    {
      day: 25,
      math: "مراجعة عامة",
      math_questions: 35,
      calculus: "مراجعة عامة",
      calculus_questions: 30,
      statics: "مراجعة عامة",
      statics_questions: 30,
      dynamics: "مراجعة عامة",
      dynamics_questions: 30,
      notes: "مراجعة شاملة / استعداد للامتحان",
    },
  ],
};

function getStudyDay() {
  const startDate = new Date(2025, 4, 20); // May 21, 2025
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return Math.min(Math.max(diffDays, 1), 25); // Clamp between 1 and 25
}

function getTaskKey(day, subject) {
  return `task-${day}-${subject}`;
}

function isTaskCompleted(day, subject) {
  return localStorage.getItem(getTaskKey(day, subject)) === "true";
}

function toggleTask(day, subject) {
  const key = getTaskKey(day, subject);
  const isCompleted = isTaskCompleted(day, subject);
  localStorage.setItem(key, !isCompleted);
  renderPlan(day);
}

function renderPlan(day) {
  const plan = studyData.plan.find((p) => p.day === day);
  if (!plan) return;

  document.getElementById("currentDay").textContent = day;

  const dailyPlan = document.getElementById("dailyPlan");
  dailyPlan.innerHTML = `
      <li>
        <input type="checkbox" 
          ${isTaskCompleted(day, "math") ? "checked" : ""} 
          onchange="toggleTask(${day}, 'math')"
          class="task-checkbox"
        >
        <span class="subject-title">الجبر والهندسة:</span>
        <span class="question-count">(${plan.math_questions} سؤال)</span>
        ${plan.math}
      </li>
      <li>
        <input type="checkbox" 
          ${isTaskCompleted(day, "calculus") ? "checked" : ""} 
          onchange="toggleTask(${day}, 'calculus')"
          class="task-checkbox"
        >
        <span class="subject-title">التفاضل:</span>
        <span class="question-count">(${plan.calculus_questions} سؤال)</span>
        ${plan.calculus}
      </li>
      <li>
        <input type="checkbox" 
          ${isTaskCompleted(day, "statics") ? "checked" : ""} 
          onchange="toggleTask(${day}, 'statics')"
          class="task-checkbox"
        >
        <span class="subject-title">الاستاتيكا:</span>
        <span class="question-count">(${plan.statics_questions} سؤال)</span>
        ${plan.statics}
      </li>
      <li>
        <input type="checkbox" 
          ${isTaskCompleted(day, "dynamics") ? "checked" : ""} 
          onchange="toggleTask(${day}, 'dynamics')"
          class="task-checkbox"
        >
        <span class="subject-title">الديناميكا:</span>
        <span class="question-count">(${plan.dynamics_questions} سؤال)</span>
        ${plan.dynamics}
      </li>
    `;

  // Update button states
  const maxDay = getStudyDay();
  document.querySelector(".navigation-buttons button:nth-child(1)").disabled =
    day >= maxDay;
  document.querySelector(".navigation-buttons button:nth-child(2)").disabled =
    day <= 1;
}

function nextDay() {
  const currentDay = parseInt(
    document.getElementById("currentDay").textContent
  );
  const maxDay = getStudyDay();
  if (currentDay < maxDay) {
    renderPlan(currentDay + 1);
  }
}

function prevDay() {
  const currentDay = parseInt(
    document.getElementById("currentDay").textContent
  );
  if (currentDay > 1) {
    renderPlan(currentDay - 1);
  }
}

window.onload = () => {
  const todayDay = getStudyDay();
  renderPlan(todayDay);
};
