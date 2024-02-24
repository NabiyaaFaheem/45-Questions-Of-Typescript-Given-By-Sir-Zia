// question 40
// make a function
function makealbum(artist, albumtitle, numberoftracks){
    let album = { artist: artist, albumtitle: albumtitle, numberoftracks:numberoftracks};
    if(numberoftracks !== undefined){
        album.numberoftracks = numberoftracks
    }
    return album;
}
let albums =[
    makealbum("arijit singh","sad songs",12),
    makealbum("atif aslam","romantic songs",8),
    makealbum("young stunners","rap songs",10)
]
console.log("the 3 artist  & albumtitle are");
console.log(albums);
