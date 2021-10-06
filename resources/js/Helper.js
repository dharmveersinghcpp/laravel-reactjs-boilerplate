var env = $("#env").val();
if(env=="local"){
    var BASE_URL = "http://localhost/api/";
} else if(env=="production"){
    var BASE_URL = "http://localhost/api/";
}
export default BASE_URL;