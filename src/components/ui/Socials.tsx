import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 

export default function Socials() {
    return (
        <div className="flex flex-col justify-center gap-4 text-white/40 ">
            <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-light-orange hover:text-dark-orange cursor-pointer"/>
            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-light-orange hover:text-dark-orange cursor-pointer"/>
            <FontAwesomeIcon icon={faYoutube} size="lg" className="text-light-orange hover:text-dark-orange cursor-pointer"/>
        </div>
    )
};
