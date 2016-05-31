angular.module('expApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row\"> <div class=\"col-sm-6\"> <a href=\"#/product1\"> <img src=\"images/loop-led-show.gif\" class=\"img-responsive img-event-preview\" alt=\"item\"> <span class=\"productlist-price-container\"> <span class=\"product-price\"> <br> <span class=\"event-name\">Pearson Sound</span> </span> </span> </a> </div> <div class=\"col-sm-6\"> <a href=\"#/product1\"> <img src=\"images/team-lab-crystal-universe-1.gif\" class=\"img-responsive img-event-preview\" alt=\"item\"> <span class=\"pin-caption\"><span class=\"productlist-price-container\"> <span class=\"product-price\"> <br> <span class=\"event-name\">Marie Davidson Exces De Vitesse</span> </span> </span> </span> </a> </div> </div> <div class=\"row\"> <div class=\"col-sm-6\"> <a href=\"#/product1\"> <img src=\"images/w0w.gif\" class=\"img-responsive img-event-preview\" alt=\"item\"> <span class=\"productlist-price-container\"> <span class=\"product-price\"> <br> <span class=\"event-name\">Pearson Sound</span> </span> </span> </a> </div> <div class=\"col-sm-6\"> <a href=\"#/product1\"> <img src=\"images/w0w.gif\" class=\"img-responsive img-event-preview\" alt=\"item\"> <span class=\"productlist-price-container\"> <span class=\"product-price\"> <br> <span class=\"event-name\">Marie Davidson Exces De Vitesse</span> </span> </span> </a> </div> </div> "
  );


  $templateCache.put('views/product1.html',
    "<div class=\"col-sm-12\"> <div class=\"embed-container\"> <iframe src=\"https://player.vimeo.com/video/137147389\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <br> <br> <ul class=\"social-links text-center\"> <li><a href=\"https://twitter.com/angelo_studio\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"http://dribbble.com/angelo_studio\"><i class=\"fa fa-dribbble\"></i></a></li> <li><a href=\"http://www.pinterest.com/angelostudio/\"><i class=\"fa fa-pinterest\"></i></a></li> </ul> <br> </div> </div> <div class=\"col-xs-6\"> <h2 class=\"product-title hidden-xs\">Pierre Bastian</h2> <div class=\"product-detail\"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi porro inventore laudantium corrupti quo consectetur modi, rerum? Quasi ipsam, harum magnam hic accusantium beatae quidem perferendis molestiae atque nesciunt aspernatur.</p> <br> <button class=\"btn btn-default\">Learn more</button> </div> </div> <div class=\"col-sm-6 product-thumbs\"> <div class=\"row\"> <div class=\"col-xs-6 text-left\"><img class=\"img-responsive\" src=\"http://www.pier-pictures.com/images/previews/LYDIAO\" alt=\"\"></div> <div class=\"col-xs-6 text-left\"><img class=\"img-responsive\" src=\"http://www.pier-pictures.com/images/previews/DARKER\" alt=\"\"></div> <div class=\"col-xs-6 text-left\"><img class=\"img-responsive\" src=\"http://www.pier-pictures.com/images/previews/DR_F_I_N_E\" alt=\"\"></div> <div class=\"col-xs-6 text-left\"><img class=\"img-responsive\" src=\"http://www.pier-pictures.com/images/previews/MAJOR_SIO\" alt=\"\"></div> </div> </div> <div class=\"row\"> <!--  <div class=\"col-sm-12 \">\n" +
    "                        <div class=\"paging clearfix\">\n" +
    "                            <a class=\"btn btn-outline pull-left\" href=\"product2.html\"><span>Previous</span></a>\n" +
    "                            <a class=\"btn btn-outline pull-right\" href=\"product2.html\"><span>Next </span></a>\n" +
    "                        </div>\n" +
    "                    </div> --> </div>    <link rel=\"stylesheet\" href=\"../css/angelodemo.css\"> <script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js\"></script> <script type=\"text/javascript\" src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script> <script type=\"text/javascript\" src=\"js/placeholders.min.js\"></script> <script type=\"text/javascript\" src=\"js/custom.js\"></script> <script type=\"text/javascript\" src=\"js/ga.js\"></script>  "
  );

}]);
