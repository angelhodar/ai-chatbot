import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: apiIdentifier.startsWith("gemini") ? google(apiIdentifier) : openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
