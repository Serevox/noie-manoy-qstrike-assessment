# Color Preview App

This project is a web application built with React using Vite, TypeScript XML, TailwindCSS, and Axios. It fetches color data from an API and allows users to preview colors and view their details.

## Technologies Used

- React with Vite
- TypeScript XML
- TailwindCSS
- Axios

## Features

- Fetches color data from an external API (`https://api.prolook.com/api/colors/prolook`).
- Displays a list of colors and allows users to preview each color.
- Calculates text color dynamically based on the selected color for better visibility.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone [<repository-url>](https://github.com/Serevox/noie-manoy-qstrike-assessment.git)
   cd color-preview-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)/[http://localhost:5173](http://localhost:5173) to view it in the browser.

   Deployed using Vercel - see more: [https://qstrike-assessment.vercel.app/](https://qstrike-assessment.vercel.app/)

## Usage

- Select a color from the list on the left panel to preview it on the right panel.
- The background color of the right panel changes dynamically based on the selected color.
- Text color adjusts automatically for better readability based on the selected color.

## API Usage

This project uses the Prolook Color API (`https://api.prolook.com/api/colors/prolook`) to fetch color data. Ensure your network connection is active to fetch the colors successfully.

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


