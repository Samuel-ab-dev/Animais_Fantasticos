export default function innitFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcprice = document.querySelector(".btc_price");
      btcprice.innerText = (50 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
