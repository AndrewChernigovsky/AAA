function t(){var t=document.querySelectorAll(".advantages-list__item"),e=0;function n(){if(e<t.length){var r=t[e],o=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(o.unobserve(r),function(t){var r=t.textContent;t.textContent="";var o=0,i=setInterval((function(){o<r.length?(t.textContent+=r[o],o++):(clearInterval(i),e++,n())}),30);t.classList.add("visible")}(r))}))}));o.observe(r)}}n()}export{t as initIHereAnimation};
