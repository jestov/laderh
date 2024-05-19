// components/ShareButtons.js
import React from 'react';
import LinkedinIcon from '../icons/LinkedinIcon';
import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';
import PasteIcon from '../icons/PasteIcon';

const ShareButtons = () => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Enlace copiado al portapapeles');
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <p className='font-belgro uppercase text-[10px] md:text-[11px] !leading-4'>Compartir en:</p>
      <button onClick={shareOnFacebook} className="hover:opacity-85 transition duration-300 text-white p-2">
        <FacebookIcon color="white"/>
      </button>
      <button onClick={shareOnLinkedIn} className="hover:opacity-85 transition duration-300 text-white p-2">
        <LinkedinIcon color="white"/>
      </button>
      <button onClick={shareOnTwitter} className="hover:opacity-85 transition duration-300 text-white p-2">
        <TwitterIcon color="white"/>
      </button>
      <button onClick={copyLink} className="p-2 hover:opacity-85 transition duration-300">
        <PasteIcon color="white"/>
      </button>
    </div>
  );
};

export default ShareButtons;
