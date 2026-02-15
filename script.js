// script.js — Dzīvokļa īres kalkulators
// Prasības: let/const, addEventListener, vismaz 1 funkcija, if/else, validācija

const rentForm = document.getElementById('rentForm');
const typeSelect = document.getElementById('type');
const monthsInput = document.getElementById('months');
const typeError = document.getElementById('typeError');
const monthsError = document.getElementById('monthsError');
const resultBox = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

// Cenu objekts (masīvs/objekts izmantošanai)
const prices = {
  studio: 300,
  one: 450,
  two: 600
};

// Papildus pakalpojumu cenas (€/mēn)
const servicesPrice = {
  cleaning: 20,
  parking: 50
};

// Atlaides noteikumi (array ar objektiem)
const discounts = [
  { months: 12, pct: 15 }, // >=12 mēneši -> 15% atlaide
  { months: 6, pct: 7 }    // >=6 mēneši -> 7% atlaide
];

// Helpers
function clearErrors(){
  typeError.textContent = '';
  monthsError.textContent = '';
  resultBox.textContent = '';
  resultBox.className = 'result';
}

function validateInputs(type, months){
  // clear previous errors
  clearErrors();
  let hasError = false;

  if(!type){
    typeError.textContent = 'Lūdzu, izvēlies dzīvokļa tipu.';
    hasError = true;
  }

  if(!months){
    monthsError.textContent = 'Lūdzu, norādi nomas mēnešu skaitu.';
    hasError = true;
  } else if(!Number.isInteger(months) || months < 1){
    monthsError.textContent = 'Ievadi pozitīvu veselā skaitļa vērtību (1, 2, ...).';
    hasError = true;
  }

  return !hasError;
}

function getDiscountPct(months){
  // pārbaudām lielākās atlaides vispirms
  for(const rule of discounts){
    if(months >= rule.months) return rule.pct;
  }
  return 0;
}

function formatCurrency(eur){
  return eur.toFixed(2) + ' €';
}

// Event: form submit
rentForm.addEventListener('submit', function(e){
  e.preventDefault();

  const type = typeSelect.value;
  const months = parseInt(monthsInput.value, 10);
  const cleaningChecked = document.getElementById('cleaning').checked;
  const parkingChecked = document.getElementById('parking').checked;

  // Validācija (if / else izmantošana)
  if(!validateInputs(type, months)){
    resultBox.textContent = 'Kļūda: pārbaudi norādītos laukus.';
    resultBox.classList.add('alert');
    return; // forma netiek iesniegta kļūdas gadījumā
  }

  // Aprēķins
  const baseMonthly = prices[type];
  let monthlyServices = 0;
  if(cleaningChecked) monthlyServices += servicesPrice.cleaning;
  if(parkingChecked) monthlyServices += servicesPrice.parking;

  const grossPerMonth = baseMonthly + monthlyServices;
  const grossTotal = grossPerMonth * months;

  // Atlaide
  const discountPct = getDiscountPct(months);
  const discountAmount = (grossTotal * discountPct) / 100;
  const total = grossTotal - discountAmount;

  // Rezultāta attēlošana
  let html = `<div class="small">Izvēlētais tips: <strong>${typeSelect.options[typeSelect.selectedIndex].text}</strong></div>`;
  html += `<div class="small">Mēnešu skaits: <strong>${months}</strong></div>`;
  html += `<div class="small">Mēneša maksa (ar pakalpojumiem): <strong>${formatCurrency(grossPerMonth)}</strong></div>`;
  if(discountPct){
    html += `<p class="small">Piemērotā atlaide: <strong>${discountPct}%</strong> — ietaupījums ${formatCurrency(discountAmount)}</p>`;
    resultBox.classList.add('success');
  } else {
    resultBox.classList.add('result');
  }
  html += `<p class="price-highlight">Kopā jāmaksā: ${formatCurrency(total)}</p>`;

  resultBox.innerHTML = html;
});

// Reset poga
resetBtn.addEventListener('click', () => {
  rentForm.reset();
  clearErrors();
});
