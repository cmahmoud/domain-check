import { Provider } from "react-redux";
import store from "@store/index";
import "@styles/index.css"

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
