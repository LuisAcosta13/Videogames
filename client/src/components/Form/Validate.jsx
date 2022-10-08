export default function Validate(input) {
    
    let errors = {};
    
    if(!input.name){
        errors.name = 'Name your adventure';
    } else if (!/\S/.test(input.name)){
        errors.name = 'This name is invalid'
    }
  
    if(!input.description_raw){
        errors.description_raw = 'Description is required';
    } else if ((!/\S/.test(input.description_raw))){
        errors.description_raw = 'Description is invalid'
    }
    
    if(!input.released){
        errors.released = 'Launch date is required';
    } else if (!/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(input.released)){
        errors.released = 'This date is invalid'
    }

    if(!input.rating){
        errors.rating = 'A rating is required';
    } else if (!/^([0-5])$/.test(input.rating)){
        errors.rating = 'This rating is invalid'
    }

    return errors;
}
