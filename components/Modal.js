import React from 'react';
import CloseIcon from './icons/CloseIcon';

const Modal = ({ isOpen, onClose, src }) => {
  const iframeRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen && iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      document.body.classList.add('overflow-hidden'); // Desactiva el scroll del sitio
    } else {
      document.body.classList.remove('overflow-hidden'); // Habilita el scroll del sitio
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 p-4 lg:py-14 lg:px-20 group"
      onClick={closeModal}
    >
      <div className="absolute top-2 right-2 z-50 lg:invisible lg:group-hover:visible">
        <button
          className="text-white bg-transparent font-bold uppercase px-6 py-6 text-sm outline-none focus:outline-none rounded-full bg-white bg-opacity-10 hover:bg-opacity-25"
          type="button"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="relative w-full h-full mx-auto my-auto">
        <div className="relative rounded-lg shadow-lg w-full h-full">
          <div className="overflow-hidden rounded-[24px] lg:rounded-[36px] w-full h-full flex items-center">
            <iframe
              ref={iframeRef}
              className="w-full min-h-[250px] lg:h-full rounded-[24px] lg:rounded-[36px]"
              src={src + '?autoplay=1&role=0'}
              title="Video"
              frameBorder="0"
              allowFullScreen="allowfullscreen"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
