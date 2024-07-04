/* Web Technologies Used 
  
1. React using Vite
2. Typescript XML 
3. TailwindCSS
4. Axios 

*/

// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// Color Data API Response
interface Color {
  id: number;
  name: string;
  hex_code: string;
  color_code: string;
}

// API Response Structure
interface ApiResponse {
  success: boolean;
  colors: Color[];
}

// Calculate text contrast based on luminance
const colorContrast = (hex: string): string => {
  // Convert hex color to RGB
  const r: number = parseInt(hex.substring(1, 2), 16);
  const g: number = parseInt(hex.substring(3, 2), 16);
  const b: number = parseInt(hex.substring(5, 2), 16);

  // Calculate luminance
  const luminance: number = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Use white or black depending on luminance
  return luminance > 0.5 ? "#000" : "#fff";
};

// Main Component
const App: React.FC = () => {
  // State Variables
  const [colors, setColors] = useState<Color[]>([]);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  // Fetch Data from API
  useEffect(() => {
    axios
      .get<ApiResponse>("https://api.prolook.com/api/colors/prolook")
      .then((response) => {
        setColors(response.data.colors);
      })
      .catch((error: unknown) => {
        console.error("Error fetching colors:", error);
      });
  }, []);

  // Function to handle color preview selection
  const colorPreview = (color: Color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex justify-center items-center h-screen py-10 px-4 md:px-8 sm:px-6">
      <div className="max-w-screen-xl w-full border border-stone-950 rounded-lg mx-10 flex flex-col sm:flex-row">
        {/* Left side panel for color list */}
        <div className="w-full sm:w-1/3 p-4 overflow-y-auto bg-white-200 py-10 px-5 ">
          <h1 className="text-xl font-bold mb-5">Name: Noie Glenn Manoy</h1>
          <h2 className="text-xl font-semibold mb-4">Colors</h2>
          <ul className="overflow-y-auto max-h-96 list-none p-0  ">
            {colors.map((color) => (
              <li
                key={color.id}
                className="flex justify-between items-center border border-gray-400 border-b-0 py-4 px-3 font-semibold hover:bg-gray-200"
              >
                <span className="truncate w-4/5">{color.name}</span>
                <button
                  className="bg-cyan-500 hover:bg-indigo-700 text-white px-2 py-1 rounded"
                  onClick={() => colorPreview(color)}
                >
                  Preview
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Right side panel for selected color preview */}
        <div
          className="w-full sm:w-2/3 flex justify-center items-center border-t border-l sm:border-t-0"
          id="previewDiv"
          style={{
            // Changes the color of the background based on color chosen then
            backgroundColor: selectedColor
              ? selectedColor.hex_code.startsWith("#")
                ? selectedColor.hex_code
                : `#${selectedColor.hex_code}`
              : "transparent",
            // Gets the contrast of the color chosen for text visibility
            color: selectedColor
              ? colorContrast(selectedColor.hex_code)
              : "#000", // Default text color
          }}
        >
          {selectedColor ? (
            <div
              className="text-left p-4 font-sans border"
              // Changes border color dynamically similar with text color
              style={{
                borderColor: selectedColor
                  ? colorContrast(selectedColor.hex_code)
                  : "#000",
              }}
            >
              <p>Name: {selectedColor.name}</p>
              <p>Hex: {selectedColor.hex_code}</p>
              <p>Color Code: {selectedColor.color_code}</p>
            </div>
          ) : (
            <div className="text-center p-4">
              <p>Select a color to preview and see details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
