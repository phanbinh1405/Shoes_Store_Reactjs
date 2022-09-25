import React from "react";

function CarouselItem({ product }) {
	return (
		<>
			<div className='d-flex align-items-center justify-content-between h-100'>
				<img
					src={product.image}
					alt='First slide'
					width='640px'
					height='350px'
					style={{ objectFit: "contain" }}
				/>
				<div className='carousel-item-content'>
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<button className='btn btn-warning carousel-item-button'>
						Buy now
					</button>
				</div>
			</div>
		</>
	);
}

export default CarouselItem;
