"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import testimage from "../../public/static/images/cake/testimage.jpg";
import test2 from "../../public/static/images/cake/test2.jpg";
import test3 from "../../public/static/images/cake/test3.jpg";
import cake9 from "../../public/static/images/cake/cake9.jpg";
import test5 from "../../public/static/images/cake/test5.jpg";
import test6 from "../../public/static/images/cake/test6.jpg";
import test7 from "../../public/static/images/cake/test7.jpg";
import test8 from "../../public/static/images/cake/test8.jpg";

export default function Imagegrid() {
	return (
		<Grid sx={{ backgroundColor: "pink" }} container spacing={0}>
			<Grid
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "10px",
				}}
				xs={12}
				md={3}>
				<Image
					style={{ height: "300px", width: "300px", padding: "3px" }}
					src={testimage}
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
					src={test2}
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
					src={test3}
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
					src={cake9}
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
					src={test5}
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
					src={test6}
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
					src={test7}
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
					src={test8}
				/>
			</Grid>
		</Grid>
	);
}
