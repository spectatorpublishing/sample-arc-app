/** Content Source for Editor Pick Service */

const resolve = function resolve(query) {
    const requestUri = `/author/v2/author-service?limit=10`;
    return requestUri;
  };
  export const authorFilter = `{firstName lastName email}`
  export default {
    resolve,
    params: {},
    filter: authorFilter
  };