function checkAcl(token, topic, clientid, acc, username, claims) {
    console.log("acl_script:checkAcl -------------------------------------");
    console.log("checkAcl: token = " + token);
    console.log("checkAcl: topic = " + topic);
    console.log("checkAcl: clientid = " + clientid);
    console.log("checkAcl: acc = " + acc);
    console.log("checkAcl: username = " + username);
    console.log("checkAcl: subs = " + claims.subs);
    console.log("checkAcl: publ = " + claims.publ);
    console.log("---------------------------------------------------------");  
 
    var accREAD = 1;
    var accWRITE = 2;
    var accREADWRITE = 3;
    var accSUBSCRIBE = 4;

    if(acc == accSUBSCRIBE) {
        foundIndexSubs = claims.subs.indexOf(topic);
        if(foundIndexSubs < 0) {
            return false;
        } else {
            return true;
        }
    } else if(acc == accREADWRITE) {
        foundIndexSubs = claims.subs.indexOf(topic);
        foundIndexPubl = claims.publ.indexOf(topic);
        if(foundIndexSubs < 0 || foundIndexPubl < 0) {
            return false;
        } else {
            return true;
        }
    } else if(acc == accWRITE) {
        foundIndexPubl = claims.publ.indexOf(topic);
        if(foundIndexPubl < 0) {
            return false;
        } else {
            return true;
        }
    } else if(acc == accREAD) {
        foundIndexSubs = claims.subs.indexOf(topic);
        if(foundIndexSubs < 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

checkAcl(token, topic, clientid, acc, username, claims);
