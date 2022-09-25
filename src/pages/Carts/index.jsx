import React from "react";
import { useSelector } from "react-redux";

import CartRow from "./CartRow";

export default function Carts() {
	const { cart } = useSelector((state) => state.cartReducer);

	const renderRowCart = () => {
		return cart?.map((item) => {
			return <CartRow key={item.id} item={item} />;
		});
	};

	return (
		<>
			<h1 className='py-5 text-center'>Carts</h1>
			<hr />
			<div className='table-responsive'>
				<table className='table' style={{ textAlign: "center" }}>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Image</th>
							<th scope='col'>Name</th>
							<th scope='col'>Price</th>
							<th scope='col'>Quantity</th>
							<th scope='col'>Total</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>{renderRowCart()}</tbody>
					<tfoot>
						<tr>
							<th scope='row' colSpan={5} className='text-start'>
								Total
							</th>
							<th className='text-center'>
								{cart
									?.reduce((prev, curr) => curr.quantity * curr.price + prev, 0)
									.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
									})}
							</th>
							<td></td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className='text-end mt-3'>
				<button className='btn btn-primary'>Submit Order</button>
			</div>
		</>
	);
}
