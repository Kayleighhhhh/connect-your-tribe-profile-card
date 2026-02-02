document.addEventListener('DOMContentLoaded', () => {
  const candles = document.querySelectorAll('.candle');
  const hiddenCard = document.getElementById('hidden');

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      candle.classList.toggle('lit');

      const allLit = Array.from(candles).every(c => c.classList.contains('lit'));
      if (allLit) {
        hiddenCard.classList.add('show'); 
      } else {
        hiddenCard.classList.remove('show'); 
      }
    });
  });
});