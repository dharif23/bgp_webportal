<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN'
'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en' lang='en'>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' >
    <meta name='robots' content='index,follow' >
    <meta name='description' content='BGP delegation data' >
    <meta name='keywords' content='bgp,delegation,tu-berlin,inet,inet.tu-berlin' >
    <meta name='author' content='dalwar014@gmail.com' >
    <meta name='copyright' content='dalwar hossain, www.inet.tu-berlin.de' >
    <link type="text/CSS" href="css/style.css" rel="stylesheet" media="all"/>
  </head>
  <title>BGP| Prefix Delegation Data</title>
  <body>
    <div id="wrapper">
        <div id="header">
          <h1> Welcome to BGP (IPv4) Prefix Delegation Structure </h1>
          <h2> Inet - TU Berlin, Germany - 2017 </h2>
          <h4><a href="http://www.inet.tu-berlin.de" target="_blank">www.inet.tu-berlin.de</a></h4>
        </div>
        <div id="main-content">
          <p class="intro">
            On behalf of INET, TU Berlin, Germany we welcome you to BGP (IPv4) Prefix Delegation Structure data analysis
            project. This websites provieds IPv4 prefix delegation data in a very easy to understand and human readable format.
            It visualizes data in form of graphs and user can make queries depending on the need. Please remember that it is an ongoing
            project and this project results might have some bugs. Please take into considaration that we are trying
            our best to fix the bugs. Please feel free to contact us <a href="">here</a> if you find any bugs.<br/>
            <strong class="hclass">N.B:</strong> Data from 2006 to 2016 can be found under <span class='hclass'>historical data.</span>
          </p>
          <div class='recent-data'>
            <canvas id="mycanvas"></canvas>
          </p>
          <div id="data">
            <div class="historical">
              <p>This is a div for historical data</p>
            </div>
            <div class="current">
              <p>this is a div for current data</p>
            </div>
            <div class="business">
              <p> this is a div for business relation data</p>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div id="footer">
          <?php include_once('includes/__footer.php');?>
        </div>
    </div>
    <!-- javascript -->
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/Chart.min.js"></script>
		<script type="text/javascript" src="js/lineGraph.js"></script>
  </body>
</html>