import './index.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <div id="footer">
      <div id='footer-container'>
        <div className="each-footer">
                <a className="feet">John Pham</a>
                <a className="feet1" href="https://github.com/john0123456789">
                    <AiFillGithub href="https://github.com/john0123456789" target="_blank" rel="noreferrer noopener"/>
                </a>
                <a className="feet1" href="https://www.linkedin.com/in/john-pham-084024249/">
                    <AiFillLinkedin href="https://www.linkedin.com/in/john-pham-084024249/" target="_blank" rel="noreferrer noopener"/>
                </a>
        </div>
      </div>
   </div>
  );
}

export default Footer;
