const userDob = document.getElementById('date')
const btnAge = document.getElementById('btn')
const userAge = document.getElementById('curAge')

function calcAge() {
    const birthval = userDob.value
    if(birthval === ""){
        alert("Please Enter your Date of Birth")
    }
    else{
        const age = getAge(birthval)
        userAge.innerHTML = `Your Age is ${age} ${age >1 ? "Years" : "Year"}`
    }
}

function getAge(birthval) {
    const curYear = new Date()
    const userYear = new Date(birthval)

    const realAge = curYear.getFullYear() - userYear.getFullYear()
    return realAge   
}

document.getElementById('myForm').reset()
