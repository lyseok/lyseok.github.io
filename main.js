document.addEventListener('DOMContentLoaded', () => {
  const item2 = document.getElementById('item-2');
  const item3 = document.getElementById('item-3');
  const item6 = document.getElementById('item-6');
  const items = document.querySelectorAll('.grid-item');

  item2.addEventListener('click', () => {
    window.open('https://www.instagram.com/yunse0_k/', '_blank');
  });

  item3.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = '#721CE3';
  });

  item3.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#141414'; 
  });

  item6.addEventListener('mouseover', () => {
    item6.style.transform = 'scale(1.4)';
    item6.style.zIndex = '10';

    items.forEach(item => {
      if (item !== item6) {
        const itemId = item.id.split('-')[1];
        switch (itemId) {
          case '1':
            item.style.transform = 'translateY(-70px)';
            break;
          case '2':
            item.style.transform = 'translateY(-70px)';
            break;
          case '3':
            item.style.transform = 'translateY(-70px)';
            break;
          case '4':
            item.style.transform = 'translateX(100px)';
            break;
          case '5':
            item.style.transform = 'translateX(-100px)';
            break;
          case '7':
            item.style.transform = 'translateX(100px)';
            break;
          case '8':
            item.style.transform = 'translateX(-100px)';
            break;
          case '9':
            item.style.transform = 'translateY(70px)';
            break;
          case '10':
            item.style.transform = 'translateY(70px)';
            break;
        }
      }
    });
  });

  item6.addEventListener('mouseout', () => {
    item6.style.transform = 'scale(1)';
    item6.style.zIndex = '0';

    items.forEach(item => {
      item.style.transform = 'translate(0, 0)';
    });
  });

  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      if (item !== item6) {
        item.classList.add('hover');
      }
    });

    item.addEventListener('mouseout', () => {
      if (item !== item6) {
        item.classList.remove('hover');
      }
    });
  });
});