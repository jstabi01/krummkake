import React from "react";
import Nav from "../src/app/Nav";
import Social from "../src/app/Social";

function Request() {
	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const emailBody = [];

		for (let [key, value] of formData.entries()) {
			emailBody.push(`${key}: ${value}`);
		}

		const mailtoURL = `mailto:your-email@example.com?subject=KrummKake Request&body=${encodeURIComponent(
			emailBody.join("\n")
		)}`;

		window.location.href = mailtoURL;
	};

	return (
		<div style={{ backgroundColor: "rgb(163,49,109)" }}>
			<Nav />
			<div
				style={{
					backgroundColor: "rgb(163, 49, 109)",
					display: "flex",
					justifyContent: "center",
					padding: "20px",
				}}>
				<div
					style={{
						backgroundColor: "rgb(163, 49, 109)",
						maxWidth: "400px",
						margin: "auto",
						padding: "25px",
						textAlign: "center",
						color: "rgb(163, 49, 109)",
						backgroundColor: "pink",
					}}>
					<p>Please enter details below to request a quote</p>
					<p>OR</p>
					<p>Send a direct message to emailaddress@gmail.com</p>
				</div>
			</div>
			<div
				style={{
					backgroundColor: "rgb(163, 49, 109)",
					padding: "20px",
				}}>
				<div
					style={{
						maxWidth: "400px",
						margin: "auto",
						padding: "25px",
						textAlign: "center",
						color: "rgb(163, 49, 109)",
						backgroundColor: "pink",
					}}>
					<form
						onSubmit={handleSubmit}
						style={{ display: "grid", gap: "1rem" }}>
						<div>
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								id="name"
								name="name"
								style={{ marginLeft: "0.5rem" }}
							/>
						</div>

						<div>
							<label htmlFor="phone">Phone:</label>
							<input
								type="text"
								id="phone"
								name="phone"
								style={{ marginLeft: "0.5rem" }}
							/>
						</div>

						<div>
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								style={{ marginLeft: "0.5rem" }}
							/>
						</div>

						<div>
							<label htmlFor="message">Message:</label>
							<textarea
								id="message"
								name="message"
								style={{ marginLeft: "0.5rem" }}
							/>
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<button
								type="submit"
								style={{
									padding: "0.5rem 1rem",
									backgroundColor: "rgb(163,49,109)",
									color: "white",
									border: "none",
									borderRadius: "4px",
								}}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<div style={{ backgroundColor: "white", padding: "5px" }}>
				<Social />
			</div>
		</div>
	);
}

export default Request;
