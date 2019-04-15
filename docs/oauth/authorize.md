**简要描述：** 

- 用户授权接口

**请求URL：** 
- ` /oauth/authorize `
  
**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|response_type |是  |string |固定为“code”   |
|client_id |是  |string | 客户端的ID    |
|redirect_uri  |否  |string | 用户授权成功后重定向的uri    |
|state |否  |string | 客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值    |
|scope  |否  |string | 申请的权限范围    |
 **返回示例**

``` 
重定向到redirect_uri，并带上authorization_code
```

 **重定向参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|authorization_code |string   |授权码  |

 **备注** 

- 更多返回错误代码请看首页的错误代码描述
