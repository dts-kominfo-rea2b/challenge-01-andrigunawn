// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = { 
    name : "Monica",
    gender : "female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : ["Yellow","Pink","White","Purple"],
    isHavePet : "Yes",
    education : [
        {
            name : 'SD 01',
            city : 'Jakarta',
            graduate : 2016},
        {
            name : 'SMP 02',
            city : 'Jakarta',
            graduate : 2019
        },
        {
            name : 'SMA 03',
            city : 'Tangerang',
           
        }
    ],
    favoriteRestaurant :["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"],

};
const secondUser = { 
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoritColor : ["Blue","Black","Grey"],
    isHavePet : "Yes",
    education : [
        {
            name : 'SD 01',
            city : 'Jakarta',
            graduate : 2016},
        {
            name : 'SMP 02',
            city : 'Jakarta',
            graduate : 2019
        },
        {
            name : 'SMA 03',
            city : 'Tangerang',
        
        }
    ],
    favoriteRestaurant : new ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Eggy"]
};
 console.log(firstUser);
 
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);





// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};