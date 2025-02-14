This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Folder Structure
```markdown
cnpj_brazil_consulta/
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
