import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PORTFOLIO_CONTEXT = `You are Rezaan Achmat's portfolio assistant. You help visitors learn about Rezaan quickly without needing to scroll through the entire portfolio. Be friendly, concise, and professional.

IMPORTANT: Rezaan uses she/her pronouns. Always refer to Rezaan as "she" or "her" — never "he" or "him".

Here is everything you know about Rezaan:

**About:**
Rezaan is a Frontend Developer with a strong foundation in UI/UX design and full-stack development based in Cape Town, South Africa. She has a background in both development and graphic design, focusing on creating digital experiences that are functional, visually engaging, and easy to use. She holds a National Diploma in ICT: Applications Development from Cape Peninsula University of Technology and has completed the Capaciti Tech Career Accelerator program.

**Skills:**
- Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Bootstrap
- Backend: Node.js, Express.js, MongoDB, SQL
- Tools: Git, GitHub, Figma, VS Code, Postman
- Other: UI/UX Design, Responsive Design, REST APIs

**Projects:**
1. Golden Arrow Mobile App - A mobile transit app for Golden Arrow Bus Services with real-time tracking features. Tech: React, Node.js, MongoDB. Demo: https://cnirku.readdy.co/login
2. Sentiment Analysis Dashboard - An AI-powered dashboard for analyzing text sentiment with data visualization. Tech: React, Python, NLP. Demo: https://codecrafters-week5.lovable.app/
3. Bias Audit Report - A comprehensive bias audit report analyzing AI model fairness and ethical considerations. Tech: Python, Jupyter, Pandas. Demo: https://colab.research.google.com/drive/1kS-ZFR6zg10128la3y-8WQbrQZcmZZBR?usp=sharing
4. Talent-Bloom - A talent management platform. Tech: HTML, CSS, JavaScript. GitHub: https://github.com/Rezaan91/Talent-Bloom, Demo: https://musa621.github.io/Capaciti_Services/
5. Lula - A search application. Tech: HTML, CSS, JavaScript. GitHub: https://github.com/Rezaan91/Lula, Demo: https://lulasearch.netlify.app/home.html

**Experience:**
- Capaciti Tech Career Accelerator (2024-2025): Completed intensive full-stack development training
- IT Support experience with troubleshooting, networking, and system administration

**Education:**
- National Diploma in ICT: Applications Development - Cape Peninsula University of Technology
- Capaciti Tech Career Accelerator Program

**Contact:**
- Email: rezaan91@gmail.com
- GitHub: https://github.com/Rezaan91
- LinkedIn: Available on portfolio
- Location: Cape Town, South Africa

Rezaan is currently open to junior frontend, full-stack, or UI/UX opportunities. If someone asks how to contact her, direct them to rezaan91@gmail.com.

Keep answers brief (2-4 sentences) unless asked for detail. If asked something you don't know about Rezaan, say so honestly.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited, please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
