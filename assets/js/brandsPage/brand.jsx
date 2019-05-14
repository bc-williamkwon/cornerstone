import React from 'react';

const Brand = props => (
    <li className='brand'>
        <article className='card'>
            <figure className='card-figure'>
                <a
                    href={`https://williamkwon1557773735-testsworthy.my-staging.zone${
                        props.data.path
                    }`}
                >
                    <div className='card-img-container'>
                        <img
                            className='card-image lazyautosizes lazyloaded'
                            data-sizes='auto'
                            src={
                                props.data.images.length
                                    ? props.data.images[0].url
                                    : 'https://cdn3-gi.bigcommerce.com/s-lrxgrolo5v/stencil/23c06820-5577-0137-7af7-0242ac110026/img/BrandDefault.gif'
                            }
                            data-src={
                                props.data.images.length
                                    ? props.data.images[0].url
                                    : 'https://cdn3-gi.bigcommerce.com/s-lrxgrolo5v/stencil/23c06820-5577-0137-7af7-0242ac110026/img/BrandDefault.gif'
                            }
                            alt={
                                props.data.images.length
                                    ? props.data.images[0].altText
                                    : ''
                            }
                            title={props.data.name}
                            sizes='200px'
                        />
                    </div>
                </a>
            </figure>
            <div className='card-body'>
                <h4 className='card-title'>
                    <a
                        href={`https://williamkwon1557773735-testsworthy.my-staging.zone${
                            props.data.path
                        }`}
                    >
                        {props.data.name}
                    </a>
                </h4>
            </div>
        </article>
    </li>
);
export default Brand;
