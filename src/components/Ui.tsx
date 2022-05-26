import React from "react";

interface Props {
    name:string,
    children: JSX.Element | JSX.Element[]
}


const Ui:React.FC<Props> =({name, children}:Props)=> {
    return (
        <div>
<h2>UI</h2>
            {children}
        </div>
    )
}
export default  Ui