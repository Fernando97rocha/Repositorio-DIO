<html>
	<head>
		<title>Meu primeiro site em PHP</title>
		<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
		<style type="text/css">
			.linha {
				font-weight: bold;
				font-size: 25px;
				color: green;
				padding-left: 10px;
				line-height: 50px;
			}
		</style>
	</head>
	<body>
		<?php
        for ($i = 0 ; $i < 10 ; $i++) {
            print("<span class=\"linha\"> Linha número " . $i . "</span><br />");
        }
    ?>
	</body>
	
	<script type="text/javascript">
			$(Document).ready(function(){
				alert("Whoohoo!");
			});
	</script>
</html>
