import React from "react";
import { useDispatch } from "react-redux";
import {
	changeQuantityAction,
	deleteProductAction,
} from "../../redux/reducers/cartReducer";

function CartRow({ item }) {
	const dispatch = useDispatch();

	const changeQuantity = (productId, value) => {
		const payload = {
			productId,
			value,
		};
		dispatch(changeQuantityAction(payload));
	};

	const deleteProduct = (productId) => {
		dispatch(deleteProductAction(productId));
	};
  
	return (
		<tr style={{ verticalAlign: "middle" }}>
			<td>{item.id}</td>
			<td
				style={{
					width: 100,
					height: 50,
				}}
			>
				<img
					src={item.image}
					alt=''
					width={"100%"}
					height='50px'
					style={{ objectFit: "contain" }}
				/>
			</td>
			<td>{item.name}</td>
			<td>{item.price}</td>
			<td>
				<button
					className='btn btn-success'
					style={{
						lineHeight: 1,
						height: 20,
						display: "inline-flex",
						alignItems: "center",
					}}
					onClick={() => changeQuantity(item.id, 1)}
				>
					+
				</button>

				<div
					style={{
						width: 40,
						textAlign: "center",
						display: "inline-block",
					}}
				>
					{item.quantity}
				</div>
				<button
					className='btn btn-danger'
					style={{
						lineHeight: 1,
						height: 20,
						display: "inline-flex",
						alignItems: "center",
					}}
					onClick={() => changeQuantity(item.id, -1)}
				>
					-
				</button>
			</td>
			<td width='150px'>
				{(item.price * item.quantity).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</td>
			<td style={{ width: 50 }}>
				<button
					className='btn btn-danger'
					onClick={() => deleteProduct(item.id)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default CartRow;
