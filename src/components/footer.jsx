function Footer(){
    return(
        <>
        
            <footer>
        
        <div className="footLink">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Service</a>
                <a href="#tour">Tours</a>
        </div>

        <div className="footlogoTwo">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>

<p className="footcopyright">Copyright Backroads Travel Tour Company {new Date().getFullYear()}. All Rights Reserved</p>
            </footer>

        </>
    )
}
export default Footer;