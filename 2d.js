/*
    Fionn McCarthy
    G00414386@atu.ie
*/

// instance ages array
const ages = [25, 31, 42, 77];

// calculate new ages
let d = (value) => {
    // return new array using map() function
    return value.map(number =>
        {   
            // half age if under 70
            if (number < 70) {
                return number /= 2;
            }
            // else return age
            return number;
        }
    );
}

// print out ages
console.log(d(ages));
