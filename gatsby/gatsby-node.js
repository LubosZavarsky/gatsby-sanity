const path = require(`path`);

// CREATE PAGE FROM EACH GALLERY (using Gallery.js template)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const galleryTemplate = path.resolve(`src/templates/Gallery.js`);

  return graphql(`
    query {
      gallery: allSanityGallery {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.gallery.nodes.forEach((gal) => {
      createPage({
        path: `gallery/${gal.slug.current}`,
        component: galleryTemplate,
        context: {
          slug: `${gal.slug.current}`,
        },
      });
      //console.log(gal.slug.current);
    });
  });
};
