# Next.js 12 TypeScript & TailwindCSS Template

This is a [Next.js 12](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📌 Overview

This is a **Next.js 12 starter template** pre-configured with:
- **TypeScript** ✅
- **TailwindCSS** ✅

⚠️ **Note:** This template does **not** include Prisma or additional dependencies—it's meant to be a minimal starting point.

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the running app.

### Editing & Development
- You can start modifying `src/pages/index.tsx` to see real-time changes.
- [API routes](https://nextjs.org/docs/api-routes/introduction) are available under `src/api/*`. An example API endpoint is located in `src/pages/api/pageApiExample/index.ts`.

---

## 🐳 Docker Setup

This project includes a **Dockerized development and production environment** using **Docker** and **Docker Compose**.

### 📂 Docker Files Overview

- **`Dockerfile`** – Defines the Next.js build, development, and production environments.
- **`compose.yaml`** – Docker Compose configuration to run the app as a containerized service.
- **`.dockerignore`** – Specifies files and directories to exclude from the build context.

---

### 🏗️ Building and Running the Container

#### 🔹 Development Mode
To run the application in **development mode** with live reloading:

```bash
docker compose up -d --build
```

This starts the **Next.js development server** inside a container. The source code is **mounted** as a volume, so changes will reflect without rebuilding the image.

#### 🔹 Production Mode
For a **production-ready** container:

1. Build the optimized production image:
   ```bash
   docker build -t nextjs-app --target production .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

---

## 📂 Project Structure
```markdown
next12_ts_tailwind_app_template/
├── db/                             # Database related stuff
│   └── dumps/                      # Database dumps
├── prisma/                         # Prisma configuration files
│   ├── schema.prisma               # Prisma schema
│   └── migrations/                 # Prisma migration files
├── public/                         # Public assets folder
│   ├── images/                     # Images folder
│   └── favicon.ico                 # App icon
├── src/                            # Source app folder
│   ├── api/                        # Custom API utilities (optional)
│   ├── components/                 # Reusable UI components
│   │   ├── common/                 # Generic components (e.g., Button, Input)
│   │   ├── layout/                 # Layout components (e.g., Header, Footer)
│   │   └── {pages}/                # Pages-specific components
│   ├── constants/                  # Constants
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utility functions and libraries
│   │   ├── prisma.ts               # Prisma client instance
│   │   └── utils.ts                # General utilities
│   ├── pages/                      # Next.js pages and API routes
│   │   ├── api/                    # API routes
│   │   │   ├── {pages}/            # Pages-related API routes
│   │   │   │   ├── [id].ts         # Dynamic API route for a identified entity
│   │   │   │   └── index.ts        # API route for a entity
│   │   │   └── auth/               # Authentication-related API routes (optional)
│   │   ├── _app.tsx                # Custom App component
│   │   ├── index.tsx               # Home page
│   │   └── {pages}/                # Pages-related pages
│   │       ├── [id].tsx            # Dynamic page for a identified entity
│   │       └── index.tsx           # Entity index page
│   ├── styles/                     # Global and module-specific styles
│   │   ├── globals.css             # Global styles
│   │   └── tailwind.css            # TailwindCSS entry point
│   ├── types/                      # Custom TypeScript types
│   ├── utils/                      # Additional utilities (optional)
│   └── middleware.ts               # Middleware configuration file (routes protection)
├── .dockerignore                   # Docker ignore file
├── .eslintrc.json                  # eslint
├── .gitignore                      # gitignore
├── compose.yaml                    # Docker compose file
├── Dockerfile                      # Dockerfile
├── next.config.js                  # Next configuration
├── package.json                    # Dependencies
├── postcss.config.js               # PostCSS configuration
├── README.md                       # Docs
├── tailwind.config.js              # TailwindCSS configuration
└── tsconfig.json                   # TypeScript configuration
```

---

## 📚 Learn More

To dive deeper into Next.js, check out:

- 📖 [Next.js Documentation](https://nextjs.org/docs) – Learn about features and API.
- 🎓 [Next.js Interactive Tutorial](https://nextjs.org/learn) – Hands-on learning experience.
- 💻 [Next.js GitHub Repository](https://github.com/vercel/next.js) – Contribute or explore.

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

For detailed deployment steps, visit the official [Next.js deployment docs](https://nextjs.org/docs/deployment).