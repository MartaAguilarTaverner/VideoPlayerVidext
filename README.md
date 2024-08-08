# Prueba técnica Junior

# Technical Test

Create a video watch player

## Technologies Used

- NextJS 15 [https://nextjs.org/docs]
- Tailwind [https://tailwindcss.com/]
- Shadcn (a utility-first CSS framework) [https://ui.shadcn.com/]
- tRPC (@trpc/server for backend & @trpc/client for frontend) [https://trpc.io/]
- Typescript

## Requirements

### Functional Requirements

1. Video player page
2. There must be an API endpoint that allows the app to retrieve stored data.
3. Use TailwindCSS for styling the application with the help of ShadCN for UI interfaces consistent with design requirements.
4. Implement tRPC to facilitate type-safe API calls between the client and server.
5. Video player watch count
6. The user should be able to see a list with different videos and watch them in the video player

### Technical Requirements

- Build a NextJS app from scratch
- Setup Tailwind CSS and use ShadCN where is appropiate
- Construct tRPC API routes within the Next.js app which exposes at least two endpoints:
    - One endpoint to retrieve the app data.
    - Another endpoint to store the data.
- Use server actions to handle server side requests
- Use Next.js app native routing to navigate between pages and components.
- Implement error handling and loading states for API calls.
- Write simple documentation in a [README.md](http://readme.md/) file, explaining how to set up and run the application locally.

### Bonus points

- Good design
- Video player like count
- Advanced controls on the video player (speed, timeline, full screen, etc)

## Expected Deliverables

### Minimum

- A repository with a Next.js application that meets the functional requirements.
- A [README.md](http://readme.md/) file describing the setup instructions, how to run the app, and how to test the API calls.

### Evaluation Criteria

- Code quality and readability
- Proper use of React and Next.js features (e.g., server-side rendering, data fetching).
- Component design and reusability.
- Styling accuracy and use of TailwindCSS classes.
- Effective use of tRPC for type-safe APIs.
- Ease of setup and completeness of documentation.





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
