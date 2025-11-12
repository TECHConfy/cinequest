# 🎬 Movie Explorer App  

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue?logo=tailwindcss&logoColor=white)
![OMDb API](https://img.shields.io/badge/OMDb_API-Free-green)

Explore your favorite movies effortlessly! 🍿  
**Movie Explorer** is a React-based web app that lets users search, view, and favorite movies using data fetched from the **OMDb API**.  

---

## 🚀 Features  

✨ **Search Movies Instantly** — Type any movie title and get instant search results.  
❤️ **Add/Remove Favorites** — Save your favorite movies locally with one click.  
💾 **Persistent Storage** — Favorites are saved using **localStorage**, even after page reloads.  
⚡ **Responsive UI** — Styled beautifully with **TailwindCSS** for all screen sizes.  
🔍 **Real-Time Fetching** — Powered by the **OMDb API** to deliver accurate movie data.  

---

## 🧠 Tech Stack  

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React** | Frontend library for building the app |
| 🎨 **Tailwind CSS** | Styling and responsiveness |
| 🌐 **OMDb API** | Data source for movies |
| 💾 **localStorage** | Persist favorite movies |
| 🧩 **Context API** | Manage global state for favorites |

---

## 🛠️ Installation and Setup  

Follow these steps to run the project locally 👇  

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/movie-explorer.git

# 2️⃣ Navigate into the project folder
cd movie-explorer

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm run dev
````

Then open your browser at 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔑 API Setup

1. Get your free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

2. Create a `.env` file in your project root and add your key:

   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

3. Use it in your code like this:

   ```js
   const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
   ```

---

## 🧭 Folder Structure

```
movie-explorer/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieList.jsx
│   │   └── MovieCard.jsx
│   │
│   ├── context/
│   │   └── MovieContext.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── tailwind.config.js
```

---

## 💡 Future Improvements

🧩 Add movie details modal (year, rating, plot)
🕵️‍♂️ Filter by genre or year
🌙 Dark mode toggle
📱 PWA support for offline access

---

## 🧑‍💻 Author

**👋 Confidence Akinsoun**
💻 Developer | 🎨 Designer | ⚙️ Tech Enthusiast
📫 Reach me on [LinkedIn](https://linkedin.com/in/confidence-akinsoun-410b19234) or [GitHub](https://github.com/TECHConfy)

---

## 🌟 Show Your Support

If you like this project, don’t forget to ⭐ **star the repo** — it helps a lot! 💖