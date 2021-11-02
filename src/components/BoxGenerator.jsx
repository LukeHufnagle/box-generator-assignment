import React, {useState} from 'react';


const BoxGenerator = props => {
    let [color, setColor] = useState("")

    const addColor = (e) => {
        e.preventDefault();
        props.newBox(color)
    }

    return(
        <>
        <div className="container">
            <form onClick={addColor}>
                <div className="form-group">
                    <label id="label" htmlFor="">Color: </label>
                    <input onChange={(e) => setColor(e.target.value)} type="text" name="color" className="form-group"/>
                    <input id="button" className="btn btn-dark" type="submit" value="Add"/>
                </div> 
            </form>
            {
                props.boxes.map(( color, i ) => {
                    return(
                        <div id="BOX" style={{height:'100px', width:"100px", backgroundColor: color}}>{color}</div>
                    )
                })
            }
        </div>
        </>
    )
}
export default BoxGenerator;