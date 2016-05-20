(function ($) {
    const shade = "#556b2f";
    $.fn.greenify = function() {
      console.log("Imgreen")
        this.css( "color", shade );
        return this;
    };
}(jQuery));
