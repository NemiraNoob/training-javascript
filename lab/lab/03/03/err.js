class LabError extends Error {
    message(){
        super.message();
        console.log('teeeeeeeeesertgfdzef');
    }
}

function callSum(a, b){
    if(isNaN(a+b)){
        let err = new LabError();
        err.message;
    }

    else{
        console.log(a + b);
    }
}