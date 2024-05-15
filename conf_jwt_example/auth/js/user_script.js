function checkUser(token, username, claims) {
    console.log("user_script:checkUser -----------------------------------")
    console.log("checkUser: token = " + token);
    console.log("checkUser: username = " + username);
    console.log("---------------------------------------------------------")
    // assume that if this function is called, the JWT is correct and valid
    // so accept any user
    if (username.trim()) {
        return true;
    }
    return false;
}

checkUser(token, username, claims);
