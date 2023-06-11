import * as React from "react";
import Nav from "../src/app/Nav";
import Banner from "../src/app/banner";
import Social from "../src/app/social";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import other1 from "../public/static/images/other/other1.jpg";
import other2 from "../public/static/images/other/other2.jpg";
import other3 from "../public/static/images/other/other3.jpg";
import other4 from "../public/static/images/other/other4.jpg";
import othera from "../public/static/images/other/othera.jpg";
import otherb from "../public/static/images/other/otherb.jpg";
import otherc from "../public/static/images/other/otherc.jpg";
import otherd from "../public/static/images/other/otherd.jpg";
import othere from "../public/static/images/other/othere.jpg";
import otherf from "../public/static/images/other/otherf.jpg";
import otherg from "../public/static/images/other/otherg.jpg";
import otherj from "../public/static/images/other/otherj.jpg";

export default function Main() {
	return (
		<div>
			<Nav />
			<Banner />
			<div
				style={{
					textAlign: "center",
					padding: "10px",
					color: "rgb(163,49,109)",
					backgroundColor: "pink",
					fontSize: "24px",
				}}>
				Other Treats
			</div>
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={other4}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={othera}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherb}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherc}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherd}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={othere}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherf}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherg}
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
						style={{
							height: "300px",
							width: "300px",
							padding: "3px",
						}}
						src={otherj}
					/>
				</Grid>
			</Grid>
			<Social />
		</div>
	);
}
