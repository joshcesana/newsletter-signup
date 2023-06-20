import { useState } from 'react'

function NewsletterSignup() {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [email, setEmail] = useState(null);

    const pattern = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/
    const isEmailPattern = inputValue.match(pattern);

    function handleChange(e) {
        setInputValue(e.target.value.trim());
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEmailPattern) {
            setEmail(inputValue.trim());
            setSubmitted(true);
        } else {
            setErrorMessage('Valid email required');
        }
    }

    if (dismissed) return null;

    return (
        <>
            {!submitted && (
                <div className="newsletter-container">
                    <div className="text-container">
                        <h1>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        <ul>
                            <li>Product discovery and building what matters</li>
                            <li>Measuring to ensure updates are a success</li>
                            <li>And much more!</li>
                        </ul>
                        <form onSubmit={handleSubmit}>
                            <div className="label-container">
                                <label htmlFor="email">Email address</label>
                                {errorMessage && <span className="error-message">{errorMessage}</span>}
                            </div>
                            <input className={errorMessage ? "error" : ""} value={inputValue} onChange={handleChange} type="text" id="email" placeholder="email@company.com" />
                            <button type="submit">Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                    {/* <div className="image-container-2"></div> */}
                    <div className="image-container">
                        <img className="desktop" src='/illustration-sign-up-desktop.svg' alt="Decorative image" width="400" height="593" />
                        <img className="mobile" src='/illustration-sign-up-mobile.svg' alt="Decorative image" />
                    </div>
                </div>
            )}

            {submitted && (
                <div className="success-container">
                    <img src="/icon-success.svg" alt="Successful checkmark icon" width="64" height="64" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <span className="email-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                    <button onClick={() => setDismissed(true)}>Dismiss message</button>
                </div>
            )}
        </>
    )
}

export default NewsletterSignup