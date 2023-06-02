import {useReducer} from "react";

export function Checkbox() {

    const [checked, setChecked] = useReducer(checked=>!checked, false);
    return (
        <>  
            <label htmlFor="checked">
                    {checked? "checked" : "unchecked"}
            </label>
            <input id="checked" type="checkbox" value={checked} onChange={setChecked}/>
        </>
    )
}