import React, {useState} from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, phone, description);
		const formData = {name, email, phone, description};

		fetch('http://localhost:3000/api/postcontact', {
			method : "POST",
			headers : {
				'Content-type' : 'application/json'
			},
			body : JSON.stringify(formData)
		})
        .then(response => response.json())
        .then(data => {
			console.log(data)
			setName('');
			setEmail('');
			setPhone('');
			setDescription('');
		})
		.catch(error => console.log('Error', error));
		
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
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter Name"
						className={styles.input}
						required
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
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Email Address"
						className={styles.input}
						required
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
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Enter Phone"
						className={styles.input}
						required
					/>
				</div>
				<div className={styles.mb3}>
					<label htmlFor="description" className={styles.formLabel}>
						Elaborate your concern
					</label>
					<textarea
						name="description"
						id="description"
						placeholder="Enter Description"
						className={styles.input}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div> 
				<button type="submit" className={styles.btn}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
