"use strict";
let Guest_list = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n\n');
}
let absent_Guest = 'Imran khan';
let new_Guest = 'Kamran Khan Tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n\n');
}
console.log(`Mr.${absent_Guest} is not coming in party`);
