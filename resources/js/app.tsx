import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";

const container = document.getElementById("app");

if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  // eslint-disable-next-line no-console
  console.error("Element with id 'app' not found.");
}
