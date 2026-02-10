
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static ai: GoogleGenAI | null = null;

  private static getClient() {
    if (!this.ai) {
      this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    }
    return this.ai;
  }

  static async editServiceImage(base64Image: string, prompt: string, mimeType: string = 'image/jpeg'): Promise<string | null> {
    const ai = this.getClient();
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Image.split(',')[1] || base64Image,
                mimeType: mimeType,
              },
            },
            {
              text: `Jesteś asystentem serwisu Beretta. Na podstawie zdjęcia i prośby: "${prompt}", wykonaj edycję obrazu. Na przykład jeśli prośba to "zaznacz usterkę", narysuj wyraźne czerwone kółko wokół widocznego wycieku lub uszkodzenia. Jeśli prośba to "pokaż nową instalację", spróbuj zwizualizować nowoczesny kocioł kondensacyjny w tym miejscu.`,
            },
          ],
        },
      });

      for (const part of response.candidates?.[0]?.content.parts || []) {
        if (part.inlineData) {
          return `data:${mimeType};base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error('Error editing image with Gemini:', error);
      return null;
    }
  }
}
