/* eslint-disable no-unused-vars */
const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "xixgn0gf",
  database: "live",
  apiVersion: "2021-03-25",
  useCdn: false,
});

export default client;
