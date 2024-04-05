
document.addEventListener('DOMContentLoaded', function() {
    var queryString = window.location.search;
    var params = new URLSearchParams(queryString);
    var paramString= params.get('params');
    var arr = paramString.split("--");
    for(var i=0;i<arr.length;i++){
       document.getElementById("par"+i).textContent=arr[i];
       if(i==0 && arr[i]!='n'){ document.getElementById('img0').src='pic/'+arr[i]+'.png';
       }
       if(i==14 && arr[i]!='n'){ document.getElementById('img4').src='pic/'+arr[i]+'.png';
    }
    }
});