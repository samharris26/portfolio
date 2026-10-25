(function(){
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Enlarged image');
  lb.innerHTML = '<button class="lb-close" type="button">Close</button><img alt=""><div class="lb-cap"></div>';
  document.body.appendChild(lb);
  const im = lb.querySelector('img');
  const cap = lb.querySelector('.lb-cap');
  const closeBtn = lb.querySelector('.lb-close');
  let opener = null;

  function open(i){
    opener = i;
    im.src = i.src;
    im.alt = i.alt || '';
    cap.textContent = i.alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close(){
    if(!lb.classList.contains('open')) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
    if(opener) opener.focus();
  }

  document.querySelectorAll('.shot.filled img').forEach(function(i){
    i.setAttribute('tabindex', '0');
    i.setAttribute('role', 'button');
    i.setAttribute('aria-label', 'Enlarge image' + (i.alt ? ': ' + i.alt : ''));
    i.addEventListener('click', function(e){
      e.preventDefault();
      open(i);
    });
    i.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        open(i);
      }
    });
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', function(e){
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') close();
    // the close button is the only focusable control, so keep focus on it
    if(e.key === 'Tab'){ e.preventDefault(); closeBtn.focus(); }
  });
})();
