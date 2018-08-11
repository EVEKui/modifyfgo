import System;
import System.Windows.Forms;
import Fiddler;

class Handlers {
	
	/*
	================================================================================
	
	禁止转载
	
	此脚本由heqyou_free基于attt在Github上放出的Fiddler脚本制作（
	链接：https://github.com/attt/Anyproxy-fgo-rule/blob/master/ext/fiddlerScript.js）
	
	强烈推荐使用白名单
	
	
	================================================================================
	*/
	
	/*
	================================================================================
	
	Whitelist
	
	================================================================================
	*/
	public static var whitelistswitch = true;
	//白名单开关
	public static var whitelist = [];
	//白名单
	public static var errortexttitle = "You have no right to use this server!";
	//错误文本标题
	public static var errortextdetail = "This may be because the owner of this server uses Whitelist. Please contact the owner.";
	//错误文本内容
	
	public static var retreatandwinforios = false;
	//ios撤退胜利
	public static var retreatandwinfortw = false;
	//台服撤退胜利
	
	/*
	================================================================================
	
	Svtvants hp, atk, skill and treasure
	
	================================================================================
	*/
	public static var replacehp = false;
	//替换己方hp
	public static var replacehptimes = 1;
	//替换己方从者hp倍数，乘法
	public static var replacelimitcount = false;
	//替换灵基再临阶段
	public static var replaceskilllv = false;
	//替换技能等级
	public static var replaceskillid = false;
	//替换技能
	public static var replaceskillidto1 = "321550";
	//替换一技能为
	public static var replaceskillidto2 = "321550";
	//替换二技能为
	public static var replaceskillidto3 = "321550";
	//替换三技能为
	//321550为梅林一技能，89550为高速神言
	public static var replacetreasurelv = false;
	//替换从者宝具等级
	public static var usestrangersvttreasure = false;
	//使用非好友宝具，副作用是没有助战标志
	
	/*
	================================================================================
	
	Enemies hp, atk, action number and charge trun
	
	================================================================================
	*/
	public static var replaceenemyhp = false;
	//替换敌人hp
	public static var replaceenemyhpmode = 1;
	//替换敌人hp模式
	//1为全部替换，2为低于阀值时替换，3为高于阀值时替换
	//4为按倍数替换，5为低于阀值时按倍数替换，6为高于阀值时按倍数替换
	public static var replaceenemyhptimes = 1;
	//替换敌人hp倍数，除法
	public static var replaceenemyhpvalue = 10000;
	//替换敌人hp阀值
	public static var replaceenemyhpto = 10000;
	//替换敌人hp为
	
	public static var replaceatk = false;
	//替换己方atk
	public static var replaceatktimes = 1;
	//替换己方从者atk倍数，乘法
	
	public static var replaceenemyatk = false;
	//替换敌人atk
	public static var replaceenemyatkmode = 1;
	//替换敌人atk模式
	//1为全部替换，2为低于阀值时替换，3为高于阀值时替换
	//4为按倍数替换，5为低于阀值时按倍数替换，6为高于阀值时按倍数替换
	public static var replaceenemyatktimes = 1;
	//替换敌人atk倍数，除法
	public static var replaceenemyatkvalue = 10000;
	//替换敌人atk阀值
	public static var replaceenemyatkto = 10000;
	//替换敌人hp为
	
	
	public static var replaceenemyactnum = false;
	//替换敌人行动次数
	public static var replaceenemyactnumto = 3;
	//替换敌人行动次数为
	
	public static var replaceenemychargeturn = false;
	//替换敌人充能回合
	public static var replaceenemychargeturnto = 6;
	//替换敌人充能回合为
	
	/*
	================================================================================
	
	Replace svtvant
	
	================================================================================
	*/
	public static var replacesvt = false;
	//替换从者
	
	public static var replacesvt1 = false;
	//咒腕到王哈
	public static var onlywantsvt1 = false;
	//全部替换成王哈
	
	public static var replacesvt2 = false;
	//小次郎到梅林
	public static var onlywantsvt2 = false;
	//全部替换成梅林
	
	public static var replacesvt3 = false;
	//舞娘到孔明
	public static var onlywantsvt3 = false;
	//全部替换成孔明
	
	public static var replacesvt4 = false;
	//小牛到c狐
	public static var onlywantsvt4 = false;
	//全部替换成c狐
	
	public static var replacesvt5 = false;
	//爱酱到奶光
	public static var onlywantsvt5 = false;
	//全部替换成奶光
	
	public static var replacesvt6 = false;
	//血斧到gay提亚
	public static var onlywantsvt6 = false;
	//全部替换成gay提亚
	
	/*
	================================================================================
	
	Replace Craft
	
	================================================================================
	*/
	public static var replacecraft = false;
	//替换礼装
	public static var replacecraft1 = false;//宝石翁满破
	public static var replacecraft2 = false;//杀生院满破
	public static var replacecraft3 = false;//shirou满破
	public static var replacecraft4 = false;//元素转换满破
	public static var replacecraft5 = false;//预言家满破
	public static var replacecraft6 = false;//黑杯满破
	public static var replacecraft7 = false;//月胜满破
	public static var replacecraft8 = false;//虚数环满破
	public static var replacecraft9 = false;//言锋满破
	public static var replacecraft10 = false;//醉贞满破
	public static var replacecraft11 = false;//月灵髓液满破
	public static var replacecraft12 = false;//理想的王圣满破
	//开启多个会变成最后一个开启的
	
public static RulesOption("Hide 304s") BindPref("fiddlerscript.rules.Hide304s") var m_Hide304s: boolean = false;public static RulesOption("Request &Japanese Content") var m_Japanese: boolean = false;public static RulesOption("&Automatically Authenticate") BindPref("fiddlerscript.rules.AutoAuth") var m_AutoAuth: boolean = false;
RulesString("&User-Agents", true) BindPref("fiddlerscript.ephemeral.UserAgentString") RulesStringValue(0, "Netscape &3", "Mozilla/3.0 (Win95; I)") RulesStringValue(1, "WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537") RulesStringValue(2, "&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1") RulesStringValue(3, "Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56") RulesStringValue(4, "iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4") RulesStringValue(5, "iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4") RulesStringValue(6, "IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)") RulesStringValue(7, "IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)") RulesStringValue(8, "IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)") RulesStringValue(9, "IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)") RulesStringValue(10, "IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)") RulesStringValue(11, "IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)") RulesStringValue(12, "IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko") RulesStringValue(13, "IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko") RulesStringValue(14, "Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082") RulesStringValue(15, "&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17") RulesStringValue(16, "&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7") RulesStringValue(17, "&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0") RulesStringValue(18, "&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0") RulesStringValue(19, "&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0") RulesStringValue(20, "Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36") RulesStringValue(21, "Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36") RulesStringValue(22, "ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36") RulesStringValue(23, "GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)") RulesStringValue(24, "Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true") RulesStringValue(25, "&Custom...", "%CUSTOM%") 
public static var sUA: String = null;public static RulesOption("Simulate &Modem Speeds", "Per&formance") var m_SimulateModem: boolean = false;public static RulesOption("&Disable Caching", "Per&formance") var m_DisableCaching: boolean = false;public static RulesOption("Cache Always &Fresh", "Per&formance") var m_AlwaysFresh: boolean = false;public static ToolsAction("Reset Script") function DoManualReload() {FiddlerObject.ReloadScript();}public static ContextAction("Decode Selected Sessions") function DoRemoveEncoding(oSessions: Session[]) {for (var x: int = 0; x < oSessions.Length; x++) {oSessions[x].utilDecodeRequest();oSessions[x].utilDecodeResponse();}UI.actUpdateInspector(true, true);}
	static function OnBeforeRequest(oSession: Session) {if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {oSession["x-overridehost"] = gs_OverrideHostWith;}if ((null != bpRequestURI) && oSession.uriContains(bpRequestURI)) {oSession["x-breakrequest"] = "uri";}if ((null != bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {oSession["x-breakrequest"] = "method";}if ((null != uiBoldURI) && oSession.uriContains(uiBoldURI)) {oSession["ui-bold"] = "QuickExec";}if (m_SimulateModem) {oSession["request-trickle-delay"] = "300";oSession["response-trickle-delay"] = "150";}if (m_DisableCaching) {oSession.oRequest.headers.Remove("If-None-Match");oSession.oRequest.headers.Remove("If-Modified-Since");oSession.oRequest["Pragma"] = "no-cache";}if (null != sUA) {oSession.oRequest["User-Agent"] = sUA;}if (m_Japanese) {oSession.oRequest["Accept-Language"] = "ja";}if (m_AutoAuth) {oSession["X-AutoAuth"] = "(default)";}if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match"))) {oSession.utilCreateResponseAndBypassServer();oSession.responseCode = 304;oSession["ui-backcolor"] = "Lavender";}
		//引用我是大哥陈的代码（链接：https://www.52pojie.cn/thread-734393-1-3.html）
		//1.21.0只有ios没有加入sign验证，故撤退胜利只有ios能使用
		if ((retreatandwinforios && oSession.url.Contains("ios")) || (retreatandwinfortw && oSession.url.Contains("tw")) && oSession.url.Contains("ac.php") && oSession.GetRequestBodyAsString().Contains("battleresult")) {
			oSession["ui-color"] = "red";
			var str = oSession.GetRequestBodyAsString();
			if (str.Contains("battleResult%22%3a3")) {
				var tmp = Math.random() * 8 + 3;
				var val = tmp.toFixed(0);
				var turn = /elapsedTurn%22%3a\d+/ig;
				str = str.replace(turn, "elapsedTurn%22%3a" + val);
				str = str.replace("battleResult%22%3a3", "battleResult%22%3a1");
				var regex1 = /aliveUniqueIds%22%3a%5b([\d+,%2c]+)%5d/gi;
				str = str.replace(regex1, "aliveUniqueIds%22%3a%5b%5d");
				oSession.utilSetRequestBody(str);
			}
		}
	}
static function OnPeekAtResponseHeaders(oSession:Session){if(m_DisableCaching){oSession.oResponse.headers.Remove("Expires");oSession.oResponse["Cache-Control"]="no-cache";}if((bpStatus>0)&&(oSession.responseCode==bpStatus)){oSession["x-breakresponse"]="status";oSession.bBufferResponse=true;}if((null!=bpResponseURI)&&oSession.uriContains(bpResponseURI)){oSession["x-breakresponse"]="uri";oSession.bBufferResponse=true;}}
	
	static function OnBeforeResponse(oSession: Session) {
		if (m_Hide304s && oSession.responseCode == 304) {
			oSession["ui-hide"] = "true";
		}
	
		if (oSession.url.Contains("ac.php") && oSession.GetRequestBodyAsString().Contains("battlesetup")) {
			var useridreg = /(?<=userid=)\d\d\d\d\d\d\d\d\d?\d?\d?\d?\d+/gi;
			var userid = oSession.url.match(useridreg);
			//用正则表达式获取链接中的userid
			var conformcondition = false;
			if (whitelistswitch) {
				for (var i = 0; i < whitelist.length; i++) {
					if (userid == whitelist[i]) {
						conformcondition = true;
						//检查是否在白名单中
						break;
					}
				}
			} else {
				conformcondition = true;
				//如白名单关闭则执行修改
			}
	
			if (conformcondition) {
				var responseStr: String = oSession.GetResponseBodyAsString();
				//获取Respond的Body
				responseStr = responseStr.Replace("%3D", "=");
				//去掉因URL编码出现的%3D
				var plainResStr: String = System.Text.Encoding.ASCII.GetString(System.Convert.FromBase64String(responseStr));
				//解密Base64
				var json = Fiddler.WebFormats.JSON.JsonDecode(plainResStr);
				//解析JSON
				if (json.JSONObject["cache"]["replaced"]["battle"] != undefined) { //排除201和网络连接问题引起的问题
					var svts = json.JSONObject["cache"]["replaced"]["battle"][0]["battleInfo"]["userSvt"]; //
					for (var sv in svts) {
						if (sv["hpGaugeType"] != undefined) {
							if (replaceenemyhp) {
								switch (replaceenemyhpmode) {
								case 1:
									//模式1
									if (typeof sv['hp'] == typeof "") {
										sv['hp'] = Convert.ToString(replaceenemyhpto);
									} else {
										sv['hp'] = replaceenemyhpto;
									}
								case 2:
									//模式2
									if (sv['hp'] < replaceenemyhpvalue) {
										if (typeof sv['hp'] == typeof "") {
											sv['hp'] = Convert.ToString(replaceenemyhpto);
										} else {
											sv['hp'] = replaceenemyhpto;
										}
									}
								case 3:
									//模式3
									if (sv['hp'] > replaceenemyhpvalue) {
										if (typeof sv['hp'] == typeof "") {
											sv['hp'] = Convert.ToString(replaceenemyhpto);
										} else {
											sv['hp'] = replaceenemyhpto;
										}
									}
								case 4:
									//模式4
									if (typeof sv['hp'] == typeof "") {
										sv['hp'] = Convert.ToString(Convert.ToInt32(sv['hp']) / replaceenemyhptimes);
									} else {
										sv['hp'] = (int)(sv['hp'] / replaceenemyhptimes);
									}
								case 5:
									//模式5
									if (sv['hp'] < replaceenemyhpvalue) {
										if (typeof sv['hp'] == typeof "") {
											sv['hp'] = Convert.ToString(Convert.ToInt32(sv['hp']) / replaceenemyhptimes);
										} else {
											sv['hp'] = (int)(sv['hp'] / replaceenemyhptimes);
										}
									}
								case 6:
									//模式6
									if (sv['hp'] > replaceenemyhpvalue) {
										if (typeof sv['hp'] == typeof "") {
											sv['hp'] = Convert.ToString(Convert.ToInt32(sv['hp']) / replaceenemyhptimes);
										} else {
											sv['hp'] = (int)(sv['hp'] / replaceenemyhptimes);
										}
									}
								}
							}
	
							if (replaceenemyatk) {
								switch (replaceenemyatkmode) {
								case 1:
									//模式1
									if (typeof sv['atk'] == typeof "") {
										sv['atk'] = Convert.ToString(replaceenemyatkto);
									} else {
										sv['atk'] = replaceenemyatkto;
									}
								case 2:
									//模式2
									if (sv['atk'] < replaceenemyatkvalue) {
										if (typeof sv['atk'] == typeof "") {
											sv['atk'] = Convert.ToString(replaceenemyatkto);
										} else {
											sv['atk'] = replaceenemyatkto;
										}
									}
								case 3:
									//模式3
									if (sv['atk'] > replaceenemyatkvalue) {
										if (typeof sv['atk'] == typeof "") {
											sv['atk'] = Convert.ToString(replaceenemyatkto);
										} else {
											sv['atk'] = replaceenemyatkto;
										}
									}
								case 4:
									//模式4
									if (typeof sv['atk'] == typeof "") {
										sv['atk'] = Convert.ToString(Convert.ToInt32(sv['atk']) / replaceenemyatktimes);
									} else {
										sv['atk'] = (int)(sv['atk'] / replaceenemyatktimes);
									}
								case 5:
									//模式5
									if (sv['atk'] < replaceenemyatkvalue) {
										if (typeof sv['atk'] == typeof "") {
											sv['atk'] = Convert.ToString(Convert.ToInt32(sv['atk']) / replaceenemyatktimes);
										} else {
											sv['atk'] = (int)(sv['atk'] / replaceenemyatktimes);
										}
									}
								case 6:
									//模式6
									if (sv['atk'] > replaceenemyatkvalue) {
										if (typeof sv['atk'] == typeof "") {
											sv['atk'] = Convert.ToString(Convert.ToInt32(sv['atk']) / replaceenemyatktimes);
										} else {
											sv['atk'] = (int)(sv['atk'] / replaceenemyatktimes);
										}
									}
								}
							}
	
							if (replaceenemyactnum) {
								//替换敌人行动回合
								sv['maxActNum'] = replaceenemyactnumto;
							}
	
							if (replaceenemychargeturn) {
								//替换敌人充能回合
								sv['chargeTurn'] = replaceenemychargeturnto;
							}
						}
	
						if (sv["status"] != undefined && sv["userId"] != undefined && sv["userId"] != "0" && sv["userId"] != 0) {
							if (replacelimitcount) {
								//替换灵基展示
								sv['limitCount'] = Convert.ToString(4);
								sv['dispLimitCount'] = Convert.ToString(4);
								sv['commandCardLimitCount'] = Convert.ToString(3);
								sv['iconLimitCount'] = Convert.ToString(4);
							}
	
							if (replaceskilllv) {
								//替换技能等级
								sv["skillLv1"] = "10";
								sv["skillLv2"] = "10";
								sv["skillLv3"] = "10";
							}
	
							if (replaceskillid) {
								//替换技能
								sv["skillId1"] = "replaceskillidto1";
								sv["skillId2"] = "replaceskillidto2";
								sv["skillId3"] = "replaceskillidto3";
							}
	
							if (replacesvt) {
								//替换从者
								if (replacesvt1 && (sv['svtId'] == "600200") || onlywantsvt1) { //咒腕到王哈
									//FiddlerObject.log(userid+"把咒腕变成了王哈");
									sv['svtId'] = Convert.ToString(602500);
									sv['treasureDeviceId'] = Convert.ToString(602501);
									sv['skillId1'] = Convert.ToString(41650);
									sv['skillId2'] = Convert.ToString(13553);
									sv['skillId3'] = Convert.ToString(324650);
									sv['hp'] = Convert.ToString(14246);
									sv['atk'] = Convert.ToString(12767);
								}
								if (replacesvt2 && (sv['svtId'] == "600100") || onlywantsvt2) { //小次郎到梅林
									//FiddlerObject.log(userid+"把小次郎变成了梅林");
									sv['svtId'] = Convert.ToString(500800);
									sv['treasureDeviceId'] = Convert.ToString(500801);
									sv['skillId1'] = Convert.ToString(321550);
									sv['skillId2'] = Convert.ToString(322550);
									sv['skillId3'] = Convert.ToString(323650);
									sv['hp'] = Convert.ToString(15259);
									sv['atk'] = Convert.ToString(11546);
								}
								if (replacesvt3 && (sv['svtId'] == "601400") || onlywantsvt3) { //舞娘到孔明
									//FiddlerObject.log(userid+"把舞娘变成了孔明");
									sv['svtId'] = Convert.ToString(501900);
									sv['treasureDeviceId'] = Convert.ToString(501901);
									sv['skillId1'] = Convert.ToString(82550);
									sv['skillId2'] = Convert.ToString(100551);
									sv['skillId3'] = Convert.ToString(101551);
									sv['hp'] = Convert.ToString(14409);
									sv['atk'] = Convert.ToString(11598);
								}
								if (replacesvt4 && (sv['svtId'] == "700900") || onlywantsvt4) { //小牛到c狐
									//FiddlerObject.log(userid+"把小牛变成了c狐");
									sv['svtId'] = Convert.ToString(500300);
									sv['treasureDeviceId'] = Convert.ToString(500302);
									sv['skillId1'] = Convert.ToString(23650);
									sv['skillId2'] = Convert.ToString(25550);
									sv['skillId3'] = Convert.ToString(108655);
									sv['hp'] = Convert.ToString(15259);
									sv['atk'] = Convert.ToString(11546);
								}
								if (replacesvt5 && (sv['svtId'] == "700500") || onlywantsvt5) { //爱酱到奶光
									//FiddlerObject.log(userid+"把爱酱变成了奶光");
									sv['svtId'] = Convert.ToString(702300);
									sv['treasureDeviceId'] = Convert.ToString(702301);
									sv['skillId1'] = Convert.ToString(89550);
									sv['skillId2'] = Convert.ToString(224550);
									sv['skillId3'] = Convert.ToString(225550);
									sv['hp'] = Convert.ToString(14500);
									sv['atk'] = Convert.ToString(12556);
								}
								if (replacesvt6 && (sv['svtId'] == "701500") || onlywantsvt6) { //血斧到gay提亚
									//FiddlerObject.log(userid+"把血斧变成了gay提亚");
									sv['svtId'] = Convert.ToString(9935510);
									sv['treasureDeviceId'] = Convert.ToString(9935511);
									sv['skillId1'] = Convert.ToString(89550);
									sv['skillId2'] = Convert.ToString(960511);
									sv['skillId3'] = Convert.ToString(89550);
									sv['hp'] = Convert.ToString(1450000);
									sv['atk'] = Convert.ToString(150000);
									sv['limitCount'] = Convert.ToString(0);
									sv['dispLimitCount'] = Convert.ToString(0);
									sv['commandCardLimitCount'] = Convert.ToString(0);
									sv['iconLimitCount'] = Convert.ToString(0);
									sv["skillLv2"] = "1";
								}
							}
	
							if (replacehp) {
								//替换己方hp
								if (typeof sv['hp'] == typeof "") {
									sv['hp'] = Convert.ToString((int)(Convert.ToInt32(sv['hp']) * replacehptimes));
								} else {
									sv['hp'] = (int)(sv['hp'] * replacehptimes);
								}
							}
	
							if (replaceatk) {
								//替换己方atk
								if (typeof sv['atk'] == typeof "") {
									sv['atk'] = Convert.ToString((int)(Convert.ToInt32(sv['atk']) * replaceatktimes));
								} else {
									sv['atk'] = (int)(sv['atk'] * replaceatktimes);
								}
							}
	
							if (usestrangersvttreasure && replacetreasurelv) {
								//替换宝具等级
								sv["treasureDeviceLv"] = "5";
							}
						}
	
						if (replacecraft) {
							if (sv['treasureDeviceId'] == undefined) {
								if(replacecraft1){
									sv["skillId1"] = "990068";//990067
									//宝石翁满破
								}
								if(replacecraft2){
									sv["skillId1"] = "990645";//990644
									//杀生院满破
								}
								if(replacecraft3){
									sv["skillId1"] = "990066";//990065
									//shirou满破
								}
								if(replacecraft4){
									sv["skillId1"] = "990062";//990061
									//元素转换满破
								}
								if(replacecraft5){
									sv["skillId1"] = "990131";//990130
									//预言家满破
								}
								if(replacecraft6){
									sv["skillId1"] = "990095"//990094
									//黑杯满破
								}
								if(replacecraft7){
									sv["skillId1"] = "990113"//990112
									//月胜满破
								}
								if(replacecraft8){
									sv["skillId1"] = "990064"//990063
									//虚数环满破
								}
								if(replacecraft9){
									sv["skillId1"] = "990333"//990332
									//言锋满破
								}
								if(replacecraft10){
									sv["skillId1"] = "990629"//990628
									//醉贞满破
								}
								if(replacecraft11){
									sv["skillId1"] = "990327"//990326
									//月灵髓液满破
								}
								if(replacecraft12){
									sv["skillId1"] = "990306"//990305
									//理想的王圣满破
								}
							}
						}
					}
				}
				delete json.JSONObject['sign'];
				//删除sign
				var resChanged = Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
	
				resChanged = resChanged.Replace("isFollowerSvt\":true", "isFollowerSvt\":false");
				//
				oSession.utilSetResponseBody(System.Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes(resChanged)).Replace("=", "%3D"));
			} else {
				//FiddlerObject.log("没有权限的"+userid+"开启了一场战斗并浪费了AP");
				var mytext = "{\"response\":[{\"resCode\":\"88\",\"success\":{},\"fail\":{\"title\":\"" + errortexttitle + "\",\"detail\":\"" + errortextdetail + "\",\"action\":\"goto_title\"},\"nid\":\"\"}],\"cache\":{\"updated\":{},\"replaced\":{},\"serverTime\":1533192034}}";
				var timestamp = Date.parse(new Date());
				//获取当前的UNIX时间戳
				var timestampreg = /(?<="serverTime":)\d\d\d\d\d\d\d\d\d\d+/gi;
				mytext = mytext.replace(timestampreg, timestamp);
				//将文本中旧的UNIX替换成新的
				oSession.utilSetResponseBody(System.Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes(mytext)).Replace("=", "%3D"));
				//把=变成%3D，Base64编码，替换Respond的Body
			}
		}
	}


static function Main() {var today: Date = new Date();FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;}public static var bpRequestURI: String = null;public static var bpResponseURI: String = null;public static var bpMethod: String = null;static var bpStatus: int = -1;static var uiBoldURI: String = null;static var gs_ReplaceToken: String = null;static var gs_ReplaceTokenWith: String = null;static var gs_OverridenHost: String = null;static var gs_OverrideHostWith: String = null;static function OnExecAction(sParams: String[]) : Boolean {FiddlerObject.StatusText = "ExecAction: " + sParams[0];var sAction = sParams[0].toLowerCase();switch (sAction) {case "bold":if (sParams.Length < 2) {uiBoldURI = null;FiddlerObject.StatusText = "Bolding cleared";return false;}uiBoldURI = sParams[1];FiddlerObject.StatusText = "Bolding requests for " + uiBoldURI;return true;case "bp":FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");return true;case "bps":if (sParams.Length < 2) {bpStatus = -1;FiddlerObject.StatusText = "Response Status breakpoint cleared";return false;}bpStatus = parseInt(sParams[1]);FiddlerObject.StatusText = "Response status breakpoint for " + sParams[1];return true;case "bpv":case "bpm":if (sParams.Length < 2) {bpMethod = null;FiddlerObject.StatusText = "Request Method breakpoint cleared";return false;}bpMethod = sParams[1].toUpperCase();FiddlerObject.StatusText = "Request Method breakpoint for " + bpMethod;return true;case "bpu":if (sParams.Length < 2) {bpRequestURI = null;FiddlerObject.StatusText = "RequestURI breakpoint cleared";return false;}bpRequestURI = sParams[1];FiddlerObject.StatusText = "RequestURI breakpoint for " + sParams[1];return true;case "bpa":case "bpafter":if (sParams.Length < 2) {bpResponseURI = null;FiddlerObject.StatusText = "ResponseURI breakpoint cleared";return false;}bpResponseURI = sParams[1];FiddlerObject.StatusText = "ResponseURI breakpoint for " + sParams[1];return true;case "overridehost":if (sParams.Length < 3) {gs_OverridenHost = null;FiddlerObject.StatusText = "Host Override cleared";return false;}gs_OverridenHost = sParams[1].toLowerCase();gs_OverrideHostWith = sParams[2];FiddlerObject.StatusText = "Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";return true;case "urlreplace":if (sParams.Length < 3) {gs_ReplaceToken = null;FiddlerObject.StatusText = "URL Replacement cleared";return false;}gs_ReplaceToken = sParams[1];gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");FiddlerObject.StatusText = "Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";return true;case "allbut":case "keeponly":if (sParams.Length < 2) {FiddlerObject.StatusText = "Please specify Content-Type to retain during wipe.";return false;}UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);UI.actRemoveUnselectedSessions();UI.lvSessions.SelectedItems.Clear();FiddlerObject.StatusText = "Removed all but Content-Type: " + sParams[1];return true;case "stop":UI.actDetachProxy();return true;case "start":UI.actAttachProxy();return true;case "cls":case "clear":UI.actRemoveAllSessions(); return true;case "g":case "go":UI.actResumeAllSessions();return true; case "goto":if (sParams.Length != 2) return false;Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));return true;case "help":Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");return true;case "hide":UI.actMinimizeToTray();return true;case "log":FiddlerApplication.Log.LogString((sParams.Length < 2) ? "User couldn't think of anything to say...": sParams[1]);return true;case "nuke":UI.actClearWinINETCache();UI.actClearWinINETCookies();return true;case "screenshot":UI.actCaptureScreenshot(false);return true;case "show":UI.actRestoreWindow(); return true;case "tail":if (sParams.Length < 2) {FiddlerObject.StatusText = "Please specify # of sessions to trim the session list to.";return false;}UI.TrimSessionList(int.Parse(sParams[1]));return true;case "quit":UI.actExit();return true;case "dump":UI.actSelectAll();UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");UI.actRemoveAllSessions();FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";return true;default:if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {System.Diagnostics.Process.Start(sParams[0]);return true;} else {FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more."; return false;}}}}
