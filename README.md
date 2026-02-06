# Accessible Personal Website Portfolio

A comprehensive, **WCAG 2.1 AA compliant** website showcasing technical accessibility enhancements and best practices. Built to demonstrate professional-grade web accessibility implementation.

## 🎯 Overview

This website serves as both a **portfolio piece** demonstrating accessibility expertise and a **live example** of accessible web design principles. It includes:

- ✅ **Semantic HTML5** structure
- ✅ **ARIA labels and attributes** for screen readers
- ✅ **Full keyboard navigation** support
- ✅ **WCAG 2.1 Level AA compliance**
- ✅ **Interactive accessible components** (accordion, modal, form validation)
- ✅ **Responsive design** with mobile support
- ✅ **Dark mode** preference detection
- ✅ **Reduced motion** support
- ✅ **High contrast** color scheme (4.5:1+ ratio)
- ✅ **Focus management** and visible focus indicators
- ✅ **Skip links** for keyboard users

## 📁 Project Structure

```
accessible-personal-website/
├── index.html              # Main landing page with features & components
├── techniques.html         # Detailed accessibility techniques guide
├── styles.css              # Accessible styling with theming
├── script.js               # Interactive component scripts
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## 🚀 Features

### Interactive Components
- **Accessible Form** - Proper labels, validation, error messages
- **Dropdown Accordion** - Keyboard navigation with arrow keys
- **Data Tables** - Proper headers, responsive design with labels
- **Modal Dialog** - Focus trapping, keyboard control (Escape to close)
- **Tooltips** - Accessible with keyboard and screen reader support

### Accessibility Features
- **Skip Links** - Jump to main content for keyboard users
- **Semantic HTML** - Proper structure with header, nav, main, footer
- **ARIA Labels** - Screen reader friendly interactive elements
- **Keyboard Navigation** - Tab, arrow keys, Enter/Space activation
- **Focus Management** - Visible focus indicators, logical tab order
- **Color Contrast** - 4.5:1 ratio for normal text (WCAG AA)
- **Responsive** - Works on all device sizes, 200% zoom support

## 🛠️ Technical Implementation

### Keyboard Navigation
- **Tab/Shift+Tab** - Navigate through interactive elements
- **Enter/Space** - Activate buttons and links
- **Arrow Keys** - Navigate within accordion buttons
- **Escape** - Close modal dialogs
- **Home/End** - Jump to first/last accordion item

### ARIA Attributes Used
- `aria-label` - Labels for icon buttons
- `aria-labelledby` - Semantic connections between elements
- `aria-describedby` - Help text associations
- `aria-expanded` - Accordion and menu states
- `aria-hidden` - Hide decorative elements
- `aria-live` - Dynamic content announcements
- `aria-modal` - Modal dialog identification
- `aria-invalid` - Form validation errors

### Color Contrast
- **Text on background:** 8.6:1 ratio
- **Primary elements:** 5.2:1 ratio
- **Meets WCAG AA** for normal and large text
- **Dark mode support** for users with preferences

## 🌐 Deployment

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Accessible portfolio website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as source
   - Save

3. **Access your site:**
   - Your website will be available at: `https://yourusername.github.io/accessible-personal-website/`

### Local Testing

1. **Simple server (Python):**
   ```bash
   python -m http.server 8000
   ```

2. **Simple server (Node.js):**
   ```bash
   npx http-server
   ```

3. **Using VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click index.html → "Open with Live Server"

## 🧪 Testing & Validation

### Automated Tools
- **axe DevTools** - Browser extension for accessibility audit
  - Install from Chrome Web Store or Firefox Add-ons
  - Open DevTools → axe DevTools → Scan

- **Lighthouse** - Built into Chrome DevTools
  - DevTools → Lighthouse → Run audit (check Accessibility)

- **WAVE** - Browser extension
  - Install from Chrome Web Store or Firefox Add-ons
  - Scan page for accessibility issues

### Manual Testing Checklist

**Keyboard Navigation:**
- [ ] Navigate entire page using Tab key
- [ ] Tab order follows logical flow
- [ ] Focus indicator is visible on all interactive elements
- [ ] Accordion responds to arrow keys
- [ ] Modal closes with Escape key
- [ ] Form validates on input blur

**Screen Reader Testing (Windows - NVDA):**
- [ ] Download and install [NVDA](https://www.nvaccess.org/)
- [ ] Start NVDA and enable web roaming mode
- [ ] Navigate page structure with heading landmark navigation
- [ ] Verify form labels are announced
- [ ] Test modal dialog focus management
- [ ] Check ARIA labels on buttons

**Screen Reader Testing (Mac - VoiceOver):**
- [ ] Press Cmd + F5 to enable VoiceOver
- [ ] Use Vo + U for rotor (navigation menu)
- [ ] Navigate headings, landmarks, and links
- [ ] Test interactive components

**Visual Testing:**
- [ ] Zoom page to 200% (Ctrl/Cmd + +)
- [ ] Verify layout remains usable
- [ ] Check all interactive elements are still accessible
- [ ] Test color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Responsive Design:**
- [ ] Test mobile view (Chrome DevTools)
- [ ] Verify menu toggle works
- [ ] Check touch targets are 44x44px minimum
- [ ] Test on actual mobile device if possible

## 📚 Learning Resources

### Official Standards
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [HTML Living Standard](https://html.spec.whatwg.org/)

### Educational Resources
- [WebAIM](https://webaim.org/) - Comprehensive accessibility articles
- [A11y 101](https://www.a11y-101.com/) - Beginner-friendly guide
- [Inclusive Components](https://inclusive-components.design/) - Component patterns

### Tools & Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)

## 🎨 Customization

### Update Personal Information
Edit the contact section in `index.html`:
```html
<section id="contact">
    <a href="https://github.com/yourusername">GitHub</a>
    <a href="https://twitter.com/yourhandle">Twitter</a>
    <a href="mailto:your-email@example.com">Email</a>
</section>
```

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;      /* Change main color */
    --text-color: #212529;         /* Change text color */
    --focus-color: #ffc107;        /* Change focus indicator */
    /* ... other variables */
}
```

### Add New Sections
Create new sections in `index.html`:
```html
<section id="newsection" aria-labelledby="section-heading">
    <div class="container">
        <h2 id="section-heading">Your Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## 📋 WCAG 2.1 Compliance Checklist

- [x] Perceivable - Content is visible and accessible
- [x] Operable - Keyboard navigation and controls
- [x] Understandable - Clear structure and language
- [x] Robust - Compatible with assistive technologies

### Level A Features
- [x] Alternative text (images labeled or hidden)
- [x] Page title and language declaration
- [x] Keyboard accessible
- [x] Sufficient color contrast
- [x] Meaningful heading hierarchy

### Level AA Features (This Project)
- [x] Enhanced color contrast (4.5:1)
- [x] Focus indicator visible
- [x] Proper form labels
- [x] Semantic HTML structure
- [x] Responsive design
- [x] ARIA labels where needed

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📱 Responsive Breakpoints

- Desktop: 1200px+ (full layout)
- Tablet: 768px - 1199px (single column with adjustments)
- Mobile: < 768px (mobile menu, single column)

## 🤝 Contributing

Found an accessibility issue? Please file an issue or submit a pull request!

### How to Report Issues
1. Test using keyboard navigation
2. Test with a screen reader
3. Describe the issue and expected behavior
4. Include browser/screen reader version

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@mendelcrrll](https://github.com/mendelcrrll)
- Portfolio: [mendelcrrll.github.io](https://mendelcrrll.github.io/)

## 🔗 References

- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [WebAIM](https://webaim.org/)
- [Inclusive Components](https://inclusive-components.design/)
- [Accessibility Guidelines (A11y)](https://www.a11y-101.com/)

---

**Last Updated:** February 2024
**WCAG Compliance Level:** AA
**Target Audience:** Developers, designers, accessibility advocates