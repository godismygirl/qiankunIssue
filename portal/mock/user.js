function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
} // 代码中会兼容本地 service mock 以及部署站点的静态数据

export default {
  // 支持值为 Object 和 Array
  'GET /api/apps' : [
    {
      name: 'comm',
      entry: 'http://localhost:8001/comm',
      base: '/comm',
      mountElementId: 'root-slave',
    }
  ],
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
    layout: [
      {i: 'a', x: 0, y: 0, w: 2, h: 2, size:'small', url:'', icon:'bar-chart', title:'业务操作'},
      {i: 'b', x: 2, y: 0, w: 2, h: 2, size:'small', url:'', icon:'book', title:'扩展功能'},
      {i: 'c', x: 4, y: 0, w: 4, h: 2, size:'large', url:'', icon:'alert', title:'视频监控', msgUrl:''},
      {i: 'd', x: 9, y: 0, w: 4, h: 2, size:'large', url:'', icon:'setting', title:'功能反馈'},
      {i: 'e', x: 6, y: 2, w: 2, h: 2, size:'small', url:'', icon:'rocket', title:'综合展示'},
      {i: 'f', x: 9, y: 2, w: 4, h: 2, size:'large', url:'', icon:'audit', title:'我的帮助', msgUrl:''},
      {i: 'g', x: 2, y: 2, w: 4, h: 2, size:'large', url:'', icon:'hdd', title:'应用管理'},
      {i: 'h', x: 0, y: 2, w: 2, h: 2, size:'small', url:'', icon:'container', title:'模板管理'}
    ]
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req, res) => {
    const { password, username, type } = req.body;

    if (password === 'ant.design' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
        token: 'testtokenstringuser'
      });
      return;
    }

    if (password === 'ant.design' && username === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
        token: 'testtokenstringuser'
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
};
