import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 m-auto">
      <h1 className="text-5xl text-center m-3">Blogs</h1>
      <div className="m-1 p-6 bg-base-300 rounded-lg">
        <h3 className="text-3xl font-medium">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <div>
          <p>
            <span className="text-2xl">Access Token:</span> <br></br> Access
            tokens carry information that allows APIs to verify a user’s
            identity. They are commonly used by identity frameworks and
            protocols, such as OAuth 2.0, an industry-standard protocol for
            authorization, to enable secure access to resources and
            applications. <br></br>
            <span className="text-2xl">Refresh Token: </span> <br></br>
            Refresh tokens provide a way to bypass the temporary nature of
            access tokens. Normally, a user with an access token can only access
            protected resources or perform specific actions for a set period of
            time, which reduces the risk of the token being compromised. A
            refresh token allows the user to get a new access token without
            needing to log in again.<br></br>
            <span className="text-2xl">Where should we store them?</span>{" "}
            <br></br>
            <span>
              1. Storing the refresh token in an in-memory JavaScript variable,
              which has two drawbacks:
            </span>
            <br></br>
            <span className="text-gray-500">
              a. It's vulnerable to XSS (but may be not as obvious as
              local/session storage) <br></br>
            </span>
            <span className="text-gray-500">
              b. It looses the "session" if a user closes the browser tab
              Especially the latter drawback makes will turn out as a bad UX.{" "}
            </span>
            <br></br>
            2. Storing the access token in session storage and sending it via a
            Bearer access_token authorization header to my resource server. Then
            I can use httpOnly cookies for the refresh token. This may have one
            drawback: <br></br>
            <span className="text-gray-500">
              a. The refresh token is exposed to CSRF with every request made to
              the Resource Server. <br></br>
            </span>
            <span>
              And 3. Keep both tokens in httpOnly cookies which has the
              mentioned drawback that both tokens are exposed to the same attack
              vector.
            </span>
          </p>
        </div>
      </div>
      <div className="m-1 p-6 bg-base-300 rounded-lg">
        <h3 className="text-3xl font-medium my-3">
          2. Compare SQL and NoSQL databases?
        </h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead>
              <tr>
                <th>SL</th>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Stands for Structured Query Language</td>
                <td>Stands for Not Only SQL</td>
              </tr>
              {/* row 2 */}
              <tr className="active">
                <th>2</th>
                <td>Relational database management system (RDBMS)</td>
                <td>Non-relational database management system</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Data is stored in tables with columns and rows</td>
                <td>Data is stored in collections or documents</td>
              </tr>
              <tr className="active">
                <th>4</th>
                <td>
                  Follows ACID properties (Atomicity, Consistency,<br></br>
                  Isolation, Durability) for transaction management
                </td>
                <td>Does not necessarily follow ACID properties </td>
              </tr>
              <tr>
                <th>5</th>
                <td>Supports JOIN and complex queries</td>
                <td>Does not support JOIN and complex queries </td>
              </tr>
              <tr className="active">
                <th>6</th>
                <td>Uses normalized data structure</td>
                <td>Uses denormalized data structure</td>
              </tr>
              <tr>
                <th>7</th>
                <td>
                  Requires vertical scaling to handle large volumes of data
                </td>
                <td>
                  Horizontal scaling is possible to handle large volumes of data
                </td>
              </tr>
              <tr className="active">
                <th>8</th>
                <td>
                  Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL
                  Server
                </td>
                <td>
                  Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB,
                  Redis
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-1 p-6 bg-base-300 rounded-lg">
        <h3 className="text-3xl font-medium my-3">
          3. What is express js? What is Nest JS?
        </h3>
        <div>
          <h4 className="text-2xl">Express:</h4>
          Express is a minimal and flexible Node.js framework that provides a
          robust set of features for building web and mobile applications. It is
          a lightweight and unopinionated framework that allows developers to
          create applications with their preferred tools and libraries. Express
          is popular among developers due to its simplicity and ease of use.
          <h4 className="text-2xl">NestJS:</h4>
          NestJS is a progressive Node.js framework for building efficient,
          scalable, and reliable server-side applications. It is built on top of
          Express.js and provides a more structured way of building applications
          with TypeScript. NestJS uses a modular architecture, making it easy to
          maintain and scale applications as they grow.
        </div>
      </div>

      <div className="m-1 p-6 bg-base-300 rounded-lg">
        <h3 className="text-3xl font-medium my-3">
          4. What is MongoDB aggregate and how does it work?
        </h3>
        <h4 className="text-2xl">MongoDB Aggregate:</h4>
        <p>
          Aggregations operations process data records and return computed
          results. Aggregation operations group values from multiple documents
          together, and can perform a variety of operations on the grouped data
          to return a single result. In SQL count(*) and with group by is an
          equivalent of MongoDB aggregation. Aggregation is a way of processing
          a large number of documents in a collection by means of passing them
          through different stages. The stages make up what is known as a
          pipeline. The stages in a pipeline can filter, sort, group, reshape
          and modify documents that pass through the pipeline.
        </p>
        <h4 className="text-2xl">How it works:</h4>
        <p>
          Aggregation in MongoDB is responsible for processing the data, which
          results in the calculated outputs, generally by assembling the data
          from several documents and then executes in various ways on those
          assembled data in order to yield one collective result. It practices
          documents and then yield computed outputs and thus execute a range of
          operations on the assembled data to return only one result.
          Aggregation in MongoDB was progressed when limitations were viewed
          because of having millions of embedded documents, taking much time in
          processing, and server’s random memory which may terminate the
          operations.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
