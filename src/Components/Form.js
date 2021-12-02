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
    const [newsletterMsg, setNewsletterMsg] = useState("")


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
        // formData.password === formData.confirmedPassword ? console.log("Same") : console.log("Different")
        if (formData.password === formData.confirmedPassword) {
            setError("")
            setWelcomeName(`Welcome, ${formData.firstName}! You have successfully signed up for the party.`)
        } else {
            setError("Your passwords don't match. Please try again")
            setWelcomeName("")
            return
        }
        formData.isSignedUp ? setNewsletterMsg("Thank you for joining my newsletter list.") : setNewsletterMsg("")
    }
        return ( 
            <main className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign up today for Joanna's Holiday Party!</h2>
                    <input 
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                    />
                    <input 
                        type="email"
                        placeholder="E-mail Address" 
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
                        <label htmlFor="okayToEmail">Sign me up for future events</label>
                    </div>
                    <button>Sign up</button>
                    <p>{welcomeName} {error}</p>
                    <p>{newsletterMsg}</p>
                </form>
            </main>
     );
}
 
export default Form;