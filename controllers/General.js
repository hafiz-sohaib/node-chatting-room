// ========== Home ==========
exports.home = (request, response, next)=> {
    response.render('home');
}

// ========== Support ==========
exports.signup = (request, response, next)=> {
    response.render('auth/sign-up');
}