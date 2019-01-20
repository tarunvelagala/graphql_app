import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      Name
      Type
    }
  }
`;

export default () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map(post => (
            <tr key={post.id}>
              <td>{post.Name}</td>
              <td>{post.Type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </Query>
);
