import { ColorProvider } from "../hooks/Colorcontext";
import "../styles/_index.scss";

export default function App({ Component, pageProps }) {
  return (
    <ColorProvider>
      <Component {...pageProps} />
      </ColorProvider>
  );
}
