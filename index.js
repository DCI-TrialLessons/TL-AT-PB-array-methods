

//  1 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const mappedArray = arrayOfNumbers.map(el => el + 1);
console.log(mappedArray);




// 2
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
function filterFriends(friendsArray, key) {
    return friendsArray.filter(el => el.includes(key));
}

console.log(filterFriends(friends, "i"));

