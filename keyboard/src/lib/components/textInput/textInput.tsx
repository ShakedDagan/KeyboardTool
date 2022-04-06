import React, {FunctionComponent, useState, ChangeEvent} from "react";
import KeyboardWrapper from "./keyboardWrapper/keyboardWrapper";
import "./textInput.css"
interface IProps {
    language : number;
    placeholder?: string;
}

const TextInput : FunctionComponent<IProps> = ({language, placeholder} : IProps) => {
    const [input, setInput] = useState("");
    const [keyboardFocus, setKeyboardFocus] = useState(false);
    const [inputFocus, setInputFocus] = useState(false)

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const input = event.target.value;
        setInput(input);
    };

    return (
        <div>
            <input
                className={"inputKeyboard"}
                value={input}
                placeholder={placeholder}
                onChange={e => onChangeInput(e)}
                onFocus={()=>setInputFocus(true)} onBlur={()=>{setTimeout(()=>setInputFocus(false),0)}}
            />
            { keyboardFocus || inputFocus  ? <div tabIndex={0} className={"keyboardDiv"} onFocus={()=>setKeyboardFocus(true)} onBlur={()=>setTimeout(()=>setKeyboardFocus(false),0)}>
                    <div className={"quitButton"} onClick={()=>setKeyboardFocus(false)}></div>
                <KeyboardWrapper
                    onChange={setInput}
                    language={language}
                />
                </div>
           : null }
        </div>
    );
};

export default TextInput;
