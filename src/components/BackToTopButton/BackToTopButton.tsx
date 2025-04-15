'use client'

import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  
    });
  };

  return (
   <div className='mg-auto'>
 <button
      onClick={scrollToTop}  
      className={`fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{ display: visible ? 'inline-block' : 'none' }}  
    >
      Voltar ao Topo
    </button>
   </div>
   
  );
}