document.getElementById("showcart").style.display = "none";

var giohang = new Array();

function search() {
    var searchQuery = document.querySelector(".box input").value.toLowerCase();
    switch (searchQuery) {
        case "dép":
            var pageUrl = "/TrangchuDep.html";
            window.location.href = pageUrl;
            break;
        case "giày":
            var pageUrl = "/TrangchuGiay.html";
            window.location.href = pageUrl;
            break;
        case "kính":
            var pageUrl = "/TrangchuKinh.html";
            window.location.href = pageUrl;
            break;
        case "phụ kiện":
            var pageUrl = "/TrangchuPhuKien.html";
            window.location.href = pageUrl;
            break;
        case "clean":
            var pageUrl ="/TrangchuSneakerClean.html";
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

// gio hang

function themvaogiohang(x) {
    var detailPd = document.getElementById('detail-pd');
    var imgSrc = detailPd.querySelector('.detail-pd-pic img').src;
    var pdName = detailPd.querySelector('.pd-name span').innerText;
    var sizeValue = "Nomal";
    var price = detailPd.querySelector('.detail-pd-info h3 span').textContent;
    var sp = new Array(imgSrc, pdName, sizeValue, price);
    console.log(giohang);
    giohang.push(sp);
    showmycart();
}

function showmycart()
{
    var ttgh ="";
    var tong = 0
    for(let i = 0; i< giohang.length;i++)
    {
        var tt = parseFloat(giohang[i][3])*1000000;
        tong+=tt;
        ttgh +='<tr>'+
        '<td>'+(i+1)+'</td>'+
        '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
        '<td>'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][3]+'</td>'+
        '<td>'+giohang[i][2]+'</td>'+
        '<td>'+tt+'</td>'+
    '</tr>';
    }
    ttgh+='<tr>'+
    '<td colspan="5">Tổng Đơn Hàng</td>'+
    '<td class="total">'+tong+'</td>'+
    '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}
function showcart()
{
    if(document.getElementById("showcart").style.display ==="none")
        document.getElementById("showcart").style.display ="block";
        else document.getElementById("showcart").style.display ="none";
}
  
  
  
  