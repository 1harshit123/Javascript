// const mynums=[1,23,4,5,6,76]
// const mytotal=mynums.reduce((acc,curr)=>{
//     console.log(`acc: ${acc} and curr: ${curr}`)
//     return acc+curr
// },0) //here 0 is the initial value of acc

// console.log(mytotal)

const myshopping=[
    {
        itemname:"cricket kit",
        price:20943
    },
    {
        itemname:"skates",
        price:943
    },
    {
        itemname:"bayblades",
        price:350
    }
]

const total=myshopping.reduce((acc, item)=>acc + item.price,0)

console.log(total);