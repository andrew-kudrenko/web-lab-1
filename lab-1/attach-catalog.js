const cars = [
    {title: 'Toyota Chaser', photo: 'chaser.png'},
    {title: 'KIA Stinger', photo: 'stinger.png'},
    {title: 'Toyota Corolla', photo: 'corolla.png'},
    {title: 'Toyota Mark 2', photo: 'mark2.png'},
    {title: 'Mazda RX7', photo: 'rx7.png'},
    {title: 'Subaru Impreza WRX', photo: 'wrx-sti.png'},
    {title: 'Nissan Silvia S15', photo: 'silvia-s15.png'},
    {title: 'Jaguar F-Type', photo: 'jaguar-f-type.png'},
]

const assetsDir = './assets/images'

attachCardsIntoCatalog(cars.map(car => ({...car, photo: resolvePhotoUrl(assetsDir, car.photo)})))

function attachCardsIntoCatalog(cars) {
    const $catalog = document.getElementById('car-catalog')

    if ($catalog) {
        cars.forEach(appendCardElement.bind(null, $catalog))
    } else {
        console.warn('Element "#car-catalog" isn\'t found')
    }
}

function appendCardElement(target, car) {
    target.appendChild(createCardElement(car))
}

function createCardElement({title, photo}) {
    const rootClassName = 'car-catalog-card' 

    const $root = document.createElement('div')
    
    $root.className = rootClassName
    $root.append(
        createCardPhotoElement(rootClassName, photo), 
        createCardTitleElement(rootClassName, title)
    )
    
    return $root
}

function createCardTitleElement(rootClassName, title) {
    const $title = document.createElement('h4')

    $title.className = `${rootClassName}__title`
    $title.innerText = title

    return $title
}

function createCardPhotoElement(rootClassName, photo) {
    const $photo = document.createElement('div')

    $photo.className = `${rootClassName}__photo`
    $photo.style.backgroundImage = photo

    return $photo
}

function resolvePhotoUrl(assetsDir, filename) {
    return `url(${assetsDir}/${filename})`
}
