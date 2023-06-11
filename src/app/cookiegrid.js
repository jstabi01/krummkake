"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import cookie1 from "../../public/static/images/cookie/cookie1.jpg";
import cookie2 from "../../public/static/images/cookie/cookie2.jpg";
import cookie3 from "../../public/static/images/cookie/cookie3.jpg";
import cookie4 from "../../public/static/images/cookie/cookie4.jpg";
import cookie5 from "../../public/static/images/cookie/cookie5.jpg";
import cookie6 from "../../public/static/images/cookie/cookie6.jpg";
import cookie7 from "../../public/static/images/cookie/cookie7.jpg";
import cookie8 from "../../public/static/images/cookie/cookie8.jpg";
import cookie9 from "../../public/static/images/cookie/cookie9.jpg";

export default function CookieGrid() {
	return (
		<Grid sx={{ backgroundColor: "pink" }} container spacing={0}>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie1}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie2}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie3}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie9}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie5}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie6}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie7}
				/>
			</Grid>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={cookie8}
				/>
			</Grid>
		</Grid>
	);
}
