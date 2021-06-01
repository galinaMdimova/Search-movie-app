import React, { Fragment, useState } from "react"

const Note = () => {
    const [description, setDescription] = useState("")

    return (
        <Fragment>
            <form>
                <input type="text" className="input-note" value={description} onChange={e =>
                    setDescription(e.target.valule)} />
                <button>Add</button> 
            </form>     
        </Fragment>
    )
}
export default Note