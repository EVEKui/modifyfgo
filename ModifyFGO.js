import System;
import System.Web;
import System.Object;
import System.Windows.Forms;
import Fiddler;
class Handlers{public static RulesOption("Hide 304s")BindPref("fiddlerscript.rules.Hide304s")var m_Hide304s:boolean=false;public static RulesOption("Request &Japanese Content")var m_Japanese:boolean=false;public static RulesOption("&Automatically Authenticate")BindPref("fiddlerscript.rules.AutoAuth")var m_AutoAuth:boolean=false;RulesString("&User-Agents",true)BindPref("fiddlerscript.ephemeral.UserAgentString")RulesStringValue(0,"Netscape &3","Mozilla/3.0 (Win95; I)")RulesStringValue(1,"WinPhone8.1","Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")RulesStringValue(2,"&Safari5 (Win7)","Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")RulesStringValue(3,"Safari9 (Mac)","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")RulesStringValue(4,"iPad","Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")RulesStringValue(5,"iPhone6","Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")RulesStringValue(6,"IE &6 (XPSP2)","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")RulesStringValue(7,"IE &7 (Vista)","Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")RulesStringValue(8,"IE 8 (Win2k3 x64)","Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")RulesStringValue(9,"IE &8 (Win7)","Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")RulesStringValue(10,"IE 9 (Win7)","Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")RulesStringValue(11,"IE 10 (Win8)","Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")RulesStringValue(12,"IE 11 (Surface2)","Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")RulesStringValue(13,"IE 11 (Win8.1)","Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")RulesStringValue(14,"Edge (Win10)","Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")RulesStringValue(15,"&Opera","Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")RulesStringValue(16,"&Firefox 3.6","Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")RulesStringValue(17,"&Firefox 43","Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")RulesStringValue(18,"&Firefox Phone","Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")RulesStringValue(19,"&Firefox (Mac)","Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")RulesStringValue(20,"Chrome (Win)","Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")RulesStringValue(21,"Chrome (Android)","Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")RulesStringValue(22,"ChromeBook","Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")RulesStringValue(23,"GoogleBot Crawler","Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")RulesStringValue(24,"Kindle Fire (Silk)","Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")RulesStringValue(25,"&Custom...","%CUSTOM%")static var sUA:String=null;public static RulesOption("Simulate &Modem Speeds","Per&formance")var m_SimulateModem:boolean=false;public static RulesOption("&Disable Caching","Per&formance")var m_DisableCaching:boolean=false;public static RulesOption("Cache Always &Fresh","Per&formance")var m_AlwaysFresh:boolean=false;public static ToolsAction("Reset Script")function DoManualReload(){FiddlerObject.ReloadScript()}public static ContextAction("Decode Selected Sessions")function DoRemoveEncoding(oSessions:Session[]){for(var x:int=0;x<oSessions.Length;x++){oSessions[x].utilDecodeRequest();oSessions[x].utilDecodeResponse()}UI.actUpdateInspector(true,true)}

	public static var WhiteListSwitch = false;
	public static var WhiteList = [];
	public static var TXTfile = "C:/Users/heqyou_free/Documents/Fiddler2/Scripts/profile/";
	public static var JSONfile = "C:/Users/heqyou_free/Documents/Fiddler2/Scripts/profile/json/";
	public static var ServerAdd = "192.168.1.2";
	public static var EnemyName = "ModifyFGO";
	public static var UpdateSettingsKeyWord = "updatesetting";
	public static var DefaultSetting = "{"+
		"\"userid\":\"100100100100\","+
		"\"password\":\"password\","+
		"\"setting\":["+
			"{"+
				"\"RetreatAndWin\":false,"+
				"\"ReplaceHP\":false,"+
				"\"ReplaceHPtimes\":1,"+
				"\"ReplaceATK\":false,"+
				"\"ReplaceATKtimes\":1,"+
				"\"ReplaceLimitCount\":,"+
				"\"ReplaceSkillLv\":false,"+
				"\"ReplaceTreasureLv\":false,"+
				"\"ReplaceEnemyActNum\":false,"+
				"\"ReplaceEnemyActNumto\":0,"+
				"\"ReplaceEnemyChargeTurn\":false,"+
				"\"ReplaceEnemyChargeTurnto\":6,"+
				"\"ReplaceSvtSwitch\":false,"+
				"\"ReplaceSvt1\":false,"+
				"\"OnlyWantSvt1\":false,"+
				"\"ReplaceSvt2\":false,"+
				"\"OnlyWantSvt2\":false,"+
				"\"ReplaceSvt3\":false,"+
				"\"OnlyWantSvt3\":false,"+
				"\"ReplaceSvt4\":false,"+
				"\"OnlyWantSvt4\":false,"+
				"\"ReplaceSvt5\":false,"+
				"\"OnlyWantSvt5\":false,"+
				"\"ReplaceSvt6\":false,"+
				"\"OnlyWantSvt6\":false,"+
				"\"ReplaceCraft\":false,"+
				"\"ReplaceCraft1\":false,"+
				"\"ReplaceCraft2\":false,"+
				"\"ReplaceCraft3\":false,"+
				"\"ReplaceCraft4\":false,"+
				"\"ReplaceCraft5\":false,"+
				"\"ReplaceCraft6\":false,"+
				"\"ReplaceCraft7\":false,"+
				"\"ReplaceCraft8\":false,"+
				"\"ReplaceCraft9\":false,"+
				"\"ReplaceCraft10\":false,"+
				"\"ReplaceCraft11\":false,"+
				"\"ReplaceCraft12\":false,"+
			"}"+
		"]"+
	"}";

	static function OnBeforeRequest(oSession: Session) {
		if((null!=gs_ReplaceToken)&&(oSession.url.indexOf(gs_ReplaceToken)>-1)){oSession.url=oSession.url.replace(gs_ReplaceToken,gs_ReplaceTokenWith)}if((null!=gs_OverridenHost)&&(oSession.host.toLowerCase()==gs_OverridenHost)){oSession["x-overridehost"]=gs_OverrideHostWith}if((null!=bpRequestURI)&&oSession.uriContains(bpRequestURI)){oSession["x-breakrequest"]="uri"}if((null!=bpMethod)&&(oSession.HTTPMethodIs(bpMethod))){oSession["x-breakrequest"]="method"}if((null!=uiBoldURI)&&oSession.uriContains(uiBoldURI)){oSession["ui-bold"]="QuickExec"}if(m_SimulateModem){oSession["request-trickle-delay"]="300";oSession["response-trickle-delay"]="150"}if(m_DisableCaching){oSession.oRequest.headers.Remove("If-None-Match");oSession.oRequest.headers.Remove("If-Modified-Since");oSession.oRequest["Pragma"]="no-cache"}if(null!=sUA){oSession.oRequest["User-Agent"]=sUA}if(m_Japanese){oSession.oRequest["Accept-Language"]="ja"}if(m_AutoAuth){oSession["X-AutoAuth"]="(default)"}if(m_AlwaysFresh&&(oSession.oRequest.headers.Exists("If-Modified-Since")||oSession.oRequest.headers.Exists("If-None-Match"))){oSession.utilCreateResponseAndBypassServer();oSession.responseCode=304;oSession["ui-backcolor"]="Lavender"}
		try{
			var str = oSession.GetRequestBodyAsString();
			if (oSession.url.Contains("ac.php")) {
				var useridreg = /(?<=userid=)\d\d\d\d\d\d\d\d\d?\d?\d?\d?\d+/gi;
				var userid = str.match(useridreg);
				
				var	setting = ReadSetting(userid);
				var RetreatAndWin = setting.JSONObject["battleCancel"];
				
				if (RetreatAndWin && str.Contains("battleResult%22%3a3")) {
					var turn = /elapsedTurn%22%3a\d+/ig;
					var s = ReadFile(TXTfile + userid + ".txt");
					var trunreg = /(?<=trun:)\d?\d/gi;
					var trunstring = s.match(trunreg);
					if (trunstring == null) {
						trunstring = "11";
					}
					str = str.replace(turn, "elapsedTurn%22%3a" + trunstring);
					str = str.replace("battleResult%22%3a3", "battleResult%22%3a1");
					var regex1 = /aliveUniqueIds%22%3a%5b([\d+,%2c]+)%5d/gi;
					str = str.replace(regex1, "aliveUniqueIds%22%3a%5b%5d");
					oSession.utilSetRequestBody(str);
					//需要配合Xposed模块使用
				}
			}
			if (oSession.url.Contains(UpdateSettingsKeyWord) && oSession.HTTPMethodIs("POST")) {
				var NewSetting = Fiddler.WebFormats.JSON.JsonDecode(str);
				var HasPower = false;
				try{
					var OldSetting = Fiddler.WebFormats.JSON.JsonDecode(ReadFile(JSONfile+NewSetting.JSONObject["uid"]+".json"));
					if (NewSetting.JSONObject["pw"]==OldSetting.JSONObject["pw"]) {
						HasPower = true;
					}
				}catch(e){
					HasPower = true;
				}
				if (HasPower) {
					var fso=new ActiveXObject("Scripting.FileSystemObject");
					var f=fso.opentextfile(JSONfile+NewSetting.JSONObject["uid"]+".json",2,true,-1);
					f.writeLine(str);
					f.close();
				}
			}
		}catch(e){
			
		}
	}
	static function OnPeekAtResponseHeaders(oSession:Session){if(m_DisableCaching){oSession.oResponse.headers.Remove("Expires");oSession.oResponse["Cache-Control"]="no-cache"}if((bpStatus>0)&&(oSession.responseCode==bpStatus)){oSession["x-breakresponse"]="status";oSession.bBufferResponse=true}if((null!=bpResponseURI)&&oSession.uriContains(bpResponseURI)){oSession["x-breakresponse"]="uri";oSession.bBufferResponse=true}}

	static function ReadFile(Location: String) {
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var f = fso.OpenTextFile(Location, 1, true, -1);
		var s = "";
		while (!f.AtEndOfStream) {
		s += f.ReadLine() + "\n";
		}
		f.close();
		return s;
	}

	static function IsUserHasPower(str: String) {
		var useridreg = /(?<=userid=)\d\d\d\d\d\d\d\d\d?\d?\d?\d?\d+/gi;
		var userid = str.match(useridreg);
		var conformcondition = false;
		if (WhiteListSwitch) {
			for (var i = 0; i < WhiteList.length; i++) {
				if (userid == WhiteList[i]) {
					conformcondition = true;
					break;
				}
			}
		} else {
			conformcondition = true;
		}
		return conformcondition;
	}

	static function ReplaceSvt(sv, svtId: int, treasureDeviceId: int, skillId1: int, skillId2: int, skillId3: int, hp: int, atk: int, NolimitCount: Boolean) {
		sv['svtId'] = Convert.ToString(svtId);
		sv['treasureDeviceId'] = Convert.ToString(treasureDeviceId);
		sv['skillId1'] = Convert.ToString(skillId1);
		sv['skillId2'] = Convert.ToString(skillId2);
		sv['skillId3'] = Convert.ToString(skillId3);
		sv['hp'] = Convert.ToString(hp);
		sv['atk'] = Convert.ToString(atk);
		if (NolimitCount) {
			sv['limitCount'] = Convert.ToString(0);
			sv['dispLimitCount'] = Convert.ToString(0);
			sv['commandCardLimitCount'] = Convert.ToString(0);
			sv['iconLimitCount'] = Convert.ToString(0);
		}
	}
	
	static function ReadSetting(uid:String){
		var	setting = Fiddler.WebFormats.JSON.JsonDecode(DefaultSetting)
		try {
			setting = Fiddler.WebFormats.JSON.JsonDecode(ReadFile(JSONfile + uid + ".json"))
		} catch (e) {
		}
		return setting;
	}
	
	static function OnBeforeResponse(oSession: Session) {
		if(m_Hide304s&&oSession.responseCode==304){oSession["ui-hide"]="true";}

		var str = oSession.url;
		if (str.Contains(ServerAdd) && oSession.HTTPMethodIs("GET")) {
			var useridreg = /(?<=userid=)\d{12}/gi;
			var userid = str.match(useridreg);
			var tmp = Math.random() * 8 + 3;
			var val = tmp.toFixed(0);
			var fso = new ActiveXObject("Scripting.FileSystemObject");
			var f = fso.opentextfile(TXTfile + userid + ".txt", 2, true, -1);
			f.writeLine("trun:" + val);
			f.close();
			oSession.utilSetResponseBody(Convert.ToString(val));
		}

		if (oSession.fullUrl.Contains("ac.php")) {
			if (oSession.GetRequestBodyAsString().Contains("battlesetup") || oSession.GetRequestBodyAsString().Contains("battleresume")) {
				var setting = Fiddler.WebFormats.JSON.JsonDecode(DefaultSetting);
				var useridreg = /(?<=userid=)\d\d\d\d\d\d\d\d\d?\d?\d?\d?\d+/gi;
				var userid = str.match(useridreg);
				var setting = ReadSetting(userid);

				var ReplaceHP = Convert.ToBoolean(setting.JSONObject["uHpSwitch"]);
				var ReplaceATK = Convert.ToBoolean(setting.JSONObject["uAtkSwitch"]);
				var ReplaceHPtimes = setting.JSONObject["uHP"];
				var ReplaceATKtimes = setting.JSONObject["uAtk"];
				var ReplaceLimitCount = Convert.ToBoolean(setting.JSONObject["limitCountSwitch"]);
				var ReplaceSkillLv = Convert.ToBoolean(setting.JSONObject["skillLv"]);
				var ReplaceTreasureLv = Convert.ToBoolean(setting.JSONObject["tdLv"]);

				var ReplaceEnemyActNum = Convert.ToBoolean(setting.JSONObject["enemyActNumSwitch"]);
				var ReplaceEnemyActNumto = Convert.ToInt32(setting.JSONObject["enemyActNumTo"]);
				var ReplaceEnemyChargeTurn = Convert.ToBoolean(setting.JSONObject["enemyChargeTurnSwitch"]);
				var ReplaceEnemyChargeTurnto = Convert.ToInt32(setting.JSONObject["enemyChargeTurnto"]);

				var ReplaceSvtSwitch = Convert.ToBoolean(setting.JSONObject["ReplaceSvtSwitch"]);
				var ReplaceSvtSpinner = setting.JSONObject["replaceSvtSpinner"];
				var ReplaceSvt1 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt1"]);
				var ReplaceSvt2 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt2"]);
				var ReplaceSvt3 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt3"]);
				var ReplaceSvt4 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt4"]);
				var ReplaceSvt5 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt5"]);
				var ReplaceSvt6 = Convert.ToBoolean(setting.JSONObject["ReplaceSvt6"]);

				var ReplaceCraftSwitch = Convert.ToBoolean(setting.JSONObject["ReplaceCraftSwitch"]);
				var ReplaceCraftSpinner = setting.JSONObject["ReplaceCraftSpinner"];
				
				var responseStr = oSession.GetResponseBodyAsString();
				responseStr = System.Web.HttpUtility.UrlDecode(responseStr);
				var jsonStr = System.Text.Encoding.ASCII.GetString(System.Convert.FromBase64String(responseStr));
				var json = Fiddler.WebFormats.JSON.JsonDecode(jsonStr);


				json.JSONObject['sign'] = "";

				if (json.JSONObject["cache"]["replaced"]["battle"] != undefined) {
					var svts = json.JSONObject["cache"]["replaced"]["battle"][0]["battleInfo"]["userSvt"];
					for (var sv in svts) {
						if (sv["hpGaugeType"] != undefined) {
							if (ReplaceEnemyActNum) {
								sv['maxActNum'] = ReplaceEnemyActNumto;
							}
							if (ReplaceEnemyChargeTurn) {
								sv['chargeTurn'] = ReplaceEnemyChargeTurnto;
							}
						}
						if (sv["status"] != undefined && sv["userId"] != undefined && sv["userId"] != "" && sv["userId"] != 0) {
							if (ReplaceSkillLv) {

								sv["skillLv1"] = "10";
								sv["skillLv2"] = "10";
								sv["skillLv3"] = "10";
							}
							if (ReplaceTreasureLv) {

								sv["treasureDeviceLv"] = "5";
							}
							if (ReplaceSvtSwitch) {

								if ((ReplaceSvt1 && sv['svtId'] == "600200") || ReplaceSvtSpinner == 1) {
									ReplaceSvt(sv, 602500, 602501, 41650, 13553, 324650, 14246, 12767, false);
								}
								if ((ReplaceSvt2 && sv['svtId'] == "600100") || ReplaceSvtSpinner == 2) {
									ReplaceSvt(sv, 500800, 500801, 321550, 322550, 323650, 15259, 11546, false);
								}
								if ((ReplaceSvt3 && sv['svtId'] == "601400") || ReplaceSvtSpinner == 3) {
									ReplaceSvt(sv, 501900, 501901, 82550, 100551, 101551, 14409, 11598, false);
								}
								if ((ReplaceSvt4 && sv['svtId'] == "700900") || ReplaceSvtSpinner == 4) {
									ReplaceSvt(sv, 500300, 500302, 23650, 25550, 108655, 15359, 11546, false);
								}
								if ((ReplaceSvt5 && sv['svtId'] == "700500") || ReplaceSvtSpinner == 5) {
									ReplaceSvt(sv, 702300, 702301, 89550, 2245550, 225550, 14500, 12556, false);
								}
								if ((ReplaceSvt6 && sv['svtId'] == "701500") || ReplaceSvtSpinner == 6) {
									ReplaceSvt(sv, 9935510, 9935511, 89550, 321550, 108655, 3215000, 3215000, true);
									sv["treasureDeviceLv"] = "1";
								}
							}
							if (ReplaceHP && ReplaceHPtimes!= "") {

								if (typeof sv['hp'] == typeof "") {
									sv['hp'] = Convert.ToString((int)(Convert.ToInt32(sv['hp']) * Convert.ToInt32(ReplaceATKtimes)));
								} else {
									sv['hp'] = (int)(sv['hp'] * Convert.ToInt32(ReplaceATKtimes));
								}
							}
							if (ReplaceATK && ReplaceATKtimes!= "") {

								if (typeof sv['atk'] == typeof "") {
									sv['atk'] = Convert.ToString((int)(Convert.ToInt32(sv['atk']) * Convert.ToInt32(ReplaceATKtimes)));
								} else {
									sv['atk'] = (int)(sv['atk'] * Convert.ToInt32(ReplaceATKtimes));
								}
							}
						}
						if (ReplaceCraftSwitch) {
							if (sv['treasureDeviceId'] == undefined) {

								if (ReplaceCraftSpinner == 1) {
									sv["skillId1"] = "990068";
								}
								if (ReplaceCraftSpinner == 2) {
									sv["skillId1"] = "990645";
								}
								if (ReplaceCraftSpinner == 3) {
									sv["skillId1"] = "990066";
								}
								if (ReplaceCraftSpinner == 4) {
									sv["skillId1"] = "990062";
								}
								if (ReplaceCraftSpinner == 5) {
									sv["skillId1"] = "990131";
								}
								if (ReplaceCraftSpinner == 6) {
									sv["skillId1"] = "990095";
								}
								if (ReplaceCraftSpinner == 7) {
									sv["skillId1"] = "990113";
								}
								if (ReplaceCraftSpinner == 8) {
									sv["skillId1"] = "990064";
								}
								if (ReplaceCraftSpinner == 9) {
									sv["skillId1"] = "990333";
								}
								if (ReplaceCraftSpinner == 10) {
									sv["skillId1"] = "990629";
								}
								if (ReplaceCraftSpinner == 11) {
									sv["skillId1"] = "990327";
								}
								if (ReplaceCraftSpinner == 12) {
									sv["skillId1"] = "990306";
								}
							}
						}
					}
				}
				var enemy = json.JSONObject["cache"]["replaced"]["battle"][0]["battleInfo"]["enemyDeck"];
				for (var en in enemy) {
					for (var e in en["svts"]) {
						e["name"] = EnemyName;
					}
				}

				var newJsonStr = Fiddler.WebFormats.JSON.JsonEncode(json.JSONObject);
				var newResponseBody = System.Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes(newJsonStr));
				newResponseBody = System.Web.HttpUtility.UrlEncode(newResponseBody);
				oSession.utilSetResponseBody(newResponseBody);

			}
		}

	}

	static function Main(){var today:Date=new Date();FiddlerObject.StatusText=" CustomRules.js was loaded at: "+today}BindPref("fiddlerscript.ephemeral.bpRequestURI")static var bpRequestURI:String=null;BindPref("fiddlerscript.ephemeral.bpResponseURI")static var bpResponseURI:String=null;BindPref("fiddlerscript.ephemeral.bpMethod")static var bpMethod:String=null;static var bpStatus:int=-1;static var uiBoldURI:String=null;static var gs_ReplaceToken:String=null;static var gs_ReplaceTokenWith:String=null;static var gs_OverridenHost:String=null;static var gs_OverrideHostWith:String=null;static function OnExecAction(sParams:String[]):Boolean{FiddlerObject.StatusText="ExecAction: "+sParams[0];var sAction=sParams[0].toLowerCase();switch(sAction){case"bold":if(sParams.Length<2){uiBoldURI=null;FiddlerObject.StatusText="Bolding cleared";return false}uiBoldURI=sParams[1];FiddlerObject.StatusText="Bolding requests for "+uiBoldURI;return true;case"bp":FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");return true;case"bps":if(sParams.Length<2){bpStatus=-1;FiddlerObject.StatusText="Response Status breakpoint cleared";return false}bpStatus=parseInt(sParams[1]);FiddlerObject.StatusText="Response status breakpoint for "+sParams[1];return true;case"bpv":case"bpm":if(sParams.Length<2){bpMethod=null;FiddlerObject.StatusText="Request Method breakpoint cleared";return false}bpMethod=sParams[1].toUpperCase();FiddlerObject.StatusText="Request Method breakpoint for "+bpMethod;return true;case"bpu":if(sParams.Length<2){bpRequestURI=null;FiddlerObject.StatusText="RequestURI breakpoint cleared";return false}bpRequestURI=sParams[1];FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];return true;case"bpa":case"bpafter":if(sParams.Length<2){bpResponseURI=null;FiddlerObject.StatusText="ResponseURI breakpoint cleared";return false}bpResponseURI=sParams[1];FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];return true;case"overridehost":if(sParams.Length<3){gs_OverridenHost=null;FiddlerObject.StatusText="Host Override cleared";return false}gs_OverridenHost=sParams[1].toLowerCase();gs_OverrideHostWith=sParams[2];FiddlerObject.StatusText="Connecting to ["+gs_OverrideHostWith+"] for requests to ["+gs_OverridenHost+"]";return true;case"urlreplace":if(sParams.Length<3){gs_ReplaceToken=null;FiddlerObject.StatusText="URL Replacement cleared";return false}gs_ReplaceToken=sParams[1];gs_ReplaceTokenWith=sParams[2].replace(" ","%20");FiddlerObject.StatusText="Replacing ["+gs_ReplaceToken+"] in URIs with ["+gs_ReplaceTokenWith+"]";return true;case"allbut":case"keeponly":if(sParams.Length<2){FiddlerObject.StatusText="Please specify Content-Type to retain during wipe.";return false}UI.actSelectSessionsWithResponseHeaderValue("Content-Type",sParams[1]);UI.actRemoveUnselectedSessions();UI.lvSessions.SelectedItems.Clear();FiddlerObject.StatusText="Removed all but Content-Type: "+sParams[1];return true;case"stop":UI.actDetachProxy();return true;case"start":UI.actAttachProxy();return true;case"cls":case"clear":UI.actRemoveAllSessions();return true;case"g":case"go":UI.actResumeAllSessions();return true;case"goto":if(sParams.Length!=2)return false;Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q="+Utilities.UrlEncode(sParams[1]));return true;case"help":Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");return true;case"hide":UI.actMinimizeToTray();return true;case"log":FiddlerApplication.Log.LogString((sParams.Length<2)?"User couldn't think of anything to say...":sParams[1]);return true;case"nuke":UI.actClearWinINETCache();UI.actClearWinINETCookies();return true;case"screenshot":UI.actCaptureScreenshot(false);return true;case"show":UI.actRestoreWindow();return true;case"tail":if(sParams.Length<2){FiddlerObject.StatusText="Please specify # of sessions to trim the session list to.";return false}UI.TrimSessionList(int.Parse(sParams[1]));return true;case"quit":UI.actExit();return true;case"dump":UI.actSelectAll();UI.actSaveSessionsToZip(CONFIG.GetPath("Captures")+"dump.saz");UI.actRemoveAllSessions();FiddlerObject.StatusText="Dumped all sessions to "+CONFIG.GetPath("Captures")+"dump.saz";return true;default:if(sAction.StartsWith("http")||sAction.StartsWith("www.")){System.Diagnostics.Process.Start(sParams[0]);return true}else{FiddlerObject.StatusText="Requested ExecAction: '"+sAction+"' not found. Type HELP to learn more.";return false}}}}
