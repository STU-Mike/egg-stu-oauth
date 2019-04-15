    
**简要描述：** 

- 访问指定的静态页面

**请求URL：** 
- ` /view/<view-name> `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|view-name |是  |string |页面名字，静态页面放在/app/view目录下,暂时有 authorise、callback-app、login 这几个页面 |

 **返回示例**

``` 
 <!--汕头大学校园网账号登录界面-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Login</title>
    </head>
    <body>

登录

        <div>账号：
            <input type="text" id="account">
        </div>
        <div>密码：
            <input type="password" id="password">
        </div>
        <button id="login">登录</button>
    </body>
</html>
<script>
    let button = document.getElementById('login')
    // console.log(window.location.search);


    button.onclick = () => {
        // 登录，验证密码正确性
        let user_id = 123
        let account = document.getElementById("account").value,
            password = document.getElementById("password").value
        console.log(account)
        ajaxPost('/oauth/login','account='+account+'&password='+password,(responseText)=>{
            console.log(responseText)
            responseText=JSON.parse(responseText)
            if(responseText.code === '0'){
                window.location.href = '/view/authorise' + window.location.search
            }
        })
        // ajax 对象
        function ajaxObject() {
            var xmlHttp;
            try {
                // Firefox, Opera 8.0+, Safari
                xmlHttp = new XMLHttpRequest();
            }
            catch (e) {
                // Internet Explorer
                try {
                    xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        alert("您的浏览器不支持AJAX！");
                        return false;
                    }
                }
            }
            return xmlHttp;
        }

        // ajax post请求：
        function ajaxPost(url, data, fnSucceed, fnFail, fnLoading) {
            var ajax = ajaxObject();
            ajax.open("post", url, true);
            ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4) {
                    if (ajax.status === 200) {
                        fnSucceed(ajax.responseText);
                    }
                    else {
                        fnFail("HTTP请求错误！错误码：" + ajax.status);
                    }
                }
            }
            ajax.send(data);

        }
    }
</script>
```

 **返回参数说明** 
静态页面

 **备注** 

- 更多返回错误代码请看首页的错误代码描述


