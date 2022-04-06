
import './App.css'
import 'react-simple-keyboard/build/css/index.css';
import TextInput from "./lib/components/textInput/textInput";
import languages from "./lib/services/languages";

const App = ()=> {

  return (
    <div className="App">
        <TextInput language={languages.Arabic} placeholder={"Tap on the virtual keyboard to start"}/>
        <TextInput language={languages.Hebrew}/>
        <TextInput language={languages.English}/>
    </div>
  )
}

export default App
