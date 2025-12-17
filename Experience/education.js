document.addEventListener('DOMContentLoaded', () => {
    const timeline_wrapper = document.querySelector('.timeline-wrapper');
    const timelines = document.querySelectorAll('.timeline li .info');

for(const time of timelines){
    time.onclick = ()=> time.classList.toggle('show');
}

    timeline_wrapper.addEventListener('mousemove', (event)=> {
        const timeline = document.querySelector('.timeline');
        let scroll_width = event.pageX / timeline_wrapper.clientWidth 
                    * (timeline_wrapper.clientWidth - timeline_wrapper.clientWidth);

            timeline.style.left = (scroll_width.toFixed(1)) + 'px';
    });
});
//Timeline code was learned from CodingDesign "Simple Interactive Timeline Using Vanilla Javascript"