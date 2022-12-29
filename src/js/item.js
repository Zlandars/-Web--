export default function itemGallery(item) {
    const itemGallery = document.createElement('div')
    itemGallery.classList = 'galleryItem'
    const description = document.createElement('span')
    description.textContent = item.title
    switch (item.src.split('.').pop()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'png':
        case 'svg':
            const image = document.createElement('img')
            image.setAttribute('src', `${item.src}`)
            itemGallery.appendChild(image)
            itemGallery.appendChild(description)
            return itemGallery
        case 'mp3':
            const melody = document.createElement('audio')
            melody.setAttribute("controls", "controls")
            melody.setAttribute('src', `${item.src}`)
            melody.classList = 'audioPlayer'
            itemGallery.appendChild(melody)
            itemGallery.appendChild(description)
            return itemGallery
        default:
            const video = document.createElement('video')
            video.setAttribute("controls", "controls")
            video.setAttribute('src', `${item.src}`)
            video.classList = 'videoPlayer'
            itemGallery.appendChild(video)
            itemGallery.appendChild(description)
            return itemGallery
    }
}
