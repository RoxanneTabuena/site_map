export const site_dic = {
    'root' : [
        {'logo' : 'home'},
        {'me nu' : 'menu'},
        'phone number',
        {'book' : 'book'}
    ]
}
// navigating the dictionary
Object.keys(site_dic).forEach((page)=>{
    console.log(`page: ${page}`)
    site_dic[page].forEach((item)=>{
        if(typeof(item)=== 'object'){
            const [[itemContent , link]] = Object.entries(item)
            console.log(`item: ${itemContent} link: ${link}`)
        }else{
            console.log(item)
        }
    })
})