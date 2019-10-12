const toOstrButton = document.getElementById("wwa-ostr");
const toWwaButton = document.getElementById("ostr-wwa");

toOstrButton.addEventListener("click", buildUrl);
toOstrButton.parameters = {
	initialStop: 7,
	finalStop: 5
};

toWwaButton.addEventListener("click", buildUrl);
toWwaButton.parameters = {
	initialStop: 5,
	finalStop: 7
};

function buildUrl(evt) {
	let { initialStop, finalStop } = evt.target.parameters;
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	if (day.toString().length < 2) {
		day = "0" + day;
	}
	let formattedDate = `${year}-${month}-${day}`;

	let url = `https://plusbus.pl/search?promotions=3&initial_stop=${initialStop}&final_stop=${finalStop}&from_date=${formattedDate}&to_date=0`;
	redirect(url);
}

function redirect(url) {
	window.location.assign(url);
}
