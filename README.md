<div align="center">

# TaskFlow : Modern Task Manager

</div>

## 🛠️ Tech Stack

**ភាសាសរសេរកូដ និង ឧបករណ៍**

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)

---

## ✨ Features

- **គ្រប់គ្រងការងារ**: បន្ថែមការងារតាមប៊ូតុង **Add Task** (បើក popup), កែព័ត៌មានទាំងអស់ក្នុង popup, ចុចពីរដងលើចំណងជើងដើម្បីកែឈ្មោះលឿន និងចុចលើការងារដើម្បីមើលឬសរសេរ **Notes**
- **Priority / Category / Due Date**: អាទិភាព Low, Medium, High ជា Badge ពណ៌ ប្រភេទ (General, Work, Personal, Shopping, Health) និងសញ្ញាព្រមាន **Overdue** ពេលហួសកំណត់
- **Filter និង Search**: ត្រងតាម All, Active, Completed មានលេខរាប់ ហើយស្វែងរកតាមឈ្មោះភ្លាមៗ
- **Select Mode**: ជ្រើសរើសការងារច្រើន ដើម្បី Complete ឬ Delete ព្រមគ្នា
- **ធុងសម្រាម (Trash)**: លុបបណ្តោះអាសន្ន, Restore, លុបជាអចិន្ត្រៃយ៍ ឬសម្អាតទាំងអស់ ហើយមានប៊ូតុង **Undo** ក្នុង Toast ភ្លាមៗក្រោយលុប
- **Stats Dashboard**: របារវឌ្ឍនភាព និងភាគរយ ក្លាយជាពណ៌បៃតងពេលបញ្ចប់ ១០០% ព្រមទាំងប្រអប់ស្ថិតិ កំពុងធ្វើ, បានបញ្ចប់, សរុប
- **Analytics**: ក្រាហ្វិក Donut តាមប្រភេទ (មានលេខសរុបនៅកណ្តាល, Legend តាមលំដាប់, Hover Highlight), Bar Chart តាមអាទិភាព និង Line Chart ការងារបញ្ចប់ក្នុង ៧ ថ្ងៃចុងក្រោយ
- **ខ្មែរ / English**: ប្តូរភាសាបានភ្លាមៗ ឈ្មោះថ្ងៃ និងខែខ្មែរសរសេរដោយខ្លួនឯង ហើយមានពាក្យស្វាគមន៍ ៤ ពេល (អរុណសួស្តី, សួស្តីពេលរសៀល, សួស្តីពេលល្ងាច, រាត្រីសួស្តី)
- **Dark Mode**: ប្តូរភ្លឺ / ងងឹត ដោយចុចប៊ូតុងតែមួយ
- **Responsive**: ដំណើរការលើ Laptop, Tablet និងទូរស័ព្ទ
- **Accessibility**: ARIA Labels, Focus States និងប្រើ Keyboard បាន
- **ចាំការកំណត់**: ការងារ, ភាសា និង Theme ត្រូវបានរក្សាទុកក្នុង Browser (`localStorage`)
- **ការពារកំហុស**: មាន Error Boundary, Loading Skeleton និង Empty State
- **មាន Unit Test**: ប្រើ Vitest និង Testing Library
- **គ្មាន Backend**: ទិន្នន័យស្ថិតនៅលើឧបករណ៍របស់អ្នកទាំងស្រុង

---

## 📁 Project Structure

```
taskflow-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx                → Navbar ជាប់ខាងលើ
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx                → ស៊ុមទំព័រទាំងអស់
│   │   ├── TaskForm.jsx              → Form បន្ថែមការងារ
│   │   ├── TaskForm.test.jsx
│   │   ├── TaskAddModal.jsx          → Popup បន្ថែមការងារ
│   │   ├── TaskAddModal.test.jsx
│   │   ├── TaskEditModal.jsx         → Popup កែព័ត៌មានការងារ
│   │   ├── TaskEditModal.test.jsx
│   │   ├── TaskDetailModal.jsx       → Popup មើល និងសរសេរ Notes
│   │   ├── TaskItem.jsx
│   │   ├── TaskItem.test.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── SearchBar.jsx
│   │   ├── BulkActionBar.jsx         → របារសម្រាប់ Select Mode
│   │   ├── StatsDashboard.jsx
│   │   ├── StatsDashboardSkeleton.jsx
│   │   ├── PriorityBadge.jsx
│   │   ├── CategoryBadge.jsx
│   │   ├── CategoryPieChart.jsx
│   │   ├── CategoryPieChart.test.jsx
│   │   ├── PriorityBarChart.jsx
│   │   ├── CompletionTrendChart.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── ToastContainer.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── EmptyState.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Analytics.jsx
│   │   ├── About.jsx
│   │   └── Trash.jsx
│   ├── context/
│   │   ├── TaskContext.jsx           → ការងារ និង CRUD
│   │   ├── TaskContext.test.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── LanguageContext.jsx
│   │   ├── LanguageContext.test.jsx
│   │   └── ToastContext.jsx
│   ├── i18n/
│   │   ├── translations.js           → ពាក្យខ្មែរ និង English
│   │   └── extraTranslations.js
│   ├── hooks/
│   │   └── useTasks.js
│   ├── utils/
│   │   ├── localStorage.js
│   │   ├── date.js
│   │   ├── date.test.js
│   │   ├── khmerDate.js              → ឈ្មោះថ្ងៃ និងខែខ្មែរ
│   │   ├── khmerDate.test.js
│   │   ├── greeting.js               → ពាក្យស្វាគមន៍តាមម៉ោង
│   │   ├── greeting.test.js
│   │   ├── categories.js
│   │   └── analytics.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⌨️ Keyboard

| គ្រាប់ចុច | មុខងារ |
|---|---|
| `Enter` | បន្ថែមការងារក្នុង popup ឬរក្សាទុកឈ្មោះដែលកំពុងកែលឿន |
| `Esc` | បិទ popup បន្ថែម និង popup កែប្រែ |
| `Tab` / `Shift + Tab` | ផ្លាស់ទីរវាងប៊ូតុង និងប្រអប់បញ្ចូល |
| ចុចពីរដងលើចំណងជើង | កែឈ្មោះការងារលឿន |

---

## 📱 Mobile Mode

- Header ចុះជាពីរជួរ ហើយប៊ូតុង **Add Task** ពេញទទឹងនៅក្រោមពាក្យស្វាគមន៍
- ប្រអប់ស្ថិតិ ៣ ប្រអប់នៅតែរៀបជួរតែមួយ
- Popup មានកម្ពស់ត្រឹម 90% នៃអេក្រង់ និង Scroll បាន មិនលើសអេក្រង់
- ប៊ូតុងក្នុង popup ចុះជាជួរឈរ ងាយចុចដោយមេដៃ

---

## 🚀 How to Run

1. Clone Repository ដោយដាក់ឈ្មោះ folder ឲ្យច្បាស់:

   ```bash
   git clone <url-repo> taskflow-frontend
   cd taskflow-frontend
   ```

   ឬបើ Download ZIP ពី GitHub (Code → Download ZIP) សូម Extract រួចចូល folder ដែលបានមក ដែលជាធម្មតាមានឈ្មោះ `taskflow-frontend-main`:

   ```bash
   cd taskflow-frontend-main
   ```

2. ដំឡើង Dependencies:

   ```bash
   npm install
   ```

3. Run Development Server:

   ```bash
   npm run dev
   ```

4. បើក Browser ចូល `http://localhost:5173` ហើយសាកល្បងបន្ថែមការងារ ប្តូរភាសា ប្តូរ Dark Mode និងបើកទំព័រ Analytics។
5. ដើម្បី Run Tests:

   ```bash
   npm run test
   ```

6. ដើម្បី Build សម្រាប់ Production:

   ```bash
   npm run build
   ```

---

## 📄 License

**MIT License:** អ្នកអាចប្រើ ចម្លង កែប្រែ និងចែកចាយកូដនេះដោយសេរី ឲ្យតែរក្សាទុកសេចក្តីជូនដំណឹង Copyright និង License។ មើលព័ត៌មានលម្អិតក្នុងឯកសារ [LICENSE](LICENSE)។

---

## 👤 Author

**Built with ❤️ and code by Mr. Siev E**
