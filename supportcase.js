// refresh case after 5 minutes
var refreshVar = setInterval(refreshPage, 300000);

//refreshpage!
function refreshPage() {
    location.reload();
    return false;
}
