// script.js - lightweight interactions for navigation, simple animations

// Mobile menu toggle (very simple)
(function(){
  const btn = document.getElementById('mobile-toggle');
  const nav = document.getElementById('nav-links');
  if(btn){
    btn.style.display = 'inline-block';
    btn.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    })
  }

  // Fade-up reveal on scroll
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('in')
    })
  },{threshold:0.12})
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el))
})();