import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate();

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_SECRET_WEB3_FORM_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Your message has been successfully submitted. 😉", {
                style: {
                    background: 'gray',
                    color: 'white',
                    zIndex: 9999,
                }
            })
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message, {
                style: {
                    background: 'gray',
                    color: 'white',
                    zIndex: 9999,
                }
            })
            setResult("");
        }

    }

    return (
        <div className='flex flex-col items-center gap-2 text-gray-100 my-5' id='contact'>
            <h1 className='text-3xl font-medium my-10'>Contact <span className='text-yellow-300 font-semibold'>Me</span></h1>
            <form onSubmit={onSubmit}>
                <div className='flex flex-col items-center gap-5'>
                    <div className='flex flex-col md:flex-row gap-3'>
                        <input name='Name' type='text' className='border rounded text-white font-semibold w-[300px] md:w-[250px] h-[40px] p-2 bg-gray-700 border-yellow-300' placeholder='Enter your name' required />
                        <input name='Email' type='email' className='border rounded text-white font-semibold w-[300px] md:w-[250px] h-[40px] p-2 bg-gray-700 border-yellow-300' placeholder='Enter your email' required />
                    </div>
                    <textarea name='Message' className='border rounded w-[300px] md:w-[510px] h-[130px] md:h-[200px] text-white font-semibold bg-gray-700 border-yellow-300 p-2' placeholder='e.g: Can we collaborate ?' required></textarea>
                    <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='border rounded-full h-[40px] w-[300px] md:w-[510px] bg-yellow-300 text-black font-bold cursor-pointer hover:bg-yellow-200 transition-all duration-500'>{result ? result : "Send"}</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
