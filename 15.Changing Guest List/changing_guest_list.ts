let Guest_list: string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

for( let i=0; i<Guest_list.length; i++){
    
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n\n')
}
let absent_Guest: string = 'Imran khan'
let new_Guest: string = 'Kamran Khan Tessori'

Guest_list[0] = new_Guest

for(let i=0; i<Guest_list.length; i++){
    
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you\n\n')
}
console.log(`Mr.${absent_Guest} is not coming in party`)