var ARGUMENTS = ""

function getPlymouth(){
    var _IsPlymouth = document.getElementById("plymouth_enable");
    if (_IsPlymouth.checked) {
        ARGUMENTS = ARGUMENTS + " -b";
    }
}

function getClean () {
    var _IsClean = document.getElementById("clean_enable");
    if (_IsClean.checked) {
        ARGUMENTS = ARGUMENTS + " -e"
    }
}

function getTarball () {
    var _IsTarball = document.getElementById("tarball_enable");
    if (_IsTarball.checked) {
        ARGUMENTS = ARGUMENTS + " --tarball";
    }
}

function getCompType () {
    var _Comptype = document.getElementById('sfs-comp-type').value;
    if (_Comptype != "zstd" && _Comptype != "") {
        ARGUMENTS = ARGUMENTS + " -c \"" + _Comptype + "\"";
    }
}

function getUsername (){
    var _Username = document.getElementById("username").value;
    // console.log(_Username);
    if (_Username != "alter" && _Username != "" ) {
        ARGUMENTS = ARGUMENTS + " -u \"" + _Username + "\"";
    }
}

function getPassword (){
    var _Password = document.getElementById("password").value;
    //console.log(_Password);
    if (_Password != "alter" && _Password != "" ) {
        ARGUMENTS = ARGUMENTS + " -p \"" + _Password + "\"";
    }
}

function getDebug () {
    var _IsDebug = document.getElementById("debug_enable");
    if (_IsDebug.checked) {
        ARGUMENTS = ARGUMENTS + " -d"
    }
}

function startgen() {
    // 初期化
    ARGUMENTS = ""

    getPlymouth();
    getClean();
    getCompType();
    getUsername();
    getPassword();
    getDebug();
    
    // 出力
    document.getElementById('output').innerHTML = "";
    if (ARGUMENTS == "") {
        document.getElementById('output').innerHTML = "引数は必要ありません";
    } else {
        document.getElementById('output').innerHTML = ARGUMENTS;
    }
}