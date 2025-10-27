import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MakananPage from './pages/MakananPage';
import MinumanPage from './pages/MinumanPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import PWABadge from './PWABadge.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <header className="p-4 bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-indigo-600">
          🍽️ Resep Nusantara
        </Link>
        <nav className="space-x-4">
          <Link to="/makanan" className="hover:text-indigo-600 font-medium">Makanan</Link>
          <Link to="/minuman" className="hover:text-green-600 font-medium">Minuman</Link>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Halaman Utama */}
          <Route
            path="/"
            element={
              <div className="text-center py-20">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Selamat Datang di Resep Nusantara</h1>
                <p className="text-slate-600 mb-6">Jelajahi aneka resep makanan dan minuman khas Nusantara 🍛☕</p>
                <div className="flex justify-center space-x-4">
                  <Link to="/makanan" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Lihat Resep Makanan
                  </Link>
                  <Link to="/minuman" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    Lihat Resep Minuman
                  </Link>
                </div>
              </div>
            }
          />

          {/* Halaman Resep */}
          <Route path="/makanan" element={<MakananPage />} />
          <Route path="/minuman" element={<MinumanPage />} />

          {/* Halaman Detail */}
          <Route path="/detail/:category/:id" element={<RecipeDetailPage />} />
        </Routes>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500">
        <PWABadge />
        <p className="mt-2">© 2025 Kelompok 17 - Resep Nusantara</p>
      </footer>
    </Router>
  );
}

export default App;
