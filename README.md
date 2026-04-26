# Dzīvokļa īre — NPD projekts (tema 11)

## 📋 Projekta mērķis
Izstrādāt interaktīvu mājaslapu, kas aprēķina dzīvokļa īres kopējo cenu, izmantojot HTML, CSS un JavaScript.

## 🎯 Funkcionalitāte
- ✅ Izvēlies dzīvokļa tipu (studija, 1 istaba, 2 istabas)
- ✅ Norādi nomas ilgumu mēnešos
- ✅ Pievieno papildu pakalpojumus: mājas kopšana, stāvvieta
- ✅ Automātisks aprēķins: mēneša maksa × mēneši
- ✅ Atlaides ilgtermiņam (7% par ≥6 mēn., 15% par ≥12 mēn.)
- ✅ Pilna validācija: pārbauda tukšos laukus un pozitīvu skaitļu vērtības
- ✅ Dinamisks rezultāts bez lapas pārlādes
- ✅ Jasnotas kļūdu paziņojumi nepareizai ievadei

## 📁 Projekta faili
```
mironovsss/
├── index.html                 # Mājaslapas HTML struktūra un forma
├── style.css                  # CSS stils un dizains
├── script.js                  # JavaScript logika (validācija, aprēķins)
├── README.md                  # Šis fails
├── Dzīvokļa īre.pdf          # Prezentācija ar demostrāciju un analīzi
├── projekta_dokumentacija.md  # Detalizēta dokumentācija
├── testesanas_plans.md        # Testēšanas stratēģija
├── testesanas_rezultati.md    # Testēšanas rezultāti
├── dizains_un_lietojamiba.md  # Dizaina pamatojums
└── citi palīgfaili
```

## 🚀 Lietošanas instrukcija

### Lokāli (bez interneta)
1. Lejupielādē vai klonē repozitoriju
2. Atver `index.html` savā pārlūkā

### Online (GitHub Pages)
1. Izej uz: https://Danyakas.github.io/mironovsss/
2. Latviskā interaktīvā kalkulatora forma būs pieejama

## 📝 Kā lietot kalkulatoru?
1. **Dzīvokļa tips** — Izvēlies no trim opcijām (studija/1-komnatna/2-komnatna)
2. **Nomas periods** — Ieraksti mēnešu skaitu (1, 6, 12, utt.)
3. **Papildus pakalpojumi** (izvēles)
   - Mājas kopšana: +20 €/mēn
   - Stāvvieta: +50 €/mēn
4. **Aprēķināt** — Nospied pogu, rezultāts parādīsies uzreiz
5. **Notīrīt** — Iztīra formu jaunam aprēķinam

### Piemērs:
- Izvēlies: 1 istaba (450 €/mēn)
- Norādi: 8 mēneši
- Pievieno: Mājas kopšana + Stāvvieta
- **Rezultāts:**
  - Mēneša maksa: 520 € (450 + 20 + 50)
  - Kopējā summa: 4160 €
  - Atlaide (7% par ≥6 mēn.): −291.20 €
  - **Jāmaksā: 3868.80 €**

## 🛠️ Izmantotās tehnoloģijas
| Tehnoloģija | Versija | Mērķis |
|---|---|---|
| **HTML5** | 5.0 | Semantiska mājaslapas struktūra |
| **CSS3** | 3.0 | Modernais dizains, responsīvums |
| **JavaScript** | ES6+ | Logika, validācija, DOM manipulācija |
| **GitHub Pages** | — | Bezmaksas hosting un publicēšana |

## ✅ Testēšana
Projekts ir pamatīgi testēts:
- ✅ **Funkcionalitāte** — Visi aprēķini ir pareizi
- ✅ **Validācija** — Forma neuzklausa ar tukšiem vai nepareiziem datiem
- ✅ **Atlaides** — Skidmes darbojas pareizi (7% un 15%)
- ✅ **UI/UX** — Interfeiss ir intuitīvs un viegls lietojams
- ✅ **Krossbrowseri** — Darbojas Chrome, Firefox, Safari, Edge

Detalizēti rezultāti: skatīt `testesanas_rezultati.md`

## 📊 Dizains un lietojamība
- Vienkāršs, tīrs interfeiss
- Loģisks elementu izvietojums
- Responsive dizains (mobile-friendly)
- Skaidri kļūdu paziņojumi
- Ērti nolasāms fonts un krāsu shēma

Skatīt `dizains_un_lietojamiba.md` detalam pamatojumam.

## 👤 Autors
**Daniels Mironovs** (Danyakas)
- GitHub: https://github.com/Danyakas
- Projekts: mironovsss

## 📅 Dates
- Projekta sākums: 2026-02-15
- Pabeigtā versija: 2026-04-26

---

**Svarīgas saites:**
- 🌐 [Tiešais saite uz kalkulatoru](https://Danyakas.github.io/mironovsss/)
- 📁 [GitHub repozitorijs](https://github.com/Danyakas/mironovsss)
- 📊 [Prezentācija (PDF)](https://github.com/Danyakas/mironovsss/blob/main/Dzīvokļa%20īre.pdf)
