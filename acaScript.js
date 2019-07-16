var h1 = `

<style>
    


    #nav {
        top: 30px;
        left: 0px;
        padding-left: 10px;
        z-index: 100;
        background-color: #ffffff;
        overflow-y: auto;
        bottom: 130px;
        position: fixed;
    }

    .x-colophon.bottom {
        z-index: 101;
    }

    .x-main.full {
        min-height: calc(99.9vh - 130px);
    }

    #nav #title {
        font-size: 26px;
        font-weight: 300;
        margin-top: 10px;
    }

    #nav .page {
        margin-bottom: 10px;
        margin-top: 10px;
        max-width: 200px;
        padding-left: 18px;
        position: relative;
    }

    #nav #return a {
        font-size: 80%;
    }

    #nav #return {
        margin-bottom: 10px;
        margin-top: 2px;
    }

    #nav .menu {
        list-style: none;
        margin-left: 0;
    }

    #nav .page a {
        text-decoration: none;
        color: #f39200;
    }
    
    #nav .page a:hover {
        color: #00954d;
    }


    #nav .toggle {
        font-stretch: 140%;
        margin-right: -18px;
        cursor: pointer; cursor: hand;
        position: absolute;
        left: 0px;
    }
    
    #nav .fas {
        font-family: fontawesome;
            font-style: initial;
    }
            
            
        </style>

<div id="nav">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <h6 id="return"><a href="https://geoslam.com/wp-login.php?action=logout">Log out</a></h6>
    
    <h6 id="return"><a href="https://geoslam.com/"> Back to Homepage</a></h6>
        <h1 id="title">GeoSlam Academy</h1>
        
        <ul id="pages" class="menu">
            <li class="page"><a href="https://geoslam.com/academy/" >About GeoSLAM Academy </a></li>
            
            <li class="page parent">
                <span class="toggle" id="GeoSLAM-HUB"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/software/hub/" >GeoSLAM HUB </a>
                <ul class="submenu menu">
                    <li class="page"><a href="https://geoslam.com/academy/software/draw">Draw </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/licensing-faq/">Licensing & FAQ </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/processing/">Processing </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/re-processing/">Reprocessing </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/merging/">Merging </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/colourising-with-zeb/">Colourising with ZEB </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/geoslam-hub/exporting/">Exporting </a></li>
                </ul>
            </li>

            <li class="page parent">
                <span class="toggle" id="Solutions"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/hardware/?opena=hardware" >Solutions </a>
                
                <ul class="submenu menu">
                    <li class="page parent">
                    <span class="toggle" id="zeb-horizon"> <i class="fas fa-chevron-down"></i> </span>
                    <a href="https://geoslam.com/academy/hardware/zeb-horizon" >ZEB HORIZON </a></li>
                    <ul class="submenu menu">
                        <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-horizon-uav-mount/" >UAV Mount Accessory</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam/" >ZEB CAM Accessory</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/multi-level-deployment/" >Multi-level Deployment</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/accessories/" >General Accessories</a></li>
                    </ul>
                    </li>
                    <li class="page parent">
                    <span class="toggle" id="zeb-revo-rt"> <i class="fas fa-chevron-down"></i> </span>
                    <a href="https://geoslam.com/academy/hardware/zeb-revo-rt" >ZEB REVO RT </a></li>
                    <ul class="submenu menu">
                        <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam-revo-and-rt/" >ZEB CAM Accessory</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/multi-level-deployment/" >Multi-level Deployment</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/accessories/" >General Accessories</a></li>
                    </ul>
                    </li>
                    <li class="page parent">
                    <span class="toggle" id="zeb-pano"> <i class="fas fa-chevron-down"></i> </span>
                    <a href="https://geoslam.com/academy/hardware/zeb-pano/" >ZEB PANO </a></li>
                    <ul class="submenu menu">
                        <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam-revo-and-rt/" >ZEB CAM Accessory</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/multi-level-deployment/" >Multi-level Deployment</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/accessories/" >General Accessories</a></li>
                    </ul>
                    </li>
                    <li class="page parent">
                    <span class="toggle" id="zeb-revo"> <i class="fas fa-chevron-down"></i> </span>
                    <a href="https://geoslam.com/academy/hardware/zeb-revo" >ZEB REVO </a></li>
                    <ul class="submenu menu">
                        <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam-revo-and-rt/" >ZEB CAM Accessory</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/multi-level-deployment/" >Multi-level Deployment</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/accessories/" >General Accessories</a></li>
                    </ul>
                    </li>
                    <li class="page parent">
                    <span class="toggle" id="accessories"> <i class="fas fa-chevron-down"></i> </span>
                    <a href="https://geoslam.com/academy/accessories/" >Accessories </a></li>
                    <ul class="submenu menu">
                        <li class="page"><a href="https://geoslam.com/academy/multi-level-deployment/" >Multi-level Deployment</a></li>
                        <li class="page"><a href="https://geoslam.com/academy/accessories/" >General Accessories</a></li>
                    </ul>
                    </li>
                </ul>
            </li>
             <li class="page parent">
                <span class="toggle" id="Project-Preparation"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/survey-preparation/" >Project Preparation </a>
                <ul class="submenu menu">
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/route-planning/">Route Planning </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/breaking-down-big-scans/">Breaking Down Big Scans </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/loop-closures/">Loop Closures </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/transitioning-between-environments/">Transitioning Between Environments </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/scanning-corridors-and-tunnels/">Scanning Corridors and Tunnels </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/main-challenges-and-areas-of-complication/">Main Challenges and Areas of Complication </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/scanning-with-colour-in-mind-using-the-zeb-cam/">Scanning with Colour in Mind - Using the ZEB-CAM </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/capturing-on-trajectory-reference-points/">Capturing On-Trajectory Reference Points </a></li>
                    <li class="page parent">
                        <span class="toggle" id="Context-Capture"> <i class="fas fa-chevron-down"></i> </span>  
                        <a href="https://geoslam.com/academy/software/contextcapture" >ContextCapture - for Reality Modelling </a>
                        <ul class="submenu menu">
                            <li class="page"><a href="https://geoslam.com/academy/software/contextcapture/contextcapture-editor/" >ContextCapture Editor</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page"><a href="https://geoslam.com/academy/demo-datasets/" >Demo Datasets</a></li>
            <li class="page"><a href="https://geoslam.com/academy/contact-us/" >Contact Us </a></li>









                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-revo-rt/?opena=hardware" > ZEB REVO RT</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-horizon/?opena=hardware" >ZEB HORIZON</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-pano/?opena=hardware">ZEB PANO</a></li>

                    <li class="page parent">
                        <span class="toggle" id="zeb-cam"> <i class="fas fa-chevron-down"></i> </span>
                        <a href="https://geoslam.com/academy/hardware/zeb-cam/?opena=hardware&openb=zeb-cam" >ZEB-CAM</a>
                        
                        <ul class="submenu menu">
                            <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam/zeb-cam-pre-july-2018/?opena=hardware&openb=zeb-cam" >ZEB-CAM prior July 2018</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="page"><a href="https://geoslam.com/academy/demo-datasets/" >Demo Datasets</a></li>
            <li class="page"><a href="https://geoslam.com/academy/what-is-slam/" >What is SLAM?</a></li>
            <li class="page"><a href="https://geoslam.com/academy/contact-us/" >Contact Us </a></li>
        </ul>
    </div>`

<!--            <li class="page parent">
                <span class="toggle" id="hardware"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/hardware/?opena=hardware" >Hardware </a>
                
                <ul class="submenu menu">
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-revo/?opena=hardware" >ZEB REVO </a></li>
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-revo-rt/?opena=hardware" > ZEB REVO RT</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-horizon/?opena=hardware" >ZEB HORIZON</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-pano/?opena=hardware">ZEB PANO</a></li>

                    <li class="page parent">
                        <span class="toggle" id="zeb-cam"> <i class="fas fa-chevron-down"></i> </span>
                        <a href="https://geoslam.com/academy/hardware/zeb-cam/?opena=hardware&openb=zeb-cam" >ZEB-CAM</a>
                        
                        <ul class="submenu menu">
                            <li class="page"><a href="https://geoslam.com/academy/hardware/zeb-cam/zeb-cam-pre-july-2018/?opena=hardware&openb=zeb-cam" >ZEB-CAM prior July 2018</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            
            <li class="page parent"> 
                <span class="toggle" id="survey-preparation"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/survey-preparation/?opena=survey-preparation" >Survey Preperation </a>
                
                <ul class="submenu menu">
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/route-planning/?opena=survey-preparation">Route Planning</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/breaking-down-big-scans/?opena=survey-preparation">Breaking Down Big Scans</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/loop-closures/?opena=survey-preparation">Loop Closures</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/transitioning-between-environments/?opena=survey-preparation">Transitioning Between Environments</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/scanning-corridors-and-tunnels/?opena=survey-preparation">Scanning Corridors and Tunnels</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/main-challenges-and-areas-of-complication/?opena=survey-preparation">Main Challenges and Areas of Complication</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/scanning-with-colour-in-mind-using-the-zeb-cam/?opena=survey-preparation">Scanning with Colour in Mind - Using the ZEB-CAM</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/survey-preparation/capturing-on-trajectory-reference-points/?opena=survey-preparation">Capturing On-Trajectory Reference Points</a></li>
                </ul>
            </li>
            
            <li class="page parent"> 
                <span class="toggle" id="software"> <i class="fas fa-chevron-down"></i> </span>  
                <a href="https://geoslam.com/academy/software/?opena=software" >Software</a>  
                 
                 <ul class="submenu menu">
                    <li class="page"><a href="https://geoslam.com/academy/software/hub/?opena=software">HUB</a>
                    <li class="page"><a href="https://geoslam.com/academy/software/draw/?opena=software">DRAW</a></li>
                    <li class="page parent">
                        <span class="toggle" id="contextcapture"> <i class="fas fa-chevron-down"></i> </span>
                        <a href="https://geoslam.com/academy/software/contextcapture/?opena=contextcapture&openb=software">ContextCapture - for Reality Modelling</a>
                            
                        <ul class="submenu menu">
                            <li class="page"><a href="https://geoslam.com/academy/software/contextcapture/contextcapture-editor/?opena=contextcapture&openb=software" >ContextCapture Editor</a></li>
                        </ul>
                     </li>
                    <li class="page"><a href="#">ClearEdge Verity - for Construction Verification</a></li>
                    <li class="page"><a href="https://geoslam.com/academy/software/topcon-magnet-collage/?opena=software">Topcon Magnet Collage</a></li>
                </ul>
            </li>
            
            <li class="page"><a href="https://geoslam.com/academy/what-is-slam/" >What is SLAM?</a></li>
            <li class="page"><a href="https://geoslam.com/academy/demo-datasets/" >Demo Datasets</a></li>
            <li class="page"><a href="https://geoslam.com/academy/contact-us/" >Contact Us </a></li>
        </ul>
    </div>`
-->
console.log("Form Script Loaded");

function create() {
    jQuery("body").append(h1);
    jQuery( ".submenu" ).toggle();
    var url = new URL(window.location);
    var opena = url.searchParams.get("opena");
    var openb = url.searchParams.get("openb");
    geo_toggle(jQuery( "#" + opena ));
    geo_toggle(jQuery( "#" + openb ));
}

function geo_toggle_name(ele) {
    var dom = jQuery( "#" + ele );

    console.log(dom);
    dom.children().toggleClass('fa-chevron-up');
    dom.children().toggleClass('fa-chevron-down');

    dom.next().next('.submenu').slideToggle();

    //jQuery( "#" + ele + "_t" ).slideToggle();
}

function geo_toggle(ele) {
    jQuery( ele ).children().toggleClass('fa-chevron-up');
    jQuery( ele ).children().toggleClass('fa-chevron-down');
    jQuery( ele ).next().next('.submenu').slideToggle();
}


jQuery(function() {
    create();
    
    jQuery( ".toggle" ).click(function() {
        geo_toggle(this);
    });
});



