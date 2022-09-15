import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<nav className='navbar navbar-expand-sm text-white bg-secondary'>
				<div className='container'>
					<NavLink className='navbar-brand' to='/'>
						Home
					</NavLink>
					<button
						className='navbar-toggler d-lg-none'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapsibleNavId'
						aria-controls='collapsibleNavId'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='collapsibleNavId'>
						<ul className='navbar-nav me-auto mt-2 mt-lg-0'>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									to='/profile'
									aria-current='page'
								>
									Profile
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									to='/register'
									aria-current='page'
								>
									Register
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									to='/login'
									aria-current='page'
								>
									Login
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									to='/search'
									aria-current='page'
								>
									Search
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link active'
									to='/carts'
									aria-current='page'
								>
									Carts
								</NavLink>
							</li>
							
						</ul>
						<form className='d-flex my-2 my-lg-0'>
							<input
								className='form-control me-sm-2'
								type='text'
								placeholder='Search'
							/>
							<button
								className='btn btn-outline-success my-2 my-sm-0'
								type='submit'
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}
