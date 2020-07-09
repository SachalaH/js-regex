// validation script here
const inputs = document.querySelectorAll('input');


const patterns = {
    phone: /^\d{10}$/,
    username: /^\w{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([\w.-]+)@([\w-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i

};

function validate(field, pattern){
    // console.log(pattern.test(field.value))
    if(pattern.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e)=>{
        // console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})