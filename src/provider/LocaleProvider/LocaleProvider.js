import React, { useState, useMemo, useEffect } from "react";
import isFunction from "lodash/fp/isFunction";
import constant from "lodash/fp/constant";

import { LOCALE_EN } from "app/enum/locale.enum";

import { LocaleContext } from "./LocaleProvider.context";

export const LocaleProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(LOCALE_EN);

  useEffect(() => {
    // TODO: Set initial locale based on device language
    // TODO: Subscribe to OS locale change
  }, []);

  // TODO: Implement locale change
  const ts = (key, defaultValue) => {
    // TODO: Handle string templates
    const getDefaultValue = isFunction(defaultValue)
      ? defaultValue
      : constant(defaultValue);

    return getDefaultValue();
  };

  const contextValue = useMemo(() => ({ locale: currentLocale, ts }), []);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};
