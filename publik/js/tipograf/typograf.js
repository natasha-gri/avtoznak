const prepositions = ["без", "между", "под", "в", "на", "по", "вокруг", "о", "по", "про", "или", "все", "у", "во", "вне", "для", "до", "за", "из", "из-за", "из-под", "к", "ко", "кроме", "над", "о", "об", "обо", "от", "перед", "пред", "пo", "под", "при", "про", "ради", "через"];

const els = document.getElementsByClassName("typograf")

Array.prototype.forEach.call(els, function (el) {
	const str = el.textContent;
	const symbol = new RegExp(String.fromCharCode(160)).toString().replace(/\//g, '')

	el.textContent  = addNbsp(str, symbol);
})


function addNbsp(str, symbol) {
  return str.replace(/(\S+?)( )/g, (_, p) =>
	p + (prepositions.includes(p.toLowerCase()) ? symbol : ' ')
  )
}
