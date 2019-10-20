const cameras={
    price:450,
    weight:1500,
    //Other way of writing a function
    aboutCam(){
        return `this nikon camera costs around ${this.price}$`
    },
    //Most used way of writing a function
    aboutCam1:function(){
        return `this nikon camera weighs around ${this.weight}gm`
    }

    //Below block of code will give kinda error because of using arrow function
    // aboutCam:()=>{
    //     return `this nikon camera costs around ${this.price}$`
    // }
}
console.log(cameras.aboutCam());
console.log(cameras.aboutCam1());

