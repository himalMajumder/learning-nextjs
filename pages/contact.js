import React, {useState} from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(111);
		
	}

	const handleChange = (e) => {
		
	}
	return (
		<div className={styles.container}>
			<h1> Contact Us </h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.mb3}>
					<label htmlFor="name" className={styles.formLabel}>
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={handleChange}
						placeholder="Name"
						className="form-control"
					/>
				</div>
				<div className={styles.mb3}>
					<label htmlFor="email" className={styles.formLabel}>
						Email address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={handleChange}
						placeholder="Phone"
						className="form-control"
					/>
				</div>
				<div className={styles.mb3}>
					<label htmlFor="phone" className={styles.formLabel}>
						Phone
					</label>
					<input
						type="phone"
						name="phone"
						id="phone"
						value={phone}
						onChange={handleChange}
						placeholder="Phone"
						className="form-control"
					/>
				</div>
				<div className={styles.mb3}>
					<label htmlFor="description" className={styles.formLabel}>
						Elaborate your concern
					</label>
					<textarea
						name="description"
						id="description"
						placeholder="Description"
						className="form-control"
						value={description}
						onChange={handleChange}
					></textarea>
				</div> 
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
