import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            rem unde mollitia delectus aliquid necessitatibus tempora omnis,
            exercitationem qui placeat. Optio, dolore! Illum nemo ex est.
            Consequatur suscipit veniam, ipsa aperiam magni nam neque, eius,
            consectetur eum voluptatem laboriosam nobis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <li>+91 9619497131</li>
          <li>sohelshaikh30611@gmail.com</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2024 &copy; Tomato.com -All Right Reserved .
      </p>
    </div>
  );
};

export default Footer;
