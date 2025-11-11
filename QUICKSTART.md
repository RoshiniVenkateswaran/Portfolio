# 🚀 Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables (optional):**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
   > Note: The chatbot works with fallback responses even without an API key, but for full AI functionality, add your OpenAI API key.

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Project Structure

```
Portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Main page components
│   ├── data/           # JSON data for dialogue and projects
│   ├── utils/          # Helper functions and API calls
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── package.json
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Features

✅ **Landing Page** - Terminal-style initialization sequence  
✅ **Three-Act Story** - Scroll-based narrative journey  
✅ **Interactive Project Nodes** - Click to explore projects  
✅ **AI Chatbot** - Ask questions about Roshini's work  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Smooth Animations** - Powered by Framer Motion  

## Customization

- **Edit dialogue:** Modify `src/data/dialogue.json`
- **Change colors:** Update `tailwind.config.js`
- **Update projects:** Edit project data in `dialogue.json`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Troubleshooting

- **Port already in use:** Change the port in `vite.config.js`
- **Chatbot not working:** Check if `VITE_OPENAI_API_KEY` is set correctly
- **Animations not smooth:** Ensure you're using a modern browser

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.
