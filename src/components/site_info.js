export const content_dic = {
    'about rhema' : [
        'about banner',
        'mission statement',
        'brief history',
        {'team statement' : 'our experts'},
        'awards',
        'press'
    ],
    'backline rentals' : [
        'rental banner',
        'rental process breakdown',
        "l'acoustics statement",
        {'browse our inventory': 'inventory'},
        {'start a rental request': 'rental request'}
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
        'point of contact: phone input',
        {'switch booking type' : 'rental request'}
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
    ],
    'home' : [
        {'promo banner' : 'about rhema'},
        {'live sound section': 'live sound'},
        {'backline rentals section': 'backline rentals'}
    ],
    'inventory' : [
        'inventory banner',
        {'item categories' : 'inventory :category'},
    ],
    'inventory :category': [
        'category banner',
        'listed items with photos, rental button, and purchase price if for sale',
        {'filter by brand' : 'inventory :category :brand'},
        { 'relative navigation' : 'inventory'}
    ],
    'inventory :category :brand': [
        'brand showcase item',
        'listed items with photos, rental button, and purchase price if for sale',
        { 'relative navigation' : 'inventory'},
        { 'relative navigation' : 'inventory :category'}
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
    'live sound' : [
        'live sound banner',
        {'service list' : 'services :service'},
        'highlighted client accolades'        
    ],
    'menu' : [
        {'live sound': 'live sound'},
        {'backline rentals': 'backline rentals'},
        {'about rhema': 'about rhema'},
        {'our experts': 'our experts'},
        {'our inventory': 'inventory'},
        {'contact us': 'contact us'},
    ],
    'our experts': [
        'team banner',
        'sound engineers section with pics names and summaries',
        'tech section with pics and names',
        'supporting staff section with pics names and titles',
        {'Info about working at Rhema': 'join rhema'}
    ],
    'rental request': [
        'date input',
        'time input',
        'rental checklist',
        'point of contact: name input',
        'point of contact: email input',
        'point of contact: phone input',
        {'browse our inventory': 'inventory'},
        {'switch booking type' : 'book live sound'}
    ],
    'root' : [
        {'logo' : 'home'},
        {'menu' : 'menu'},
        'phone number',
        {'book' : 'book'}
    ],
    'services :service' : [
        'service banner',
        'service description',
        'previous clients list',
        'image gallery'
    ]
}
console.log(Object.keys(content_dic))
export const summary_dic = {
    'about rhema': 'The face of your company. Its a great spot to showcase all your strengths and win client trust',
    'backline rentals': 'A place to relay general information about rentals and the rental process',
    'book': 'A landing spot to start the rhema booking process. Users will select type of booking and be redirected accordingly',
    'book live sound' : 'A form for your perspective event clients. These forms can be collected in an email of your choosing.',
    'contact us': 'A landing site for all types of client communication. Users will be given a selection of inquiry types, and be redirected accordingly.',
    'general inquiries': 'A page for all communication that does not fall into the 3 essential categories: Rental Booking, Live Sound Booking, or Employment.',
    'home': 'Your main page. This is the most crucial element of your site, and the right spot to wow your users. Think of this page as a visual elevator pitch. Establish your business offerings and set yourself apart from your competition',
    'inventory': 'A landing site for users who wish to browse your inventory. Users can select an equipment category and be redirected to the appropriate inventory',
    'inventory:category': 'A searchable page containing all of your inventory. Each item will have a picture, a description, an option for renting, and an option for purchasing, if the item is for sale. For larger categories, inventory pages will be filterable by brand.',
    'inventory:category:brand': 'A category page displaying only items of a particular brand. Each item will have a picture, a description, an option for renting, and an option for purchasing, if the item is for sale.',
    'join rhema': 'A place for perspective employees to submit their information. Even if you are not currently hiring, this can be a great way to maintain a pool of talent with genuine interest in your operation for future engagement.',
    'live sound': 'A page containing general information about the live audio side of your business. Showcase your expertise and convince them that Rhema is the right choice for their needs. Present a list of specialized events that each link to short promotional pages about your experience and expertise for said event type.',
    'menu': 'A quick list of all your major site links, accessible at all times through the root.',
    'our experts': 'A page to showcase the people that make up Rhema. Using this space to express gratitude toward your team and showcase individual talents can help promote a sense of unity and strength to your operation, which will in turn increase client confidence.',
    'rental request':'A form for your perspective rental clients. These forms can be collected in an email of your choosing. Rental forms have a special save feature for users who wish to add items to their rental order one by one through your inventory pages, or all at once via the form.',
    'root': "A sort of 'meta' page that is always accessible. Your root consists of the traditional logo and menu, with a bonus footer containing a book now button and your business phone number", 
    'services:service': "A short page detailing the finer points and expertise of a given event type (ie headliners)"
}