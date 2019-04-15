**简要描述：** 

- 换取凭证，authorization_code 换取access_token和refresh_token

**请求URL：** 
- ` /oauth/token`
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
| grant_type |是  |string |固定值“authorization_code ”  |
| code |是  |string |authorization_code  ，授权码 |
|redirect_uri |否  |string | 用户授权成功后重定向的uri    |
|client_id     |是  |string | 客户端ID    |
|client_secret |是  |string | 客户端秘钥    |
 **返回示例**

``` 
{
    "client": {
        "id": "syllabus-app",
        "redirectUris": [
            "http://no_redirect_uri.com"
        ],
        "grants": [
            "refresh_token",
            "authorization_code"
        ],
        "scope": [
            "*"
        ],
        "banScope": []
    },
    "user": {
        "id": "17jwmai2",
        "info": null
    },
    "accessToken": "3382d08b7d365f655f81d5fb98aff4066868ad10",
    "accessTokenExpiresAt": "2019-04-14T02:49:44.538Z",
    "refreshToken": "b55aba5bb1255a63907bc0db30cf2a133658c852",
    "refreshTokenExpiresAt": "2019-05-13T06:25:29.000Z",
    "scope": "get_syllabus",
    "code": "0"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|client |Object   | 客户端信息|
|user |Object   |用户信息 |
|accessToken |string  |accessToken，访问令牌   |
|accessTokenExpiresAt |string   |accessToken有效期  |
|refreshToken |  string |refreshToken,刷新令牌 |
|refreshTokenExpiresAt |string   |refreshToken有效期 |
|scope |string  |申请的权限范围  |
|code |string   |错误码，“0”为请求正常  |

 **备注** 

- 更多返回错误代码请看首页的错误代码描述
