# Reneebae — Art Gallery Website

Portfolio and gallery site for **Renee Aliza Martinez (Reneebae)** — original paintings, collages, and custom commissions.

Plain HTML/CSS/JS. No build step, no dependencies. Works on Vercel, Netlify, or GitHub Pages as-is.

## Files

```
index.html    — the whole site (gallery, commissions, about, contact)
styles.css    — retro / graffiti design system
script.js     — lightbox for viewing paintings
images/       — logo, RB mark, paper texture, paintings, artist photos
```

## Deploy to GitHub + Vercel

1. **Create the GitHub repo**
   - Go to github.com → New repository → name it `reneebae` → Create.
   - On your computer, in this folder:
     ```bash
     git init
     git add .
     git commit -m "Reneebae gallery site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/reneebae.git
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to vercel.com → Add New → Project → Import the `reneebae` repo.
   - Framework preset: **Other**. No build command, no output directory needed.
   - Click **Deploy**. Done — you'll get a live URL like `reneebae.vercel.app`.

3. **Updates**
   - Edit files, then `git add . && git commit -m "update" && git push` — Vercel redeploys automatically.

## Editing content

- **Add/remove a painting:** copy one of the `<figure class="frame">` blocks in `index.html`, drop the new photo in `images/`, and update the `src`, title, description, and email subject line.
- **Prices:** each piece currently says "prices on request." To show prices, add a line inside `figcaption`, e.g. `<span class="piece-meta">$120</span>`.
- **Colors/fonts:** everything lives in the `:root` variables at the top of `styles.css`.
- **Contact:** email and Instagram links appear in the gallery note, commissions, contact, and footer sections.
