import { createRoot } from "react-dom/client";
import { App } from "./components/App/app";

const rootDIV = document.getElementById("root");
const reactRoot = createRoot(rootDIV);

reactRoot.render(<App />);
