import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TextForm = (props) => {
    const [Text, setText] = useState("");
    const handleUpclick = () => {
        if(Text.length!==0){
            toast.success("Converted to Uppercase");
            setText(Text.toUpperCase())
        }
       
    }
    const handlelowclick = () => {
        if(Text.length!==0){
            toast.success("Converted to Lowercase");
            setText(Text.toLocaleLowerCase())
        }
      
    }
    const handlecopyclick = () => {
        if(Text.length!==0){
            toast.success("Copy to Clipboard Successful");
            navigator.clipboard.writeText(Text)

        }

       

    }
    const handleonchange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={Text} id="myBox" onChange={handleonchange} className="form-control" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlecopyclick}>copy to clipboard</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summery</h1>
                <p>{Text.split(" ").filter((e) => {
                    return e.length !== 0;

                }).length} words and {Text.length} characters</p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default TextForm
