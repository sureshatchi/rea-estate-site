# Real Estate Static Website (GitHub Pages)

A lightweight **static website** for a real estate business with:
- ✅ Project photos / gallery
- ✅ Company information section
- ✅ Bilingual toggle: **English + Telugu**
- ✅ Contact form that redirects to **WhatsApp** with a pre-filled message

## 1) Quick Start
1. Download this project.
2. Open `index.html` in a browser to preview.

## 2) Customize (Important)
### Update company name
- Search and replace: `Your Real Estate` and `Your Real Estate Company` in `index.html`.

### Update owner name, WhatsApp number, location
Open `assets/js/main.js` and change:
```js
ownerName: 'Mahesh',
whatsappNumber: '918500008233',
locationText: 'Bengaluru, Karnataka',
```

### Replace project photos
Replace files inside `assets/img/` with your real images.
- Recommended size: **1200×800** or similar
- Keep the same filenames (e.g., `project-1.jpg`) and update the `src` in `index.html`.

### Update Google Map
In `index.html`, replace the iframe `src` with your project location's Google Maps embed URL.

## 3) Deploy to GitHub Pages
### Option A: Deploy from a repository (recommended)
1. Create a new repo on GitHub (example: `real-estate-site`).
2. Upload all files (or push via git).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
5. Save. Your site will be live shortly.

### Option B: Use `username.github.io`
1. Create repo: `YOUR_GITHUB_USERNAME.github.io`
2. Push these files.
3. GitHub Pages will publish automatically.

## 4) WhatsApp Redirect Behavior
- The form collects **Name**, **Mobile**, optional email, and message.
- Clicking **Send via WhatsApp** opens WhatsApp (web/app) with a pre-filled message.

> Note: This is a static site; the form does **not** store data anywhere.

---

If you want me to tailor the content, send:
- Company name
- Project names (6)
- City/area and Google Maps link
- 6–12 project photos