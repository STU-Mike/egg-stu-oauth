
    
**简要描述：** 

- 获取用户课程

**请求URL：** 
- `/user/lesson  `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|year |是  |int |学年   |
|semester |是  |int | 学期    |

**注意**：该参数在headers处传入

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|Authorization  |是  |string |传参格式：`Bearer {{AccessToken}}`，中间用空格隔开，其中AccessToken为访问令牌  |


 **返回示例**

``` 
{
    "year": 2015,
    "semester": 1,
    "lessons": [
        {
            "id": "79654",
            "name": "[CIS6031A]汕大整合思维",
            "teacher": "Wai-man Kwok/孙金峰/王雨函",
            "credit": "2.0",
            "schedule": [
                {
                    "time": "8",
                    "begin_time": 16,
                    "end_time": 16.45,
                    "day": 4,
                    "room": "讲堂一",
                    "week": 65535
                },
                {
                    "time": "12",
                    "begin_time": 8,
                    "end_time": 9.4,
                    "day": 3,
                    "room": "D209",
                    "week": 65535
                }
            ]
        },
        {
            "id": "80933",
            "name": "[CST1301A]程序设计基础",
            "teacher": "于津",
            "credit": "4.0",
            "schedule": [
                {
                    "time": "89",
                    "begin_time": 16,
                    "end_time": 17.4,
                    "day": 1,
                    "room": "E201-1",
                    "week": 65535
                },
                {
                    "time": "67",
                    "begin_time": 14,
                    "end_time": 15.4,
                    "day": 4,
                    "room": "E201-1",
                    "week": 65535
                }
            ]
        },
        {
            "id": "80935",
            "name": "[CST1307A]线性代数",
            "teacher": "廖海泳",
            "credit": "2.0",
            "schedule": [
                {
                    "time": "12",
                    "begin_time": 8,
                    "end_time": 9.4,
                    "day": 2,
                    "room": "E309",
                    "week": 65535
                }
            ]
        },
        {
            "id": "80934",
            "name": "[CST1501A]计算科学导论",
            "teacher": "蔡玲如",
            "credit": "2.0",
            "schedule": [
                {
                    "time": "89",
                    "begin_time": 16,
                    "end_time": 17.4,
                    "day": 5,
                    "room": "E208",
                    "week": 65535
                }
            ]
        },
        {
            "id": "79694",
            "name": "[ELC1]英语(ELC1)",
            "teacher": "卫恩",
            "credit": "4.0",
            "schedule": [
                {
                    "time": "34",
                    "begin_time": 10,
                    "end_time": 11.4,
                    "day": 3,
                    "room": "D206",
                    "week": 65535
                },
                {
                    "time": "12",
                    "begin_time": 8,
                    "end_time": 9.4,
                    "day": 5,
                    "room": "D206",
                    "week": 65535
                }
            ]
        },
        {
            "id": "80645",
            "name": "[ENC1101A]工程设计导论",
            "teacher": "陆小华",
            "credit": "2.0",
            "schedule": [
                {
                    "time": "双67",
                    "begin_time": 14,
                    "end_time": 15.4,
                    "day": 1,
                    "room": "E301",
                    "week": 43690
                }
            ]
        },
        {
            "id": "80649",
            "name": "[ENC1102A]化学导论",
            "teacher": "李庚英",
            "credit": "1.0",
            "schedule": [
                {
                    "time": "双67",
                    "begin_time": 14,
                    "end_time": 15.4,
                    "day": 2,
                    "room": "E301",
                    "week": 43690
                }
            ]
        },
        {
            "id": "80652",
            "name": "[ENC1103A]生物学导论",
            "teacher": "游翠红",
            "credit": "1.0",
            "schedule": [
                {
                    "time": "单AB",
                    "begin_time": 19.2,
                    "end_time": 21,
                    "day": 1,
                    "room": "E306",
                    "week": 21845
                }
            ]
        },
        {
            "id": "80454",
            "name": "[MAT1001A]微积分A-I",
            "teacher": "杨忠强",
            "credit": "4.0",
            "schedule": [
                {
                    "time": "34",
                    "begin_time": 10,
                    "end_time": 11.4,
                    "day": 2,
                    "room": "E阶梯教室203",
                    "week": 65535
                },
                {
                    "time": "34",
                    "begin_time": 10,
                    "end_time": 11.4,
                    "day": 4,
                    "room": "E阶梯教室203",
                    "week": 65535
                }
            ]
        },
        {
            "id": "80283",
            "name": "[SOC6110A]马克思主义基本原理",
            "teacher": "程家明",
            "credit": "3.0",
            "schedule": [
                {
                    "time": "890",
                    "begin_time": 16,
                    "end_time": 18.35,
                    "day": 2,
                    "room": "E301",
                    "week": 65535
                }
            ]
        }
    ],
    "code": "0"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|year |int   |年份  |
|semester  |int   |学期，0代表春季，1代表秋季 |
|lessons  |Array   |课程信息  |
|code |string   |错误码，“0”代表请求正常  |


 **备注** 

- 更多返回错误代码请看首页的错误代码描述


