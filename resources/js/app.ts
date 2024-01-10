import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React from 'react';

createInertiaApp({
  resolve: name => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(React.createElement(App, props));
  },
});
