import { useContext } from "react";

import { LocaleContext } from "./LocaleProvider.context";

export function useTranslation(prefix) {
  const { locale, ts } = useContext(LocaleContext);

  return {
    locale,
    ts: (key, defaultValue) => ts(`${prefix}.${key}`, defaultValue),
  };
}
