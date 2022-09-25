import React from "react";
import ProductItem from "./ProductItem";

function Products({arrProduct, isDetail}) {
	return (
		<section className='product'>
			<div className='container-xl'>
				<h2 className='product__title text-center'> { isDetail ? '- Realate Product -' :'- Product Feature -'} </h2>
				<div className='product__content'>
					<div className='row' id='product__container'>
            {arrProduct?.map((product)=> {
              return <ProductItem key={product.id} product={product}/>
            })}
          </div>
				</div>
			</div>
		</section>
	);
}

export default Products;
