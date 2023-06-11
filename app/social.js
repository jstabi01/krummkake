import Image from "next/image";
import facebook from "../../public/static/images/facebook.png";
import instagram from "../../public/static/images/instagram.png";
import sendmail from "../../public/static/images/sendmail.png";
import callus from "../../public/static/images/callus.png";

function Social() {
	return (
		<div id="contactus" style={{ backgroundColor: "rgb(163,49,109)" }}>
			<footer
				style={{
					padding: "0",
					textAlign: "center",
					marginBottom: "0",
					fontSize: "12px",
					backgroundColor: "charcoal",
				}}>
				<div
					className="social"
					style={{ padding: "5px", margin: "10px" }}>
					<a href="https://www.instagram.com/krummkakes/">
						<Image
							style={{
								height: "35px",
								width: "35px",
								margin: "10px",
							}}
							alt="instagram"
							src={instagram}
						/>
					</a>
					<a href="mailto:email@gmail.com">
						<Image
							style={{
								height: "35px",
								width: "35px",
								margin: "10px",
							}}
							alt="mail"
							src={sendmail}
						/>
					</a>
					<a href="https://www.facebook.com/">
						<Image
							style={{
								height: "35px",
								width: "35px",
								margin: "10px",
							}}
							alt="facebook"
							src={facebook}
						/>
					</a>
					<a href="tel:+0">
						<Image
							style={{
								height: "35px",
								width: "35px",
								margin: "10px",
							}}
							alt="phone"
							src={callus}
						/>
					</a>
					<p style={{ color: "palegoldenrod" }} className="copyright">
						Krumm Kakes
					</p>
					<p style={{ color: "palegoldenrod" }}>
						{" "}
						Custom Baked Goods
					</p>
					<p style={{ color: "palegoldenrod" }} className="copyright">
						+1 234 5678
					</p>
				</div>
				<hr></hr>
				<p
					style={{ fontSize: ".7em", color: "rgb(75,0,130)" }}
					className="design">
					Website design by SprinklingsDesigns - Joeystabi01@gmail.com
				</p>
			</footer>
		</div>
	);
}

export default Social;
