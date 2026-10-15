# Arshdeep Kaur — Portfolio

A static site (plain HTML/CSS/JS, no build step). Open `index.html` in a browser to preview.

## Editing content
- **Text**: everything is in `index.html`, one commented block per section
  (Hero → Current work → Other work → About → Off the clock → Contact).
- **CodeXray case study**: `codexray.html` shows the slides in `assets/case-studies/codexray-web/`
  (compressed `.webp` copies of the PNGs in `assets/case-studies/codexray/`). To change a slide, export it
  to `.webp` with the same name (`01.webp` … `09.webp`); to add one, add a matching `<img>` line in `codexray.html`.
- **Hoomanely case study**: `hoomanely.html` is a written case study (text in HTML, styled by `case-study.css`);
  screens live in `assets/case-studies/hoomanely-web/`. `case-study.css` can be reused for future written case studies.
- **Projects**: each card in the "Other work" section links to `assets/case-studies/<name>.pdf`
  (placeholders for now — replace them keeping the filenames) and shows `assets/work/<name>.webp`.
- **Covers**: the originals live in `assets/*Cover.*`; the site uses compressed copies in `assets/work/`
  (~600 KB total instead of ~12 MB). When you change a cover, export a `.webp` around 1200px wide into `assets/work/`.
- **Personal photos**: live in `assets/life/`; captions and crop position (`--pos`) are set on each polaroid.
- **Résumé**: replace `assets/Arshdeep_Kaur_Resume.pdf` (keep the filename).
- **Career timeline**: each `.span` has `--s` (start) and `--e` (end) in years since 2014.

## Deploying
Any static host works — GitHub Pages (Settings → Pages → deploy from this branch), Netlify, or Vercel.
