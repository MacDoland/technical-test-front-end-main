/* eslint @typescript-eslint/no-floating-promises: "off",  no-return-await: "off" */

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React from "react";

// TODO: explore eslint createInertiaApp typescript floating promises issue

createInertiaApp({
  resolve: async name => await import(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(React.createElement(App, props));
  },
});
