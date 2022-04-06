import React, { FunctionComponent, useState} from "react";
import Keyboard from "react-simple-keyboard";
import Layouts from "../../../services/layouts";

interface IProps {
    onChange: (input: string) => void;
    language: number;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
                                                        onChange,
                                                        language
                                                    }) => {
    const [layoutName, setLayoutName] = useState("default");

    const onKeyPress = (button: string) => {
        if (button === "{shift}" || button === "{lock}") {
            setLayoutName(layoutName === "default" ? "shift" : "default");
        }
    };

    return (
        <Keyboard
            layout={Layouts[language]}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
};

export default KeyboardWrapper;
