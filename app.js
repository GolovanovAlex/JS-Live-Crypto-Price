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

      container.innerHTML += `
      <div class="coin falling">
        <div class="coin-logo">
          <img src="images/bitcoin.png" alt="bitcoin" />
        </div>
        <div class="coin-name">
          <h3>bitcoin</h3>
          <span>/USD</span>
        </div>
        <div class="coin-price">
          <span class="price">$23521</span>
          <span class="change">-1.022</span>
        </div>
      </div>
      
      
      
      
      
      `;
    }
  });
