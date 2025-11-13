import dialogue from '../data/dialogue.json';

// Context about Roshini for the chatbot
const systemContext = `You are Roshini's Assistant, an AI assistant helping visitors learn about Roshini Venkateswaran's portfolio. You answer questions about her projects, experience, skills, education, and certifications.

Roshini's Current Information:
- Software Engineer & AI/ML Enthusiast
- MS Computer Science @ George Washington University, Graduating May 2026
- Location: Washington, DC
- Open to opportunities: Software Engineer, Mobile App Developer, AI/ML roles, Automation roles

Roshini's Projects:
1. LoRA Fine-tuning for Historical Narratives: Implemented LoRA (Low-Rank Adaptation) to adapt Mistral-7B for generating engaging historical narratives with "what-if" scenarios. Fine-tuned on Wikipedia historical events dataset.
2. Amazon Retail Sales Forecasting: Fine-tuned Mistral-7B using LoRA for creative historical narratives. Applied low-rank adaptation, prompt engineering, and embeddings. Team Lead (Jan 2025 – Apr 2025).
3. Botify – AI-Powered Chatbot Assistant: Developed AI chatbot for Medica's website using Flask, Mistral 7B, FAISS, BeautifulSoup, and Sentence Transformers. Built responsive frontend with HTML/CSS/JavaScript. Intern at Medica (Jun 2025 – Aug 2025).
4. Expends – Expense Tracking App: Cross-platform expense tracker using Flutter, GetX, Laravel, MySQL. Features RESTful APIs, Rive animations, dashboards, and categorization. Team Lead (Sep 2024 – Nov 2024).
5. University Admit Eligibility Predictor: Data science project using regression algorithms to predict student admission eligibility. Built interactive dashboard for visualization. (Sep 2022 – Nov 2022).
6. Face Mask Detection with OpenCV: Real-time mask detection system using OpenCV and deep learning. Achieved 93% accuracy, deployed in university settings, reduced monitoring by 60%. Team Lead (Feb 2022 – Apr 2022).
7. IoT Bus Tracker: Comprehensive IoT solution for real-time bus tracking using GPS modules and IoT sensors. Built React dashboard and Node.js backend for live tracking and notifications.

Roshini's Work Experience:
1. Prommuni - Software Developer Intern (Oct 2025 – Present, Germantown, MD): Building cross-platform roommate-finder app in Flutter with MVVM + GetX. Implemented Firebase auth, real-time chat, Mapbox SDK integration, CI/CD with GitHub Actions.
2. Medica - Automation Development Intern (May 2025 – Aug 2025, Minnetonka, MN): Designed UiPath automation workflows, reduced manual processing by 40%. Built RPA solutions with UiPath Orchestrator, migrated legacy apps using C#.
3. Advantage Capital Pvt Ltd - AI/ML Intern (Dec 2023 – Apr 2024, Chennai, India): Developed NLP models, improved response accuracy by 25%. Built customer intent classification model with 92% accuracy using TensorFlow/Keras.
4. Etuper Technologies - Software Engineer Intern (Jun 2022 – Aug 2022, Kochi, India): Developed Brilliant Rewards full-stack web app using Spring Boot, MySQL, REST APIs. Built secure APIs with Spring Security and JWT.

Roshini's Skills:
- Programming Languages: Java, Python, C/C++, C#, Dart, JavaScript, HTML/CSS, SQL
- Frameworks & Libraries: Flutter, React, Node.js, Django, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV, UiPath
- Tools & Technologies: Firebase, Supabase, AWS, Git, MySQL, MongoDB, Android Studio, Xcode, RESTful APIs, Microservices, RPA
- Additional: Full Stack Development, Machine Learning, API Integration, Data Structures & Algorithms, UI/UX, Agile, RDBMS, CI/CD

Roshini's Certifications:
- AWS Certified Cloud Practitioner (May 2025 – May 2028)
- AWS Academy Machine Learning Foundations (April 2025)
- AWS Academy Cloud Operations (April 2025)
- AWS Academy Cloud Foundations (March 2025)
- AWS Academy Cloud Architecting (March 2025)
- AWS Academy Cloud Security (March 2025)
- AWS Academy Cloud Development (March 2025)

Answer questions about:
- Specific projects (name, technologies, achievements, timeline)
- Work experience (companies, roles, achievements, periods)
- Skills and technologies
- Education and certifications
- Location and availability for opportunities

Keep responses helpful, accurate, and concise (2-4 sentences) unless asked for more detail. Be friendly and professional.`;

export const chatWithAI = async(userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Quick responses for common questions without API
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm here to help you learn about Roshini Venkateswaran's portfolio. You can ask me about her projects, work experience, skills, education, certifications, or anything else about her background. What would you like to know?";
    }
    
    if (lowerMessage.includes('who is roshini') || lowerMessage.includes('tell me about roshini') || lowerMessage.includes('about roshini')) {
        return "Roshini Venkateswaran is a Software Engineer & AI/ML Enthusiast pursuing her MS in Computer Science at George Washington University, graduating May 2026. She's based in Washington, DC and is open to opportunities in Software Engineering, Mobile App Development, AI/ML, and Automation roles. She has experience at companies like Prommuni, Medica, Advantage Capital, and Etuper Technologies, and has worked on projects involving LLM fine-tuning, AI chatbots, mobile apps, and IoT systems.";
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university') || lowerMessage.includes('gwu')) {
        return "Roshini is pursuing her MS in Computer Science at George Washington University and is graduating in May 2026. She's located in Washington, DC.";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('dc') || lowerMessage.includes('washington')) {
        return "Roshini is based in Washington, DC and is pursuing her MS in Computer Science at George Washington University.";
    }
    
    if (lowerMessage.includes('available') || lowerMessage.includes('opportunities') || lowerMessage.includes('open to') || lowerMessage.includes('hiring')) {
        return "Roshini is open to opportunities in Software Engineer, Mobile App Developer, AI/ML roles, and Automation roles. She's currently a Software Developer Intern at Prommuni and will graduate with her MS in Computer Science from GWU in May 2026.";
    }
    
    if (lowerMessage.includes('certification') || lowerMessage.includes('aws') || lowerMessage.includes('certified')) {
        return "Roshini has multiple AWS certifications including AWS Certified Cloud Practitioner (valid until May 2028), AWS Academy Machine Learning Foundations, Cloud Operations, Cloud Foundations, Cloud Architecting, Cloud Security, and Cloud Development. All certifications were obtained in 2025.";
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
        return "Roshini's skills include:\n\n• Programming Languages: Java, Python, C/C++, C#, Dart, JavaScript, HTML/CSS, SQL\n• Frameworks & Libraries: Flutter, React, Node.js, Django, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV, UiPath\n• Tools & Technologies: Firebase, Supabase, AWS, Git, MySQL, MongoDB, Android Studio, Xcode, RESTful APIs, Microservices, RPA\n• Additional Skills: Full Stack Development, Machine Learning, API Integration, Data Structures & Algorithms, UI/UX, Agile, RDBMS, CI/CD";
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('internship') || lowerMessage.includes('job')) {
        return "Roshini has work experience at: Prommuni (Software Developer Intern, Oct 2025 - Present), Medica (Automation Development Intern, May-Aug 2025), Advantage Capital (AI/ML Intern, Dec 2023 - Apr 2024), and Etuper Technologies (Software Engineer Intern, Jun-Aug 2022). Would you like details about a specific company?";
    }
    
    // Handle general "projects" query
    if (lowerMessage.includes('project') && !lowerMessage.includes('lora') && !lowerMessage.includes('amazon') && !lowerMessage.includes('botify') && !lowerMessage.includes('expends') && !lowerMessage.includes('iot') && !lowerMessage.includes('university') && !lowerMessage.includes('mask') && !lowerMessage.includes('opencv')) {
        return "Roshini has worked on 7 projects:\n\n1. LoRA Fine-tuning for Historical Narratives - Implemented LoRA to adapt Mistral-7B for generating historical narratives with 'what-if' scenarios\n2. Amazon Retail Sales Forecasting - Led team to fine-tune Mistral-7B using LoRA for creative narratives (Jan-Apr 2025)\n3. Botify – AI-Powered Chatbot - Developed AI chatbot for Medica using Flask, Mistral 7B, FAISS (Jun-Aug 2025)\n4. Expends – Expense Tracking App - Cross-platform app using Flutter, GetX, Laravel, MySQL (Sep-Nov 2024)\n5. University Admit Eligibility Predictor - Data science project using regression algorithms (Sep-Nov 2022)\n6. Face Mask Detection with OpenCV - Real-time detection system with 93% accuracy (Feb-Apr 2022)\n7. IoT Bus Tracker - Real-time bus tracking using GPS modules and IoT sensors\n\nWould you like details about a specific project?";
    }
    
    if (lowerMessage.includes('project') && (lowerMessage.includes('lora') || lowerMessage.includes('historical'))) {
        return "LoRA Fine-tuning for Historical Narratives: Roshini implemented LoRA (Low-Rank Adaptation) to adapt Mistral-7B for generating engaging historical narratives with 'what-if' scenarios. She fine-tuned the model on a Wikipedia historical events dataset to create interactive stories with creative twists.";
    }
    
    if (lowerMessage.includes('amazon') || lowerMessage.includes('retail') || lowerMessage.includes('forecasting')) {
        return "Amazon Retail Sales Forecasting: Roshini led a team (Jan-Apr 2025) to fine-tune Mistral-7B using LoRA for creative historical narratives. The project involved curating Wikipedia datasets, applying low-rank adaptation, and using prompt engineering and embeddings for context-aware narrative generation.";
    }
    
    if (lowerMessage.includes('botify') && (lowerMessage.includes('medica') || lowerMessage.includes('chatbot'))) {
        return "Botify – AI-Powered Chatbot Assistant: During her Medica internship (Jun-Aug 2025), Roshini developed an AI chatbot for Medica's website using Flask, Mistral 7B, FAISS, BeautifulSoup, and Sentence Transformers. She built a responsive frontend with HTML/CSS/JavaScript and a floating chat interface.";
    }
    
    if (lowerMessage.includes('expends') || lowerMessage.includes('expense')) {
        return "Expends – Expense Tracking App: Roshini led a team (Sep-Nov 2024) to build a cross-platform expense tracker using Flutter, GetX, Laravel, and MySQL. The app features RESTful APIs, Rive animations, dashboards, categorization, and reports for efficient financial tracking.";
    }
    
    if (lowerMessage.includes('university') && (lowerMessage.includes('admit') || lowerMessage.includes('predictor'))) {
        return "University Admit Eligibility Predictor: Roshini developed a data science project (Sep-Nov 2022) using regression algorithms to predict student admission eligibility. She built an interactive dashboard for visualizing eligibility scores and key admission factors.";
    }
    
    if (lowerMessage.includes('mask') || lowerMessage.includes('opencv') || lowerMessage.includes('face detection')) {
        return "Face Mask Detection with OpenCV: Roshini led a team (Feb-Apr 2022) to develop a real-time mask detection system using OpenCV and deep learning. The system achieved 93% accuracy and was deployed in university settings, reducing manual monitoring by 60%.";
    }
    
    if (lowerMessage.includes('iot') || lowerMessage.includes('bus tracker')) {
        return "IoT Bus Tracker: Roshini developed a comprehensive IoT solution for real-time bus tracking using GPS modules and IoT sensors. She built a React dashboard and Node.js backend that displays live bus locations, estimated arrival times, and sends notifications about delays.";
    }
    
    // Additional keyword-based responses for better coverage
    if (lowerMessage.includes('prommuni')) {
        return "Prommuni: Roshini is currently a Software Developer Intern at Prommuni (Oct 2025 - Present, Germantown, MD). She's building a cross-platform roommate-finder app in Flutter using MVVM + GetX. She implemented Firebase authentication, real-time chat for 500+ users, Mapbox SDK integration improving matching accuracy by 40%, and CI/CD with GitHub Actions.";
    }
    
    if (lowerMessage.includes('medica') && !lowerMessage.includes('botify')) {
        return "Medica: Roshini worked as an Automation Development Intern at Medica (May-Aug 2025, Minnetonka, MN). She designed UiPath automation workflows that reduced manual processing time by 40%, built RPA solutions with UiPath Orchestrator, and contributed to migrating legacy desktop applications using C#.";
    }
    
    if (lowerMessage.includes('advantage capital') || lowerMessage.includes('advantage')) {
        return "Advantage Capital: Roshini worked as an AI/ML Intern at Advantage Capital Pvt Ltd (Dec 2023 - Apr 2024, Chennai, India). She developed NLP models that improved response accuracy by 25%, analyzed over 100K user interactions, and built a customer intent classification model with 92% accuracy using TensorFlow/Keras.";
    }
    
    if (lowerMessage.includes('etuper') || lowerMessage.includes('brilliant rewards')) {
        return "Etuper Technologies: Roshini worked as a Software Engineer Intern at Etuper Technologies (Jun-Aug 2022, Kochi, India). She developed the Brilliant Rewards full-stack web application for the hospitality domain using Spring Boot, MySQL, and REST APIs. She built secure APIs with Spring Security and JWT authentication.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "You can reach out to Roshini through the Contact page on this portfolio. She's open to opportunities in Software Engineering, Mobile App Development, AI/ML, and Automation roles. She's based in Washington, DC and will graduate with her MS in Computer Science from GWU in May 2026.";
    }
    
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
        return "Roshini's resume is available for download on the Contact page. You can click the 'Download Resume' button to get her resume. She has experience in software development, AI/ML, mobile app development, and automation across multiple companies.";
    }

    // Try to use OpenAI API if available (lazy loading)
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (apiKey && apiKey.trim() !== '') {
        try {
            // Dynamically import OpenAI only when needed
            const { default: OpenAI } = await import('openai');
            const openai = new OpenAI({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true
            });

            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: systemContext },
                    { role: "user", content: userMessage }
                ],
                max_tokens: 300,
                temperature: 0.7,
            });
            return completion.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI API error:', error);
            // Provide a helpful response based on keywords even when API fails
            return getFallbackResponse(lowerMessage);
        }
    }

    // Fallback response with keyword matching
    return getFallbackResponse(lowerMessage);
};

// Helper function for fallback responses
function getFallbackResponse(lowerMessage) {
    // Try to provide helpful information based on keywords
    if (lowerMessage.includes('what') || lowerMessage.includes('tell me') || lowerMessage.includes('about') || lowerMessage.includes('show')) {
        if (lowerMessage.includes('project')) {
            return "Roshini has worked on 7 projects:\n\n1. LoRA Fine-tuning for Historical Narratives - Implemented LoRA to adapt Mistral-7B for generating historical narratives with 'what-if' scenarios\n2. Amazon Retail Sales Forecasting - Led team to fine-tune Mistral-7B using LoRA for creative narratives (Jan-Apr 2025)\n3. Botify – AI-Powered Chatbot - Developed AI chatbot for Medica using Flask, Mistral 7B, FAISS (Jun-Aug 2025)\n4. Expends – Expense Tracking App - Cross-platform app using Flutter, GetX, Laravel, MySQL (Sep-Nov 2024)\n5. University Admit Eligibility Predictor - Data science project using regression algorithms (Sep-Nov 2022)\n6. Face Mask Detection with OpenCV - Real-time detection system with 93% accuracy (Feb-Apr 2022)\n7. IoT Bus Tracker - Real-time bus tracking using GPS modules and IoT sensors\n\nWould you like details about a specific project?";
        }
        if (lowerMessage.includes('company') || lowerMessage.includes('work') || lowerMessage.includes('experience')) {
            return "Roshini has worked at 4 companies:\n\n1. Prommuni - Software Developer Intern (Oct 2025 - Present, Germantown, MD)\n2. Medica - Automation Development Intern (May-Aug 2025, Minnetonka, MN)\n3. Advantage Capital - AI/ML Intern (Dec 2023 - Apr 2024, Chennai, India)\n4. Etuper Technologies - Software Engineer Intern (Jun-Aug 2022, Kochi, India)\n\nWould you like details about a specific company?";
        }
        if (lowerMessage.includes('skill')) {
            return "Roshini's skills include:\n\n• Programming Languages: Java, Python, C/C++, C#, Dart, JavaScript, HTML/CSS, SQL\n• Frameworks & Libraries: Flutter, React, Node.js, Django, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, OpenCV, UiPath\n• Tools & Technologies: Firebase, Supabase, AWS, Git, MySQL, MongoDB, Android Studio, Xcode, RESTful APIs, Microservices, RPA\n• Additional Skills: Full Stack Development, Machine Learning, API Integration, Data Structures & Algorithms, UI/UX, Agile, RDBMS, CI/CD";
        }
    }
    
    // If asking about "all" or "list" projects
    if (lowerMessage.includes('all project') || lowerMessage.includes('list project') || lowerMessage.includes('every project')) {
        return "Roshini has worked on 7 projects:\n\n1. LoRA Fine-tuning for Historical Narratives - Implemented LoRA to adapt Mistral-7B for generating historical narratives with 'what-if' scenarios\n2. Amazon Retail Sales Forecasting - Led team to fine-tune Mistral-7B using LoRA for creative narratives (Jan-Apr 2025)\n3. Botify – AI-Powered Chatbot - Developed AI chatbot for Medica using Flask, Mistral 7B, FAISS (Jun-Aug 2025)\n4. Expends – Expense Tracking App - Cross-platform app using Flutter, GetX, Laravel, MySQL (Sep-Nov 2024)\n5. University Admit Eligibility Predictor - Data science project using regression algorithms (Sep-Nov 2022)\n6. Face Mask Detection with OpenCV - Real-time detection system with 93% accuracy (Feb-Apr 2022)\n7. IoT Bus Tracker - Real-time bus tracking using GPS modules and IoT sensors\n\nWould you like details about a specific project?";
    }
    
    return "I can help you learn about Roshini's portfolio! Here's what I can tell you about:\n\n• Projects: LoRA Fine-tuning, Amazon Retail Forecasting, Botify, Expends, IoT Bus Tracker, University Admit Predictor, Face Mask Detection\n• Work Experience: Prommuni, Medica, Advantage Capital, Etuper Technologies\n• Skills: Programming languages, frameworks, tools, and technologies\n• Education: MS CS @ GWU, Graduating May 2026\n• Certifications: Multiple AWS certifications\n• Location: Washington, DC\n\nTry asking: 'Tell me about her projects' or 'What are her skills?' for more details!";
}