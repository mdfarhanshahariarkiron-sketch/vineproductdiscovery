# Vine Product Discovery

This project is a React application built with Vite, Tailwind CSS, and Firebase. It is fully optimized and ready to be deployed to Netlify.

## Deploying to Netlify

This project is already pre-configured for Netlify deployment. It includes:
1. `netlify.toml` - Configures the build command (`npm run build`) and publish directory (`dist`).
2. `public/_redirects` - Ensures client-side routing (React Router) works correctly without 404 errors.
3. `vite.config.ts` - Configured to handle environment variables correctly during the build process.

### Steps to Deploy:

1. **Push to GitHub**: Push this repository to your GitHub account.
2. **Connect to Netlify**: 
   - Log in to [Netlify](https://www.netlify.com/).
   - Click **"Add new site"** -> **"Import an existing project"**.
   - Select GitHub and choose your repository.
3. **Configure Environment Variables**:
   - In the Netlify deployment settings, under **"Environment Variables"**, you MUST add the following variable:
     - Key: `GEMINI_API_KEY`
     - Value: *(Your actual Gemini API Key)*
   - *Note: Your Firebase configuration is already included in `firebase-applet-config.json` and will be bundled automatically.*
4. **Deploy**: Click **"Deploy site"**.

Netlify will automatically run `npm run build` and publish the `dist` folder.

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

To build the project locally:

```bash
npm run build
```
