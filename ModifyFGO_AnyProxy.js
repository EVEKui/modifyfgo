"use strict";
const AnyProxy = require("anyproxy");
const exec = require('child_process').exec;
const fs = require("fs");

const profile = "profile/";
const trunfile = "trun/";
const signalServerAddressHost="mrjieworld.cn";

if (!AnyProxy.utils.certMgr.ifRootCAFileExists()) {
	AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
		if (!error) {
			const certDir = require('path').dirname(keyPath);
			console.log('根证书生成成功，请从xfgo模块中安装证书，证书本地路径: ', certDir);
			const isWin = /^win/.test(process.platform);
			if (isWin) {
				exec('start .', { cwd: certDir });
			}
		} else {
			console.error('根证书生成失败', error);
		}
	});
}
const options = {
	port: 8001,
	rule: {
		summary: "ModifyFGO",
		*beforeSendRequest(requestDetail) {
			if(requestDetail.url.indexOf(signalServerAddressHost)>=0){
				if(requestDetail.requestOptions.method == "GET"){
					if(requestDetail.requestOptions.path.indexOf("getRootCA")>0){
						console.log("获取根证书");
						const rootCA = fs.readFileSync(AnyProxy.utils.certMgr.getRootDirPath()+"/rootCA.crt").toString();
						return {
							response: {
								statusCode: 200,
								header: { 'Content-Type': 'text/html' },
								body: rootCA
							}
						};
					}else{
						var userId=requestDetail.requestOptions.path.substring(2);
						var randomNum=3+parseInt(Math.random()*15, 10);
						var fileName=userId+".txt";
						fs.writeFileSync("trun"+fileName,randomNum);
						return {
							response: {
								statusCode: 200,
								header: { 'Content-Type': 'text/html' },
								body: randomNum.toString()
							}
						};
					}
				}
				if(requestDetail.requestOptions.method == "POST"){
					console.log("更新配置");
					var optionsString = requestDetail.requestData.toString();
					var option = JSON.parse(optionString);
					var uid = option.uid;
					fs.writeFileSync(profile+uid+fileName, optionsString);
					return {
						response: {
							statusCode: 200,
							header: { 'Content-Type': 'text/html' },
							body: "success"
						}
					};
				}
			}else{
				var requestData = requestDetail.requestData.toString();
				var uidreg = /(?<=userId=)\d\d\d\d\d\d\d\d\d\d\d\d/gi;
				var uid = requestDetail.url.match(uidreg);
				var newRequestData = requestData;
				var options = JSON.parse(fs.readFileSync(profile+uid+"options.json"));
				var verify1 = (requestDetail.requestData.indexOf("key=battleresult")>0);
				var verify2 = (requestDetail.url.indexOf("ac.php")>0);
				var verify3 = (options.battleCancel == "true");
				if ( verify1 && verify2 && verify3 ) {
					var data = requestData.split("&");
					data[11]= customUrlDecode(data[11]);
					var temp = data[11].substring(7);
					var json=JSON.parse(temp);
					if(json.battleResult == 3){
						var userId = data[12].substring(7);
						var fileName = userId+".txt";
						var randomNum = parseInt(fs.readFileSync(trunfile+fileName), 10);
						newRequestData = "";
						json.battleResult = 1;
						json.elapsedTurn = randomNum;
						json.aliveUniqueIds = [];
						temp=JSON.stringify(json);
						data[11]= "result="+customUrlEncode(temp);
						var i=1;
						data.forEach( value => {
							newRequestData += value;
							if(i<data.length){
								newRequestData+="&";
								++i;
							}
						});
					}
					return {
						requestData: newRequestData
					};
				}
			}
		},
		*beforeSendResponse(requestDetail, responseDetail) {
			var response = Object.assign({}, responseDetail.response);
			var verify1 = (requestDetail.requestData.indexOf("key=battlesetup")>0);
			var verify2 = (requestDetail.requestData.indexOf("key=battleresume")>0);
			var verify3 = (requestDetail.url.indexOf("ac.php")>0);
			if( (verify1||verify2) && verify3 ){
				var options = JSON.parse(fs.readFileSync(profile+uid+"options.json"));
				var rawBody = response.body.toString();
				rawBody = rawBody.replace(/%3D/g, "=");
				var jsonStr = new Buffer(rawBody, "base64").toString();
				var json = JSON.parse(jsonStr);
				json.sign="";
				var uHpSwitch = string2bool(options.uHpSwitch);
				var uAtkSwitch = string2bool(options.uAtkSwitch);
				var uHp = parseInt(options.uHp);
				var uAtk = parseInt(options.uAtk);
				var limitCountSwitch = string2bool(options.limitCountSwitch);
				var skillLv = string2bool(options.skillLv);
				var tdLv = string2bool(options.tdLv);
				var enemyActNumSwitch = string2bool(options.enemyActNumSwitch);
				var enemyActNumTo = parseInt(options.enemyActNumTo);
				var enemyChargeTurnSwitch = string2bool(options.enemyChargeTurnSwitch);
				var enemyChargeTurnto = parseInt(options.enemyChargeTurnto);
				var replaceSvtSwitch = string2bool(options.replaceSvtSwitch);
				var replaceSvtSpinner = options.replaceSvtSpinner;
				var replaceSvt1 = string2bool(options.replaceSvt1);
				var replaceSvt2 = string2bool(options.replaceSvt2);
				var replaceSvt3 = string2bool(options.replaceSvt3);
				var replaceSvt4 = string2bool(options.replaceSvt4);
				var replaceSvt5 = string2bool(options.replaceSvt5);
				var replaceSvt6 = string2bool(options.replaceSvt6);
				var ReplaceCraftSwitch = string2bool(options.ReplaceCraftSwitch);
				var ReplaceCraftSpinner = options.ReplaceCraftSpinner;
				if (decJson['cache']['replaced']['battle']) {
					var svts = decJson['cache']['replaced']['battle'][0]['battleInfo']['userSvt'];
					for (var i = 0; i < svts.length; i++) {
						if (svts[i]['hpGaugeType'] != undefined) {
							if(enemyActNumSwitch){
								svts[i]['maxActNum'] = enemyActNumTo;
							}
							if(enemyChargeTurnSwitch){
								svts[i]['chargeTurn'] = enemyChargeTurnto;
							}
						}
						if (svts[i]['status'] != undefined && svts[i]['userId'] != undefined && svts[i]['userId'] != '0' && svts[i]['userId'] != 0) {
							if (uHpSwitch && typeof svts[i]['hp'] === 'number') {
								svts[i]['hp'] = String(parseInt(svts[i]['hp'])*uHp);
							} else {
								svts[i]['hp'] = svts[i]['hp']*uHP;
							}
							if (uAtkSwitch && typeof svts[i]['atk'] === 'number') {
								svts[i]['atk'] = String(parseInt(svts[i]['atk'])*uAtk);
							} else {
								svts[i]['atk'] = svts[i]['Atk']*uAtk;
							}
							if (skillLv) {
								svts[i]['skillLv1'] = '10';
								svts[i]['skillLv2'] = '10';
								svts[i]['skillLv3'] = '10';
							}
							if (taLv) {
								svts[i]['treasureDeviceLv'] = '5';
							}
							if (limitCountSwitch) {
								svts[i]['limitCount'] = Convert.ToString(4);
								svts[i]['dispLimitCount'] = Convert.ToString(4);
								svts[i]['commandCardLimitCount'] = Convert.ToString(3);
								svts[i]['iconLimitCount'] = Convert.ToString(4);
							}
							if (replaceSvtSwitch) {
								if ((replaceSvt1Switch && svts[i]['svtId'] == "600200") || replaceSvtSpinner == 1) {
									ReplaceSvt(sv, 602500, 602501, 41650, 13553, 324650, 14246, 12767, false);
								}
								if ((replaceSvt2Switch && svts[i]['svtId'] == "600100") || replaceSvtSpinner == 2) {
									ReplaceSvt(sv, 500800, 500801, 321550, 322550, 323650, 15259, 11546, false);
								}
								if ((replaceSvt3Switch && svts[i]['svtId'] == "601400") || replaceSvtSpinner == 3) {
									ReplaceSvt(sv, 501900, 501901, 82550, 100551, 101551, 14409, 11598, false);
								}
								if ((replaceSvt4Switch && svts[i]['svtId'] == "700900") || replaceSvtSpinner == 4) {
									ReplaceSvt(sv, 500300, 500302, 23650, 25550, 108655, 15359, 11546, false);
								}
								if ((replaceSvt5Switch && svts[i]['svtId'] == "700500") || replaceSvtSpinner == 5) {
									ReplaceSvt(sv, 702300, 702301, 89550, 2245550, 225550, 14500, 12556, false);
								}
								if ((replaceSvt6Switch && svts[i]['svtId'] == "701500") || replaceSvtSpinner == 6) {
									//ReplaceSvt(sv, 9939320, 507, 960840, 960845, 89550, 3215000, 3215000, true);
                	//ReplaceSvt(sv, 9939360, 100, 35551, 960845, 89550, 3215000, 3215000, true);
                 	//ReplaceSvt(sv, 9939370, 9939371, 960842, 960843, 36450, 3215000, 3215000, true);
									ReplaceSvt(sv, 9935510, 9935511, 89550, 321550, 108655, 3215000, 3215000, true);
									svts[i]["treasureDeviceLv"] = "1";
								}
							}
							if (replaceCraftSwitch && svts[i]['treasureDeviceId'] == undefined) {
								if (ReplaceCraftSpinner == 1) {
									svts[i]["skillId1"] = "990068";
								}
								if (ReplaceCraftSpinner == 2) {
									svts[i]["skillId1"] = "990645";
								}
								if (ReplaceCraftSpinner == 3) {
									svts[i]["skillId1"] = "990066";
								}
								if (ReplaceCraftSpinner == 4) {
									svts[i]["skillId1"] = "990062";
								}
								if (ReplaceCraftSpinner == 5) {
									svts[i]["skillId1"] = "990131";
								}
								if (ReplaceCraftSpinner == 6) {
									svts[i]["skillId1"] = "990095";
								}
								if (ReplaceCraftSpinner == 7) {
									svts[i]["skillId1"] = "990113";
								}
								if (ReplaceCraftSpinner == 8) {
									svts[i]["skillId1"] = "990064";
								}
								if (ReplaceCraftSpinner == 9) {
									svts[i]["skillId1"] = "990333";
								}
								if (ReplaceCraftSpinner == 10) {
									svts[i]["skillId1"] = "990629";
								}
								if (ReplaceCraftSpinner == 11) {
									svts[i]["skillId1"] = "990327";
								}
								if (ReplaceCraftSpinner == 12) {
									svts[i]["skillId1"] = "990306";
								}
							}
						}
					}
				}
				var newJsonStr = JSON.stringify(json);
				var cnReg = /[\u0391-\uFFE5]/gm;
				if (cnReg.test(newJsonStr)) {
					newJsonStr = newJsonStr.replace(cnReg,
					function(str) {
						return "\\u" + str.charCodeAt(0).toString(16);
					});
				}
				newJsonStr=newJsonStr.replace(/\//g, "\\\/");
				var newBodyStr = new Buffer(newJsonStr).toString("base64");
				newBodyStr = newBodyStr.replace(/=/g, "%3D");
				var newBody = new Buffer(newBodyStr);
				response.body = newBody;
			}
			return {
				response: response
			};
		},
		*beforeDealHttpsRequest(requestDetail) {
			if(requestDetail.host.indexOf("s2-ios-fate.bilibiligame.net")>=0){
				return false;
			}
			if(requestDetail.host.indexOf("s2-bili-fate.bilibiligame.net")>=0){
				return true;
			}
		},
	},
	silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);
proxyServer.start();
console.log("科技服务端已启动");
console.log("本机IP：" + getLocalIP());
console.log("端口号：" + options.port);
function customUrlEncode(data) {
	data=data.replace(/"/g,'%22');
	data=data.replace(/'/g,'%27');
	data=data.replace(/:/g,'%3a');
	data=data.replace(/,/g,'%2c');
	data=data.replace(/\[/g,'%5b');
	data=data.replace(/]/g,'%5d');
	data=data.replace(/{/g,'%7b');
	data=data.replace(/}/g,'%7d');
	return data;
}
function customUrlDecode(data) {
	data=data.replace(/%22/g,'"');
	data=data.replace(/%27/g,"'");
	data=data.replace(/%3a/g,':');
	data=data.replace(/%2c/g,',');
	data=data.replace(/%5b/g,'[');
	data=data.replace(/%5d/g,']');
	data=data.replace(/%7b/g,'{');
	data=data.replace(/%7d/g,'}');
	return data;
}
function getLocalIP(){
	var interfaces = require('os').networkInterfaces();
	for(var devName in interfaces){
		var iface = interfaces[devName];
		for(var i=0;i<iface.length;i++){
			var alias = iface[i];
			if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
				return alias.address;
			}
		}
	}
}
function ReplaceSvt(sv, svtId, treasureDeviceId, skillId1, skillId2, skillId3, hp, atk, NolimitCount) {
	sv.svtId = Convert.ToString(svtId);
	sv.treasureDeviceId = Convert.ToString(treasureDeviceId);
	sv.skillId1 = Convert.ToString(skillId1);
	sv.skillId2 = Convert.ToString(skillId2);
	sv.skillId3 = Convert.ToString(skillId3);
	sv.hp = Convert.ToString(hp);
	sv.atk = Convert.ToString(atk);
	if (NolimitCount) {
		sv.limitCount = Convert.ToString(0);
		sv.dispLimitCount = Convert.ToString(0);
		sv.commandCardLimitCount = Convert.ToString(0);
		sv.iconLimitCount = Convert.ToString(0);
	}
}
function string2bool(str){
	if(str == "true"){
	return true;
	}else{
	return false;
	}
}
