# Rana Arju - MERN Stack Portfolio Application

## Description

I built a full-stack portfolio website using the MERN (MongoDB, Express.js, React, Node.js) stack to showcase my projects, skills, and experience. The website includes several key features, including a blog page, authentication system, contact page, and a projects showcase.

## 🚀 Features & Pages

## 🔹 Home Page

A modern and responsive landing page introducing myself, my skills, and my work.
Smooth animations and a dark/light theme for a great user experience.

## 🔹 Projects Page

Displays all my full-stack, front-end, and back-end projects with images, descriptions, and live links.
Users can filter projects by category (React, Next.js, Node.js, etc.).

## 🔹 Blog Page

A blog section where I write about web development, MERN stack, and my learning journey.
Each blog post is stored in the database and dynamically rendered.

## 🔹 Authentication System (NextAuth.js)

Users can sign up/sign in using Google or email/password.
JWT-based authentication ensures security and session management.

## 🔹 Contact Page

A fully functional contact form that allows visitors to reach out.
Messages are sent to my backend API and stored securely.
Success messages appear upon submission.

## Developer

- [@Rana Arju](https://github.com/rana-arju)

## Live URL

< https://rana-arju.vercel.app >

## Backend Live URL

< https://portfolio-backend02.vercel.app/ >

## Backend GitHub URL

< https://github.com/rana-arju/portfolio-backend02 >

## Video Explanation

[![GearCycle store](https://res.cloudinary.com/db8l1ulfq/image/upload/v1739278485/Screenshot_38_mpqlbm.png)](https://youtu.be/dil-GmvcHLc?si=-rXV5GSED_GUGLG8)

## Instructions for Running the Application Locally

1. **Clone the repository**:

   ```sh
   git clone https://github.com/rana-arju/dev-portfolio.git
   ```

2. **Go to the project directory**:

   ```sh
   cd dev-portfolio
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Run the application**:

   ```sh
   npm run dev
   ```

5. **Build the application**:

   ```sh
   npm run build
   ```
 **.env**:

   ```sh
BACKEND_URL= 

GITHUB_ID= 
GITHUB_SECRET= 

GOOGLE_ID= 
GOOGLE_SECRET= 

   ```
**.env.local**:

   ```sh
BACKEND_URL=

NEXTAUTH_SECRET=

   ```

## File and Folder Structure

```bash
├── README.md
├── tsconfig.json
├── .env
├── package-lock.json
├── package.json
├── public
│   └── ...
├── src
│   ├── App
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components
│   │   └── ...
│   └── ...
├── vercel.json
├── eslint.config.mjs
├── .gitignore
├── .prettierrc
└── .prettierigmore
```

## 💻 Tech Stack
✅ Frontend: React.js, Next.js, Tailwind CSS

✅ Backend: Node.js, Express.js

✅ Database: MongoDB (Mongoose ORM)

✅ Authentication: NextAuth.js (Google OAuth, Credentials)

✅ Deployment: Vercel (Frontend) & vercel (Backend)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
