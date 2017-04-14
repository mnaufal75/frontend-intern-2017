function toComma(x) {
    return "Rp " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// $(document).ready(function () {
// 	$('.harga-barang').each(function(index) {
// 		console.log( $(".harga-barang")[index].innerHTML );
// 		$(".harga-barang")[index].html(toComma( $(".harga-barang")[index].innerHTML ));
// 	});
// });

var hargas = document.getElementsByClassName("harga-barang");

for(var i = 0; i < hargas.length; i++) {
	var harga = hargas[i];
	harga.innerHTML = toComma(harga.innerHTML);
}