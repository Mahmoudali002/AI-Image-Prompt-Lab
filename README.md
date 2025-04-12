{# PromptForge AI - The AI-Powered Creative Prompt Studio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-blue)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.3.0-orange)](https://firebase.google.com/)
[![Lucide React](https://img.shields.io/badge/Lucide_React-Latest-blueviolet)](https://lucide.dev/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-29ABE2)](https://ui.shadcn.com/)

**PromptForge AI** is a cutting-edge web application designed to empower users in the realm of AI-driven content creation. This platform provides a suite of tools for crafting, testing, and refining prompts for various AI models, including Stable Diffusion and Midjourney. Whether you're an artist, marketer, or AI enthusiast, PromptForge AI offers a streamlined workflow to unlock the full potential of generative AI.

## ✨ Key Features

*   **Intuitive Prompt Editor:** A user-friendly interface for composing and editing prompts.
*   **AI Prompt Enhancement:** Leverage AI to refine and improve your prompts for optimal results.
*   **Real-Time Image Preview:** Visualize the output of your prompts with on-the-fly image generation (integration with AI model APIs required).
*   **Prompt Management:** Save, organize, and reuse your favorite prompts.
*   **Cross-Platform Support:** Works seamlessly on modern web browsers.
*   **Light/Dark Mode:** Toggle between light and dark themes for comfortable use in any environment.
*   **Genkit Integration:** Utilizes Genkit for backend AI operations, ensuring scalable and reliable performance.

## 🚀 Technologies Used

*   [Next.js](https://nextjs.org/): React framework for building performant web applications
*   [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript for enhanced type safety
*   [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development
*   [Shadcn UI](https://ui.shadcn.com/): Reusable components built using Radix UI and Tailwind CSS
*   [Lucide React](https://lucide.dev/): Beautifully simple, pixel-perfect icons
*   [Firebase](https://firebase.google.com/): Google's mobile platform for hosting
*   [Genkit](https://genkit.dev/): Toolkit for building reliable, scalable, and observable AI applications

## ⚙️ Setup Instructions

Follow these steps to get PromptForge AI up and running on your local machine:

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
*   [Firebase CLI](https://firebase.google.com/docs/cli) (optional, for Firebase deployment)
*   Google Cloud Account with MakerSuite API enabled

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

3.  Set up your `.env` file:

    *   Create a `.env` file in the root directory.

    *   Add your Google GenAI API key:

        ```
        GOOGLE_GENAI_API_KEY=YOUR_GOOGLE_GENAI_API_KEY
        ```

        > ⚠️ **Important:** Treat your API key with utmost care! Follow the security guidelines outlined below.

4.  Run the development server:

    ```bash
    npm run dev # or yarn dev
    ```

    Open [http://localhost:9002](http://localhost:9002) in your browser to view the application.

## 🔐 API Key Security Best Practices

To prevent accidental exposure of your API key, adhere to the following security measures:

*   **Never commit your `.env` file to Git!** The `.gitignore` file is already set up to exclude it.
*   When deploying, configure environment variables directly on your hosting provider (e.g., Netlify, Vercel, Firebase).
*   Restrict API key usage to the PromptForge AI application only.
*   Monitor your API usage regularly to detect any suspicious activity.
*   Consider using a secrets management solution for enhanced security.

## 📝 Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
