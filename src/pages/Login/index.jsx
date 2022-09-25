import React from "react";
import FacebookLogin from "react-login-facebook";

export default function Login() {
	const responseFacebook = (res) => {
		console.log(res);
	};
	return (
		<section className='vh-100'>
			<h1 className='text-center pt-4'>Login</h1>

			<div className='container py-5'>
				<div className='row d-flex align-items-center justify-content-center h-100'>
					<div className='col-md-8 col-lg-7 col-xl-6'>
						<img
							src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
							className='img-fluid'
							alt='Phone'
						/>
					</div>
					<div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
						<form>
							{/* Email input */}
							<div className='form-outline mb-4'>
								<input
									type='email'
									id='form1Example13'
									className='form-control form-control-lg'
								/>
								<label className='form-label' htmlFor='form1Example13'>
									Email address
								</label>
							</div>
							{/* Password input */}
							<div className='form-outline mb-4'>
								<input
									type='password'
									id='form1Example23'
									className='form-control form-control-lg'
								/>
								<label className='form-label' htmlFor='form1Example23'>
									Password
								</label>
							</div>
							<div className='d-flex justify-content-around align-items-center mb-4'>
								{/* Checkbox */}
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										defaultValue
										id='form1Example3'
										defaultChecked
									/>
									<label className='form-check-label' htmlFor='form1Example3'>
										{" "}
										Remember me{" "}
									</label>
								</div>
								<a href='#!'>Forgot password?</a>
							</div>
							{/* Submit button */}
							<button
								type='submit'
								className='btn btn-primary btn-lg btn-block'
							>
								Sign in
							</button>
							<div className='divider d-flex align-items-center my-4'>
								<p className='text-center fw-bold mx-3 mb-0 text-muted'>OR</p>
							</div>
							<div className='d-flex flex-column gap-4'>
								<FacebookLogin
									appId='543210587574795'
									callback={responseFacebook}
									render={(renderProps) => (
										<button
                      onClick={renderProps.onClick}
											className='btn btn-primary btn-lg btn-block'
											style={{ backgroundColor: "#3b5998" }}
										>
											<i className='fab fa-facebook-f me-2' />
											Continue with Facebook
										</button>
									)}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
