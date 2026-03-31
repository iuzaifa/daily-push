
npm install react-router-dom


---

## 🌞 **Light Mode (Recommended Palette: `slate + blue`)**

| UI Element       | Tailwind Color       | Example Code                  |
| ---------------- | -------------------- | ----------------------------- |
| Background       | `slate-50` / `white` | `bg-slate-50`                 |
| Surface / Card   | `white`              | `bg-white`                    |
| Border           | `slate-200`          | `border-slate-200`            |
| Headings Text    | `slate-900`          | `text-slate-900`              |
| Normal Text      | `slate-700`          | `text-slate-700`              |
| Muted Text       | `slate-500`          | `text-slate-500`              |
| Primary Accent   | `blue-500`           | `text-blue-500 / bg-blue-500` |
| Primary Hover    | `blue-600`           | `hover:bg-blue-600`           |
| Secondary Accent | `slate-600`          | `text-slate-600`              |

✅ **Light Mode Palette**
`slate-50, slate-200, slate-500, slate-700, slate-900, blue-500, blue-600`

---

## 🌑 **Dark Mode (Recommended Palette: `slate + blue`)**

| UI Element       | Tailwind Color | Example Code             |
| ---------------- | -------------- | ------------------------ |
| Background       | `slate-900`    | `dark:bg-slate-900`      |
| Surface / Card   | `slate-800`    | `dark:bg-slate-800`      |
| Border           | `slate-700`    | `dark:border-slate-700`  |
| Headings Text    | `slate-200`    | `dark:text-slate-200`    |
| Normal Text      | `slate-400`    | `dark:text-slate-400`    |
| Muted Text       | `slate-500`    | `dark:text-slate-500`    |
| Primary Accent   | `blue-400`     | `dark:bg-blue-400`       |
| Primary Hover    | `blue-500`     | `dark:hover:bg-blue-500` |
| Secondary Accent | `slate-400`    | `dark:text-slate-400`    |

✅ **Dark Mode Palette**
`slate-900, slate-800, slate-700, slate-500, slate-400, slate-200, blue-400, blue-500`

---


hospital-management/
│
├── public/
├── src/
│   ├── assets/                # Images, icons, fonts, static files
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo.svg
│   │
│   ├── components/            # Reusable UI components (buttons, cards, tables, inputs, modal, loader)
│   │   ├── ui/
│   │   └── common/
│   │
│   ├── features/              # Modular Feature-Based Architecture
│   │   ├── auth/              # Login, Register, Forgot Password, etc.
│   │   ├── dashboard/         # Dashboard components & charts
│   │   ├── patients/          # CRUD - Add / List / Edit / Details
│   │   ├── doctors/
│   │   ├── appointments/
│   │   ├── billing/           # Invoice, Payments
│   │   ├── pharmacy/          # Medicine Inventory
│   │   ├── lab/               # Lab reports
│   │   ├── staff/             # Users / Role Permissions
│   │   └── settings/
│   │
│   ├── layouts/               # Page Layouts (Sidebar, Navbar, Auth Layout)
│   │   ├── MainLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── components/        # Layout-only components
│   │
│   ├── pages/                 # Page-level routing (only for routing purposes)
│   │   ├── AuthPages.jsx
│   │   ├── PatientPages.jsx
│   │   ├── AppointmentPages.jsx
│   │   └── etc...
│   │
│   ├── routes/                # App Routes (Protected, Public, Role-based routes)
│   │   ├── AppRouter.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── RoleRoute.jsx
│   │
│   ├── hooks/                 # Custom hooks (e.g. useAuth, useFetch, useDebounce)
│   │
│   ├── context/               # Context API (Auth Context, Theme Context, Sidebar Context)
│   │
│   ├── services/              # API calls (Axios services / RTK Query / React Query)
│   │   ├── apiClient.js       # axios instance
│   │   ├── patientService.js
│   │   ├── doctorService.js
│   │   └── ...
│   │
│   ├── store/                 # Redux Toolkit store (if using Redux)
│   │   ├── index.js
│   │   ├── slices/
│   │   └── authSlice.js
│   │
│   ├── utils/                 # Helpers, formatters, validators, constants
│   │
│   ├── styles/                # Global CSS, Tailwind utilities, themes
│   │   ├── index.css
│   │   └── variables.css
│   │
│   ├── config/                # Environment, API base URLs, constants
│   │   └── appConfig.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.js
│
├── .env
├── package.json
└── README.md
