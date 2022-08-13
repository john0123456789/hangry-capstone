import './index.css';
import { AiFillGithub } from 'react-icons/ai'


const Footer = () => {
  return (
    <div id="footer">
      <div id='footer-container'>
                <a className="feet" href="https://github.com/john0123456789" target="_blank" rel="noreferrer noopener">
                    John Pham <AiFillGithub href="https://github.com/john0123456789" target="_blank" rel="noreferrer noopener"/>
                </a>
      </div>
   </div>
  );
}

export default Footer;
