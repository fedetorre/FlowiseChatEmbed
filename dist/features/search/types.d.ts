export type SearchParams = {
    theme?: SearchTheme;
};
export type SearchTheme = {
    searchWindow?: SearchWindowTheme;
    searchButton?: ButtonTheme;
};
export type TextInputTheme = {
    backgroundColor?: string;
    textColor?: string;
    placeholder?: string;
    sendButtonColor?: string;
};
export type UserMessageTheme = {
    backgroundColor?: string;
    textColor?: string;
    showAvatar?: boolean;
    avatarSrc?: string;
};
export type BotMessageTheme = {
    backgroundColor?: string;
    textColor?: string;
    showAvatar?: boolean;
    avatarSrc?: string;
};
export type SearchWindowTheme = {
    showTitle?: boolean;
    title?: string;
    titleAvatarSrc?: string;
    welcomeMessage?: string;
    backgroundColor?: string;
    height?: number;
    width?: number;
    fontSize?: number;
    userMessage?: UserMessageTheme;
    botMessage?: BotMessageTheme;
    textInput?: TextInputTheme;
    poweredByTextColor?: string;
};
export type ButtonTheme = {
    text?: string;
    size?: 'medium' | 'large';
    backgroundColor?: string;
    iconColor?: string;
    customIconSrc?: string;
};
//# sourceMappingURL=types.d.ts.map