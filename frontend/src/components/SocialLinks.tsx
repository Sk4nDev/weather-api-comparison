'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@/lib/fontawesome'

const SocialLinks = () => {
    return (
        <div className="flex gap-7 text-xl text-white">
            <a href="https://www.tiktok.com/@skratchworld" target="_blank">
                <FontAwesomeIcon icon={['fab', 'tiktok']} className="hover:text-pink-400 transition" />
            </a>
            <a href="https://twitter.com/skratchworld" target="_blank">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com/skratchworld" target="_blank">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="hover:text-pink-500 transition" />
            </a>
            <a href="https://www.facebook.com/skratchworldapp" target="_blank">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="hover:text-blue-500 transition" />
            </a>
        </div>
    )
}

export default SocialLinks