import _ from 'lodash';
import $ from 'jquery';
import 'jquery-ui';

const spreadAnimateTime = 100;

function spreadItemsAndMakeDraggable() {
  const $container = $('.work-pile__items');
  const containerWidth = $container.width();
  const containerHeight = $container.height();
  $('.work-pile__item').each((index, el) => {
    const $el = $(el);
    const posX = Math.round(Math.random() * (containerWidth - $el.width()));
    const posY = Math.round(Math.random() * (containerHeight - $el.height()));
    $el.css({
      left: posX,
      top: posY
    }).draggable({
      containment: 'parent',
      stack: '.work-pile__item'
    });
  });
}

const spreadDelay = $('.work-pile__item').length * spreadAnimateTime;
_.delay(spreadItemsAndMakeDraggable, 0);
