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
- បន្ថែម Notes លម្អិតសម្រាប់ Task នីមួយៗ ដោយចុចលើ Task ដើម្បីបើក Detail Modal
- កំណត់ Priority Level Low / Medium / High មាន Badge ពណ៌ខុសៗគ្នា
- កំណត់ Category សម្រាប់ Task នីមួយៗ (General, Work, Personal, Shopping, Health)
- កំណត់ Due Date សម្រាប់ Task នីមួយៗ ព្រមទាំង Overdue Indicator
- Filter តាមស្ថានភាព All / Active / Completed
- Search Bar រកមើល Task ភ្លាមៗតាមឈ្មោះ
- Stats Dashboard បង្ហាញ Progress Bar និងភាគរយបញ្ចប់ការងារ
- Analytics Page ជាមួយ Pie Chart, Bar Chart, និង Line Chart សម្រាប់មើល Trend
- Trash Bin, Soft Delete, Restore, និង Permanent Delete
- Toast Notifications សម្រាប់រាល់សកម្មភាព (Add, Edit, Delete, Restore)
- Multi Page Navigation (Home, Analytics, About, Trash) ដោយ React Router
- Dark Mode Toggle ព្រមទាំងចងចាំ Preference
- រក្សាទុក Tasks ដោយស្វ័យប្រវត្តិទៅ localStorage
- Loading Skeleton Placeholder ពេលបើក App លើកដំបូង
- Animation រលូនដោយ Framer Motion
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Mobile / Tablet / Desktop)
- Accessibility, Keyboard Navigation, ARIA Labels, Focus States
- Error Boundary និង Empty State Handling
- មាន Unit Test ដោយ Vitest + Testing Library
- Demo Frontend, ប្រើ localStorage ទាំងស្រុង គ្មាន Backend Dependency

---

## 📁 Project Structure

```
taskflow-frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskForm.test.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskItem.test.jsx
│   │   ├── TaskDetailModal.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── SearchBar.jsx
│   │   ├── StatsDashboard.jsx
│   │   ├── StatsDashboardSkeleton.jsx
│   │   ├── PriorityBadge.jsx
│   │   ├── CategoryBadge.jsx
│   │   ├── CategoryPieChart.jsx
│   │   ├── PriorityBarChart.jsx
│   │   ├── CompletionTrendChart.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── ToastContainer.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── EmptyState.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Analytics.jsx
│   │   ├── About.jsx
│   │   └── Trash.jsx
│   ├── context/
│   │   ├── TaskContext.jsx
│   │   ├── TaskContext.test.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   ├── hooks/
│   │   └── useTasks.js
│   ├── utils/
│   │   ├── localStorage.js
│   │   ├── date.js
│   │   ├── date.test.js
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

## 🚀 How to Run Locally

1. Clone Repository នេះ

```bash
git clone <url-repo>
cd taskflow-frontend
```

2. ដំឡើង Dependencies

```bash
npm install
```

3. Run Development Server

```bash
npm run dev
```

4. បើក Browser ចូល `http://localhost:5173`

5. ដើម្បី Run Tests

```bash
npm run test
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
