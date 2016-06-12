var countersCalculator = (function () {
 
	//	Private
	function vodootved (
		finish_holodnoe_vs_itu,
		start_holodnoe_vs_itu,
		finish_gorya4ee_vs_itu,
		start_gorya4ee_vs_itu
	){
		
		var res = ( parseFloat(finish_holodnoe_vs_itu) - parseFloat(start_holodnoe_vs_itu) ) + ( parseFloat(finish_gorya4ee_vs_itu) - parseFloat(start_gorya4ee_vs_itu) );
		return res;
	}
 
	return {
		//	Public
		result: function(
			date1,
			start_holodnoe_vs_itu,
			start_gorya4ee_vs_itu,
			start_gorya4ee_vs_podogrev_itu,
			start_electrosnab_itu,
			start_vodootved,
			
			tarif_holodnoe_vs_itu,
			tarif_gorya4ee_vs_itu,
			tarif_gorya4ee_vs_podogrev_itu,
			tarif_electrosnab_itu,
			tarif_vodootved,
			
			date2,
			finish_holodnoe_vs_itu,
			finish_gorya4ee_vs_itu,
			finish_gorya4ee_vs_podogrev_itu,
			finish_electrosnab_itu,
			RUB_opla4eno
		) {
			//	Calc:
			// ------
			var finish_vodootved = vodootved(finish_holodnoe_vs_itu, start_holodnoe_vs_itu, finish_gorya4ee_vs_itu, start_gorya4ee_vs_itu);
				
			var startList = [start_holodnoe_vs_itu, start_gorya4ee_vs_itu, start_gorya4ee_vs_podogrev_itu, start_electrosnab_itu, start_vodootved];
			var tarifList = [tarif_holodnoe_vs_itu, tarif_gorya4ee_vs_itu, tarif_gorya4ee_vs_podogrev_itu, tarif_electrosnab_itu, tarif_vodootved];
			var fisishList = [finish_holodnoe_vs_itu, finish_gorya4ee_vs_itu, finish_gorya4ee_vs_podogrev_itu, finish_electrosnab_itu, finish_vodootved];

			var RUBList = new Array;
			for (var i=0; i<startList.length; i++){
				var x = (parseFloat(fisishList[i]) - parseFloat(startList[i]))*parseFloat(tarifList[i]);
				RUBList.push(x);
			}
			var RUB_holodnoe_vs_itu = parseFloat(RUBList[0]);
			var RUB_gorya4ee_vs_itu = parseFloat(RUBList[1]);
			var RUB_gorya4ee_vs_podogrev_itu = parseFloat(RUBList[2]);
			var RUB_electrosnab_itu = parseFloat(RUBList[3]);
			var RUB_vodootved = parseFloat(RUBList[4]);
			
			var res = [RUB_holodnoe_vs_itu, RUB_gorya4ee_vs_itu, RUB_gorya4ee_vs_podogrev_itu, RUB_electrosnab_itu, RUB_vodootved];
			var s = 0.0;
			for (var i=0; i<res.length; i++){
				s += parseFloat(res[i]);
			};
			var RUB = parseFloat(s - RUB_opla4eno);
			// ------
			return {
				finish_vodootved:				finish_vodootved.toFixed(2),
				RUB_holodnoe_vs_itu:			RUB_holodnoe_vs_itu.toFixed(2),
				RUB_gorya4ee_vs_itu:			RUB_gorya4ee_vs_itu.toFixed(2),
				RUB_gorya4ee_vs_podogrev_itu:	RUB_gorya4ee_vs_podogrev_itu.toFixed(2),
				RUB_electrosnab_itu:			RUB_electrosnab_itu.toFixed(2),
				RUB_vodootved:					RUB_vodootved.toFixed(2),
				RUB:							RUB.toFixed(2)
			}
		}
	}
})();
