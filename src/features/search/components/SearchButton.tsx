import { Show } from 'solid-js';
import { isNotDefined } from '@/utils/index';
import { ButtonTheme } from '../types';

type Props = ButtonTheme & {
  isBotOpened: boolean;
  toggleBot: () => void;
};

const defaultButtonColor = 'transparent';
const defaultText = 'Quick AI Search';

export const SearchButton = (props: Props) => {
  return (
    <button
      part="button"
      onClick={() => props.toggleBot()}
      class={
        `hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700` +
        (props.size === 'large' ? ' w-16 h-12' : ' w-12 h-8')
      }
      style={{
        'background-color': props.backgroundColor ?? defaultButtonColor,
      }}
    >
      <Show when={isNotDefined(props.customIconSrc)} keyed>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={
            `flex-none text-slate-300 dark:text-slate-400 ` +
            (props.size === 'large' ? ' w-9' : ' w-7')
        } aria-hidden="true">
          <path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle>
        </svg>
      </Show>
      <Show when={props.customIconSrc}>
        <img
          src={props.customIconSrc}
          class={
            `flex-none text-slate-300 dark:text-slate-400 ` +
            (props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100') +
            (props.size === 'large' ? ' w-9 h-9' : ' w-7 h-7')
          }
          alt="Search button icon"
        />
      </Show>
      <span class="flex-auto">{props.text ?? defaultText}</span>
    </button>
  );
};
