// src/pages/MinumanPage.jsx
import { useState, useEffect } from 'react';
import { ResepMinuman } from '../data/minuman';
import RecipeGrid from '../components/minuman/RecipeGrid';

export default function MinumanPage() {
  const allMinuman = Object.values(ResepMinuman.resep);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(allMinuman);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 3;

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase().trim();
    const filtered =
      lowerQuery === ''
        ? allMinuman
        : allMinuman.filter((recipe) =>
            recipe.name.toLowerCase().includes(lowerQuery)
          );
    setFilteredRecipes(filtered);
    setCurrentPage(1);
  }, [searchQuery]); // <-- hanya tergantung searchQuery

  // pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / recipesPerPage));

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-cyan-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
          Daftar Resep Minuman
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari resep minuman..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 border border-emerald-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Recipe Grid */}
        <RecipeGrid recipes={currentRecipes} />

        {/* Pagination */}
        {filteredRecipes.length > recipesPerPage && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-600'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Sebelumnya
            </button>
            <span className="text-gray-700 font-medium">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-600'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Berikutnya
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
