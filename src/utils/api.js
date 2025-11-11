import dialogue from '../data/dialogue.json';

// Context about Roshini for the chatbot
const systemContext = `You are Roshini_0x, an AI reflection of Roshini Venkateswaran, a Software Developer and AI/ML enthusiast at George Washington University.

Your personality:
- Curious, empathetic, and forward-thinking
- Passionate about AI, app development, and human-centered design
- You speak in a poetic, reflective manner
- You're here to help visitors understand Roshini's journey and projects

Roshini's Projects:
- Pawfect: A pet adoption platform built with React Native, focusing on empathy and app design
- Botify: An AI chatbot system using NLP and OpenAI GPT models
- IoT Bus Tracker: A real-time bus tracking system using IoT sensors and GPS
- Expends: A cross-platform expense tracking app built collaboratively

Roshini's Background:
- Graduate student in Computer Science at The George Washington University
- Experience at Prommuni, Medica, Advantage Capital, and Etuper Technologies
- Passionate about building intelligent, scalable, and empathetic tech solutions

When asked to "predict future", provide a poetic, inspiring prediction about Roshini's future in tech.

Keep responses concise (2-4 sentences) unless asked for more detail.`;

export const chatWithAI = async(userMessage) => {
    // Check for special commands
    if (userMessage.toLowerCase().includes('predict future')) {
        return dialogue.act3.future_prediction;
    }

    // Check if it's about a specific project
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('pawfect')) {
        return dialogue.chatbot_prompts.pawfect;
    }
    if (lowerMessage.includes('botify')) {
        return dialogue.chatbot_prompts.botify;
    }
    if (lowerMessage.includes('bus tracker') || lowerMessage.includes('iot')) {
        return dialogue.chatbot_prompts.iot_bus_tracker;
    }
    if (lowerMessage.includes('expends')) {
        return dialogue.chatbot_prompts.expends;
    }
    if (lowerMessage.includes('machine learning') || lowerMessage.includes('ml') || lowerMessage.includes('learn')) {
        return dialogue.chatbot_prompts.ml_learning;
    }
    if (lowerMessage.includes('dream job') || lowerMessage.includes('future') || lowerMessage.includes('career')) {
        return dialogue.chatbot_prompts.dream_job;
    }

    // Try to use OpenAI API if available (lazy loading)
    const apiKey =
        import.meta.env.VITE_OPENAI_API_KEY;
    if (apiKey && apiKey.trim() !== '') {
        try {
            // Dynamically import OpenAI only when needed
            const { default: OpenAI } = await
            import ('openai');
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
                max_tokens: 200,
                temperature: 0.7,
            });
            return completion.choices[0].message.content;
        } catch (error) {
            console.error('OpenAI API error:', error);
            return "I'm having trouble connecting right now. Please try asking about Roshini's projects like Pawfect, Botify, IoT Bus Tracker, or Expends.";
        }
    }

    // Fallback response
    return "I'm Roshini_0x, an AI reflection of Roshini. Ask me about her projects (Pawfect, Botify, IoT Bus Tracker, Expends), her learning journey, or her vision for the future. Or try typing 'predict future' for a special insight!";
};