import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Context from "../context/context";

function MyApp({ Component, pageProps }) {
	return (
		<Context>
			<Navbar />
			<Component {...pageProps} />
		</Context>
	);
}

export default MyApp;
