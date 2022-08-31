import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTk0MDAyNDMsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w2YmcyMzJyMDJ2czAxdWkxaXN0ZnBrZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDlmZGI4NzUtYTA3Yy00OTkwLTgyNWMtMDI0NzBjY2Y2YTFiIiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.3eC22dxSuXS_8q9IBimgIm4vDhYXX_vHLXUyFatNxrVC7kiCGGszKWdAQ9McV_VAPAP1i1imOocYuvu9DOwT1SlGv2p6R_N2vcw4SUWV_nNIsdQxR5JPkXCA9xjvXxzb5TCXYXxIdEEGKWHSYQJJJ79Oa2Ktn1jMXOUaeFxbZAHPGss4TsuNug6TIxYi5WeE1wzhidyR_x0yC3K9GRRpcWYel8tMv3pCFZAAZTe3qwfo_IDr9Y2x_1-7K0j5tNsKaLbI87dqtX8VD1te1AT55QIICk8AVYenxvOx_MY5joNrVssnwyQvj0G6rm-sM3xN15TJ0pgEWiji_BTK406PM-ldC7OSPRrNvgN_HdqeIh3nfwCkHwpn3FvRnLc9zBzd30j-75dHgx4dTzrX7qL6E9ykReLDQf-ad1208PfSa96o_QlocXptayTc8eMXcR_NcKnGU0kJnfIsKNearNUlRvuW_gNWB_6G5yGlV86wlRUS5xHDnIjmRSFVvM1TTBiyhtojgCqI_7ysmW0Kuf9lJpNKo6xcVH975g_bpEALRqhKEIA1N0PaS2wGpAg-I31Ek8bLpnPxTLZrDE5fBJschLEQx6ApF13b2-iLZIgbh4biJu_bxRqfLaab3m-0G9leECdqVuGvMh7hbmAMj41sXv9a9LRZvc8ZSvCeNN1XsLg'

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  console.log("var")
  console.log(process.env.GRAPHCMS_TOKEN)
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}