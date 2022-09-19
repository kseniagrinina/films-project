import React, { useState } from "react";
import FormMessage from "components/FormMessage";

const initialFormData = {
	email: "",
	password: "",
};

const LoginForm = () => {
	const [data, setData] = useState(initialFormData);
	const [errorMessages, setErrorMessages] = useState({});

	const handleStringChange = (e) => {
		setData((x) => ({ ...x, [e.target.name]: e.target.value }));
		setErrorMessages((x) => ({ ...x, [e.target.name]: "" }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errorMessages = validate(data);
		setErrorMessages(errorMessages);
		console.log(`email: '${data.email}', password: '${data.password}'`);
	};

	const clearForm = () => {
		setData(initialFormData);
		setErrorMessages({});
	};

	const validate = ({ email, password }) => {
		const errorMessages = {};

		if (!email) errorMessages.email = "Please enter your email";
		if (!password) errorMessages.password = "Please enter your password";

		return errorMessages;
	};

	return (
		<form onSubmit={handleSubmit} className='ui form mr-3'>
			<div className='ui grid mb-3'>
				<div className='two column row'>
					<div className='sixteen wide column'>
						<div
							className={`field column ${errorMessages.email ? "error" : ""}`}>
							<label htmlFor='email'>E-mail</label>
							<input
								value={data.email}
								onChange={handleStringChange}
								type='email'
								name='email'
								id='email'
								placeholder='E-mail'
							/>
							{errorMessages.email && (
								<FormMessage>{errorMessages.email}</FormMessage>
							)}
						</div>
						<div
							className={`field column ${
								errorMessages.password ? "error" : ""
							}`}>
							<label htmlFor='email'>Password</label>
							<input
								value={data.password}
								onChange={handleStringChange}
								type='password'
								name='password'
								id='password'
								placeholder='Password'
							/>
							{errorMessages.password && (
								<FormMessage>{errorMessages.password}</FormMessage>
							)}
						</div>
					</div>
				</div>

				<div className='ui fluid buttons'>
					<button className='ui button primary' type='submit'>
						Log In
					</button>
					<div className='or'></div>
					<span onClick={clearForm} className='ui button'>
						Cancel
					</span>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
