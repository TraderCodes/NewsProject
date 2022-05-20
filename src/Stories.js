import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
   // while is loading
   // useGlobalContext to pass in hits in context
   const { isLoading, hits } = useGlobalContext();
   if (isLoading) {
      return <div className="loading"></div>;
   }

   // When is not loading show stories
   return (
      <section className="stories">
         {/* map through the hits */}
         {/* grab and destructure */}

         {hits.map((hit) => {
            const { objectID, title, num_comments, url, points, author } = hit;
            console.log(hit);
            return (
               <article key={objectID} className="story">
                  <h4 className="title">{title}</h4>
                  <p className="info">
                     {points} points by <span>{author} | </span>
                     {num_comments} comments
                  </p>
                  {/* button section */}
                  {/* link to article */}
                  <div>
                     <a
                        href={url}
                        className="read-link"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Read More
                     </a>
                     {/* Remove button */}
                     <button className="remove-btn">remove</button>
                  </div>
               </article>
            );
         })}
      </section>
   );
};

export default Stories;
