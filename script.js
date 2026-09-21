(function(){
  var btn = document.getElementById('theme');
  function dark(){
    var t = document.documentElement.getAttribute('data-theme');
    if(t) return t === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paint(){
    var on = dark();
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.textContent = on ? 'Tema claro' : 'Tema escuro';
  }
  btn.addEventListener('click', function(){
    document.documentElement.setAttribute('data-theme', dark() ? 'light' : 'dark');
    paint();
    try{ localStorage.setItem('astro-theme', document.documentElement.getAttribute('data-theme')); }catch(e){}
  });
  try{
    var saved = localStorage.getItem('astro-theme');
    if(saved) document.documentElement.setAttribute('data-theme', saved);
  }catch(e){}
  paint();

  var box = document.getElementById('status');
  if(box){
    var now = new Date(), d = now.getDay(), m = now.getHours()*60 + now.getMinutes(), open = false;
    if(d >= 1 && d <= 5) open = m >= 540 && m < 1080;
    else if(d === 6) open = m >= 540 && m < 810;
    box.classList.toggle('open', open);
    document.getElementById('status-text').textContent = open ? 'Aberto agora' : 'Fechado agora';
  }
})();
