
    
**简要描述：** 

- 获取用户信息，登陆后获取用户信息

**请求URL：** 
- `/user/info`
  
**请求方式：**
- GET

**参数：** 

**注意**：该参数在headers处传入

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|Authorization  |是  |string |传参格式：`Bearer {{AccessToken}}`，中间用空格隔开，其中AccessToken为访问令牌   |


 **返回示例**

``` 
{
    "user": {
        "id": "15cthuang",
        "info": {
            "name": "黄村堂",
            "student_num": "2015101054",
            "sex": "男",
            "education_level": "本科",
            "education_year": "4",
            "enrollment": "2015",
            "education_type": "理科",
            "college": "工学院",
            "dorm": "思源书院",
            "dorm_num": "302",
            "state": "当前在校生",
            "from": "广东省新会市"
        }
    },
    "code": "0"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|user |Object   |用户信息 |
|code |string   |错误码，"0"为请求正常 |

 **备注** 

#### - 更多返回错误代码请看首页的错误代码描述

------------

