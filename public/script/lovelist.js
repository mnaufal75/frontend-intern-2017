function toComma(x) {
    return "Rp " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

$(document).ready(function () {
	$('.harga-barang').each(function() {
		toComma( $(".harga-barang") );
	});
});