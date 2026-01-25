exports.getToday = ()=>{
    return new Date();
}

exports.getMyDay = function(){
    return new Date().getDay();
}

exports.getMyMonth = function(){
    return new Date().getMonth()+1;
}

exports.getMyYear = ()=>{
    return new Date().getFullYear();
}
