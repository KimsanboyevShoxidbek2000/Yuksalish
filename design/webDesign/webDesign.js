$(document).ready(() => {
    let textElement = $('.text');
  
    textElement.on('click', (e) => {
        textElement.removeClass('animate');
      setTimeout(() => textElement.addClass('animate'), 1);
    })
  });