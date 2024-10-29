// const coding=['js','ruby','java',"python"]
// const value=coding.forEach((item)=>{
//     return item
// })
// console.log(value);
// Not working

const num=[1,2,3,4,5,56,6]
// const newnums=num.filter((num)=>num>4)
// const newnums=num.filter((num)=>{
//     return num>4
// }) //If use scope in this then we should use return 
// console.log(newnums)

// Using forEach method
// const newnames=[]
// num.forEach((item)=>{
//     if (item>4) {
//         newnames.push(item)
//     }
// })
// console.log(newnames)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbook=books.filter((bk)=>bk.publish>2000)

console.log(userbook);


