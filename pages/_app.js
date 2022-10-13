import "../styles/globals.css";
import Sidebar from "components/Sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="globalContainer">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
