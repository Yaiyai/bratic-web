import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialShare = ({ url, type }) => {
    let facebookShare = `http://www.facebook.com/sharer.php?u=${url}`;
    let linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    let twitterShare = `http://twitter.com/share?url=${url}`;
    return (
        <div className={ `social-share ${type}` }>
            <a href={ facebookShare }>
                <FaFacebook className="facebook" />
            </a>
            <a href={ twitterShare }>
                <FaTwitter className="twitter" />
            </a>
            <a href={ linkedinShare }>
                <FaLinkedin className="linkedin" />
            </a>
        </div>
    )
}

export default SocialShare
