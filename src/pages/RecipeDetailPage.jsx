// src/pages/RecipeDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { ResepMakanan } from '../data/makanan';
import { ResepMinuman } from '../data/minuman';
import { ArrowLeft, Clock, ChefHat } from 'lucide-react';

export default function RecipeDetailPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  // Ambil data berdasarkan tipe
  const data =
    type === 'makanan'
      ? Object.values(ResepMakanan.resep)
      : Object.values(ResepMinuman.resep);

  const recipe = data[id];

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-600">Resep tidak ditemukan.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 pb-20 md:pb-10">
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={recipe.image_url}
            alt={recipe.name}
            className="w-full h-64 object-cover"
          />

          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">{recipe.name}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={18} />
                <span>{recipe.ingredients.length} bahan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ChefHat size={18} />
                <span>{recipe.steps.length} langkah</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-slate-700 mb-3">Bahan-bahan:</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-slate-700 mb-3">Langkah-langkah:</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
