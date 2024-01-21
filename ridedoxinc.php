<?php

$rides =    [
                'end2end.html'      =>'UK End to End rides',
                'uk4corners.html'   =>'UK 4 Corners rides',
                'fullmonty.html'    =>'The Full Monty',
                'lighthouses.html'  =>'NEWS Lighthouses',
                'euroend2end.html'  =>'European End to End rides',
				'vulcans.html'      =>'Vulcans rides',
];
?>
<style>
    .flex {
    display: flex;
    flex-wrap: wrap;
  }
  .flex article {
    padding: 1em;
  }
</style>
<h2>Ride Documentation</h2>
<p><br>Here you will find detailed descriptions of the various certified rides as well as guidance particularly aimed at those
    considering their first IBA rides.</p>

<div class="flex">

<article><a href="ridedocs/ridesubmit.html" target="ridedox">Ride submission form</a></article>
<article><a href="ridedocs/riderguidance.html" target="ridedox">General rider guidance</a></article>
</div>
<hr>
<h3>Standard rides</h3>
<div class="flex">
    <article><a href="ridedocs/saddlesore.html" target="ridedox">SaddleSore rides</a></article>
    <article><a href="ridedocs/bunburner.html" target="ridedox">BunBurner rides</a></article>
	<article><a href="https://www.ironbutt.com/themerides/index.html" target="ridedox">USA master list</a></article>
</div>
<hr>
<h3>Local themed rides</h3>
<div class="flex">
<?php
foreach($rides as $url=>$ride) {
    echo('<article><a href="ridedocs/'.$url.'" target="ridedox">'.$ride.'</a></article>');
}
?>    
</div>
