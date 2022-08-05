import Logo from "../img/logo_white.svg";
import Facebook from "../img/social_media/Facebook.svg";
import Instagram from "../img/social_media/Instagram.svg";
import WhatsApp from "../img/social_media/WhatsApp.svg";
import Twitter from "../img/social_media/Twitter.svg"

const Footer = () => {
    return (
        <footer id="footer" className="bg-stone-800">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">

          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              &copy; {new Date().getFullYear()} Svetz Ádám
            </div>

            <div>
              <img src={Logo} classN="h-8" height={300} width={300} alt="" />
            </div>

            <div className="flex justify-center space-x-4">

              <a href="https://facebook.com">
                <img src={Facebook} alt="" className="h-8" />
              </a>

              <a href="https://instagram.com">
                <img src={Instagram} alt="" className="h-8" />
              </a>

              <a href="https://whatsapp.com">
                <img src={WhatsApp} alt="" className="h-8" />
              </a>

              <a href="mailto:faszfej@gmail.com">
                <img src={Twitter} alt="" className="h-8" />
              </a>

            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="/epulet" className="hover:text-orange-400">Épület fotók</a>
              <a href="/portre" className="hover:text-orange-400">Portré fotók</a>
              <a href="/enterior" className="hover:text-orange-400">Enteriőr fotók</a>
              <a href="/reklam" className="hover:text-orange-400">Reklám fotók</a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
                <a href="/rolam" className="hover:text-orange-400">Rólam</a>
                <a href="/kapcsolat" className="hover:text-orange-400">Kapcsolat</a>
                <a href="https://github.com/bzsol" className="hover:text-orange-400">GitHub repository</a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
          <div className="flex space-x-3"></div>
          <div className="hidden text-white md:block relative pt-36" >
          &copy; {new Date().getFullYear()} Svetz Ádám
          </div>
          </div>
          </div>
      </footer>
  
    );
}
 
export default Footer;