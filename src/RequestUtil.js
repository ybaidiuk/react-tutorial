export function getBitcoinPrice() {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
}
