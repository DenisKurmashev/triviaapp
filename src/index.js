import flowRight from "lodash/fp/flowRight";

import { withProvider } from "app/util/provider.util";

import { LocaleProvider } from "app/provider/LocaleProvider";
import { NavigationProvider } from "app/provider/NavigationProvider";
import { ReduxProvider } from "app/provider/ReduxProvider";

export const App = flowRight([
  withProvider(LocaleProvider),
  withProvider(ReduxProvider),
  withProvider(NavigationProvider),
]);
