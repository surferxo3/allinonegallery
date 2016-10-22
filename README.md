## Synopsis

A fancy portfolio gallery made using MixItUp, Fancybox, & Lazysizes. Some of its awesomeness includes:
* Extremely easy to customize
* Easily pluggable into any website or cms
* Can be used for any purpose e.g. Portolio Gallery, Events Showcase etc 

## Further Customization

To add **AddThis** social sharing widget in fancybox just initialize fancybox with the following settings in *script.js* 
```
#step 1 - add addthis widget script
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js"></script>

#step 2 - plug-in your addthis publisher id
var addthis_config = {
    pubid: "pubid"
}

#step 3 - initialize fancybox with addthis widget
$('.fancybox').fancybox({
    /*
    'autoSize': false,
    'width': 480,
    'height': 360,
    */
    iframe: {
        preload: false // fixes issue with iframe and IE
      },
    beforeLoad: function() {
      // allow user to interact with iframe
      if (this.type == 'iframe') {
        this.arrows = false;
      } else {
        this.arrows = true;
      }
    },
    afterLoad : function() {
        shareUrl = $(this.element).attr('href'); // you can also use custom data attributes in your anchor link
    },
    beforeShow : function() {
                this.title = '<div class="addthis addthis_default_style "><a href="' + shareUrl + '" addthis:url="' + shareUrl + '"   addthis:title="' + this.title + '" class="addthis_button_preferred_1"></a><a href="' + shareUrl + '" addthis:url="' + shareUrl + '" addthis:title="' + this.title + '" class="addthis_button_preferred_2"></a><a href="' + shareUrl + '" addthis:url="' + shareUrl + '" addthis:title="' + this.title + '" class="addthis_button_preferred_3"></a><a href="' + shareUrl + '" addthis:url="' + shareUrl + '" addthis:title="' + this.title + '" class="addthis_button_preferred_4"></a><a href="' + shareUrl + '" addthis:url="' + shareUrl + '" addthis:title="' + this.title + '" class="addthis_button_compact"></a><a href="' + shareUrl + '" addthis:url="' + shareUrl + '" addthis:title="' + this.title + '" class="addthis_counter addthis_bubble_style"></a></div>';
    },
    afterShow : function() {
        addthis.toolbox(
            $(".addthis").get()
        );
        addthis.counter(
            $(".addthis_counter").get()
        );
    },  
    helpers : {
        title : {
            type : 'inside'
        }
    }
});
```
## Note
* Following script versions have been used in *demo.html*
  * MixItUp 2.1.8 - [documentation] (https://mixitup.kunkalabs.com/docs/)
  * Fancybox 2.1.5 - [documentation] (http://fancybox.net/api)
  * Lazysizes 1.3.2 - [documentation] (https://github.com/aFarkas/lazysizes)

For more info about [ME] (http://bit.ly/msharaf-linkedin) visit my profile.
