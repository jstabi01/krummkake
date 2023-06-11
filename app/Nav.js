"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar
					sx={{ color: "rgb(163,49,109)", backgroundColor: "pink" }}>
					<IconButton
						href="/"
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}>
						⌂
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "center",
						}}>
						<Button color="inherit" href="/cake">
							Cakes
						</Button>
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "center",
						}}>
						<Button color="inherit" href="/cookie">
							Cookies
						</Button>
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "center",
						}}>
						<Button color="inherit" href="/other">
							Other
						</Button>
					</Typography>
					<Button color="inherit" href="/request">
						Request Quote
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
