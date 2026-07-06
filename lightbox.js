(function(){
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<img alt=""><div class="lb-cap"></div>';
  document.body.appendChild(lb);
  const im = lb.querySelector('img');
  const cap = lb.querySelector('.lb-cap');

  function close(){
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.shot.filled img').forEach(function(i){
    i.addEventListener('click', function(e){
      e.preventDefault();
      im.src = i.src;
      cap.textContent = i.alt || '';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });
})();
