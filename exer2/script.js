const timelineButtons = document.querySelectorAll(".timeline-button");
for (let i = 0; i < timelineButtons.length; i++) {
    const currentButton = timelineButtons[i];
    currentButton.addEventListener("click", function() {
        const timelineItem = currentButton.parentElement;
        if (timelineItem.classList.contains("active")) {
            timelineItem.classList.remove("active");
        } else {
            timelineItem.classList.add("active");
        }
    });
}
