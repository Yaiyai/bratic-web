import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialShare = ({ url, type }) => {
    let facebookShare = `http://www.facebook.com/sharer.php?u=${url}`;
    let linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    let twitterShare = `http://twitter.com/share?url=${url}`;
    return (
        <div className={ `social-share ${type}` }>
            <a href={ facebookShare } target="_blank">
                <FaFacebook className="facebook" />
            </a>
            <a href={ twitterShare } target="_blank">
                <FaTwitter className="twitter" />
            </a>
            <a href={ linkedinShare } target="_blank">
                <FaLinkedin className="linkedin" />
            </a>
        </div>
    )
}

export default SocialShare
