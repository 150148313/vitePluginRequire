import Mock from 'mockjs2'
import { builder, getBody } from '../util'

const username = ['admin', 'super']
// 强硬要求 ant.design 相同密码
// '21232f297a57a5a743894a0e4a801fc3',
const password = ['MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM=', '21232f297a57a5a743894a0e4a801fc3'] // admin, ant.design

const login = (options) => {
  const body = getBody(options)
  console.log('mock: body', body)
  if (!username.includes(body.username) || !password.includes(body.password)) {
    return builder({ isLogin: true }, '账户或密码错误', 401)
  }

  return builder({
    'token': 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNpUkb1uE0EQx99l6rO037d7HSIFKUwkYkAp13cb-xx717oPwTlygwSmACkpgogoEh6ACFEhAW-Dz_AWzNkWUraaHf3mP_-ZOYe6dMUgnDkPCZXMcBXHMdOaEqKk4RGU9RASGE0WLybNYlROFkObzXKvIIJpGOV-0MwdAtQwzQjh__N9V41DBgmJIC2crRzG59A4W0DCCGMRzIKvxljaf3AC-98zO61RTUaQ2ebotL8jmIpgHGospDGCua8rhDjGpUuDR2EqIvDWB0gMmti-vcRz586wx-DR0yfHB9tG2_TJ1gcVqJyOi-ADem46gzmqweHxEYKpnTqf2WI_YV4GrQiF5RL7pqHLUUkVE4TF2hCtNTM7vdy70j22s65q_enX3-vXv79_aT-s2qvrP6--bX78XF-8ba--tu_v2ner9na1vrnZ3H3eXLxZX37s9udezlFbSa4EExxH6250mN07kJRakDjGMXNb7WgpY93RmZtXD0N2359RRnHOTASTKkdfQyuM45r3MpaKnrCG9Azlsiey-FRrzpQeMlj-AwAA__8.BFtpkNkbCrM246pUsx4xvjuGuKgAn_zN3kGoA_cgivw',
    'tokenExpiration': '84600',
    'account': 'gjzwjyzgsjzbadmin6',
    'userName': '国际中文教育综合数据指标域管理员6',
    'authToken': '1529367772881006593',
    'deptId': '1516240278996963329',
    'menuList': [
      {
        'id': '1196714731154700047',
        'name': 'demo',
        'title': '部门管理',
        'icon': 'layui-ico yygz_ico iconbumenpeizhi',
        'jump': '/demo',
        'parentId': '1264811644898549762',
        'scope': '1000000000000000001',
        'list': [
          {
            'id': '1196714731154700048',
            'name': 'deptScope',
            'title': '维度配置',
            'icon': '{}',
            'jump': '/demo/demo1',
            'parentId': '1196714731154700047',
            'scope': '1000000000000000001',
            'list': null,
            'fullpathname': '部门管理 / 维度配置'
          },
          {
            'id': '1196714731154700049',
            'name': 'dept',
            'title': '部门配置',
            'icon': '{}',
            'jump': '/demo/demo2',
            'parentId': '1196714731154700047',
            'scope': '1000000000000000001',
            'list': null,
            'fullpathname': '部门管理 / 部门配置'
          },
          {
            'id': '1196714731154700051',
            'name': 'deptJob',
            'title': '岗位配置',
            'icon': '{}',
            'jump': '/demo/demo',
            'parentId': '1196714731154700047',
            'scope': '1000000000000000001',
            'list': null,
            'fullpathname': '部门管理 / 岗位配置'
          },
          {
            'id': '1196714731154700050',
            'name': 'deptIncharge',
            'title': '分管配置',
            'icon': '{}',
            'jump': '/demo/demo3',
            'parentId': '1196714731154700047',
            'scope': '1000000000000000001',
            'list': null,
            'fullpathname': '部门管理 / 分管配置'
          }
        ],
        'fullpathname': '部门管理'
      }
    ],
    'roleList': [
      'dwadmin'
    ],
    'priList': [
      '1334684830056611842'
    ],
    'tokenList': [
      {
        'id': '1529367772881006593',
        'tokenType': 1,
        'deptId': '1516240278996963329',
        'deptName': '平台管理账户',
        'jobId': '1335865562382872579',
        'jobName': null,
        'proxyUtitle': null,
        'dutyId': '1199255382199898114',
        'dutyName': null,
        'effectiveTime': '2022-05-25 15:44:26',
        'invalidTime': '9999-12-31 23:59:59',
        'tokenStatus': 1,
        'majorToken': true
      }
    ],
    'sourceList': [],
    'userAuthType': 0,
    'scope': '1516240278908882946',
    'scopeObj': {
      'id': '1516240278908882946',
      'parentId': '0',
      'scopeLevel': 1,
      'scopeLeaf': false,
      'scopeName': '国际中文教育综合数据指标',
      'fullPathName': '国际中文教育综合数据指标',
      'remark': '国际中文教育综合数据指标',
      'scopeStatus': 1,
      'scopeSort': 16,
      'coordinate': '1516240278908882946',
      'scopePlatformName': '综合数据指标',
      'scopeShowName': '国际中文教育综合数据指标',
      'scopeIcon': 'uum_03.png',
      'colonyId': null
    },
    'deployProPath': null,
    'production': false,
    'loginUrl': '/login',
    'adminSystemParameter': {
      'uniqueDataPrefix': 'unique',
      'ssologin_1443130622963171329': '/doctoral/ssologin.html',
      'ssologin_1443130246033653762': '/teacher/ssologin.html',
      'ssologin_1443130294209429505': '/volunteer/ssologin.html',
      'ssologin_1443130472257634305': '/salary/ssologin.html',
      'ssologin_1443130531372154881': '/furtherStudy/ssologin.html',
      'ssologin_1443130582525886466': '/recruit/ssologin.html',
      'ssologin_1443130681343688706': '/specialist/ssologin.html',
      'ssologin_1443130737274732546': '/myDo/action/ssoLoginSubAction.do',
      'waitWorkDayTime': '4',
      'menuType': 'left',
      'ssologin_1448562876294447106': '/ui/start/#/changeSsologin',
      'ssologin_1448562976223739906': '/ui/start/#/changeSsologin',
      'ssologin_1455458314251407361': '/ui/start/#/changeSsologin',
      'ssologin_1494548763283349506': '/ui/start/#/changeSsologin',
      'ssologin_1516963645064531969': '/ui/start/#/changeSsologin',
      'syncUpdateTip_1443130246033653762': '/teacher/syncUpdateTip.html',
      'syncUpdateTip_1443130294209429505': '/volunteer/syncUpdateTip.html',
      'syncUpdateTip_1443130472257634305': '/salary/syncUpdateTip.html',
      'syncUpdateTip_1443130531372154881': '/furtherStudy/syncUpdateTip.html',
      'syncUpdateTip_1443130582525886466': '/recruit/syncUpdateTip.html',
      'syncUpdateTip_1443130622963171329': '/doctoral/syncUpdateTip.html',
      'syncUpdateTip_1443130681343688706': '/specialist/syncUpdateTip.html',
      'syncUpdateTip_1443130737274732546': '/myDo/action/syncUpdateTipAction.do'
    }
  }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const logout = () => {
  return builder({}, '[测试接口] 注销成功', 200)
}

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999)') })
}

const twofactor = () => {
  return builder({
    'success': 1,
    'new_captcha': true,
    'challenge': '766cbe80d09e45fcc1d9d1929269663d',
    'gt': 'bdec48641b1a795857f10d1c5c6d4cb8'
  }, '', 0)
}

const message = () => {
  return {
    records: [
      {
        id: '1',
        isMySelf: true,
        value: '12312321312',
        userName: '说到底',
        type: '1'
      },
      {
        id: '2',
        userName: '到底',
        value: 'asdsadasd',
        fileObj: {
          name: '111.doc',
          size: '111'
        },
        type: '2'
      },
      {
        id: '3',
        userName: '底刚刚',
        value: 'asdsadasd',
        type: '3'
      },
      {
        id: '4',
        userName: '底',
        value: 'asdsadasd',
        type: '4'
      },
      {
        id: '111',
        isMySelf: true,
        value: '12312321312',
        type: '1'
      },
      {
        id: '222',
        value: 'asdsadasd',
        fileObj: {
          name: '111.doc',
          size: '111'
        },
        type: '2'
      },
      {
        id: '333',
        userName: '刚',
        value: 'asdsadasd',
        type: '3'
      },
      {
        id: '44',
        userName: '刚',
        value: 'asdsadasd',
        type: '4'
      },
      {
        id: '5',
        userName: '刚放',
        value: 'asdsadasd',
        type: '6'
      }
    ]
  }
}
const message1 = () => {
  return {
    'queryMap': {
      'fromUser': 'kongjia',
      'deleteMsg': true,
      'toUser': 'majianfei',
      'createDate': '9223372036854775807',
      'tableSuffix': 9
    },
    'sort': null,
    'records': [{
      'fromUser': 'majianfei',
      'toUser': 'kongjia',
      'content': '2222',
      'messageType': '1',
      'type': '0',
      'messageId': 'd3eecbe0-163d-4fcb-b2a2-88ad8e3a2cba',
      'createTime': 1658902213429,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'kongjia',
      'toUser': 'majianfei',
      'content': '123123',
      'messageType': '1',
      'type': '0',
      'messageId': '43c98d24-4f9d-439a-84fe-bfe7e9b72074',
      'createTime': 1658893873004,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'kongjia',
      'toUser': 'majianfei',
      'content': '123123123',
      'messageType': '1',
      'type': '0',
      'messageId': '8839d42d-0b9b-4f87-98c3-38a3379af24f',
      'createTime': 1658893865885,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'kongjia',
      'toUser': 'majianfei',
      'content': '2132132',
      'messageType': '1',
      'type': '0',
      'messageId': '3e3da811-71d4-40b4-a039-db6f3cf49251',
      'createTime': 1658803577936,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'majianfei',
      'toUser': 'kongjia',
      'content': '\n',
      'messageType': '1',
      'type': '0',
      'messageId': '457574ed-b2d7-4018-af59-ad6388fb6192',
      'createTime': 1658803453721,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'majianfei',
      'toUser': 'kongjia',
      'content': '\n13213',
      'messageType': '1',
      'type': '0',
      'messageId': 'bf9ac2bd-eb78-44f8-8f46-3282f8eaca61',
      'createTime': 1658803452946,
      'fromUserName': null,
      'toUserName': null
    }, {
      'fromUser': 'majianfei',
      'toUser': 'kongjia',
      'content': '213213211',
      'messageType': '1',
      'type': '0',
      'messageId': '507547ee-b8ef-4282-8003-d8c78d267c5c',
      'createTime': 1658803439011,
      'fromUserName': null,
      'toUserName': null
    }],
    'total': 7,
    'size': 20,
    'current': 1,
    'ascs': [],
    'descs': [],
    'searchCount': true,
    'pages': 1
  }
}

Mock.mock(/\/uum\/uum\/auth\/login/, 'post', login)
Mock.mock(/\/auth\/logout/, 'post', logout)
Mock.mock(/\/account\/sms/, 'post', smsCaptcha)
Mock.mock(/\/hboazs\/im\/getHisMessage/, 'post', message)
//Mock.mock(/\/hboazs\/im\/getLastMessage/, 'post', message1)
Mock.mock(/\/uum\/uum\/geetest\/register/, 'get', twofactor)
