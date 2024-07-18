import React, {useState} from 'react';

export default function TextForm(props){

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked:"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Clear the box");
        let newText = "";
        setText(newText);
        props.showAlert("Text removed", "success");
    }
    const handleCopy = ()=>{
        // console.log("I am copy);
        let Text = document.getElementById("mybox");
        Text.select();
        Text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text copied", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return(
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 style={{color: props.mode=== 'dark'?'white':'black'}}>{props.heading}</h1>
            <div className="row mb-3">
                <div className="col-12 mb-3">
                    <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#3f51b5':'white',color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <div className="col-12 mx-1">
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy To Clipboard</button>
                </div>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#000'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <p>Paragraph: {text.split("\n").length - 1}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing in the texbox above to preview it here"}</p>
        </div>
        </>
    )
}
