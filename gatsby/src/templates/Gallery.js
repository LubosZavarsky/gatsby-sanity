import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SingleGallery = ({ data }) => {
  const gallery = data.gallery;

  return (
    <section>
      <h1 className="text-5xl text-black my-10 uppercase">{gallery.name}</h1>
      <div className="flex">
        {gallery.images.map((img) => {
          return (
            <div key={img.asset._createdAt}>
              <GatsbyImage
                image={img.asset.gatsbyImageData}
                alt={img.asset._createdAt}
              />
            </div>
          );
        })}
      </div>
      <button onClick={() => navigate(-1)} className="hover:underline">
        Go back
      </button>
    </section>
  );
};

// slug variable comes from query in gatsby-node.js
export const query = graphql`
  query ($slug: String!) {
    gallery: sanityGallery(slug: { current: { eq: $slug } }) {
      id
      name
      images {
        asset {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
          _createdAt
        }
      }
    }
  }
`;

export default SingleGallery;
