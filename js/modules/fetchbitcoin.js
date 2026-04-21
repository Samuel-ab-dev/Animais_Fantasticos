export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcprice = document.querySelector(target);
      btcprice.innerText = (50 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((err) => {
      console.log(Error(err));
    });
}
