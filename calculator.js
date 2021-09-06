function computeLoan() {

	var totale = document.getElementById('totale').value;
	var tasso_interesse = document.getElementById('tasso_interesse').value;
	var mesi = document.getElementById('mesi').value;
	var interest = (totale * (tasso_interesse * .01)) / mesi;
	var payment = ((totale / mesi) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Quota_mensile = $"+payment;

}