import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.alert("Converted to Uppercase","success");
    }

    const handleLowClick=()=>{
        // console.log("Uppercase Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.alert("Converted to Lowercase","success");
    }

    const handleClearClick=()=>{
        // console.log("Uppercase Clicked"+text);
        let newText='';
        setText(newText)
        props.alert("Text Cleared","success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("Copied","success");
    }

    const handleExtraSpaces=()=>{
        // console.log("Uppercase Clicked"+text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.alert("Extra Spaces Removed","success");
    }

    const handleOnChange=(event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    //setText("Enter Your Text Here..");
    return (
        <>
    <div className="container">
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="textBox" class="form-label">Enter Text Here</label> */}
            <textarea className="form-control"  id="textBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#231d48':'white', color:props.mode==='dark'?'white':'black'}} value={text} rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 >Your Text Summary</h2>
        <b>{text.split(" ").length}</b><p> Words </p> <b>{text.length}</b> <p style={{color: props.mode==='dark'?'white':'black'}}>Characters</p>
        <p>{0.008* text.split(" ").length} Minutes To Read</p>
        <h2>Preview Of Your Text</h2>
        <p>{text.length>0?text:"Enter Text In The TextBox To Preview Here "}</p>
    </div>
    </>
  )

}
