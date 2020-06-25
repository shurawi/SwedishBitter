
/*В блоке 'comment' при нажатии на 'comment__button' переключает русскоязычные отзывы на англоязычные и на оборот.*/

var commentContainerRu = document.querySelector('.comment__container--ru');
var commentContainerEn = document.querySelector('.comment__container--en');
var commentButtonRu = document.querySelector('.comment__button--ru');
var commentButtonEn = document.querySelector('.comment__button--en');

commentButtonRu.addEventListener ("click", function() {
  commentButtonRu.classList.remove('comment__button--disable');
  commentButtonRu.classList.add('comment__button--enable');
  commentButtonEn.classList.remove('comment__button--enable');
  commentButtonEn.classList.add('comment__button--disable');
  commentContainerRu.classList.remove('comment__container--disable')
  commentContainerEn.classList.add('comment__container--disable')
})

commentButtonEn.addEventListener ("click", function() {
  commentButtonEn.classList.remove('comment__button--disable');
  commentButtonEn.classList.add('comment__button--enable');
  commentButtonRu.classList.add('comment__button--disable');
  commentButtonRu.classList.remove('comment__button--enable');
  commentContainerEn.classList.remove('comment__container--disable')
  commentContainerRu.classList.add('comment__container--disable')
})
