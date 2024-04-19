import { Content, GoogleGenerativeAI } from "@google/generative-ai";

export type CreateGeminiPrompt = {
  input: string;
  genAI: GoogleGenerativeAI;
  history: Content[];
}