import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import style from './socialmedia.module.css';

export const SocialMedia = () => {
  return (
    <ul className={`${style.example_2}`}>
      <li className={`${style.icon_content}`}>
        <a
          href="https://www.linkedin.com/in/epifanio-fernando-22a077316"
          aria-label="LinkedIn"
          data-social="linkedin"
        >
          <div className={`${style.filled}`} />
          <FaLinkedin className={`${style.bi} ${style.bi_linkedin} w-3 h-3`} />
        </a>
        <div className={`${style.tooltip}`}>LinkedIn</div>
      </li>
      <li className={`${style.icon_content}`}>
        <a
          href="https://github.com/epifaniovalente"
          aria-label="GitHub"
          data-social="github"
        >
          <div className={`${style.filled}`} />

          <FaGithub className={`${style.bi} ${style.bi_github} w-3 h-3`} />
        </a>
        <div className={`${style.tooltip}`}>GitHub</div>
      </li>
      <li className={`${style.icon_content}`}>
        <a
          href="https://www.instagram.com/epicoder_97/"
          aria-label="Instagram"
          data-social="instagram"
        >
          <div className={`${style.filled}`} />

          <FaInstagram
            className={`${style.bi} ${style.bi_instagram} w-3 h-3`}
          />
        </a>
        <div className={`${style.tooltip}`}>Instagram</div>
      </li>
      <li className={`${style.icon_content}`}>
        <a
          href="https://youtube.com/pingadas97"
          aria-label="Youtube"
          data-social="youtube"
        >
          <div className={`${style.filled}`} />

          <FaFacebook className={`${style.bi_youtube} ${style.bi} w-3 h-3`} />
        </a>
        <div className={`${style.tooltip}`}>Facebook</div>
      </li>
    </ul>
  );
};
