import Nav from "../app/Nav";
import Banner from "../app/banner";
import Social from "../app/social";
import Imagegrid from "../app/grid";
import Cookiegrid from "../app/cookiegrid";
import Othergrid from "../app/othergrid";

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
