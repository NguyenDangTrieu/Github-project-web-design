
 function search() {
    var searchQuery = document.querySelector(".box input").value.toLowerCase();
    switch (searchQuery) {
        case "dép":
            var pageUrl = "/TrangchuDep.html";
            window.location.href = pageUrl;
            case "giày":
            break;
            var pageUrl = "/TrangchuGiay.html";
            window.location.href = pageUrl;
            break;
        case "kính":
            var pageUrl = "/TrangchuKinh.html";
            window.location.href = pageUrl;
            break;
        case "giày":
            var pageUrl = "/TrangchuPhuKien.html";
            window.location.href = pageUrl;
            break;
        default:
            alert("Không tìm thấy kết quả đâu.");
        }
}
    
function handleKeyPress(event) {
    if (event.key === "Enter") {
    event.preventDefault(); 
    search();
    }
}