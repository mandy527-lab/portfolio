# Mandy Lin Portfolio

Vue + Vue I18n + Vite portfolio website for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`. After pushing to GitHub, the workflow builds the Vite app and deploys `dist/` to GitHub Pages automatically.

Required GitHub setting:

1. Go to repository `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` branch.

After the workflow finishes, the public URL will appear in:

Repository `Settings` -> `Pages`

The URL usually looks like:

```text
https://<github-username>.github.io/<repository-name>/
```

If the repository is named `<github-username>.github.io`, the URL will be:

```text
https://<github-username>.github.io/
```
