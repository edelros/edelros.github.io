const elements = document.querySelectorAll("section, .card, .porque-card, .historia-box, .pro-box");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

elements.forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
