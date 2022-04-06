import {KeyboardLayoutObject} from "react-simple-keyboard/build/interfaces";
import arabic from "simple-keyboard-layouts/build/layouts/arabic";
import hebrew from "simple-keyboard-layouts/build/layouts/hebrew";
import english from "simple-keyboard-layouts/build/layouts/english";


const Layouts : {[p: string]: string[]}[] = [
    arabic.layout,
    hebrew.layout,
    english.layout,
]

export default Layouts;
