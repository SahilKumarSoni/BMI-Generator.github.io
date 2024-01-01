const form = document.querySelector('form')

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    console.log(results);
    
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height!"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight!"
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(1)
        //show the result
        if(bmi<18.6){
            results.innerHTML = `<span>The BMI is ${bmi}<br> You're Under Weight</span>`
        }else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<span>The BMI is ${bmi}<br> You've Normal Weight</span>`
        }else if(bmi>24.9){
            results.innerHTML = `<span>The BMI is ${bmi}<br> You're Over Weight</span>`
        }
    }
})