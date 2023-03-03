var boxes = document.querySelectorAll('.box')
var images = document.querySelectorAll('.img')

var currentImg = null

images.forEach(img => {
    img.addEventListener('dragstart', function (e) {
        this.classList.add('dragging')
        currentImg = this
    })
    
    img.addEventListener('dragend', function (e) {
        this.classList.remove('dragging')
    })
})

boxes.forEach( box => {
    box.addEventListener('dragover', function (e) {
        e.preventDefault()
    })

    box.addEventListener('drop', function() {
        if (!box.querySelector('.img')) {
            this.appendChild(currentImg)
        }
    })
})