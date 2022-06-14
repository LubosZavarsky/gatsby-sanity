import React from 'react';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allSanityEvent(sort: { order: ASC, fields: date }) {
        nodes {
          id
          description
          name
          date(formatString: "DD MMMM, YYYY / HH:MM")
          d: date
          image {
            asset {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  // QUERY RESULTS
  const eventz = data.events.nodes;

  // FILTERING UPCOMING AND PAST EVENTS
  const now = new Date().toISOString();

  const upcoming = eventz.filter((event) => event.d >= now);

  const past = eventz.filter((event) => event.d < now);

  // LOAD MORE (upcoming)

  // State for the list
  const [list, setList] = useState([...upcoming.slice(0, 2)]);

  // State of whether there is more to load
  const [loadMore, setLoadMore] = useState(false);

  // State to trigger load more
  const [hasMore, setHasMore] = useState(upcoming.length > 2);

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  // Handle loading more events
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < upcoming.length;
      const nextResults = isMore
        ? upcoming.slice(currentLength, currentLength + 2)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < upcoming.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <>
      <section>
        <h1 className="text-5xl text-black my-10 uppercase">Events</h1>
        <p>
          There are <span className="font-bold">{upcoming.length}</span> events
          planned!
        </p>
        {list.map((event) => (
          <div key={event.id} className="p-3 my-2 bg-slate-400 border rounded">
            <h1 className="font-bold">{event.name}</h1>
            <small>{event.date}</small>
            <p className="my-3">{event.description}</p>
            <GatsbyImage
              image={event.image.asset.gatsbyImageData}
              alt={event.name}
            />
          </div>
        ))}
        {hasMore ? (
          <button onClick={handleLoadMore}>Load More</button>
        ) : (
          <p>No more results</p>
        )}
      </section>

      <section>
        <p>
          There {past.length > 1 ? 'were' : 'was'}{' '}
          <span className="font-bold">{past.length}</span>{' '}
          {past.length > 1 ? 'events' : 'event'}!
        </p>
        {past.map((event) => (
          <div key={event.id} className="p-3 my-2 bg-yellow-200 border rounded">
            <h1 className="font-bold">{event.name}</h1>
            <small>{event.date}</small>
            <p className="my-3">{event.description}</p>
            <GatsbyImage
              image={event.image.asset.gatsbyImageData}
              alt={event.name}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Events;
