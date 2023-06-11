import Image from "next/image";
import styles from "../src/app/page.module.css";
import Nav from "../src/app/Nav";
import Banner from "../src/app/banner";
import Social from "../src/app/social";
import Imagegrid from "../src/app/grid";
import Cookiegrid from "../src/app/cookiegrid";
import Othergrid from "../src/app/othergrid";

export default function Home() {
	return (
		<div>
			<Nav />
			<Banner />
			<div
				style={{
					textAlign: "center",
					paddingTop: "10px",
					paddingBottom: "10px",
					color: "rgb(163,49,109)",
					backgroundColor: "pink",
					fontSize: "24px",
				}}>
				Custom Cakes
			</div>
			<Imagegrid />
			<div
				style={{
					textAlign: "center",
					paddingTop: "10px",
					paddingBottom: "10px",
					color: "rgb(163,49,109)",
					backgroundColor: "pink",
					fontSize: "24px",
				}}>
				Custom Cookies
			</div>
			<Cookiegrid />
			<div
				style={{
					textAlign: "center",
					paddingTop: "10px",
					paddingBottom: "10px",
					color: "rgb(163,49,109)",
					backgroundColor: "pink",
					fontSize: "24px",
				}}>
				Other Treats
			</div>
			<Othergrid />
			<Social />
		</div>
	);
}
