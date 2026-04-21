const phoneNumber = "4917672766762";

const tuneProfiles = {
  commuterTurbo: {
    label: "Alltag mit mehr Druck",
    stage1: { hp: 0.14, nm: 0.2, drive: 18 },
    stage2: { hp: 0.22, nm: 0.29, drive: 28 },
    eco: { hp: 0.07, nm: 0.12, drive: 14 },
  },
  hotHatch: {
    label: "Sportlich und direkt",
    stage1: { hp: 0.18, nm: 0.22, drive: 24 },
    stage2: { hp: 0.27, nm: 0.33, drive: 34 },
    eco: { hp: 0.08, nm: 0.12, drive: 12 },
  },
  performanceTurbo: {
    label: "Performance-orientiert",
    stage1: { hp: 0.14, nm: 0.18, drive: 22 },
    stage2: { hp: 0.21, nm: 0.28, drive: 32 },
    eco: { hp: 0.05, nm: 0.09, drive: 10 },
  },
  dieselTorque: {
    label: "Maximaler Durchzug",
    stage1: { hp: 0.15, nm: 0.24, drive: 20 },
    stage2: { hp: 0.22, nm: 0.35, drive: 28 },
    eco: { hp: 0.06, nm: 0.14, drive: 14 },
  },
  luxurySUV: {
    label: "Schub fuer schwere Plattformen",
    stage1: { hp: 0.13, nm: 0.18, drive: 18 },
    stage2: { hp: 0.19, nm: 0.26, drive: 25 },
    eco: { hp: 0.05, nm: 0.09, drive: 12 },
  },
  supercarTurbo: {
    label: "Feiner Druck mit Reserven",
    stage1: { hp: 0.11, nm: 0.15, drive: 18 },
    stage2: { hp: 0.17, nm: 0.23, drive: 25 },
    eco: { hp: 0.04, nm: 0.07, drive: 8 },
  },
};

const vehicleData = {
  Mercedes: [
    { model: "A 35 AMG", engine: "2.0 Turbo", stockHp: 306, stockNm: 400, zeroToHundred: 4.7, body: "Hatchback", style: "hatch", profile: "hotHatch" },
    { model: "C 300", engine: "2.0 Turbo", stockHp: 258, stockNm: 400, zeroToHundred: 6.0, body: "Limousine", style: "sedan", profile: "commuterTurbo" },
    { model: "C 43 AMG", engine: "3.0 Biturbo", stockHp: 390, stockNm: 520, zeroToHundred: 4.7, body: "Limousine", style: "sedan", profile: "performanceTurbo" },
    { model: "E 400d", engine: "3.0 Diesel", stockHp: 340, stockNm: 700, zeroToHundred: 5.0, body: "Limousine", style: "sedan", profile: "dieselTorque" },
    { model: "GLC 300", engine: "2.0 Turbo", stockHp: 258, stockNm: 370, zeroToHundred: 6.2, body: "SUV", style: "suv", profile: "luxurySUV" },
  ],
  BMW: [
    { model: "120d", engine: "2.0 Diesel", stockHp: 190, stockNm: 400, zeroToHundred: 7.0, body: "Hatchback", style: "hatch", profile: "dieselTorque" },
    { model: "M135i xDrive", engine: "2.0 Turbo", stockHp: 306, stockNm: 450, zeroToHundred: 4.8, body: "Hatchback", style: "hatch", profile: "hotHatch" },
    { model: "330i", engine: "2.0 Turbo", stockHp: 258, stockNm: 400, zeroToHundred: 5.8, body: "Limousine", style: "sedan", profile: "commuterTurbo" },
    { model: "M340i xDrive", engine: "3.0 Turbo", stockHp: 374, stockNm: 500, zeroToHundred: 4.4, body: "Limousine", style: "sedan", profile: "performanceTurbo" },
    { model: "X5 40d", engine: "3.0 Diesel", stockHp: 340, stockNm: 700, zeroToHundred: 5.5, body: "SUV", style: "suv", profile: "dieselTorque" },
  ],
  Audi: [
    { model: "A4 45 TFSI", engine: "2.0 Turbo", stockHp: 265, stockNm: 370, zeroToHundred: 5.5, body: "Limousine", style: "sedan", profile: "commuterTurbo" },
    { model: "S3", engine: "2.0 TFSI", stockHp: 310, stockNm: 400, zeroToHundred: 4.8, body: "Limousine", style: "sedan", profile: "hotHatch" },
    { model: "RS3", engine: "2.5 TFSI", stockHp: 400, stockNm: 500, zeroToHundred: 3.8, body: "Limousine", style: "sedan", profile: "performanceTurbo" },
    { model: "A6 50 TDI", engine: "3.0 Diesel", stockHp: 286, stockNm: 620, zeroToHundred: 5.5, body: "Limousine", style: "sedan", profile: "dieselTorque" },
    { model: "SQ5", engine: "3.0 Diesel", stockHp: 347, stockNm: 700, zeroToHundred: 5.1, body: "SUV", style: "suv", profile: "luxurySUV" },
  ],
  Porsche: [
    { model: "718 Cayman S", engine: "2.5 Turbo", stockHp: 350, stockNm: 420, zeroToHundred: 4.4, body: "Coupe", style: "coupe", profile: "performanceTurbo" },
    { model: "911 Carrera S", engine: "3.0 Biturbo", stockHp: 450, stockNm: 530, zeroToHundred: 3.7, body: "Coupe", style: "coupe", profile: "supercarTurbo" },
    { model: "Macan S", engine: "2.9 Biturbo", stockHp: 380, stockNm: 520, zeroToHundred: 4.8, body: "SUV", style: "suv", profile: "luxurySUV" },
    { model: "Cayenne GTS", engine: "4.0 Biturbo", stockHp: 460, stockNm: 620, zeroToHundred: 4.5, body: "SUV", style: "suv", profile: "supercarTurbo" },
    { model: "Panamera 4S", engine: "2.9 Biturbo", stockHp: 440, stockNm: 550, zeroToHundred: 4.4, body: "Sportlimousine", style: "sedan", profile: "supercarTurbo" },
  ],
  Volkswagen: [
    { model: "Golf GTI Clubsport", engine: "2.0 TSI", stockHp: 300, stockNm: 400, zeroToHundred: 5.6, body: "Hatchback", style: "hatch", profile: "hotHatch" },
    { model: "Golf R", engine: "2.0 TSI", stockHp: 320, stockNm: 420, zeroToHundred: 4.7, body: "Hatchback", style: "hatch", profile: "hotHatch" },
    { model: "Arteon 2.0 TSI", engine: "2.0 TSI", stockHp: 280, stockNm: 350, zeroToHundred: 5.6, body: "Fastback", style: "sedan", profile: "commuterTurbo" },
    { model: "Tiguan R", engine: "2.0 TSI", stockHp: 320, stockNm: 420, zeroToHundred: 4.9, body: "SUV", style: "suv", profile: "hotHatch" },
    { model: "Passat 2.0 TDI", engine: "2.0 Diesel", stockHp: 200, stockNm: 400, zeroToHundred: 7.4, body: "Limousine", style: "sedan", profile: "dieselTorque" },
  ],
  Cupra: [
    { model: "Leon 2.0 TSI", engine: "2.0 TSI", stockHp: 300, stockNm: 400, zeroToHundred: 5.7, body: "Hatchback", style: "hatch", profile: "hotHatch" },
    { model: "Formentor VZ", engine: "2.0 TSI", stockHp: 310, stockNm: 400, zeroToHundred: 4.9, body: "CUV", style: "suv", profile: "hotHatch" },
    { model: "Ateca 2.0 TSI", engine: "2.0 TSI", stockHp: 300, stockNm: 400, zeroToHundred: 4.9, body: "SUV", style: "suv", profile: "hotHatch" },
    { model: "Leon Sportstourer", engine: "2.0 TSI", stockHp: 310, stockNm: 400, zeroToHundred: 4.9, body: "Kombi", style: "wagon", profile: "hotHatch" },
  ],
  Skoda: [
    { model: "Octavia RS", engine: "2.0 TSI", stockHp: 245, stockNm: 370, zeroToHundred: 6.7, body: "Kombi", style: "wagon", profile: "commuterTurbo" },
    { model: "Superb 2.0 TSI", engine: "2.0 TSI", stockHp: 280, stockNm: 350, zeroToHundred: 5.8, body: "Kombi", style: "wagon", profile: "commuterTurbo" },
    { model: "Kodiaq RS", engine: "2.0 TSI", stockHp: 245, stockNm: 370, zeroToHundred: 6.6, body: "SUV", style: "suv", profile: "luxurySUV" },
    { model: "Karoq 2.0 TSI", engine: "2.0 TSI", stockHp: 190, stockNm: 320, zeroToHundred: 7.0, body: "SUV", style: "suv", profile: "commuterTurbo" },
  ],
  SEAT: [
    { model: "Leon FR 2.0 TSI", engine: "2.0 TSI", stockHp: 190, stockNm: 320, zeroToHundred: 7.2, body: "Hatchback", style: "hatch", profile: "commuterTurbo" },
    { model: "Ibiza 1.5 TSI", engine: "1.5 TSI", stockHp: 150, stockNm: 250, zeroToHundred: 8.2, body: "Hatchback", style: "hatch", profile: "commuterTurbo" },
    { model: "Ateca 2.0 TSI", engine: "2.0 TSI", stockHp: 190, stockNm: 320, zeroToHundred: 7.3, body: "SUV", style: "suv", profile: "commuterTurbo" },
    { model: "Tarraco 2.0 TSI", engine: "2.0 TSI", stockHp: 245, stockNm: 370, zeroToHundred: 6.4, body: "SUV", style: "suv", profile: "luxurySUV" },
  ],
  "Land Rover": [
    { model: "Range Rover Sport P400", engine: "3.0 Turbo", stockHp: 400, stockNm: 550, zeroToHundred: 5.9, body: "SUV", style: "suv", profile: "luxurySUV" },
    { model: "Velar P250", engine: "2.0 Turbo", stockHp: 250, stockNm: 365, zeroToHundred: 7.5, body: "SUV", style: "suv", profile: "commuterTurbo" },
    { model: "Discovery D300", engine: "3.0 Diesel", stockHp: 300, stockNm: 650, zeroToHundred: 6.8, body: "SUV", style: "suv", profile: "dieselTorque" },
    { model: "Defender P400", engine: "3.0 Turbo", stockHp: 400, stockNm: 550, zeroToHundred: 6.1, body: "SUV", style: "suv", profile: "luxurySUV" },
  ],
};

const stageMeta = {
  stage1: {
    label: "Stage 1",
    description: "Saubere Kennfeldoptimierung fuer Serie oder leichtes Setup.",
  },
  stage2: {
    label: "Stage 2",
    description: "Mehr Reserven fuer sportlicheres Hardware-Setup und mehr Punch.",
  },
  eco: {
    label: "Eco Torque",
    description: "Mehr Durchzug und Fahrbarkeit fuer den Alltag mit ruhiger Kennlinie.",
  },
  tcu: {
    label: "Getriebe / TCU",
    description: "Schaltlogik, Drehmomentmanagement und Reaktion werden individuell abgestimmt.",
  },
  coding: {
    label: "Coding & Sonderfunktionen",
    description: "Fahrzeug-Coding und Komfort- oder Performancefunktionen nach Wunsch.",
  },
};

const selectors = {
  brandSelect: document.getElementById("brand-select"),
  modelSelect: document.getElementById("model-select"),
  stageSelect: document.getElementById("stage-select"),
  bookingBrand: document.getElementById("booking-brand"),
  bookingModel: document.getElementById("booking-model"),
  bookingPackage: document.getElementById("booking-package"),
  bookingForm: document.getElementById("booking-form"),
  bookingDate: document.getElementById("booking-date"),
  bookingTime: document.getElementById("booking-time"),
  bookingName: document.getElementById("booking-name"),
  bookingPhone: document.getElementById("booking-phone"),
  bookingNote: document.getElementById("booking-note"),
  heroVisual: document.getElementById("hero-visual"),
  vehicleVisual: document.getElementById("vehicle-visual"),
  modelGallery: document.getElementById("model-gallery"),
  summaryWhatsapp: document.getElementById("summary-whatsapp"),
  formSuccess: document.getElementById("form-success"),
  navToggle: document.getElementById("nav-toggle"),
  navLinks: document.getElementById("nav-links"),
  whatsappToggle: document.getElementById("whatsapp-toggle"),
  whatsappCard: document.getElementById("whatsapp-card"),
  whatsappClose: document.getElementById("whatsapp-close"),
};

const stageSelectIds = ["stage1", "stage2", "eco"];
const brands = Object.keys(vehicleData);

function populateBrandSelect(select, selectedBrand) {
  select.innerHTML = "";
  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    option.selected = brand === selectedBrand;
    select.append(option);
  });
}

function populateModelSelect(select, brand, selectedModel) {
  select.innerHTML = "";
  vehicleData[brand].forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.model;
    option.textContent = vehicle.model;
    option.selected = vehicle.model === selectedModel;
    select.append(option);
  });
}

function getVehicle(brand, model) {
  return vehicleData[brand].find((vehicle) => vehicle.model === model) || vehicleData[brand][0];
}

function roundValue(value) {
  return Math.round(value / 5) * 5;
}

function calculateTune(vehicle, stageId) {
  const profile = tuneProfiles[vehicle.profile];
  const stage = profile[stageId];
  const tunedHp = roundValue(vehicle.stockHp * (1 + stage.hp));
  const tunedNm = roundValue(vehicle.stockNm * (1 + stage.nm));
  const zeroToHundred = Number(
    Math.max(
      vehicle.zeroToHundred * (1 - Math.min(stage.hp * 0.28 + stage.nm * 0.1, 0.18)),
      vehicle.zeroToHundred * 0.8
    ).toFixed(1)
  );

  return {
    tunedHp,
    tunedNm,
    gainHp: tunedHp - vehicle.stockHp,
    gainNm: tunedNm - vehicle.stockNm,
    zeroToHundred,
    driveGain: stage.drive,
    profileLabel: profile.label,
  };
}

function buildVehicleSvg(vehicle, brand, stageId) {
  const viewBox = "0 0 760 320";
  const accent = stageId === "eco" ? "#ff784f" : stageId === "stage2" ? "#ff4f31" : "#ff6743";
  const stroke = "rgba(255,255,255,0.82)";
  const svgIdBase = `${brand}-${vehicle.model}-${stageId}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  const fills = {
    sedan:
      "M88 196 C118 164 176 142 240 136 L412 128 C458 128 508 106 544 82 L596 82 C624 84 656 106 668 134 L704 136 C720 138 730 148 730 164 L730 196 L88 196 Z",
    hatch:
      "M86 196 C122 160 182 140 246 136 L392 126 C432 126 470 112 506 88 L580 86 C604 88 632 110 642 136 L700 142 C716 144 728 154 728 168 L728 196 L86 196 Z",
    coupe:
      "M82 198 C124 164 194 140 272 132 L468 126 C512 124 562 90 602 86 L650 92 C674 104 698 132 708 164 L730 170 L730 198 L82 198 Z",
    suv:
      "M76 206 C104 158 164 132 238 126 L438 126 C496 124 546 106 590 92 L654 92 C690 100 716 124 728 160 L742 164 L742 206 L76 206 Z",
    wagon:
      "M80 198 C118 160 180 138 252 132 L456 128 C514 128 560 104 604 86 L668 90 C694 102 720 130 732 164 L742 166 L742 198 L80 198 Z",
  };

  return `
    <svg class="vehicle-svg" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${brand} ${vehicle.model}">
      <defs>
        <linearGradient id="${svgIdBase}-car-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.75" />
          <stop offset="100%" stop-color="#330905" stop-opacity="0.96" />
        </linearGradient>
        <linearGradient id="${svgIdBase}-road-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="50%" stop-color="${accent}" />
          <stop offset="100%" stop-color="transparent" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="760" height="320" fill="transparent" />
      <circle cx="576" cy="86" r="104" fill="${accent}" opacity="0.16" />
      <path d="${fills[vehicle.style]}" fill="url(#${svgIdBase}-car-glow)" stroke="${stroke}" stroke-width="3.2" />
      <path d="${fills[vehicle.style]}" fill="transparent" stroke="rgba(255,255,255,0.14)" stroke-width="14" />
      <path d="M34 232 H726" stroke="url(#${svgIdBase}-road-line)" stroke-width="3" />
      <path d="M116 228 H220" stroke="rgba(255,255,255,0.12)" stroke-width="6" stroke-linecap="round" />
      <path d="M538 228 H644" stroke="rgba(255,255,255,0.12)" stroke-width="6" stroke-linecap="round" />
      <circle cx="218" cy="210" r="40" fill="#09090B" stroke="${accent}" stroke-width="8" />
      <circle cx="218" cy="210" r="14" fill="rgba(255,255,255,0.2)" />
      <circle cx="564" cy="210" r="40" fill="#09090B" stroke="${accent}" stroke-width="8" />
      <circle cx="564" cy="210" r="14" fill="rgba(255,255,255,0.2)" />
      <path d="M202 144 H514" stroke="rgba(255,255,255,0.42)" stroke-width="2.6" stroke-linecap="round" />
      <text x="40" y="52" fill="rgba(255,255,255,0.68)" font-size="20">${brand.toUpperCase()}</text>
      <text x="40" y="84" fill="#ffffff" font-size="28">${vehicle.model.toUpperCase()}</text>
      <text x="40" y="116" fill="${accent}" font-size="18">${stageMeta[stageId].label.toUpperCase()}</text>
    </svg>
  `;
}

function animateText(element, value, suffix = "", decimals = 0, prefix = "") {
  const duration = 420;
  const start = Number(element.dataset.value || 0);
  const end = Number(value);
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const current = start + (end - start) * progress;
    element.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.dataset.value = String(end);
    }
  };

  requestAnimationFrame(step);
}

function updateVisuals(brand, vehicle, stageId, tuneResult) {
  selectors.heroVisual.innerHTML = buildVehicleSvg(vehicle, brand, stageId);
  selectors.vehicleVisual.innerHTML = buildVehicleSvg(vehicle, brand, stageId);

  animateText(document.getElementById("hero-stock"), vehicle.stockHp, " PS");
  animateText(document.getElementById("hero-tuned"), tuneResult.tunedHp, " PS");
  animateText(document.getElementById("hero-gain"), tuneResult.gainHp, " PS", 0, "+");

  document.getElementById("vehicle-badge").textContent = stageMeta[stageId].label;
  document.getElementById("vehicle-title").textContent = `${brand} ${vehicle.model}`;
  document.getElementById("vehicle-copy").textContent = `${stageMeta[stageId].description} Basis: ${vehicle.engine}, ${vehicle.body}. ${tuneResult.profileLabel}.`;

  animateText(document.getElementById("gain-hp"), tuneResult.gainHp, " PS", 0, "+");
  animateText(document.getElementById("gain-nm"), tuneResult.gainNm, " Nm", 0, "+");
  animateText(
    document.getElementById("gain-acc"),
    tuneResult.zeroToHundred,
    " s",
    1
  );

  animateText(document.getElementById("stock-hp"), vehicle.stockHp);
  animateText(document.getElementById("tuned-hp"), tuneResult.tunedHp);
  animateText(document.getElementById("stock-nm"), vehicle.stockNm);
  animateText(document.getElementById("tuned-nm"), tuneResult.tunedNm);

  document.getElementById("detail-engine").textContent = vehicle.engine;
  document.getElementById("detail-body").textContent = vehicle.body;
  document.getElementById("detail-stock-acc").textContent = `${vehicle.zeroToHundred.toFixed(1)} s`;
  document.getElementById("detail-tuned-acc").textContent = `${tuneResult.zeroToHundred.toFixed(1)} s`;

  const hpPercent = Math.min(Math.round((tuneResult.gainHp / vehicle.stockHp) * 100), 40);
  const nmPercent = Math.min(Math.round((tuneResult.gainNm / vehicle.stockNm) * 100), 40);
  const drivePercent = Math.min(tuneResult.driveGain, 40);

  document.getElementById("bar-hp").style.width = `${40 + hpPercent * 1.5}%`;
  document.getElementById("bar-nm").style.width = `${40 + nmPercent * 1.5}%`;
  document.getElementById("bar-drive").style.width = `${40 + drivePercent * 1.2}%`;
  document.getElementById("bar-hp-label").textContent = `+${hpPercent}%`;
  document.getElementById("bar-nm-label").textContent = `+${nmPercent}%`;
  document.getElementById("bar-drive-label").textContent = `+${drivePercent}%`;
}

function syncBookingSelection(brand, model, stageId) {
  selectors.bookingBrand.value = brand;
  populateModelSelect(selectors.bookingModel, brand, model);
  if (stageSelectIds.includes(selectors.bookingPackage.value)) {
    selectors.bookingPackage.value = stageId;
  }
}

function getSummaryStageId() {
  const selectedPackage = selectors.bookingPackage.value;
  return stageSelectIds.includes(selectedPackage) ? selectedPackage : selectors.stageSelect.value;
}

function updateSummary() {
  const brand = selectors.bookingBrand.value;
  const model = selectors.bookingModel.value;
  const stageId = getSummaryStageId();
  const vehicle = getVehicle(brand, model);
  const tuneResult = calculateTune(vehicle, stageId);
  const packageLabel = stageMeta[selectors.bookingPackage.value].label;
  const date = selectors.bookingDate.value;
  const time = selectors.bookingTime.value;

  document.getElementById("summary-title").textContent = `${brand} ${model}`;
  document.getElementById("summary-copy").textContent = stageMeta[selectors.bookingPackage.value].description;
  document.getElementById("summary-vehicle").textContent = `${brand} ${model}`;
  document.getElementById("summary-package").textContent = packageLabel;
  document.getElementById("summary-date").textContent = date && time ? `${formatDate(date)} um ${time}` : "Noch offen";

  if (stageSelectIds.includes(selectors.bookingPackage.value)) {
    document.getElementById("summary-power").textContent = `${vehicle.stockHp} -> ${tuneResult.tunedHp} PS`;
    document.getElementById("summary-torque").textContent = `${vehicle.stockNm} -> ${tuneResult.tunedNm} Nm`;
  } else {
    document.getElementById("summary-power").textContent = `${vehicle.stockHp} PS Basis`;
    document.getElementById("summary-torque").textContent = `${vehicle.stockNm} Nm Basis`;
  }

  const shortMessage = createWhatsappMessage();
  selectors.summaryWhatsapp.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(shortMessage)}`;
}

function renderGallery() {
  selectors.modelGallery.innerHTML = brands
    .map((brand) => {
      const models = vehicleData[brand]
        .map(
          (vehicle) =>
            `<button class="model-chip" type="button" data-brand="${brand}" data-model="${vehicle.model}">${vehicle.model}</button>`
        )
        .join("");

      return `
        <article class="brand-card glass">
          <header>
            <h3>${brand}</h3>
            <span class="brand-count">${vehicleData[brand].length} Modelle</span>
          </header>
          <div class="chip-list">${models}</div>
        </article>
      `;
    })
    .join("");

  selectors.modelGallery.querySelectorAll(".model-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const brand = button.dataset.brand;
      const model = button.dataset.model;
      selectors.brandSelect.value = brand;
      populateModelSelect(selectors.modelSelect, brand, model);
      selectors.bookingBrand.value = brand;
      populateModelSelect(selectors.bookingModel, brand, model);
      renderCurrentSelection();
      document.getElementById("fahrzeuge").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCurrentSelection() {
  const brand = selectors.brandSelect.value;
  const model = selectors.modelSelect.value;
  const stageId = selectors.stageSelect.value;
  const vehicle = getVehicle(brand, model);
  const tuneResult = calculateTune(vehicle, stageId);

  updateVisuals(brand, vehicle, stageId, tuneResult);
  syncBookingSelection(brand, model, stageId);
  updateSummary();
}

function createWhatsappMessage() {
  const brand = selectors.bookingBrand.value;
  const model = selectors.bookingModel.value;
  const vehicle = getVehicle(brand, model);
  const packageId = selectors.bookingPackage.value;
  const stageId = stageSelectIds.includes(packageId) ? packageId : selectors.stageSelect.value;
  const result = calculateTune(vehicle, stageId);
  const messageLines = [
    "Hallo, ich moechte einen Termin anfragen.",
    "",
    `Name: ${selectors.bookingName.value || "-"}`,
    `Telefon: ${selectors.bookingPhone.value || "-"}`,
    `Fahrzeug: ${brand} ${model}`,
    `Wunschpaket: ${stageMeta[packageId].label}`,
    `Wunschtermin: ${
      selectors.bookingDate.value ? formatDate(selectors.bookingDate.value) : "-"
    } ${selectors.bookingTime.value || ""}`.trim(),
  ];

  if (stageSelectIds.includes(packageId)) {
    messageLines.push(
      `Leistung: ${vehicle.stockHp} PS -> ca. ${result.tunedHp} PS`,
      `Drehmoment: ${vehicle.stockNm} Nm -> ca. ${result.tunedNm} Nm`
    );
  }

  if (selectors.bookingNote.value.trim()) {
    messageLines.push(`Nachricht: ${selectors.bookingNote.value.trim()}`);
  }

  messageLines.push("", "Bitte um Rueckmeldung per WhatsApp. Danke.");

  return messageLines.join("\n");
}

function formatDate(value) {
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}

function setMinimumDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = `${today.getMonth() + 1}`.padStart(2, "0");
  const dd = `${today.getDate()}`.padStart(2, "0");
  selectors.bookingDate.min = `${yyyy}-${mm}-${dd}`;
}

function initReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function bindEvents() {
  selectors.brandSelect.addEventListener("change", () => {
    const brand = selectors.brandSelect.value;
    const firstModel = vehicleData[brand][0].model;
    populateModelSelect(selectors.modelSelect, brand, firstModel);
    renderCurrentSelection();
  });

  selectors.modelSelect.addEventListener("change", renderCurrentSelection);
  selectors.stageSelect.addEventListener("change", renderCurrentSelection);

  selectors.bookingBrand.addEventListener("change", () => {
    const brand = selectors.bookingBrand.value;
    const firstModel = vehicleData[brand][0].model;
    populateModelSelect(selectors.bookingModel, brand, firstModel);
    updateSummary();
  });

  selectors.bookingModel.addEventListener("change", updateSummary);
  selectors.bookingPackage.addEventListener("change", updateSummary);
  selectors.bookingDate.addEventListener("input", updateSummary);
  selectors.bookingTime.addEventListener("input", updateSummary);
  selectors.bookingName.addEventListener("input", updateSummary);
  selectors.bookingPhone.addEventListener("input", updateSummary);
  selectors.bookingNote.addEventListener("input", updateSummary);

  selectors.bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(createWhatsappMessage())}`;
    selectors.formSuccess.hidden = false;
    selectors.summaryWhatsapp.href = whatsappUrl;
    window.open(whatsappUrl, "_blank", "noopener");
  });

  selectors.navToggle.addEventListener("click", () => {
    const isOpen = selectors.navLinks.classList.toggle("is-open");
    selectors.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      selectors.navLinks.classList.remove("is-open");
      selectors.navToggle.setAttribute("aria-expanded", "false");
    });
  });

  selectors.whatsappToggle.addEventListener("click", () => {
    const hidden = selectors.whatsappCard.classList.toggle("is-hidden");
    selectors.whatsappToggle.setAttribute("aria-expanded", String(!hidden));
  });

  selectors.whatsappClose.addEventListener("click", () => {
    selectors.whatsappCard.classList.add("is-hidden");
    selectors.whatsappToggle.setAttribute("aria-expanded", "false");
  });
}

function init() {
  const defaultBrand = "BMW";
  const defaultModel = "M340i xDrive";

  populateBrandSelect(selectors.brandSelect, defaultBrand);
  populateModelSelect(selectors.modelSelect, defaultBrand, defaultModel);

  populateBrandSelect(selectors.bookingBrand, defaultBrand);
  populateModelSelect(selectors.bookingModel, defaultBrand, defaultModel);

  renderGallery();
  setMinimumDate();
  bindEvents();
  renderCurrentSelection();
  updateSummary();
  initReveals();
}

init();
