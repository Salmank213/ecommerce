import "../Style/contact.css"
function Contact () {
    return(
        <main className="contact-main">
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="abcd@gmail.com" />
                    <input type="text" placeholder="Your Message" />
                </form>
            </div>
        </main>
    )
}
export default Contact