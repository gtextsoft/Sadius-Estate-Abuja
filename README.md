# Sardius Estate Website

A professional, highly converting real estate website for Sardius Estate, Guzape 2, Abuja.

## 🎯 Features

- **Premium Design**: Modern, luxurious aesthetic with smooth animations
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Responsive**: Mobile-first design that works on all devices
- **Google Form Integration**: Easy lead capture via embedded Google Form
- **WhatsApp Integration**: One-click contact via WhatsApp
- **Interactive Elements**: Smooth scrolling, hover effects, and scroll animations
- **Fast Loading**: Optimized images and lightweight code

## 📁 File Structure

```
Sardius Estate/
├── index.html          # Main HTML file with all content
├── styles.css          # Premium CSS design system
├── script.js           # Interactive JavaScript
├── images/             # Image assets
│   ├── hero.png
│   ├── amenities.png
│   ├── location.png
│   ├── dream-home.png
│   └── pricing-details.jpg
└── README.md           # This file
```

## 🚀 Setup Instructions

### 1. Google Form Integration

The website uses Google Forms for lead capture. Follow these steps:

1. **Create a Google Form**:
   - Go to [Google Forms](https://forms.google.com)
   - Create a new form with these fields:
     - Full Name (required)
     - Email Address (required)
     - Phone Number (required)
     - Preferred Plot Type (Dropdown: Single Plot, Mini Estate)
     - Payment Preference (Dropdown: Outright, 3-Month Installment)
     - Message/Comments (optional)

2. **Get the Embed Code**:
   - Click "Send" button in your form
   - Click the `<>` (Embed HTML) icon
   - Copy the iframe code

3. **Update index.html**:
   - Open `index.html` in a text editor
   - Find line ~430 (in the Contact Section)
   - Replace `YOUR_FORM_ID` with your actual Google Form ID
   - Or replace the entire iframe with your copied embed code

### 2. Contact Information

Update the following placeholders in `index.html`:

- **Phone Number**: Replace `+2348000000000` with your actual number (appears in multiple places)
- **Email**: Replace `info@gtextland.com` with your actual email
- **Website**: Replace `www.gtextland.com` with your actual website URL

**Search and replace these in index.html:**
```
+2348000000000  →  Your actual WhatsApp/Phone number
info@gtextland.com  →  Your actual email
www.gtextland.com  →  Your actual website
```

### 3. Social Media Links

Update social media URLs in the footer (around line 480):

```html
<a href="https://instagram.com/gtextland" ...>
<a href="https://facebook.com/gtextland" ...>
<a href="https://twitter.com/gtextland" ...>
<a href="https://linkedin.com/company/gtextland" ...>
```

Replace with your actual social media profile URLs.

### 4. Google Maps (Optional)

To add a real map location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for "Guzape 2, Abuja"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Add it to the Location section in `index.html`

## 🌐 Deployment Options

### Option 1: Simple Hosting (Recommended for beginners)

1. **Netlify** (Free):
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the entire `Sardius Estate` folder
   - Get a free URL like `sardius-estate.netlify.app`

2. **Vercel** (Free):
   - Go to [vercel.com](https://vercel.com)
   - Sign up and import your project
   - Deploy with one click

3. **GitHub Pages** (Free):
   - Create a GitHub repository
   - Upload all files
   - Enable GitHub Pages in settings

### Option 2: Web Hosting

Upload all files to your web hosting via FTP:
- Use FileZilla or your hosting's file manager
- Upload all files to the `public_html` or `www` directory
- Access via your domain name

### Option 3: Local Testing

Simply open `index.html` in a web browser to test locally.

## 📝 Customization Guide

### Colors

Edit `styles.css` (lines 10-20) to change colors:

```css
:root {
  --color-primary: #0A1931;     /* Main dark color */
  --color-secondary: #D4AF37;   /* Gold accent */
  --color-accent: #185ADB;      /* Blue accent */
}
```

### Fonts

Change fonts in `styles.css` (line 6):

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');
```

### Images

Replace images in the `images/` folder with your own. Keep the same filenames or update src attributes in `index.html`.

### Content

Edit text directly in `index.html`. All content is clearly organized by sections.

## ✅ Testing Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Google Form loads and submits correctly
- [ ] WhatsApp button opens with pre-filled message
- [ ] Phone/email links work
- [ ] Website looks good on mobile (test with phone or browser dev tools)
- [ ] All images load properly
- [ ] Social media links point to correct profiles
- [ ] Contact information is correct

## 🔧 Troubleshooting

**Google Form not showing?**
- Check if the form ID is correct
- Ensure the form is set to "Anyone can respond"
- Try opening the form link in a new tab

**Images not loading?**
- Check file paths are correct
- Ensure images folder is in the same directory as index.html
- Check image file extensions match (png vs jpg)

**Mobile menu not working?**
- Ensure script.js is loaded
- Check browser console for errors (F12)

## 📊 SEO Checklist

The website includes:
- ✅ Optimized title tags
- ✅ Meta descriptions
- ✅ Open Graph tags (social sharing)
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Mobile responsive design

### Next Steps for Better SEO:

1. Submit to Google Search Console
2. Create a Google My Business listing
3. Build backlinks from relevant sites
4. Add a blog section for content marketing
5. Optimize images (compress further if needed)

## 📞 Support

For questions or updates needed, contact: info@gtextland.com

## 📄 License

© 2025 Sardius Estate by GTextLand. All rights reserved.

---

**Built with ❤️ for premium real estate marketing**
