export const site_dic = {
    'root' : [
        {'logo' : 'home'},
        {'menu' : 'menu'},
        'phone number',
        {'book' : 'book'}
    ],
    'book' : [
        {'rental booking': 'rental request'},
        {'book live sound': 'book live sound'}
    ],
    'book live sound' : [
        'location input',
        'date input',
        'time input',
        'select event type',
        'event notes input',
        'point of contact: name input',
        'point of contact: email input',
        'point of contact: phone input'
    ],
    'rental request': [
        'date input',
        'time input',
        'rental checklist',
        'point of contact: name input',
        'point of contact: email input',
        'point of contact: phone input',
        {'browse our inventory': 'inventory'}
    ],
    'menu' : [
        {'live sound': 'live sound'},
        {'backline rentals': 'backline rentals'},
        {'about rhema': 'about rhema'},
        {'our experts': 'our experts'},
        {'our inventory': 'inventory'},
        {'contact us': 'contact us'},
    ],
    'home' : [
        {'promo banner' : 'about rhema'},
        {'live sound section': 'live sound'},
        {'backline rentals section': 'backline rentals'}
    ],
    'about rhema' : [
        'about banner',
        'mission statement',
        'brief history',
        {'team statement' : 'our experts'},
        'awards',
        'press'
    ],
    'live sound' : [
        'live sound banner',
        {'service list' : 'services:service'},
        'highlighted client accolades'        
    ],
    'services:service' : [
        'service banner',
        'service description',
        'previous clients list',
        'image gallery'
    ],
    'backline rentals' : [
        'rental banner',
        'rental process breakdown',
        "l'acoustics statement",
        {'browse our inventory': 'inventory'},
        {'start a rental request': 'rental request'}
    ],
    'inventory' : [
        'inventory banner',
        {'item categories' : 'inventory:category'},
    ],
    'inventory:category': [
        'category banner',
        'listed items with photos, rental button, and purchase price if for sale',
        {'filter by brand' : 'inventory:category:brand'},
        { 'relative navigation' : 'inventory'}
    ],
    'inventory:category:brand': [
        'brand showcase item',
        'listed items with photos, rental button, and purchase price if for sale',
        { 'relative navigation' : 'inventory'},
        { 'relative navigation' : 'inventory:category'}
    ],
    'our experts': [
        'team banner',
        'sound engineers section with pics names and summaries',
        'tech section with pics and names',
        'supporting staff section with pics names and titles',
        {'join rhema': 'join rhema'}
    ],
    'join rhema': [
        'name input',
        'location input',
        'desired role input',
        'experience input section',
        'resume upload',
        'personal statement input',
        'transportation disclaimer',
        'phone number input',
        'email input',
    ],
    'contact us' : [
        {'booking' : 'book'},
        {'join rhema': 'join rhema'},
        {'other inquiries' : 'general inquiries'}
    ],
    'general inquiries' : [
        'name input',
        'email input',
        'select inquiry type',
        'description/ question input'
    ]


}
// navigating the dictionary
let links = new Array
Object.keys(site_dic).forEach((page)=>{
    // console.log(`page: ${page}`)
    site_dic[page].forEach((item)=>{
        if(typeof(item)=== 'object'){
            const [[itemContent , link]] = Object.entries(item)
            // console.log(`item: ${itemContent} link: ${link}`)
            links.push(link)
        }else{
            // console.log(item)
        }
    })
})
console.log(links)