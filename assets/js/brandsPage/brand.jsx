import React from 'react';

const Brand = props => (
    <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{props.brand.name}</h5>
        </div>
    </div>
)

export default Brand
