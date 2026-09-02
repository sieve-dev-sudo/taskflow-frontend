<div align="center">

# TaskFlow : Modern Task Manager

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Tested](https://img.shields.io/badge/Tested-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

</div>

---

## ✨ Features

- បន្ថែម, កែប្រែ, លុប Tasks (Add / Edit / Delete)
- កំណត់ Priority Level **Low / Medium / High** មាន Badge ពណ៌ខុសៗគ្នា
- កំណត់ Due Date សម្រាប់ Task នីមួយៗ ព្រមទាំង Overdue Indicator
- Filter តាមស្ថានភាព **All / Active / Completed**
- Search Bar រកមើល Task ភ្លាមៗតាមឈ្មោះ
- Stats Dashboard បង្ហាញ Progress Bar និងភាគរយបញ្ចប់ការងារ
- Dark Mode Toggle ព្រមទាំងចងចាំ Preference
- រក្សាទុក Tasks ដោយស្វ័យប្រវត្តិទៅ localStorage
- Animation រលូនដោយ Framer Motion
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Mobile / Tablet / Desktop)
- Error Boundary និង Empty State Handling
- មាន Unit Test ដោយ Vitest + Testing Library

---

## 📁 Project Structure

```
taskflow-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx           → Navbar + Theme Toggle
│   │   ├── Footer.jsx           → Footer
│   │   ├── Layout.jsx           → Layout Wrapper (Header + Main + Footer)
│   │   ├── TaskForm.jsx         → Form បន្ថែម Task (Title, Priority, Due Date)
│   │   ├── TaskForm.test.jsx    → Unit Test សម្រាប់ TaskForm
│   │   ├── TaskItem.jsx         → Task មួយៗ (Edit/Delete/Toggle/Badge)
│   │   ├── TaskList.jsx         → List Tasks ទាំងអស់ (មាន Animation)
│   │   ├── TaskFilter.jsx       → Filter Tabs (All/Active/Completed)
│   │   ├── SearchBar.jsx        → Search Box
│   │   ├── StatsDashboard.jsx   → Progress Bar + Stats Summary
│   │   ├── PriorityBadge.jsx    → Badge បង្ហាញ Priority (Low/Medium/High)
│   │   ├── ThemeToggle.jsx      → ប៊ូតុងប្តូរ Dark/Light Mode
│   │   ├── ErrorBoundary.jsx    → ចាប់ Error ទាំងអស់ក្នុង App
│   │   └── EmptyState.jsx       → សារពេល List ទទេ
│   ├── context/
│   │   ├── TaskContext.jsx      → State Management សម្រាប់ Tasks (CRUD)
│   │   └── ThemeContext.jsx     → State Management សម្រាប់ Dark/Light Theme
│   ├── hooks/
│   │   └── useTasks.js          → Custom Hook (Re-export ពី TaskContext)
│   ├── utils/
│   │   ├── localStorage.js      → Save/Load Tasks ទៅ localStorage
│   │   ├── date.js              → Format Date + Overdue Check
│   │   └── date.test.js         → Unit Test សម្រាប់ date utilities
│   ├── test/
│   │   └── setup.js             → Test Setup (jest-dom)
│   ├── App.jsx                  → Main App Component
│   ├── App.css                  → (មិនប្រើទៀត — ជំនួសដោយ Tailwind)
│   ├── index.css                → Tailwind Import + Theme Variables
│   └── main.jsx                 → App Entry Point (Providers + Render)
├── .gitignore
├── eslint.config.js             → ESLint Configuration
├── index.html                   → HTML Entry Point
├── LICENSE                      → MIT License
├── package.json                 → Dependencies + Scripts
├── package-lock.json
├── README.md
└── vite.config.js               → Vite + Tailwind + Vitest Configuration
```

---

## 🚀 How to Run

1. Clone Repository នេះ:
```bash
git clone <url-repo>
cd taskflow-frontend
```
2. ដំឡើង Dependencies:
```bash
npm install
```
3. Run Development Server:
```bash
npm run dev
```
4. បើក Browser ចូល `http://localhost:5173`
5. ដើម្បី Run Tests:
```bash
npm run test
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
