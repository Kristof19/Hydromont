
import React, { useState, useRef } from 'react';
import { GeminiService } from '../services/geminiService';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!selectedImage || !prompt) return;
    setLoading(true);
    try {
      const result = await GeminiService.editServiceImage(selectedImage, prompt);
      if (result) {
        setProcessedImage(result);
      } else {
        alert("Wystąpił błąd podczas przetwarzania obrazu. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    setPrompt('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="h-64 md:h-80 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
            {selectedImage ? (
              <img src={selectedImage} alt="Oryginalne" className="absolute inset-0 w-full h-full object-contain" />
            ) : (
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block">📸</span>
                <p className="text-sm text-gray-500">Wybierz zdjęcie swojego kotła lub instalacji</p>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 px-4 py-2 bg-beretta text-white rounded-md text-sm font-semibold hover:bg-red-700"
                >
                  Dodaj zdjęcie
                </button>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Twoja prośba do AI:</label>
            <textarea 
              placeholder="np. Zaznacz usterkę na zdjęciu, albo dodaj filtr retro"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-beretta focus:border-beretta"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex space-x-2">
              <button 
                onClick={handleProcess}
                disabled={loading || !selectedImage || !prompt}
                className={`flex-1 py-3 rounded-lg font-bold text-white transition-colors ${
                  loading || !selectedImage || !prompt ? 'bg-gray-400' : 'bg-beretta hover:bg-red-700'
                }`}
              >
                {loading ? 'Przetwarzanie...' : 'Uruchom Asystenta'}
              </button>
              <button onClick={reset} className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Reset</button>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col">
          <div className="flex-1 min-h-[300px] bg-gray-900 rounded-xl overflow-hidden relative flex items-center justify-center">
            {processedImage ? (
              <img src={processedImage} alt="Przetworzone AI" className="w-full h-full object-contain" />
            ) : (
              <div className="text-center text-gray-500 p-8">
                {loading ? (
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-full mb-4"></div>
                    <p>Generowanie podglądu przez Gemini...</p>
                  </div>
                ) : (
                  <p>Tu pojawi się wynik wizualizacji</p>
                )}
              </div>
            )}
          </div>
          <p className="mt-4 text-xs text-gray-400 text-center">
            Technologia Nano Banana: Gemini 2.5 Flash Image. Służy wyłącznie do celów poglądowych.
          </p>
        </div>
      </div>
    </div>
  );
};
