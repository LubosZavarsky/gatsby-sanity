import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PortableText from 'react-portable-text';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bio: allSanityBio {
        nodes {
          _rawBio
        }
      }
    }
  `);

  const bio = data.bio.nodes[0]._rawBio;
  //console.log(data.bio.nodes[0]._rawBio);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-slate-500">
        <StaticImage
          src="../images/logo-img.png"
          alt="logo"
          placeholder="blurred"
          className="h-full w-60 animate-[spin_5s_linear_infinite]"
        />
        <h1 className="text-5xl text-black my-10 uppercase">Hurhaj</h1>
      </section>
      <section
        id="about"
        className="min-h-screen text-center text-white bg-red-300"
      >
        <h1 className="text-5xl text-black my-10 uppercase ">About</h1>
        <div className="max-w-2xl border-black bg-slate-500 p-5 rounded-md mx-auto text-left">
          <PortableText content={bio} />
        </div>
      </section>
    </>
  );
};

export default IndexPage;
