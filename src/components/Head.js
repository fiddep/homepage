import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

export default withRouter(
  ({ title, description, image, router, jsonld, children }) => (
    <Head>
      {/* DEFAULT */}

      {title !== undefined && <title key="title">{title}</title>}
      {description !== undefined && (
        <meta name="description" key="description" content={description} />
      )}
      {children}
    </Head>
  )
);
