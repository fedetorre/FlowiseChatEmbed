import { createSignal, Show, splitProps, onCleanup } from 'solid-js';
import styles from '../../../assets/index.css';
import { SearchButton } from './SearchButton';
import { SearchParams } from '../types';
import { Bot, BotProps } from '../../../components/Bot';

const defaultButtonColor = '#3B81F6';
const defaultIconColor = 'white';

export type SearchProps = BotProps & SearchParams;

export const Search = (props: SearchProps) => {
  const [searchProps] = splitProps(props, ['theme']);

  const [isBotOpened, setIsBotOpened] = createSignal(false);
  const [isBotStarted, setIsBotStarted] = createSignal(false);

  const openBot = () => {
    if (!isBotStarted()) setIsBotStarted(true);
    setIsBotOpened(true);
  };

  const closeBot = () => {
    setIsBotOpened(false);
  };

  const toggleBot = () => {
    isBotOpened() ? closeBot() : openBot();
  };

  onCleanup(() => {
    setIsBotStarted(false);
  });

  return (
    <>
      <style>{styles}</style>
      <SearchButton {...searchProps.theme?.searchButton} toggleBot={toggleBot} isBotOpened={isBotOpened()} />
      {isBotOpened() && <div class="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />}
      <div
        class={`fixed inset-0 z-10 w-screen overflow-y-auto` + (isBotOpened() ? ' opacity-1' : ' opacity-0 pointer-events-none')}
        onClick={closeBot}
      >
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            onClick={(event) => event.stopPropagation()}
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            style={{
              height: searchProps.theme?.searchWindow?.height ? `${searchProps.theme?.searchWindow?.height.toString()}px` : '400px',
              width: searchProps.theme?.searchWindow?.width ? `${searchProps.theme?.searchWindow?.width.toString()}px` : '500px',
              'background-color': searchProps.theme?.searchWindow?.backgroundColor || '#ffffff',
            }}
          >
            <Show when={isBotStarted()}>
              <Bot
                badgeBackgroundColor={searchProps.theme?.searchWindow?.backgroundColor}
                bubbleBackgroundColor={searchProps.theme?.searchButton?.backgroundColor ?? defaultButtonColor}
                bubbleTextColor={searchProps.theme?.searchButton?.iconColor ?? defaultIconColor}
                showTitle={searchProps.theme?.searchWindow?.showTitle}
                title={searchProps.theme?.searchWindow?.title || 'Search'}
                titleAvatarSrc={searchProps.theme?.searchWindow?.titleAvatarSrc}
                welcomeMessage={searchProps.theme?.searchWindow?.welcomeMessage}
                poweredByTextColor={searchProps.theme?.searchWindow?.poweredByTextColor}
                textInput={searchProps.theme?.searchWindow?.textInput}
                botMessage={searchProps.theme?.searchWindow?.botMessage}
                userMessage={searchProps.theme?.searchWindow?.userMessage}
                fontSize={searchProps.theme?.searchWindow?.fontSize}
                chatflowid={props.chatflowid}
                chatflowConfig={props.chatflowConfig}
                apiHost={props.apiHost}
                observersConfig={props.observersConfig}
              />
            </Show>
          </div>
        </div>
      </div>
    </>
  );
};
