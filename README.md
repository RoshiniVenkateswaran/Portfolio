# 💫 Beyond the Code: An AI Simulation by Roshini

## 🧠 Overview
**Beyond the Code** is an interactive, AI-driven storytelling portfolio designed and developed by **Roshini Venkateswaran**, a Software Developer and AI/ML enthusiast at George Washington University.

This isn't a typical portfolio — it's a **cinematic scroll experience** fused with an **AI chatbot** that narrates Roshini's evolution as a developer.  
It merges *motion, emotion,* and *intelligence* to make the visitor feel like they're interacting with Roshini's digital twin.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**Note:** The chatbot will work with fallback responses even without an API key, but for full functionality, you'll need an OpenAI API key.

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── Chatbot/           # AI chatbot interface
 │   ├── StoryScenes/       # Three-act storytelling component
 │   ├── ProjectNodes/      # Interactive neural map visualization
 │   ├── ScrollNarrator/    # Scroll-based narration
 │   └── Footer/            # Footer component
 ├── data/
 │   └── dialogue.json      # Pre-scripted AI narration and project data
 ├── pages/
 │   ├── Landing.jsx        # Entry page (AI initialization)
 │   └── Story.jsx          # Main storytelling layout
 ├── utils/
 │   ├── api.js             # Handles chatbot requests
 │   └── triggers.js        # Scroll + animation triggers
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 🎨 Features

- **AI Storytelling Engine** – Smooth scroll-based narration using Framer Motion
- **AI Chatbot Interface** – Powered by OpenAI API (with fallback responses)
- **Cinematic Transitions** – Animated scenes representing milestones
- **Interactive Neural Map** – Projects visualized as "nodes" connected by glowing data lines
- **Responsive Design** – Optimized for desktop, tablet, and mobile
- **Dynamic Theme** – Dark, futuristic palette with soft neon glows

## 🧩 Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Chatbot**: OpenAI API (with fallback responses)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 🎯 Usage

### Storytelling Flow

1. **Landing Page**: Initialization sequence with terminal-style UI
2. **Act 1 - Curiosity**: Early fascination with coding and creation
3. **Act 2 - Evolution**: Interactive project nodes (Pawfect, Botify, IoT Bus Tracker, Expends)
4. **Act 3 - Vision**: Future aspirations and AI reflection

### Chatbot Features

The chatbot can answer questions about:
- Roshini's projects (Pawfect, Botify, IoT Bus Tracker, Expends)
- Her learning journey
- Her vision for the future

**Easter egg**: Type "predict future" for a special AI prediction!

## 🎨 Design Language

- **Palette**: #0B0C10 (dark), #66FCF1 (cyan), #45A29E (aqua), #C5C6C7 (light gray)
- **Typography**: Space Mono (AI text), Inter (narration)
- **Mood**: Futuristic • Minimal • Human-centered

## 📝 Customization

Edit `src/data/dialogue.json` to customize:
- AI narration lines
- Project descriptions
- Chatbot responses

## 🔧 Configuration

### Tailwind CSS
Custom theme colors and animations are defined in `tailwind.config.js`.

### OpenAI API
The chatbot uses OpenAI's GPT-3.5-turbo model. To use a different model, edit `src/utils/api.js`.

## 📜 Future Enhancements

- Add voice narration for AI dialogue
- Integrate live GitHub and LinkedIn activity feeds
- Include blog posts under "Neural Notes" section
- Add "Developer Console Mode" Easter egg
- 3D neural network visualization using Spline

## 👩‍💻 About Roshini

Roshini Venkateswaran is a graduate student in Computer Science at The George Washington University, passionate about AI, App Development, and Human-Centered Systems.

Her past experience includes roles at Prommuni, Medica, Advantage Capital, and Etuper Technologies, where she built intelligent, scalable, and empathetic tech solutions.

## 🔗 Connect

- 💼 LinkedIn: [linkedin.com/in/roshini-venkateswaran](https://linkedin.com/in/roshini-venkateswaran)
- 💻 GitHub: [github.com/roshiniv](https://github.com/roshiniv)
- ✉️ Email: roshiniv@gwu.edu

## 🚀 Project Vision

*"This portfolio is not just about what I've built — it's about what I'm becoming."*

A fusion of storytelling, design, and intelligence, "Beyond the Code" is a reflection of my evolution as a developer and a human being.

## 📄 License

This project is open source and available under the MIT License.
