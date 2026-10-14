# Arshdeep Kaur — Portfolio

A static site (plain HTML/CSS/JS, no build step). Open `index.html` in a browser to preview.

## Editing content
- **Text**: everything is in `index.html`, one commented block per section
  (Hero → Current work → Other work → About → Off the clock → Contact).
- **Case studies**: replace the placeholder PDFs in `assets/case-studies/` (keep the filenames,
  or update the links in `index.html`).
- **Case study covers**: add images to `assets/work/` using the filenames already referenced
  (e.g. `codexray.jpg`). Until a file exists, a placeholder is shown.
- **Personal photos**: live in `assets/life/`; captions and crop position (`--pos`) are set on each polaroid.
- **Résumé**: replace `assets/Arshdeep_Kaur_Resume.pdf` (keep the filename).
- **Career timeline**: each `.span` has `--s` (start) and `--e` (end) in years since 2014.

## Deploying
Any static host works — GitHub Pages (Settings → Pages → deploy from this branch), Netlify, or Vercel.
