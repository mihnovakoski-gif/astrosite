(function () {
  var box = document.getElementById('status');
  if (!box) return;
 
  var now = new Date();
  var day = now.getDay();
  var minutes = now.getHours() * 60 + now.getMinutes();
  var open = false;
 
  if (day >= 1 && day <= 5) open = minutes >= 540 && minutes < 1080;
  else if (day === 6) open = minutes >= 540 && minutes < 810;
 
  box.classList.toggle('open', open);
  document.getElementById('status-text').textContent = open ? 'Aberto agora' : 'Fechado agora';
})();
