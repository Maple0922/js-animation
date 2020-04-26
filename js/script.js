$(function(){
  const spaceWidth = $('.main__space').innerWidth();
  const spaceHeight = $('.main__space').innerHeight();

  const randomInt = (m,n) => {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random()*(n-m+1)) + m;
  }

  const randomValue = (darkness,lightness) => {
    const randomLeft = randomInt(0,spaceWidth);
    const randomTop = randomInt(0,spaceHeight);
    const randomRed = randomInt(darkness,lightness);
    const randomGreen = randomInt(darkness,lightness);
    const randomBlue = randomInt(darkness,lightness);
    return {
      left: randomLeft,
      top: randomTop,
      red: randomRed,
      green: randomGreen,
      blue: randomBlue
    };
  }

  // polkadot
  const polkadotSpace = $('.polkadot').children('.main__space');

  const polkadot = (size,fadeOutSecond,repeatSecond,darkness,lightness) => {
    let i=0;

    let timerId = setInterval(function(){
      const random = randomValue(darkness,lightness);
      const dot = $('<p>');

      dot.css({
        'top': random.top,
        'left': random.left,
        'background': `rgb(${random.red},${random.green},${random.blue})`
      });
      polkadotSpace.append(dot);

      dot.animate({
        'width':size,
        'height':size,
        'opacity':'0',
        'top': random.top-(size/2),
        'left': random.left-(size/2),
      },fadeOutSecond);

      setTimeout(function(){
        dot.remove();
      },fadeOutSecond);

      i++;
      if(i>20000/repeatSecond){
        clearInterval(timerId);
      }

    },repeatSecond);

  }

  $('.polkadot').children('.main__button').click(function(){
    // size,fadeOutSecond,repeatSecond,darkness,lightness
    polkadot(200,5000,30,100,220);
  });


  // rain

  const rainSpace = $('.rain').children('.main__space');

  const rain = (size,fadeOutSecond,repeatSecond) => {

    let i=0;

    let timerId = setInterval(function(){
      const random = randomValue(null,null);
      const dot = $('<p>');

      dot.css({
        'top': random.top,
        'left': random.left,
      });
      rainSpace.append(dot);

      dot.animate({
        'width':size,
        'height':size,
        'opacity':'0',
        'top': random.top-(size/2),
        'left': random.left-(size/2),
      },fadeOutSecond);

      setTimeout(function(){
        dot.remove();
      },fadeOutSecond);

      i++;
      if(i>20000/repeatSecond){
        clearInterval(timerId);
      }

    },repeatSecond);
  }

  $('.rain').children('.main__button').click(function(){
    // size,fadeOutSecond,repeatSecond,darkness,lightness
    rain(50,800,40,null,null);
  });

});
