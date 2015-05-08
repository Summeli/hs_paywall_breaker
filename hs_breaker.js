document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
window.addEventListener ("load", pageFullyLoaded);
$("html").removeClass("no-js");

function DOM_ContentReady () {
	//we have nothing to do in here
}

function pageFullyLoaded () {
	//remove localstorage
	window.localStorage.clear("_hs_paywall_hits");
	window.localStorage.clear("_hs_hist");
}
