import React from "react";
import { Provider } from "react-redux";

import { store } from "app/redux/store";

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
