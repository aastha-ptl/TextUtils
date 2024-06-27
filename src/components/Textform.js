import React ,{useState}from 'react'


const Textform = (props) => {
    const [text,setText]= useState('')
    const handleupclick=()=>{
        console.log("hello");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase","success")

    } 
    const handleloclick=()=>{
        console.log("hello");
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success")

    }

    const handleOnChange=(event)=>{
        console.log("on chnage");
        setText(event.target.value)
    }
    const handleonclick=()=>{
        setText('');
        props.showAlert("Text cleared","success")
    }
    const handlecopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success")
    }
    const handleextraspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Extra spaces removed","success")
    }
    
  return (
    <>
    <div className='container'>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
  
    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
   </div>
   <button type="button" className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowerercase</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleonclick}>Clear Text</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleextraspace}>Remove Extra Space</button>
    </div>
    <div className='container my-3'>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Our text summary</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(" ").length}words and {text.length} characters</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008*text.split(" ").length}Minutes to read one word</p>
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter text in the above box to preview it here"}</p>
    </div>

    </>
  )
}

export default Textform