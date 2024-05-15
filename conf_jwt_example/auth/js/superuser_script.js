function checkSuperuser(token, claims) {
    console.log("superuser_script:checkSuperuser -------------------------")
    console.log("checkSuperuser: token = " + token);
    console.log("checkSuperuser: super = " + claims.super);
    console.log("---------------------------------------------------------")

    if (claims.super == 1) {
        return true;
    } else {
        return false;
    }
}

checkSuperuser(token, claims);
