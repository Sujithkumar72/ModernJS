const panels = document.querySelectorAll(".panel");

// for (let i =0; i<panels.length; i++){
//     console.log(panels[i]);
//     i++;
// }

panels.forEach((panel) => {
   panel.addEventListener('click', () => {
       removeActiveClasses();
       panel.classList.add("active");
   });

});

function removeActiveClasses() {
    panels.forEach((panel) =>{
        panel.classList.remove('active');
    });
};