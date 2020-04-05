
/*В блоке 'comment' при нажатии на 'comment__button' переключает русскоязычные отзывы на англоязычные и на оборот.*/

let commentContainerRu = document.querySelector('.comment__container--ru');
let commentContainerEn = document.querySelector('.comment__container--en');
let commentButtonRu = document.querySelector('.comment__button--ru');
let commentButtonEn = document.querySelector('.comment__button--en');

commentButtonRu.onclick = function() {
  commentButtonRu.classList.toggle('comment__button--disable');
  commentButtonRu.classList.toggle('comment__button--enable');
  commentButtonEn.classList.toggle('comment__button--disable');
  commentButtonEn.classList.toggle('comment__button--enable');
  commentContainerRu.classList.toggle('comment__container--disable');
  commentContainerEn.classList.toggle('comment__container--disable')
}

commentButtonEn.onclick = function() {
  commentButtonEn.classList.toggle('comment__button--disable');
  commentButtonEn.classList.toggle('comment__button--enable');
  commentButtonRu.classList.toggle('comment__button--disable');
  commentButtonRu.classList.toggle('comment__button--enable');
  commentContainerEn.classList.toggle('comment__container--disable')
  commentContainerRu.classList.toggle('comment__container--disable');
}
