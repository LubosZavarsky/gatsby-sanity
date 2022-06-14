import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery: allSanityGallery {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const galleries = data.gallery.nodes;

  return (
    <section>
      <h1 className="text-5xl text-black my-10 uppercase">Gallery</h1>
      {galleries.map((gallery) => (
        <div key={gallery.id}>
          <ul>
            <li className="hover:underline">
              <Link to={`/gallery/${gallery.slug.current}`}>
                {gallery.name}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
