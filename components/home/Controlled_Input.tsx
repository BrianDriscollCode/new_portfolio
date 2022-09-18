import { useState } from "react"; 

const Controlled_Input = () => {

    const [text, setText] = useState("");

    const handleChange = (event: any) => {

        setText(event);
        console.log(text)

    }


    return (

        <div>

            <input 
                type="text" 
                onChange={(e) => handleChange(e.target.value)}
                value={text}
            />

            <input />
        </div>

    )

}

export default Controlled_Input;