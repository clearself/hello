## 阅读须知
{{base_url}} = 172.16.15.240:9017/fe/

{{atom}} = cc=G1000&cv=FB2.1.1.00_A4.4&uid=12345&ua=WebKit&sign_time=1520931947&sign_random=Y2zX0ZNi&imei=1520931947&imsi=222222222&sign_keys=LCB1aWQgY3Ygc2lnbl90aW1lIHNpZ25fcmFuZG9t&sign=505E117715A8E60FBD3080C88A4BFF7C

## 维保系统枚举表
* **接口地址**
  > api_proxy/maint/enum/list/{枚举表名}/


* **请求方式**
  > GET

* **数据格式**
  > JSON

* **请求数据**

  请求头携带TOKEN信息

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/enum/list/enum_equip_type/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "ui": {},
        "code": 0,
        "data": [
            {
                "enum_system_type": {
                    "system_name": "机械排烟系统",
                    "id": 1
                },
                "enum_sub_system_type": {
                    "enum_system_type": {
                        "system_name": "机械排烟系统",
                        "id": 1
                    },
                    "id": 1,
                    "sub_system_name": "机械排烟系统"
                },
                "equip_name": "排烟风机",
                "id": 1
            },
            {
                "enum_system_type": {
                    "system_name": "机械排烟系统",
                    "id": 1
                },
                "enum_sub_system_type": {
                    "enum_system_type": {
                        "system_name": "机械排烟系统",
                        "id": 1
                    },
                    "id": 1,
                    "sub_system_name": "机械排烟系统"
                },
                "equip_name": "送风量、风速",
                "id": 2
            }
        ],
        "eng_msg": "successful"
    }
    ```


## 维保合同接口

### 新增维保合同
* **接口地址**
  > api_proxy/maint/contract/info/

* **请求方式**
  > POST

* **数据格式**
  > JSON

* **请求数据**

  请求头携带TOKEN信息
  ```json
    {
        "mt_contract":{
            "contract_amount":"10000",
            "related_resp_uid":111,
            "start_time":"2017-01-01: 10:10:10",
            "end_time":"2018-01-01: 10:10:10"
        },
        "mt_project":{
            "project_name":"测试添加合同关联的项目"
	    }
    }
  ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/contract/info/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "data": {
            "contract_id": 7
        },
        "eng_msg": "successful"
    }
    ```


### 修改维保合同
* **接口地址**
  > api_proxy/maint/contract/info/

* **请求方式**
  > PUT

* **数据格式**
  > JSON

* **请求数据**

  请求头携带TOKEN信息
  ```json
    {
        "mt_contract":{
            "contract_id": 6,
            "contract_amount":"100",
            "related_resp_uid":"1",
            "start_time":"2017-01-01: 10:10:10",
            "end_time":"2018-01-01: 10:10:10"
        },
        "mt_project":{
            "project_id": 18,
            "project_name":"测试修改项目"
        }
    }
  ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/contract/info/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```

### 获取维保合同
* **接口地址**
  > api_proxy/maint/contract/info/

* **请求方式**
  > GET

* **数据格式**
  > JSON

* **请求数据**

    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | contract_id | 是 | int | 合同id

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/contract/info/?{{atom}}&contract_id=7
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "ui": {},
        "code": 0,
        "data": {
            "mt_contract": {
                "sign_time": "2018-07-12 10:32:36",
                "contract_name": "",
                "update_time": "2018-07-12 10:32:36",
                "company_maint_id": -1,
                "contract_id": 7,
                "company_cared_id": -1,
                "file_two": -1,
                "start_time": "2017-01-01 10:10:10",
                "is_active": 0,
                "company_authority_id": -1,
                "contract_amount": 10000,
                "create_time": "2018-07-12 10:32:36",
                "creater_id": -1,
                "end_time": "2018-01-01 10:10:10",
                "file_three": -1,
                "project_id": 20,
                "file_one": -1,
                "related_resp_uid": ""
            },
            "mt_project": {
                "fire_control_room_position": "",
                "spot_contact_phone": "",
                "project_name": "测试添加合同关联的项目",
                "fire_tank_capacity": "",
                "company_cared_id": -1,
                "fire_pool_position": "",
                "project_contact_name": "",
                "company_authority_id": -1,
                "enum_project_status": {},
                "update_time": "2018-07-12 10:32:36",
                "fire_tank_position": "",
                "create_time": "2018-07-12 10:32:36",
                "creater_id": -1,
                "fire_pool_capacity": "",
                "spot_contact_name": "",
                "project_id": 20,
                "project_contact_phone": ""
            }
        },
        "eng_msg": "successful"
    }
    ```

### 删除维保合同
* **接口地址**
  > api_proxy/maint/contract/info/

* **请求方式**
  > DELETE

* **数据格式**
  > JSON

* **请求数据**

  请求头携带TOKEN信息

    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | contract_id | 是 | int | 合同id

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/contract/info/?{{atom}}&contract_id=7
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```

### 维保合同新增设施
* **接口地址**
  > api_proxy/maint/equip/contract_related/info/

* **请求方式**
  > POST
* **请求数据**

  请求头携带TOKEN信息

  数据中的mt_equip数据来源是从enum_equip_type模板库中来的，在添加成功之后会生成equip_id,涉及多个，在返回值中不予显示
  > JSON
    ```json
        [
            {
                "mt_equip":{
                    "contract_id":"1",
                    "equip_name":"排烟风机",
                    "enum_equip_type":{
                        "id":1,
                        "equip_name":"排烟风机",
                        "enum_system_type":1,
                        "enum_sub_system_type":1
                    },
                    "enum_system_type":{
                        "id":1,
                        "system_name": "机械排烟系统"
                    },
                    "enum_sub_system_type":{
                        "id":1,
                        "sub_system_name":1,
                        "enum_system_type":1
                    }
                }
            }
        ]
    ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/contract_related/info/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```


### 维保合同修改设施
* **接口地址**
  > api_proxy/maint/equip/contract_related/info/

* **请求方式**
  > PUT
* **请求数据**

  请求头携带TOKEN信息

  1. 数据中的mt_equip数据来源是从enum_equip_type模板库中来的
  2. 此处的设施涉及之前添加的设施和新增的设施，已经添加的设施会有equip_id,已添加的设施不可取消
  > JSON
    ```json
        [
            {
                "mt_equip":{
                    "equip_id":7,//之前添加过的设施
                    "contract_id":"1",
                    "equip_name":"排烟风机",
                    "enum_equip_type":{
                        "id":1,
                        "equip_name":"排烟风机",
                        "enum_system_type":1,
                        "enum_sub_system_type":1
                    },
                    "enum_system_type":{
                        "id":1,
                        "system_name": "机械排烟系统"
                    },
                    "enum_sub_system_type":{
                        "id":1,
                        "sub_system_name":1,
                        "enum_system_type":1
                    }
                }
            },
            {
                "mt_equip":{//新添加的设施
                    "contract_id":"1",
                    "equip_name":"管道和喷嘴",
                    "enum_equip_type":{
                        "id":6,
                        "equip_name":"排烟风机",
                        "enum_system_type":2,
                        "enum_sub_system_type":2
                    },
                    "enum_system_type":{
                        "id":2,
                        "system_name": "气体灭火系统"
                    },
                    "enum_sub_system_type":{
                        "id":2,
                        "sub_system_name":"七氟丙烷灭火系统",
                        "enum_system_type":2
                    }
                }
            },
            {
                "mt_equip":{//新添加的设施
                    "contract_id":"1",
                    "equip_name":"紧急启/停功能",
                    "enum_equip_type":{
                        "id":7,
                        "equip_name":"紧急启/停功能",
                        "enum_system_type":2,
                        "enum_sub_system_type":2
                    },
                    "enum_system_type":{
                        "id":2,
                        "system_name": "气体灭火系统"
                    },
                    "enum_sub_system_type":{
                        "id":2,
                        "sub_system_name":"七氟丙烷灭火系统",
                        "enum_system_type":2
                    }
                }
            }
        ]
    ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/contract_related/info/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```


### 维保合同关联的设施列表
* **接口地址**
  > api_proxy/maint/equip/contract_related/list

* **请求方式**
  > GET
* **请求数据**

  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | contract_id | 是 | int | 合同id

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/contract_related/list?{{atom}}&contract_id=1
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "ui": {},
        "code": 0,
        "data": [
            {
                "mt_equip": {
                    "enum_system_type": {
                        "system_name": "机械排烟系统",
                        "id": 1
                    },
                    "enum_sub_system_type": {
                        "enum_system_type": {
                            "system_name": "机械排烟系统",
                            "id": 1
                        },
                        "id": 1,
                        "sub_system_name": "机械排烟系统"
                    },
                    "company_cared_id": -1,
                    "system_id": -1,
                    "equip_name": "排烟风机",
                    "enum_equip_type": {
                        "enum_system_type": {
                            "system_name": "机械排烟系统",
                            "id": 1
                        },
                        "enum_sub_system_type": {
                            "enum_system_type": {
                                "system_name": "机械排烟系统",
                                "id": 1
                            },
                            "id": 1,
                            "sub_system_name": "机械排烟系统"
                        },
                        "equip_name": "排烟风机",
                        "id": 1
                    },
                    "equip_id": 14,
                    "building_id": -1
                }
            },
            {
                "mt_equip": {
                    "enum_system_type": {
                        "system_name": "气体灭火系统",
                        "id": 2
                    },
                    "enum_sub_system_type": {
                        "enum_system_type": {
                            "system_name": "气体灭火系统",
                            "id": 2
                        },
                        "id": 2,
                        "sub_system_name": "七氟丙烷灭火系统"
                    },
                    "company_cared_id": -1,
                    "system_id": -1,
                    "equip_name": "管道和喷嘴",
                    "enum_equip_type": {
                        "enum_system_type": {
                            "system_name": "气体灭火系统",
                            "id": 2
                        },
                        "enum_sub_system_type": {
                            "enum_system_type": {
                                "system_name": "气体灭火系统",
                                "id": 2
                            },
                            "id": 2,
                            "sub_system_name": "七氟丙烷灭火系统"
                        },
                        "equip_name": "管道和喷嘴",
                        "id": 6
                    },
                    "equip_id": 15,
                    "building_id": -1
                }
            },
            {
                "mt_equip": {
                    "enum_system_type": {
                        "system_name": "气体灭火系统",
                        "id": 2
                    },
                    "enum_sub_system_type": {
                        "enum_system_type": {
                            "system_name": "气体灭火系统",
                            "id": 2
                        },
                        "id": 2,
                        "sub_system_name": "七氟丙烷灭火系统"
                    },
                    "company_cared_id": -1,
                    "system_id": -1,
                    "equip_name": "紧急启/停功能",
                    "enum_equip_type": {
                        "enum_system_type": {
                            "system_name": "气体灭火系统",
                            "id": 2
                        },
                        "enum_sub_system_type": {
                            "enum_system_type": {
                                "system_name": "气体灭火系统",
                                "id": 2
                            },
                            "id": 2,
                            "sub_system_name": "七氟丙烷灭火系统"
                        },
                        "equip_name": "紧急启/停功能",
                        "id": 7
                    },
                    "equip_id": 16,
                    "building_id": -1
                }
            }
        ],
        "eng_msg": "successful"
    }
    ```

## 维保任务接口

### 新增维保任务
* **接口地址**
  > api_proxy/maint/task/info/

* **请求方式**
  > POST
* **请求数据**

  ```json
    {
        "mt_task":{
            "task_name":"测试添加维保任务1",
            "project_id": "13",//通过项目列表选择接口获取
            "contract_id":1,
            "origin_from":"1",
            "enum_task_type":-1,
            "enum_check_cycle":-1,
            "equip_id":"14"//通过项目关联的合同选择设施，多个equip_id用逗号隔开
        }
    }
  ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/task/info/?{{atom}}
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "data": {
            "task_id": 9
        },
        "eng_msg": "successful"
    }
    ```


### 获取维保任务
* **接口地址**
  > api_proxy/maint/task/info/

* **请求方式**
  > GET
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | task_id | 是 | int | 任务id


* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/task/info/?{{atom}}&task_id=9
    ```

* **响应数据**

    ```json
    {
        "msg": "操作成功",
        "ui": {},
        "code": 0,
        "data": {
            "mt_task": {
                "enum_task_origin": -1,
                "company_cared_id": -1,
                "enum_task_type": {},
                "create_time": "2018-07-12 11:53:11",
                "enum_task_status": {},
                "task_type": "",
                "plan_id": -1,
                "related_resp_uid": [],
                "comments": "",
                "creater_id": -1,
                "fault_explain": "",
                "project_id": 13,
                "related_part_uid": [],
                "task_name": "TEST",
                "enum_check_cycle": {},
                "address": "",
                "contract_id": 1,
                "remark": "",
                "company_maint_id": -1,
                "task_id": 9,
                "finish_time": "2018-07-12 11:53:11",
                "spot_contact_name": "",
                "related_assign_uid": "",
                "company_cared_address": ""
            },
            "mt_project": {
                "fire_control_room_position": "",
                "spot_contact_phone": "",
                "project_name": "测试添加合同关联的项目",
                "fire_tank_capacity": "",
                "company_cared_id": -1,
                "fire_pool_position": "",
                "project_contact_name": "",
                "company_authority_id": -1,
                "enum_project_status": {},
                "update_time": "2018-07-09 19:38:21",
                "fire_tank_position": "",
                "create_time": "2018-07-09 19:38:21",
                "creater_id": -1,
                "fire_pool_capacity": "",
                "spot_contact_name": "",
                "project_id": 13,
                "project_contact_phone": ""
            },
            "mt_equip_compos_list": [
                {
                    "mt_equip_check_list": [
                        {
                            "mt_equip_check": {
                                "plan_id": -1,
                                "create_id": -1,
                                "monthly_check_item": "1、自动启动、排烟防火阀联动停止功能",
                                "check_id": 11,
                                "check_explain": "打开排烟阀能正常联锁启动风机，关闭排烟防火阀，风机能自动关闭（拍照排烟风机控制箱面板和排烟风机整体照",
                                "quarterly_check_item": "1、自动启动、排烟防火阀联动停止功能",
                                "yearly_check_item": "1、自动启动、排烟防火阀联动停止功能",
                                "create_time": "2018-07-10 10:27:46",
                                "equip_id": 14,
                                "enum_equip_type": {
                                    "enum_system_type": {
                                        "system_name": "机械排烟系统",
                                        "id": 1
                                    },
                                    "enum_sub_system_type": {
                                        "enum_system_type": {
                                            "system_name": "机械排烟系统",
                                            "id": 1
                                        },
                                        "id": 1,
                                        "sub_system_name": "机械排烟系统"
                                    },
                                    "equip_name": "排烟风机",
                                    "id": 1
                                },
                                "questionnaire": "[{\"is_test\":[{\"type\":\"select\",\"content\":{\"机械是否变形\":false,\"顶嘴是否安装\":false}},{\"type\":\"text\",\"content\":{\"机械是否变形\":\"\",\"顶嘴是否安装\":\"\"}},{\"type\":\"picture\",\"content\":{}}]},{\"no_test\":[{\"type\":\"text\",\"content\":{\"不能测试的原因\":\"\"}}]}]"
                            }
                        },
                        {
                            "mt_equip_check": {
                                "plan_id": -1,
                                "create_id": -1,
                                "monthly_check_item": "",
                                "check_id": 12,
                                "check_explain": "用0号黄油对轴承进行润滑维护",
                                "quarterly_check_item": "",
                                "yearly_check_item": "2、对轴承进行润滑维护",
                                "create_time": "2018-07-10 10:27:46",
                                "equip_id": 14,
                                "enum_equip_type": {
                                    "enum_system_type": {
                                        "system_name": "机械排烟系统",
                                        "id": 1
                                    },
                                    "enum_sub_system_type": {
                                        "enum_system_type": {
                                            "system_name": "机械排烟系统",
                                            "id": 1
                                        },
                                        "id": 1,
                                        "sub_system_name": "机械排烟系统"
                                    },
                                    "equip_name": "排烟风机",
                                    "id": 1
                                },
                                "questionnaire": ""
                            }
                        }
                    ],
                    "mt_equip": {
                        "enum_system_type": {
                            "system_name": "机械排烟系统",
                            "id": 1
                        },
                        "enum_sub_system_type": {
                            "enum_system_type": {
                                "system_name": "机械排烟系统",
                                "id": 1
                            },
                            "id": 1,
                            "sub_system_name": "机械排烟系统"
                        },
                        "company_cared_id": -1,
                        "system_id": -1,
                        "equip_name": "排烟风机",
                        "enum_equip_type": {
                            "enum_system_type": {
                                "system_name": "机械排烟系统",
                                "id": 1
                            },
                            "enum_sub_system_type": {
                                "enum_system_type": {
                                    "system_name": "机械排烟系统",
                                    "id": 1
                                },
                                "id": 1,
                                "sub_system_name": "机械排烟系统"
                            },
                            "equip_name": "排烟风机",
                            "id": 1
                        },
                        "equip_id": 14,
                        "building_id": -1
                    },
                    "mt_equip_confirm_list": [
                        {
                            "mt_task_equip_confirm": {
                                "uuid": "40cb420b-8318-4bf8-b642-6b716d58079e",
                                "task_id": 9,
                                "equip_fault_desc": "",
                                "check_id": 11,
                                "id": 15,
                                "is_detectable": -1,
                                "enum_task_type": {},
                                "equip_id": 14,
                                "task_confirm_graph": "",
                                "equip_address": "",
                                "equip_name": "",
                                "equip_check_result": "",
                                "enum_check_item_status": -1
                            }
                        },
                        {
                            "mt_task_equip_confirm": {
                                "uuid": "40cb420b-8318-4bf8-b642-6b716d58079e",
                                "task_id": 9,
                                "equip_fault_desc": "",
                                "check_id": 12,
                                "id": 16,
                                "is_detectable": -1,
                                "enum_task_type": {},
                                "equip_id": 14,
                                "task_confirm_graph": "",
                                "equip_address": "",
                                "equip_name": "",
                                "equip_check_result": "",
                                "enum_check_item_status": -1
                            }
                        }
                    ]
                }
            ],
            "mt_task_confirm": {}
        },
        "eng_msg": "successful"
    }
    ```


### 修改维保任务
* **接口地址**
  > api_proxy/maint/task/info/

* **请求方式**
  > PUT
* **请求数据**
  请求头携带TOKEN信息
    ```json
        {
            "mt_task":{
                "task_id":8,//必填
                "task_name":"测试添加维保任务1",
                "project_id": "1",
                "contract_id":1,
                "origin_from":"1",
                "enum_task_type":-1,
                "enum_check_cycle":-1,
                "equip_id":"14,15,16"//必填
            }
        }
    ```


* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/task/info/?{{atom}}&task_id=9
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```

### 删除维保任务
* **接口地址**
  > api_proxy/maint/task/info/

* **请求方式**
  > DELETE
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | task_id | 是 | int | 任务id


* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/task/info/?{{atom}}&task_id=9
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```

### 增加设施检查项
* **接口地址**
  > api_proxy/maint/equip/task_related/equip_confirm/info/

* **请求方式**
  > POST
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | task_id | 是 | int | 任务id
    | equip_id | 是 | int | 设施id
    | uuid | 是 | int | 设施固有检查项问卷uuid

    调用此接口之后，到获取维保任务详情接口查看对应设施的检查项是否增加了一组

    ```json
    {
        "mt_task_equip_confirm":{
            "task_id":9,
            "equip_id":14,
            "uuid":"40cb420b-8318-4bf8-b642-6b716d58079e"
        }
    }
    ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/task_related/equip_confirm/info/?{{atom}}
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "data": {
            "id": [
                19,
                20
            ]
        },
        "eng_msg": "successful"
    }
    ```

### 删除设施检查项
* **接口地址**
  > api_proxy/maint/equip/task_related/equip_confirm/info/

* **请求方式**
  > DELETE
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | uuid | 是 | int | 所删除的那组检查项的uuid

    调用此接口之后，到获取维保任务详情接口查看对应设施的检查项是否减少了一组

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/task_related/equip_confirm/info/?{{atom}}
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```


### 获取设施检查项的详情
* **接口地址**
  > api_proxy/maint/equip/task_related/equip_confirm/info/

* **请求方式**
  > GET
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | id | 是 | int | mt_task_equip_confirm 主键id

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/task_related/equip_confirm/info/?{{atom}}&id=6
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "ui": {},
        "code": 0,
        "data": {
            "mt_task_equip_confirm": {
                "uuid": "e8a3088d-a68c-4349-95ad-9e0f0a89bf7a",
                "task_id": 8,
                "equip_fault_desc": "",
                "check_id": 11,
                "id": 6,
                "is_detectable": -1,
                "enum_task_type": {
                    "id": 1,
                    "name": "维保任务"
                },
                "equip_id": 14,
                "task_confirm_graph": [
                    {
                        "absolute_path": "http://172.16.15.240:7082/download/jupiter/image/cosmic.pem.bak1521633325570",
                        "file_id": 27
                    },
                    {
                        "absolute_path": "http://172.16.15.240:7082/download/jupiter/image/cosmic.pem.bak1521633472093",
                        "file_id": 28
                    }
                ],
                "equip_address": "",
                "equip_name": "",
                "equip_check_result": "test check result",
                "enum_check_item_status": -1
            }
        },
        "eng_msg": "successful"
    }
    ```



### 修改设施检查项的详情
* **接口地址**
  > api_proxy/maint/equip/task_related/equip_confirm/info/

* **请求方式**
  > PUT
* **请求数据**
  请求头携带TOKEN信息
    | 字段 | 必填 | 类型 | 描述
    | - | :-: | :-: | :-
    | id | 是 | int | mt_task_equip_confirm 主键id

    ```json
    {
            "mt_task_equip_confirm": {
                "uuid": "e8a3088d-a68c-4349-95ad-9e0f0a89bf7a",
                "task_id": 8,
                "equip_fault_desc": "",
                "check_id": 11,
                "equip_check_result": "update check result",
                "equip_id": 14,
                "task_confirm_graph": "27,28",
                "id": 6
            }
    }
    ```

* **示例请求**

    ```json
    http://{{base_url}}api_proxy/maint/equip/task_related/equip_confirm/info/?{{atom}}&id=6
    ```

* **响应数据**
    ```json
    {
        "msg": "操作成功",
        "code": 0,
        "eng_msg": "successful"
    }
    ```


























