// cache images
let imgQuery = require.context('../assets/icons', false, /\.(png|svg|jpg|jpeg|gif)$/i);
let iconsArray = importIcons(imgQuery);
console.log('***** ICONS ARRAY *****');
console.log(iconsArray);

// methods
function importIcons(r) {
    let queryKeys = r.keys();
    console.log(queryKeys);
    let icons = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('./')[1];
        let newValue = `./icons/${newKey}`;
        
        icons[newKey] = newValue;
    };

    return icons;
}

export default iconsArray;
