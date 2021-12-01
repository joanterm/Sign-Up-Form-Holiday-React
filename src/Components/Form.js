import { useState } from "react"
import "../Styling/Form.css"

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmedPassword: "",
        isSignedUp: false
    })
    const [error, setError] = useState("")
    const [welcomeName, setWelcomeName] = useState("")


    const handleFormChange = (e) => {
        const {name, value, type, checked} = e.target

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value    
            }
        })
    }

    console.log(formData)


    const handleSubmit = (e) => {
        e.preventDefault()
        formData.password === formData.confirmedPassword ? console.log("Same") : console.log("Different")
        if (formData.password === formData.confirmedPassword) {
            setError("")
            setWelcomeName(`Welcome to the page ${formData.firstName}`)
        } else {
            setError("Different")
            setWelcomeName("")
        }
        // formData.password === formData.confirmedPassword ? setWelcomeName(formData.firstName) : setError("Password don't match")
    }
    return ( 
        <main className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <p>{welcomeName}</p>
                <input 
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                />
                <input 
                    type="email"
                    placeholder="Email Address" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                />
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmedPassword"
                    value={formData.confirmedPassword}
                    onChange={handleFormChange}
                />
                <div className="form--marketing">
                    <input 
                    type="checkbox"
                    id="okayToEmail"
                    name="isSignedUp"
                    checked={formData.isSignedUp}
                    onChange={handleFormChange}
                    />
                    <label htmlFor="okayToEmail">I want to join a newsletter</label>
                </div>
                <button>Sign up</button>
                <p>{error}</p>
            </form>
        </main>
     );
}
 
export default Form;