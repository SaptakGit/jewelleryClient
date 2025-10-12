import { PAYMENT_IMG } from '../../utlis/constant'

const Footer = () => {
    return (
      <footer className="bg-base-200 text-base-content px-5 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <h2 className="font-bold text-xl">Online Store</h2>
            <p className="mt-2 text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
  
          {/* Collections */}
          <div>
            <h4 className="footer-title">Collections</h4>
            <ul>
                <li><a className="link link-hover">Women’s Wear</a></li>
                <li><a className="link link-hover">Men’s Wear</a></li>
                <li><a className="link link-hover">Trending collections</a></li>
                <li><a className="link link-hover">Best sellers</a></li>
            </ul>
          </div>
  
          {/* Pages */}
          <div>
          <h4 className="footer-title">Pages</h4>
            <ul>
                <li><a className="link link-hover">About us</a></li>
                <li><a className="link link-hover">Contact</a></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h4 className="footer-title">Legal</h4>
            <ul>
                <li><a className="link link-hover">Terms of use</a></li>
                <li><a className="link link-hover">Privacy policy</a></li>
                <li><a className="link link-hover">Cookie policy</a></li>
            </ul>
          </div>
  
          {/* Payment Icons */}
          <div>
            <h4 className="footer-title">Payment Methods</h4>
            <div className="flex gap-4 mt-2">
                <img src={PAYMENT_IMG} alt="Pay Methods" className="h-10" />
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-base-content/70">
          Powered by <span className="font-semibold">Online Store</span> — built with ❤️ & Tailwind CSS
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
