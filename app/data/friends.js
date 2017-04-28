// ===============================================================================
// DATA
// Below data will hold all of the firends survey.
// Initially we just set it equal to a "dummy" friend data.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
"name": "Steve",
"photo": "http://target.scene7.com/is/image/Target/51939462?wid=350&hei=350&fmt=pjpeg",
"scores": [
"5",
"1",
"4",
"4",
"5",
"1",
"2",
"5",
"4",
"1"
]
},
{
"name": "Alice",
"photo": "https://pbs.twimg.com/profile_images/660946436801101824/niM7azZS.jpg",
"scores": [
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1"
]
},
{
"name": "Jason",
"photo": "http://www.theamazingpics.com/wp-content/uploads/2014/03/Amazing-Picture-of-a-Lavender-Field-at-Sunset-By-Tomas-Vocelka.jpg",
"scores": [
"3",
"3",
"3",
"3",
"3",
"3",
"3",
"3",
"3",
"3"
]
},
{
"name": "Kat",
"photo": "https://s-media-cache-ak0.pinimg.com/736x/8b/d1/b8/8bd1b8b02e9cb633adb1d789dd4588c6.jpg",
"scores": [
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1",
"1"
]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
