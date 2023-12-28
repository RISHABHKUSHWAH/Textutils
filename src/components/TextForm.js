import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was click");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was click");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        console.log("Lowercase was click");
        let Text = "";
        setText(Text)
    }
    const handleCapClick = ()=>{
        console.log("Lowercase was click");
        let newText =  text.split(" "); 
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        
        }
        newText = newText.join(" ")
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleCapClick}>Convert to Capitalize</button>
            <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear text</button>
        </div>
        <div className='container' my-3>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{.008*text.length} MInutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
