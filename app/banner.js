"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import logo from "../../public/static/images/logo.png";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";

export default function Banner() {
	return (
		<React.Fragment>
			<Grid
				id="home"
				container
				spacing={2}
				justifyContent="center"
				/* style={{ minHeight: "100vh" }} */
			>
				<Grid xs={12} item>
					<Card sx={{ maxWidth: "100%" }}>
						<div
							style={{
								backgroundColor: "rgb(163,49,109)",
								display: "flex",
								justifyContent: "center",
								overflow: "hidden", // Add overflow: hidden to the parent div
							}}>
							<Image
								src={logo}
								style={{
									width: "100%",
									height: "auto",
									objectFit: "cover",
								}}
							/>
						</div>
					</Card>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
