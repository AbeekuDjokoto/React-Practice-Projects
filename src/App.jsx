import "./index.css";
import "./assets/fonts/stylesheet.css";

import { Providers } from "./components/Provider";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
