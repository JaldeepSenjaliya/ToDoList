
exports.getDate = function() {
    
    const today = new Date();
    
    const options = {
        weekday : "long",
        month: "long",
        day: "numeric"
    };
    
    return today.toLocaleDateString("en-CN", options);
}

exports.getDay = function() {
    
    const today = new Date();
    
    const options = {
        weekday : "long",
    };
    
    return today.toLocaleDateString("en-CN", options);
}