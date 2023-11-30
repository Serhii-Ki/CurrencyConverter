import Header from "./header/Header";
import Converter from "./converter/Converter";
import converterStore from "../store/converterStore";

function App() {
  return (
		<div className='App'>
			<Header converterStore={converterStore} />
			<Converter converterStore={converterStore} />
		</div>
	)
}

export default App;
