import React from "react";
import Brand from "./brand.jsx";

const BrandsList = props => (
  <div>
    <h1 className="page-heading">Brands</h1>
    {props.data.site.brands.edges ? (
      <ul className="brandGrid">
        {props.data.site.brands.edges.map((e, i) => {
          return <Brand data={e.node} key={i} />;
        })}
      </ul>
    ) : null}
  </div>
);
export default BrandsList;
