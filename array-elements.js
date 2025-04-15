
//Splice

const arr = ['Rashad', 'Michael', 'Ethan', 'Nakpan', 'Rashmann'];
const x = arr.splice(1, 3);
   console.log(x);

//Slice

const activeUsers = ['Rashad', 'Ethan', 'Michael', 'Rashmann', 'Twist', 'SquareMan'];
const active = activeUsers.slice(2, 4);
   console.log(active)

//Calling a value in an array

const badBoys = ['Square', 'Jay', 'Ishfak', 'Kwabena', 'Akwasi', 'Sampson'];
   console.log (badBoys[1]);


//Adding a value to the end of an array

const add = ['Square', 'Jay', 'Ishfak', 'Kwabena', 'Akwasi', 'Sampson'];
   add.push('Rashmann');
      console.log(add);

//Adding a value to the start of an array

const firstValue = ['Square', 'Jay', 'Ishfak', 'Kwabena', 'Akwasi', 'Sampson'];
 firstValue.unshift ('Rashmann');
   console.log (firstValue);

//Deleting the last value from an array

const delValue = ['Square', 'Jay', 'Ishfak', 'Kwabena', 'Akwasi', 'Sampson'];
   delValue.pop();
      console.log(delValue);

// Create an array and use the 'includes' element to call out a value

const incValue = ['Square', 'Jay', 'Ishfak', 'Kwabena', 'Akwasi', 'Sampson'];
 if (incValue.includes ('Jay') && incValue.includes ('Kofi')) {
   console.log('True');
 } else {
   console.log('Not true');
 }
