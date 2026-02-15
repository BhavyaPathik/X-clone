# 🐦 X (Twitter) Clone

A responsive X (formerly Twitter) clone built using **HTML, CSS, and Vanilla JavaScript**.

This project recreates core UI and interaction features of X including:

- Login screen
- Tweet composer
- 280 character limit with live counter
- Dark / Light theme toggle
- Responsive layout (Desktop / Tablet / Mobile)
- Profile view with user posts
- Mobile bottom navigation

---

## 🚀 Features

### ✍️ Tweet Composer
- Auto-expanding textarea
- 280 character limit
- Live character counter
- Post button disabled when empty or over limit
- Tweets appear instantly in feed
- Tweets also appear in profile page

---

### 👤 Profile System
- Custom username & bio at login
- Join date auto-generated
- Profile page toggle
- Posts mirrored between feed & profile

---

### 🌗 Theme Toggle
- Dark mode (default)
- Light mode
- Smooth transition animation
- Theme preference saved in `localStorage`
- Icons adapt to theme

---

### 📱 Responsive Design

| Screen Size | Layout |
|------------|--------|
| Desktop | Full sidebar + feed |
| Tablet | Collapsed sidebar |
| Mobile | Bottom navigation bar |

---

## 🛠️ Tech Stack

- HTML5  
- CSS3 (Custom Properties / CSS Variables)  
- Vanilla JavaScript  
- LocalStorage API  

---

## 📂 Project Structure

```
project-root/
│
├── index.html
├── style.css
├── script.js
├── logo-icon-pack/
└── chirp-regular-web.woff
```

---

## 🎨 Theme System

Uses CSS Variables:

```css
:root {
  --bg;
  --text;
  --muted;
  --border;
  --hover;
}
```

Light mode is enabled by toggling:

```js
document.body.classList.toggle("light")
```

---

## 📱 Mobile Navigation

On screens ≤ 768px:
- Sidebar hides
- Bottom navigation appears
- Profile & Home toggle supported

---

## 🧠 What This Project Demonstrates

- DOM manipulation
- Dynamic element creation
- Event handling
- Responsive CSS with media queries
- Theme switching using CSS variables
- State persistence with localStorage

---

## 🔮 Future Improvements

- Like / Comment / Retweet actions
- Image upload preview
- Backend integration
- Authentication system
- Real database storage
- Animated page transitions
- Progressive Web App (PWA) support

---

# 🐦 X (Twitter) Clone

🌐 **Live Demo:**  
https://bhavyapathik.github.io/Msc-Project-3/



