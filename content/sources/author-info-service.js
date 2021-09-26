/** Content Source for Author Info */

const resolve = function resolve(query) {
  const requestUri = `/author/v1/?q=%7B%22firstName%22:%22${query.firstName}%22,%22lastName%22:%22${query.lastName}%22%7D&single=true`;
  return requestUri;
};

export const authorFilter = `
    {
        email
        image
        firstName
        twitter
        byline
        role
        bio
        lastName
    }
  `;

export default {
  resolve,
  params: {
    firstName: "text",
    lastName: "text"
  },
  filter: authorFilter
};