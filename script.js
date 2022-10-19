const album_name = document.querySelector(".header_with_cover_art-primary_info-title").textContent.trim();
const album_url = document.URL
const artist_name = document.querySelector(".header_with_cover_art-primary_info-primary_artist").textContent.trim()
const artist_url = document.querySelector(".header_with_cover_art-primary_info-primary_artist").href.trim()
const arrayNumbersMalo = document.querySelectorAll(".chart_row-number_container-number")
const arrayTitlesMalo = document.querySelectorAll(".chart_row-content-title")
const arrayURLsMalo = document.querySelectorAll(".u-display_block")
const arrayNumbers = [], arrayTitles = [], arrayURLs = [];

const finalcosa = [];
			
for(var i =0; i<arrayNumbersMalo.length; i++) {
	arrayNumbers.push(arrayNumbersMalo[i].textContent.trim())
};

for(var i =0; i<arrayTitlesMalo.length; i++) {
		arrayTitles.push(arrayTitlesMalo[i].textContent.replace("\n", "").replace("Lyrics", "").trim())
};

for(var i =0; i<arrayURLsMalo.length; i++) {
	arrayURLs.push(arrayURLsMalo[i].href)
};

for(var i =0; i<arrayNumbers.length; i++) {
				
	finalcosa.push(`${arrayNumbers[i]}. [${arrayTitles[i]}](${arrayURLs[i]})`)
};

const albumPArtists = [`<b>[${artist_name}](${artist_url}) - [*${album_name}*](${album_url})</b>`, " ", finalcosa.join("\n")]
console.log(albumPArtists.join("\n"))
