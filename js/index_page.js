document.querySelectorAll('.calls').forEach(btn => btn.onclick = () => location.href = './pages/calls.html');
document.querySelectorAll('.classes').forEach(btn => btn.onclick = () => location.href = './pages/classes.html');
document.querySelectorAll('a').forEach(el => el.setAttribute('target', '_blank'));