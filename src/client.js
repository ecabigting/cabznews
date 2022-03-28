/* eslint-disable no-unused-vars */
import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "xixgn0gf",
  apiVersion: "2021-03-25",
  useCdn: true,
  dataset:"production"
});

