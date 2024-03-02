$(function(){

  $('.gallery').magnificPopup({
    delegate: 'a', //子要素であるaタグを対象とする
    type: 'image',
    gallery: { enabled: true }, //ギャラリー化する
  });

});