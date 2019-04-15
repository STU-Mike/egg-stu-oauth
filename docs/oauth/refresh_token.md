    
**简要描述：** 

- 刷新凭证，使用refresh_token刷新access_token和refresh_token

**请求URL：** 
- ` /oauth/token `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|grant_type |是  |string |固定值"refresh_token" |
|refresh_token |是  |string | refresh_token，刷新令牌    |
|access_token  |是  |string | access_token，访问令牌   |
|client_id |是  |string | 客户端ID   |
|client_secret    |是  |string |string 客户端秘钥  |

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
        "info": null,
        "created_at": "2019-04-05",
        "updated_at": "2019-04-05",
        "grant_type": "refresh_token"
    },
    "accessToken": "266b472615197c3c099d2c7aa239313d92a5484e",
    "accessTokenExpiresAt": "2019-04-14T03:19:04.289Z",
    "refreshToken": "b251ff67daef71e38a2e7497809b454611886d5e",
    "refreshTokenExpiresAt": "2019-05-14T02:19:04.289Z",
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
