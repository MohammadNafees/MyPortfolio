import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter  } from 'react-icons/fa'; // FaDev FaFacebookF
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            
            <a href='https://www.github.com/MohammadNafees' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

           {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://in.linkedin.com/in/SiddiquiNafees1/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            {/* <a href='https://wwww.facebook.com/Greg.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a> */}

            <a href='https://www.twitter.com/CodeWithNafees' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
            
        </div>
    );
};

export default HeaderSocials;
