import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
   const { isLoading, page, nbPages, handlePage } = useGlobalContext();
   return (
      <div className="btn-container">
         {/* set button to diable when loading */}
         {/* in css cursor = not-allowed */}
         <button disabled={isLoading} onClick={() => handlePage('dec')}>
            Prev
         </button>
         {/* total number of pages = nbPages */}
         <p>
            {page + 1} of {nbPages}
         </p>
         {/* in css cursor = not-allowed */}
         <button disabled={isLoading} onClick={() => handlePage('inc')}>
            next
         </button>
      </div>
   );
};

export default Buttons;
