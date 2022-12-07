import { createContext } from "react";
import constant from "lodash/fp/constant";

import { LOCALE_EN } from "app/enum/locale.enum";

export const LocaleContext = createContext({
  locale: LOCALE_EN,
  ts: constant(null),
});
