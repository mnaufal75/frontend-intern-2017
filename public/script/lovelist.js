function toComma(x) {
    return "Rp " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var hargas = document.getElementsByClassName("harga-barang");

for(var i = 0; i < hargas.length; i++) {
	var harga = hargas[i];
	harga.innerHTML = toComma(harga.innerHTML);
}