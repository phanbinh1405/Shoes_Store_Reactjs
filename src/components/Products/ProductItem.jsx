import React from "react";
import { Link, NavLink } from "react-router-dom";

function ProductItem({ product }) {
	return (
		<div className='col-12 col-sm-6 col-lg-4 d-flex justify-content-center'>
			<div className='card d-flex align-items-center flex-column'>
				<NavLink
					to={`/productDetail/${product.id}`}
					relative='path'
					className='product__link w-100 text-center'
				>
					<img className='card-img-top' src={product.image} alt='Title' />
					<div className='card-body'>
						<h4 className='card-title text-start'>{product.name}</h4>
						<p className='card-text text-start'>{product.shortDescription}</p>
					</div>
				</NavLink>
				<div className='card-footer mt-auto d-flex align-items-strech w-100 p-0'>
					<NavLink className='card-button' to='#' style={{ width: "50%" }}>
						Buy now
					</NavLink>
					<p className='m-0 text-center card-price' style={{ width: "50%" }}>
						{product.price}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
