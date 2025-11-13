# 💼 Roshini Venkateswaran - Portfolio

## 🧠 Overview
A modern, professional portfolio website showcasing the work and experience of **Roshini Venkateswaran**, a Software Engineer & AI/ML Enthusiast pursuing her MS in Computer Science at George Washington University.

This portfolio features a sleek dark theme with smooth animations, interactive components, and an AI-powered chatbot assistant to help visitors learn about Roshini's projects, experience, and skills.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RoshiniVenkateswaran/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
Create a `.env` file in the root directory:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**Note:** The chatbot will work with fallback responses even without an API key, but for full AI functionality, you'll need an OpenAI API key.

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

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
 │   ├── Chatbot.jsx          # AI chatbot assistant interface
 │   ├── Navigation.jsx       # Navigation bar with scroll effects
 │   ├── Footer.jsx           # Footer with social links
 │   ├── Layout.jsx           # Main layout wrapper
 │   └── [Other animation components]
 ├── pages/
 │   ├── Home.jsx             # Landing page with hero section
 │   ├── About.jsx            # About page with bio, certifications, testimonials
 │   ├── Projects.jsx         # Projects showcase
 │   ├── Experience.jsx        # Work experience timeline
 │   ├── Skills.jsx           # Technical skills display
 │   └── Contact.jsx          # Contact information
 ├── utils/
 │   └── api.js               # Chatbot API logic
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 🎨 Features

- **Modern Dark Theme** – Sleek dark background (#1a1a1a) with glassmorphism effects
- **Smooth Animations** – Scroll-based animations using Framer Motion
- **AI Chatbot Assistant** – Powered by OpenAI API (with intelligent fallback responses)
- **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices
- **Interactive Navigation** – Blurred navigation bar that activates on scroll
- **Project Showcase** – Detailed project cards with tech stacks and links
- **Experience Timeline** – Professional work experience display
- **Skills Display** – Organized skill categories with interactive cards
- **Certifications Carousel** – AWS certifications with image display
- **Store Links** – Direct links to App Store and Play Store for live projects

## 🧩 Tech Stack

- **Frontend**: React 18.2.0, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Chatbot**: OpenAI API (GPT-3.5-turbo) with fallback responses
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📄 Pages

### Home
- Hero section with animated name on scroll
- Role and introduction
- "Explore My Work" section with navigation cards
- Featured project showcase

### About
- Personal bio and introduction
- Education and availability information
- Certifications carousel (AWS certifications)
- Testimonials section

### Projects
- Detailed project cards with descriptions
- Tech stack tags
- Store links for live applications (App Store, Play Store)
- Role and timeline information

### Experience
- Work experience timeline
- Company details, roles, and achievements
- Location and duration information

### Skills
- Organized skill categories:
  - Programming Languages
  - Mobile Development
  - AI/ML
  - Backend & Databases
  - Frontend & Design
  - Soft Skills

### Contact
- Contact information
- Social media links (LinkedIn, GitHub, Medium)
- Resume download functionality
- Email contact

## 🤖 Chatbot Features

The AI chatbot assistant ("Roshini's Assistant") can answer questions about:
- Roshini's projects (LoRA Fine-tuning, Amazon Retail Forecasting, Botify, Expends, IoT Bus Tracker, etc.)
- Work experience (Prommuni, Medica, Advantage Capital, Etuper Technologies)
- Skills and technologies
- Education and certifications
- Location and availability

The chatbot uses intelligent keyword matching for quick responses and falls back to OpenAI API for more complex queries.

## 🎨 Design Language

- **Background**: Dark theme (#1a1a1a)
- **Text Colors**: White for headings, #6c757d for secondary text
- **Effects**: Glassmorphism (backdrop blur, semi-transparent cards)
- **Animations**: Smooth scroll-based animations with Framer Motion
- **Typography**: Inter font family
- **Mood**: Professional • Modern • Clean

## 📝 Customization

To customize the portfolio:

1. **Personal Information**: Update content in respective page files (`About.jsx`, `Home.jsx`, etc.)
2. **Projects**: Edit the `projects` array in `src/pages/Projects.jsx`
3. **Experience**: Update the `experiences` array in `src/pages/Experience.jsx`
4. **Skills**: Modify the `skillCategories` array in `src/pages/Skills.jsx`
5. **Chatbot**: Edit the `systemContext` and responses in `src/utils/api.js`
6. **Colors**: Update Tailwind classes or inline styles throughout components

## 🔧 Configuration

### Tailwind CSS
Custom theme colors and configurations are defined in `tailwind.config.js`.

### OpenAI API
The chatbot uses OpenAI's GPT-3.5-turbo model. To use a different model, edit `src/utils/api.js`.

## 👩‍💻 About Roshini

Roshini Venkateswaran is a Software Engineer & AI/ML Enthusiast pursuing her MS in Computer Science at The George Washington University, graduating May 2026. She is based in Washington, DC and is open to opportunities in Software Engineering, Mobile App Development, AI/ML, and Automation roles.

Her experience includes internships at Prommuni (Software Developer Intern), Medica (Automation Development Intern), Advantage Capital (AI/ML Intern), and Etuper Technologies (Software Engineer Intern), where she has built intelligent, scalable, and impactful tech solutions.

## 🔗 Connect

- 💼 LinkedIn: [linkedin.com/in/roshini-venkat](https://linkedin.com/in/roshini-venkat)
- 💻 GitHub: [github.com/RoshiniVenkateswaran](https://github.com/RoshiniVenkateswaran)
- ✉️ Email: roshiniv@gwu.edu

## 📄 License

This project is open source and available under the MIT License.
