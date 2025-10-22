import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please add GEMINI_API_KEY to your .env.local file' },
        { status: 500 }
      );
    }

    let prompt = '';

    switch (type) {
      case 'headline':
        prompt = `Generate 3 professional LinkedIn headlines for someone with the following information:
Role: ${data.role}
Skills: ${data.skills}

Requirements:
- Each headline should be under 220 characters
- Make them attention-grabbing and professional
- Include key skills and value proposition
- Format as a numbered list (1., 2., 3.)
- Focus on impact and expertise`;
        break;

      case 'summary':
        prompt = `Create a compelling LinkedIn "About" section based on:
Background: ${data.background}
Tone: ${data.tone}

Requirements:
- Write in first person
- 3-4 paragraphs
- Highlight achievements and expertise
- Include a call-to-action at the end
- Make it engaging and professional
- Keep it under 2000 characters`;
        break;

      case 'experience':
        prompt = `Optimize this job description for LinkedIn:
Job Title: ${data.jobTitle}
Description: ${data.description}

Requirements:
- Create 4-6 achievement-focused bullet points
- Use action verbs
- Quantify results where possible
- Highlight impact and skills
- Make each point concise and powerful
- Format with bullet points (•)`;
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid request type' },
          { status: 400 }
        );
    }

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate content. Please check your API key.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return NextResponse.json({ content: generatedText });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
