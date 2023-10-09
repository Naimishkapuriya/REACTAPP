import React, { useState } from "react"

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        seText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        console.log("uppercase was clicked");
        let newText = text.toLocaleLowerCase();
        seText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked");
        let newText = ("");
        seText(newText);
        props.showAlert("Text Cleared!", "success")
    }
    const handleShowClick = () => {
        // console.log("uppercase was clicked");
        let newText = ("Enter text here...");
        seText(newText);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        seText(newText.join(" "))
        props.showAlert("Extra spaces Removed!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        seText(event.target.value)
    }

    const [text, seText] = useState('');

    return (
        <>
            <div className="textform">
                <div className="container">
                    <h2 className="text-center mb-4">{props.heading}</h2>
                    <div className="row justify-content-center d-flex">
                        <div className="col-12">
                            <div className="mb-3">
                                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5" cols="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-1">
                            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                            <button className="btn btn-primary mx-1 my-1" onClick={handleShowClick} >show text</button>
                            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                            <button className="btn btn-primary mx-1 my-1 d-xl-inline d-lg-inline d-md-inline d-sm-block d-none" onClick={handleCopy} >Copy Text</button>
                            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 my-1">
                            <h2 className="my-1">your text summary</h2>
                            <p className="my-1">{text.split(" ").length} words and {text.length} characters</p>
                            <p className="my-1">{0.008 * text.split(" ").length} Miutes read</p>
                            <h2 className="my-1">Preview</h2>
                            <p className="my-1 box_p">{text.length> 0 ?text:"Enter something in the textbox above to preview it here..."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
