fetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cdogecoin%2Cethereum%2Clitecoin%2Ctether%2Cripple&vs_currencies=usd&include_24hr_change=true'
)
  .then((res) => res.json())
  .then((json) => {
    const container = document.querySelector('.container');
    const coins = Object.getOwnPropertyNames(json);

    for (let coin of coins) {
      const coinInfo = json[`${coin}`];
      const price = coinInfo.usd;
      const change = coinInfo.usd_24_change.toFixed(5);
    }
  });
