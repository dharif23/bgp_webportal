/**
* @author Md Dalwar Hossain Arif
* @copyright 2017
* @email dalwar014@gmail.com
* @website http://www.user.tu-berlin.de/hossainarif
*/
$(document).ready(function(){
	$.ajax({
		url : "includes/__historicalData.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var time_stamp = [];
			var c_isolated = [];
			var c_up = [];
      var c_down = [];
      var c_crossed = [];

			for(var i in data) {
				time_stamp.push(data[i].time_stamp);
				c_isolated.push(data[i].c_isolated);
				c_up.push(data[i].c_up);
        c_down.push(data[i].c_down);
        c_crossed.push(data[i].c_crossed);
			}

			var chartdata = {
				labels: time_stamp,
				datasets: [
					{
						label: "C_isolated",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(76, 153, 0, 0.75)",
						borderColor: "rgba(76, 153, 0, 1)",
						pointHoverBackgroundColor: "rgba(76, 153, 0, 1)",
						pointHoverBorderColor: "rgba(76, 153, 0, 1)",
						data: c_isolated
					},
					{
						label: "C_up",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(211, 72, 54, 0.75)",
						borderColor: "rgba(211, 72, 54, 1)",
						pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
						pointHoverBorderColor: "rgba(211, 72, 54, 1)",
						data: c_up
					},
          				{
						label: "C_down",
						fill: false,
            lineTension: 0.3,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						data: c_down
					},
  				{
						label: "C_crossed",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(204, 0, 204, 0.75)",
						borderColor: "rgba(204, 0, 204, 1)",
						pointHoverBackgroundColor: "rgba(204, 0, 204, 1)",
						pointHoverBorderColor: "rgba(204, 0, 204, 1)",
						data: c_crossed
					}
				]
			};

			var ctx = $("#mycanvas-historical");

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata,
				options:{
					scales:{
						yAxes:[{
							scaleLabel:{
								display: true,
								labelString: "num. of prefixes"
							}
						}]
					}
				}
			});
		},
		error : function(data) {
		}
	});
});
