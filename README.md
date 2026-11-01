# Photo Gallery

A simple photo gallery web app built with **React**, **Vite** and **Tailwind CSS**. It fetches photos from the [Picsum Photos API](https://picsum.photos/), shows them in a responsive grid, lets you search by author name, and lets you mark photos as favourites.

## Features

- Fetches 30 photos from `https://picsum.photos/v2/list?limit=30` on load
- Loading spinner while fetching, and an error message if the fetch fails
- Responsive grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Real-time search by author name (filters already-fetched data, no extra API calls)
- Favourite photos with a heart button, saved in `localStorage` so they persist across refreshes

## Tech Stack

- React (functional components and hooks only)
- Vite
- Tailwind CSS (no other UI libraries)

## React Concepts Used

| Concept | Where | Why |
| --- | --- | --- |
| Custom hook `useFetchPhotos` | `src/hooks/useFetchPhotos.js` | Keeps fetch logic separate from UI; returns `photos`, `loading`, `error` |
| `useReducer` | `src/reducers/favouritesReducer.js` | Manages the favourites list through a `TOGGLE_FAVOURITE` action |
| `useMemo` | `src/components/Gallery.jsx` | Recomputes the filtered list only when `photos` or the search query change |
| `useCallback` | `src/components/Gallery.jsx` | Keeps the search and toggle handlers stable between renders |
| `localStorage` | `src/components/Gallery.jsx` | Saves favourites on change and loads them on first render |

## Project Structure

```
src/
  components/
    Gallery.jsx
    PhotoCard.jsx
  hooks/
    useFetchPhotos.js
  reducers/
    favouritesReducer.js
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/photo-gallery.git

# 2. Go into the project folder
cd photo-gallery

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## Author

Ravindra Dhayal