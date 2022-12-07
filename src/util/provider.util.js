import React from "react";

export function withProvider(Component, props = {}) {
  return (children) => <Component {...props}>{children}</Component>;
}
