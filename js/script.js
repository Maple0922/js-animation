$(function(){
  const spaceWidth = $('.main__space').innerWidth();
  const spaceHeight = $('.main__space').innerHeight();

  const randomInt = (m,n) => {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random()*(n-m+1)) + m;
  }

  const random = () => {
    const randomLeft = randomInt(0,spaceWidth);
    const randomTop = randomInt(0,spaceHeight);
    return {left:randomLeft,top:randomTop};
  }

  // polkadot
  const polkadot = $('.polkadot').children('.main__space');

  setInterval(function(){
    const randomPoint = random();
    const dot = $('<p>');

    dot.css({
      'top': randomPoint.top,
      'left': randomPoint.left,
    });
    polkadot.append(dot);

    console.log('fot');

    setTimeout(function(){
      $('p').addClass('transform');
    },10);

  },10);
});
