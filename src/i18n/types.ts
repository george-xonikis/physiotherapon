export type Locale = "gr" | "en";

export const DEFAULT_LOCALE: Locale = "gr";
export const LOCALES: Locale[] = ["gr", "en"];

export type Localized<T> = Record<Locale, T>;
