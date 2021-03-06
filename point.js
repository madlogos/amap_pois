var points = [
  {"name": "浦东交警非机动车管理所", "lnglat": [121.606804, 31.218487], "addr": "浦东新区龙东大道1920号", "intro": "不受理", "type": "", "style": 5},
  {"name": "黄埔交警非机动车管理所", "lnglat": [121.478282, 31.197268], "addr": "黄埔区中山南一路806号", "intro": "业务点", "type": "", "style": 0},
  {"name": "徐汇交警非机动车管理所", "lnglat": [121.456965, 31.124661], "addr": "徐汇区龙吴路2138号", "intro": "业务点", "type": "", "style": 0},
  {"name": "长宁交警非机动车管理所", "lnglat": [121.380781, 31.213481], "addr": "长宁区双流路98号", "intro": "业务点", "type": "", "style": 0},
  {"name": "静安交警非机动车管理所", "lnglat": [121.464827, 31.252452], "addr": "静安区中兴路1111号", "intro": "业务点", "type": "", "style": 0},
  {"name": "普陀交警非机动车管理所", "lnglat": [121.341032, 31.287046], "addr": "普陀区金通路555号", "intro": "业务点", "type": "", "style": 0},
  {"name": "虹口交警非机动车管理所", "lnglat": [121.494736, 31.279408], "addr": "虹口区玉田路222号", "intro": "业务点", "type": "", "style": 0},
  {"name": "杨浦交警非机动车管理所", "lnglat": [121.530506, 31.318025], "addr": "杨浦区国和路1047号", "intro": "业务点", "type": "", "style": 0},
  {"name": "闵行交警非机动车管理所", "lnglat": [121.428144, 31.045519], "addr": "闵行区放鹤路2134号", "intro": "业务点", "type": "", "style": 0},
  {"name": "宝山交警非机动车管理所", "lnglat": [121.495001, 31.375464], "addr": "宝山区泰和路239弄8号", "intro": "业务点", "type": "", "style": 0},
  {"name": "嘉定交警非机动车管理所", "lnglat": [121.204704, 31.343417], "addr": "嘉定区嘉安公路2599号", "intro": "业务点", "type": "", "style": 0},
  {"name": "松江交警非机动车管理所", "lnglat": [121.250433, 31.027209], "addr": "松江区繁华路399号", "intro": "业务点", "type": "", "style": 0},
  {"name": "金山交警非机动车管理所", "lnglat": [121.295279, 30.733045], "addr": "金山区新卫公路838号", "intro": "业务点", "type": "", "style": 0},
  {"name": "青浦交警非机动车管理所", "lnglat": [121.123865, 31.171094], "addr": "青浦区新业路928号", "intro": "业务点", "type": "", "style": 0},
  {"name": "奉贤交警非机动车管理所", "lnglat": [121.44011, 30.907968], "addr": "奉贤区沪杭公路2142号", "intro": "业务点", "type": "", "style": 0},
  {"name": "崇明交警非机动车管理所", "lnglat": [121.418572, 31.646199], "addr": "崇明区鼓浪屿路901号", "intro": "业务点", "type": "", "style": 0},
  {"name": "浦东交警责任区六大队", "lnglat": [121.590055, 31.109288], "addr": "浦东新区周东公路35号", "intro": "便民点", "type": "", "style": 1},
  {"name": "浦东交警责任区七大队", "lnglat": [121.8527, 31.058003], "addr": "浦东新区拱极东路3131号", "intro": "便民点", "type": "", "style": 1},
  {"name": "浦东交警责任区八大队", "lnglat": [121.846424, 30.852906], "addr": "浦东新区南芦公路1969号", "intro": "便民点", "type": "", "style": 1},
  {"name": "浦东高桥便民服务点", "lnglat": [121.581732, 31.330802], "addr": "浦东新区杭津路336号", "intro": "便民点", "type": "", "style": 1},
  {"name": "浦东川沙便民服务点", "lnglat": [121.691263, 31.200081], "addr": "浦东新区华夏东路2077号", "intro": "便民点", "type": "", "style": 1},
  {"name": "宝山交警责任区五大队", "lnglat": [121.431943, 31.417999], "addr": "宝山区双全路18号", "intro": "便民点", "type": "", "style": 1},
  {"name": "宝山交警责任区六大队", "lnglat": [121.281949, 31.330726], "addr": "宝山区保安公路3376号", "intro": "便民点", "type": "", "style": 1},
  {"name": "宝山交警责任区七大队", "lnglat": [121.340151, 31.429419], "addr": "宝山区石太路3600号", "intro": "便民点", "type": "", "style": 1},
  {"name": "嘉定交警二大队", "lnglat": [121.281949, 31.330726], "addr": "嘉定区保安公路3376号", "intro": "便民点", "type": "", "style": 1},
  {"name": "嘉定分局娄塘派出所", "lnglat": [121.209353, 31.42128], "addr": "嘉定区城北路2333号", "intro": "便民点", "type": "", "style": 1},
  {"name": "嘉定分局菊园派出所", "lnglat": [121.263121, 31.400326], "addr": "嘉定区永新路299号", "intro": "便民点", "type": "", "style": 1},
  {"name": "松江泖港派出所", "lnglat": [121.211466, 30.932809], "addr": "松江区新宾路426号", "intro": "便民点", "type": "", "style": 1},
  {"name": "松江交警责任区三大队", "lnglat": [121.291724, 30.999767], "addr": "松江区香亭路158号", "intro": "便民点", "type": "", "style": 1},
  {"name": "松江交警责任区四大队", "lnglat": [121.247834, 31.090638], "addr": "松江区沈砖公路5533号", "intro": "便民点", "type": "", "style": 1},
  {"name": "松江交警责任区六大队", "lnglat": [121.318106, 31.063005], "addr": "松江区新北街299弄6号", "intro": "已关停", "type": "", "style": 5},
  {"name": "松江交警责任区七中队", "lnglat": [121.151359, 31.00715], "addr": "松江区新港路29号", "intro": "便民点", "type": "", "style": 1},
  {"name": "金山分局交警支队朱泾便民服务点", "lnglat": [121.184112, 30.893346], "addr": "金山区亭枫公路3238号", "intro": "便民点", "type": "", "style": 1},
  {"name": "青浦香花桥派出所", "lnglat": [121.104393, 31.187766], "addr": "青浦区新胜路6号", "intro": "便民点", "type": "", "style": 1},
  {"name": "青浦练塘派出所", "lnglat": [121.04641, 31.00275], "addr": "青浦区朱枫公路3555号", "intro": "便民点", "type": "", "style": 1},
  {"name": "青浦金泽派出所", "lnglat": [120.923323, 31.041538], "addr": "青浦区培爱路85号", "intro": "便民点", "type": "", "style": 1},
  {"name": "青浦徐泾派出所", "lnglat": [121.310536, 31.159438], "addr": "青浦区徐南路300号", "intro": "已关停", "type": "", "style": 5},
  {"name": "青浦沈巷派出所", "lnglat": [121.055585, 31.076777], "addr": "青浦区万步街80号", "intro": "便民点", "type": "", "style": 1},
  {"name": "青浦白鹤派出所", "lnglat": [121.149487, 31.246722], "addr": "青浦区纪鹤公路6600号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤奉城派出所", "lnglat": [121.659985, 30.914109], "addr": "奉贤区城协路1366号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤金汇派出所", "lnglat": [121.449663, 31.231185], "addr": "奉贤区新闸公路111号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤四团派出所", "lnglat": [121.724356, 30.940722], "addr": "奉贤区川南奉公路8042号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤西渡派出所", "lnglat": [121.441886, 30.967974], "addr": "奉贤区沪杭公路921号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤柘林派出所", "lnglat": [121.473699, 30.829926], "addr": "奉贤区新柘路28号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤江海派出所", "lnglat": [121.481425, 30.90824], "addr": "奉贤区南港路1399号", "intro": "便民点", "type": "", "style": 1},
  {"name": "奉贤青村派出所", "lnglat": [121.581086, 30.923328], "addr": "奉贤区城乡路6号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明新海派出所", "lnglat": [121.296206, 31.819389], "addr": "崇明区海辉路328号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明三星派出所", "lnglat": [121.31165, 31.786419], "addr": "崇明区海桥公路2号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明庙镇派出所", "lnglat": [121.35149, 31.711961], "addr": "崇明区宏海公路1803号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明长征派出所", "lnglat": [121.415641, 31.760585], "addr": "崇明区长征公路3285弄18支弄101号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明港西派出所", "lnglat": [121.420456, 31.677233], "addr": "崇明区港东公路887弄6号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明新河派出所", "lnglat": [121.527922, 31.58221], "addr": "崇明区北新支路120号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明堡镇派出所", "lnglat": [121.620975, 31.544227], "addr": "崇明区大通路318号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明港沿派出所", "lnglat": [121.65065, 31.579494], "addr": "崇明区港沿公路1002号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明长江派出所", "lnglat": [121.494981, 31.707291], "addr": "崇明区林风公路1579号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明向化派出所", "lnglat": [121.730533, 31.520733], "addr": "崇明区陈彷公路4158号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明中兴镇派出所", "lnglat": [121.765538, 31.525289], "addr": "崇明区北滧公路2179号", "intro": "便民点", "type": "", "style": 1},
  {"name": "崇明陈家镇派出所", "lnglat": [121.843278, 31.520949], "addr": "崇明区安振路188弄1号", "intro": "便民点", "type": "", "style": 1},
]