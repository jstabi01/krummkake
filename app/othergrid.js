"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import other1 from "../../public/static/images/other/other1.jpg";
import other2 from "../../public/static/images/other/other2.jpg";
import other3 from "../../public/static/images/other/other3.jpg";
import other4 from "../../public/static/images/other/other4.jpg";

export default function CookieGrid() {
	return (
		<Grid
			sx={{ backgroundColor: "pink", paddingBottom: "10px" }}
			container
			spacing={0}>
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
					src={other1}
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
					src={other2}
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
					src={other3}
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
					src={other4}
				/>
			</Grid>
		</Grid>
	);
}
