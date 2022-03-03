const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
    removeBorder()
    removeShow()
    this.classList.add("tab-border");
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}
function removeBorder() {
    tabItems.forEach(item=>item.classList.remove("tab-border"))
    
}
function removeShow() {
    tabContent.forEach(item=>item.classList.remove("show"))
    
}
tabItems.forEach(item=>item.addEventListener("click",selectItem))
