import { customElement } from 'solid-element';
import { defaultBotProps, defaultSearchBotProps } from './constants';
import { Bubble } from './features/bubble';
import { Full } from './features/full';
import { Search } from './features/search';

export const registerWebComponents = () => {
  if (typeof window === 'undefined') return;
  // @ts-expect-error element incorect type
  customElement('flowise-fullchatbot', defaultBotProps, Full);
  customElement('flowise-chatbot', defaultBotProps, Bubble);
  customElement('flowise-searchbot', defaultSearchBotProps, Search);
};
