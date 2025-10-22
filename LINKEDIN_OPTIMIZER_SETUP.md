# LinkedIn Optimizer Setup Guide

## Overview
The LinkedIn Profile Optimizer uses Google's Gemini AI to generate professional headlines, summaries, and job descriptions for your LinkedIn profile.

## Setup Instructions

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root of your project:
   ```bash
   # In the CareerForge directory
   touch .env.local
   ```

2. Add your Gemini API key to `.env.local`:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

   **Important**: Replace `your_actual_api_key_here` with your real API key from step 1.

3. The `.env.local` file is already in `.gitignore` and will not be committed to version control.

### 3. Restart Development Server

If your dev server is running, restart it to load the new environment variables:

```bash
npm run dev
```

## Features

### 1. Headline Generator
- Input your current role and key skills
- Generates 3 professional LinkedIn headlines
- Under 220 characters each
- Optimized for recruiter visibility

### 2. About Section Generator
- Input your background description
- Choose tone (Professional, Conversational, or Confident)
- Generates a compelling 3-4 paragraph summary
- Includes call-to-action

### 3. Experience Optimizer
- Input job title and description
- Generates 4-6 achievement-focused bullet points
- Uses action verbs and quantifiable results
- Highlights impact and skills

## Usage

1. Navigate to `/linkedin` in your browser
2. Fill in the relevant fields for the generator you want to use
3. Click the generate button
4. Review the AI-generated content
5. Click "Copy" to copy to clipboard
6. Paste into your LinkedIn profile

## API Details

- **Endpoint**: `/api/linkedin`
- **Model**: `gemini-2.0-flash`
- **Temperature**: 0.7 (balanced creativity)
- **Max Tokens**: 1024

## Troubleshooting

### "API key not configured" Error
- Make sure you created `.env.local` in the project root
- Verify the key is named exactly `GEMINI_API_KEY`
- Restart your development server

### "Failed to generate content" Error
- Check that your API key is valid
- Ensure you have internet connection
- Verify the API key has not exceeded quota

### Empty Results
- Make sure all required fields are filled
- Check browser console for errors
- Verify the API route is accessible at `/api/linkedin`

## Security Notes

- Never commit `.env.local` to version control
- Never share your API key publicly
- The API key is only used server-side (Next.js API routes)
- Consider setting up API key restrictions in Google Cloud Console

## Rate Limits

Google's Gemini API has rate limits. If you encounter rate limit errors:
- Wait a few minutes before trying again
- Consider implementing request throttling for production use
- Check your quota in Google AI Studio

## Cost

Gemini 2.0 Flash has a generous free tier. Check current pricing at:
https://ai.google.dev/pricing
