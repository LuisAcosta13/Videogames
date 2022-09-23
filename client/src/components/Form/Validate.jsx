export default function Validate(input) {
    let errors = {};
    if(!input.name){
        errors.name = 'Name your adventure';
    } else if (!/\S/.test(input.name)){
        errors.name = 'This name is invalid'
    }
  
    if(!input.description){
        errors.description = 'Description is required';
    } else if ((!/\S/.test(input.description))){
        errors.description = 'Description is invalid'
    }
    
    if(!input.launch_date){
        errors.launch_date = 'Launch date is required';
    } else if (!/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(input.launch_date)){
        errors.launch_date = 'This date is invalid'
    }

    if(!input.rating){
        errors.rating = 'Lauch date is required';
    } else if (!/[0-5]/.test(input.rating)){
        errors.rating = 'This date is invalid'
    }

    return errors;


}
