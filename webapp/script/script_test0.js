// TEST 1

TRECENTO = 500

ANIM_TIME = 500

VISIBLE_TIME = 50000
TRUTH_VISIBLE_TIME = 30000
BAR_UPDATE_TIME = 500
TIMESTEP = 100/(VISIBLE_TIME/BAR_UPDATE_TIME-1)

var FBJustLoaded = true
var FBJustEnded = false
var FBEnableButton = false

var first_half = true

var user_inputs = []
var correct = 0
var total = 0

var timeoutHandle = null
var colobarHandle = null
var colobarVal = 100+TIMESTEP


var inputs100 =  [1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1]
var results100 = [0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1]

var inputs50 = [1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0]
var results50 = [0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0]

var inputs120 =  [1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1]
var results120 = [1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1]

var inputs80 =  [1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1]
var results80 = [0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1]


var inputs4 = [1,0,0,1]
var results4 = [1,0,1,1]


var inputs = inputs4
var results = results4


var inputs_ = []
var results_ =  []
for (i=0;i<inputs.length;i++){
    inputs_.push(inputs[i])
    inputs_.push(2)
    results_.push(results[i])
    results_.push(2)
}

inputs = inputs_
results = results_

console.log(inputs)
console.log(results)


var path = 'img/cookies/'
var next_page = 'test1.html'

var pics = [path+"first_in.jpg", path+"second_in.jpg", path+"question.jpg"]
var choices = [path+"left.png",path+"mid.png",path+"right.png"]

var res_pics = [path+"first_out", path+"second_out", path+"error"]

var title = "<center>Tutorial</center>"




function load() {
    
    //document.getElementById("body-div").innerHTML = '<div style="position: fixed; height:100%; width:100%;  max-width:800px; top:0; left:0;"><div style="height:calc(100% - 180px); width:100%; margin-top: 90px; z-index: 100; overflow-y: hidden;"> <div id="loading-interface"><div style="display:block; width:100%; margin:0%;"><center><img src="https://flevix.com/wp-content/uploads/2019/07/Ring-Preloader.gif" style="align:auto; margin-top:15%; height:70%"></div></div> <div id="game-interface" class="game-interface" style="display:none; width:100%; height:100%; margin:0%; padding:5%; ; overflow: hidden;"> <div id="stacked-cards-block" class="stackedcards stackedcards--animatable init "></div> <div class="ghost-action" style="visible:"></div></div></div><div style="position: absolute; top:0; left:0; width:100%; height: 90px; z-index:10; opacity:1; background:#cccccc"> <div class="title" id="title-div" style="margin-top:0px; height:60px; font-family: "Verdana"; font-size: 45px; font-weight: 10;"></div> <div class="progress" style="margin-top:5px; heigth:10px"> <div class="progress-bar progress-bar-striped active" role="progressbar"aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div></div></div><div style="position: absolute; bottom:0; left:0; width:100%; height: 90px; z-index:11; opacity:1; background:#cccccc"><div id="actions-div" class="global-actions" style="margin-top:10px"></div></div></div>'
    
    document.getElementById("title-div").innerHTML = title
    
    var divs = document.getElementById("actions-div");
    var string = ''
    string += '<div class="left-action"  style="cursor: pointer"><img src="'+choices[0]+'" width="50" height="50"/></div>'
    string += '<div class="top-action"  style="cursor: pointer; display:none"><img src="'+choices[1]+'" width="40" height="40"/></div>'
    string += '<div class="right-action"  style="cursor: pointer"><img src="'+choices[2]+'" width="50" height="50"/></div>'
    divs.innerHTML = string;
    
    var divs = document.getElementById("stacked-cards-block");
    var string = '<div class="stackedcards-container">'

    
    for (var i=0; i<inputs.length; i++) {
        if(inputs[i]==2) string +=  '<div class="card-item" ><div id="card_item_'+i+'" style="position: absolute; top:10%; left:10%; width: 80%; height: 80%">'+
        '<img style="width: 100%; height: 100%;" src="'+pics[inputs[i]]+
        '"></div></div>'
        
        else string +=  '<div class="card-item" ><div id="card_item_'+i+'" style="position: absolute; top:20%; left:10%; width: 80%; height: 60%">'+
                    '<img style="width: 100%; height: 100%" src="'+pics[inputs[i]]+
                    '"></div></div>'
    }
    
    string += '</div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay top"><img src="'+choices[1]+'" width="260" height="260"/></div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay right"><img src="'+choices[2]+'" width="260" height="260"/></div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay left"><img src="'+choices[0]+'" width="260" height="260"/></div>'
        
    divs.innerHTML = string;
}

load()


function FBSkip() {
    FBEnableButton = true
    console.log("skipped top")
    var buttonTop = document.querySelector('.top-action');
    buttonTop.click()
}

function FBGhost() {
    var ghost = document.querySelector('.ghost-action');
    ghost.click()
}

function FBReload() {
    
    document.getElementById("loading-interface").innerHTML = '<div style="display:block; width:100%; margin:0%;"><center><img src="https://flevix.com/wp-content/uploads/2019/07/Ring-Preloader.gif" style="align:auto; margin-top:15%; width:70%"></div>';
    document.getElementById("game-interface").style.display = "none";
    
    
    window.alert("Half way to the top! \nA bit faster now...")
    

    

        load()
    
        event = document.createEvent("HTMLEvents");
        event.initEvent("DOMContentLoaded", true, true);
        event.eventName = "DOMContentLoaded";
        document.dispatchEvent(event);
        
        
        TRECENTO = 500
        ANIM_TIME = 500

        FBJustLoaded = true
        FBJustEnded = false
        FBEnableButton = false
           
        timeoutHandle = null
        colobarHandle = null
        colobarVal = 100+TIMESTEP
    
        VISIBLE_TIME = 4000
        TRUTH_VISIBLE_TIME = 2000
        BAR_UPDATE_TIME = 500
        TIMESTEP = 100/(VISIBLE_TIME/BAR_UPDATE_TIME-1)

        
}
         

function FBDestroy(get_key) {
    

    window.location = next_page
     

}

function FBDissolve() {
    
    rightObj.style.transform = "translateZ(0)";
    rightObj.style.webkitTransform = "translateZ(0)";
    rightObj.style.opacity = '0';
    
}


function FBUpdateBarReal() {
    

    VISIBLE_TIME = 3000
    TRUTH_VISIBLE_TIME = 3000
    BAR_UPDATE_TIME = 500
    TIMESTEP = 100/(VISIBLE_TIME/BAR_UPDATE_TIME-1)
    
    
    colobarVal = colobarVal-TIMESTEP
   
    //if(colobarVal>50) colobarColor = 'green'
    //else if (colobarVal>33) colobarColor = 'orange'
    //else colobarColor = 'red'
    //colobarColor = 'green'
    
    document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',colobarVal);
    document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(colobarVal)+'%;') //background-color:'+colobarColor+' !important;');
    window.clearTimeout(colobarHandle);
    colobarHandle = window.setTimeout(function(){FBUpdateBarReal();},BAR_UPDATE_TIME);
}



function FBUpdateBar() {
    
    
    
    colobarVal = 100
   
    //if(colobarVal>50) colobarColor = 'green'
    //else if (colobarVal>33) colobarColor = 'orange'
    //else colobarColor = 'red'
    //colobarColor = 'green'
    
    document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',colobarVal);
    document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(colobarVal)+'%;') //background-color:'+colobarColor+' !important;');
    window.clearTimeout(colobarHandle);
    colobarHandle = window.setTimeout(function(){FBUpdateBar();},BAR_UPDATE_TIME);
}

function FBComputePicture(currentPosition) {
    action = user_inputs[user_inputs.length-1]
    truth = results[currentPosition-1]
    
    if(action==2) picture = res_pics[truth]+'.jpg'
    else if (action==truth) picture = res_pics[truth]+'_true.jpg'
    else picture = res_pics[truth]+'_false.jpg'
        
    if(action==truth) correct += 1
    total += 1
        
    return picture
    
}

function FBSaveToDB(score1, score2, score3){
    
    key_id = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

    console.log(key_id)
    
    Parse.initialize("thO29uAuOVPOFTw2xF8PE9IpIluwfs6XBBFCNIXx", "5NtROyPDahFyupOZJb9frRP45GjhycIEGY1mbVqL");
    //javascriptKey is required only if you have it on server.
    Parse.serverURL = 'https://parseapi.back4app.com/'
    Parse.databaseURI =  'mongodb://admin:hS0XB6pfYlYRmMvlrs0hWBfI@mongodb.back4app.com:27017/9025c04a33724856ae1efe4f196ee2ec?ssl=true'
    Parse.restAPIKey = 'nofNfqhpO76e7YeQt7ZREKstAqMI1uFpZ7XOH9Cn'
    //Parse.masterKey = 'v303r8cvzKbG8Oq4MXmB5eoAh7JlFmDdjYZ9dBj6'

    const GameScore = Parse.Object.extend("SurveyUserActions");
    const gameScore = new GameScore();

    gameScore.set("test1", score1.toString());
    gameScore.set("test2", score2.toString());
    gameScore.set("test3", score3.toString());

    gameScore.save().then((gameScore) => {
      // Execute any logic that should take place after the object is saved.
      // alert('New object created with objectId: ' + gameScore.id);
        console.log("success")
        console.log(gameScore.id)
        get_key = gameScore.id
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      // alert('Failed to create new object, with error code: ' + error.message);
        console.log("fail")
    });
    

}



function FBEventPush(event) {
    
    console.log(event)
    
    if(FBJustEnded) return
        
    if(FBJustLoaded) {
        FBJustLoaded=false
        FBEnableButton = false
       
        
            window.setTimeout(function(){
                document.getElementById("loading-interface").innerHTML = "";
                document.getElementById("game-interface").style.display = "block";
                FBEventPush("updateUI:end:0");
                FBEnableButton = false
            },1000);
        
        FBEnableButton = false
        window.setTimeout(function(){
            window.alert("At supermarket Effelunga you find full shelves, as you see in the picture.")
            window.alert("If you think to find biscuits also in the next supermarket, press the blue button. Otherwise, press the yellow button.")
             FBEnableButton = true
        },3000);
        
        FBUpdateBar()
        
        return
    }
    
    
    if((event=="onActionTop:end")||(event=="onActionLeft:end")||(event=="onActionRight:end")) {
            if(!FBEnableButton) return
            FBEnableButton = false
            
            window.clearTimeout(timeoutHandle);
            window.clearTimeout(colobarHandle);
            colobarVal = 100+TIMESTEP
            FBUpdateBar()
            
            if(event=="onActionTop:end") action = 2
            else if(event=="onActionLeft:end") action = 0
            else if(event=="onActionRight:end") action = 1
            user_inputs.push(action)
    }
        

    
    else if(event.includes("updateUI:end")){
        
        currentPos = parseInt(event.split(':')[2])
        
        window.clearTimeout(timeoutHandle);
        window.clearTimeout(colobarHandle);
        
        
        
        if(VISIBLE_TIME==5000 && currentPos==7) {
            window.alert("Hint: you can swipe left and right");
            VISIBLE_TIME = 4500
            TRUTH_VISIBLE_TIME = 2000
            BAR_UPDATE_TIME = 500
            TIMESTEP = 100/(VISIBLE_TIME/BAR_UPDATE_TIME-1)
        }
        
        
        if(currentPos%2==0) {
            
            if(currentPos==2)
            window.setTimeout(function(){
                window.alert("We are back at Effelunga. Now the shelves are empty.")
                window.alert("If you think to find biscuits in the next supermarket, press the blue button. Otherwise, press the yellow button.")
               FBEnableButton = true
            },2000);
            
            if(currentPos==4) window.setTimeout(function(){
                window.alert("The probability which controls the supermarkets' supplies changes over time...")
                FBEnableButton = true
            },2000);
            
            if(currentPos==6) window.setTimeout(function(){
                window.alert("Attention please, the time is limited. If you don't answer in time, you will still see the right answer.")
                FBEnableButton = false
                colobarHandle = window.setTimeout(function(){FBUpdateBarReal();},BAR_UPDATE_TIME);
                timeoutHandle = window.setTimeout(function(){FBSkip();},3000);
            },2000);
            
            
            //timeoutHandle = window.setTimeout(function(){FBSkip();},VISIBLE_TIME);
           
            window.setTimeout(function(){FBEnableButton = false;},ANIM_TIME);
        }
        else{
            FBEnableButton = false;
            
            window.setTimeout(function(){
            document.getElementById("card_item_"+currentPos).innerHTML =
                '<img style="width: 100%; height: 100%; -webkit-animation-name: fadeIn; -webkit-animation-duration: 0.5s; animation-name: fadeIn; animation-duration: 0.5s;"'+
                'src="'+FBComputePicture(currentPos)+'">'
            },ANIM_TIME);
            
            if(currentPos==1) {
                
                action = user_inputs[0]
                truth = 1
                
                if(action==truth) window.setTimeout(function(){window.alert("Correct! Supermarket Sinply has biscuits");     timeoutHandle = FBGhost()},1000);
                
                else window.setTimeout(function(){window.alert("Wrong! Supermarket Sinply has biscuits");     timeoutHandle = FBGhost()},1000);
                
            
                
            }
            
            if(currentPos==3){
                
                action = user_inputs[1]
                truth = 0
                
                if(action==truth) window.setTimeout(function(){window.alert("Correct! Supermarket Sinply doesn't have biscuits");     timeoutHandle = FBGhost()},1000);
                
                else window.setTimeout(function(){window.alert("Wrong! Supermarket Sinply doesn't have biscuits");     timeoutHandle = FBGhost()},1000);

                
            }
            if(currentPos==5) {
           
           action = user_inputs[2]
           truth = 1
           
           if(action==truth) window.setTimeout(function(){window.alert("Correct! Supermaret Sinply has biscuits");     timeoutHandle = FBGhost()},1000);
           
           else window.setTimeout(function(){window.alert("Wrong! Supermarket Sinply has biscuits");     timeoutHandle = FBGhost()},1000);

            }
            

            
            else timeoutHandle = window.setTimeout(function(){FBGhost();},TRUTH_VISIBLE_TIME);
            
            //if(results[currentPos-1]==0) timeoutHandle = window.setTimeout(function(){var buttonTop = document.querySelector('.left-action'); buttonTop.click()},TRUTH_VISIBLE_TIME);
            //else if(results[currentPos-1]==1) timeoutHandle = window.setTimeout(function(){var buttonTop = document.querySelector('.right-action'); buttonTop.click()},TRUTH_VISIBLE_TIME);
            
            window.setTimeout(function(){ FBEnableButton = false;},TRUTH_VISIBLE_TIME+ANIM_TIME);
        }

    } else if(event=="updateUI:lastElement"){
        window.clearTimeout(timeoutHandle);
        window.clearTimeout(colobarHandle);
        
        FBJustEnded = true
        
//        FBSaveToDB(user_inputs,"-1","-1")
        
window.setTimeout(function(){

    if (confirm("The tutorial is completed!\nAre you ready to begin the test?")) {
                            FBDestroy()
    } else {
        window.location = "test0.html"
    }
    

                //            if(get_key.length>0) window.alert("Your Score: "+correct+"/"+total);
                //            else window.alert("UPLOAD ERROR");
                //            FBDestroy()
                        },BAR_UPDATE_TIME)

        


    }

}


         
// JavaScript Document
document.addEventListener("DOMContentLoaded", function(event) {

	function stackedCards () {

		var stackedOptions = 'Bottom'; //Change stacked cards view from 'Bottom', 'Top' or 'None'.
		var rotate = true; //Activate the elements' rotation for each move on stacked cards.
		var items = 7; //Number of visible elements when the stacked options are bottom or top.
		var elementsMargin = 10; //Define the distance of each element when the stacked options are bottom or top.
		var useOverlays = true; //Enable or disable the overlays for swipe elements.
		var maxElements; //Total of stacked cards on DOM.
		var currentPosition = 0; //Keep the position of active stacked card.
		var velocity = 0.3; //Minimum velocity allowed to trigger a swipe.
		var topObj; //Keep the swipe top properties.
		var rightObj; //Keep the swipe right properties.
		var leftObj; //Keep the swipe left properties.
		var listElNodesObj; //Keep the list of nodes from stacked cards.
		var listElNodesWidth; //Keep the stacked cards width.
		var currentElementObj; //Keep the stacked card element to swipe.
		var stackedCardsObj;
		var isFirstTime = true;
		var elementHeight;
		var obj;
		var elTrans;
		
		obj = document.getElementById('stacked-cards-block');
		stackedCardsObj = obj.querySelector('.stackedcards-container');
		listElNodesObj = stackedCardsObj.children;
		
		topObj = obj.querySelector('.stackedcards-overlay.top');
		rightObj = obj.querySelector('.stackedcards-overlay.right');
		leftObj = obj.querySelector('.stackedcards-overlay.left');
		
		countElements();
		currentElement();
		listElNodesWidth = stackedCardsObj.offsetWidth;
		currentElementObj = listElNodesObj[0];
		updateUi();
		
		//Prepare elements on DOM
		addMargin = elementsMargin * (items -1) + 'px';
		
		if(stackedOptions === "Top"){
	
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
			}
			
			elTrans = elementsMargin * (items - 1);
			
			stackedCardsObj.style.marginBottom = addMargin;
			
		} else if(stackedOptions === "Bottom"){
			
			
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
			}
			
			elTrans = 0;
			
			stackedCardsObj.style.marginBottom = addMargin;
			
		} else if (stackedOptions === "None"){
			
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
			}
			
			elTrans = 0;
		
		}
			
		for(i = items; i < maxElements; i++){
			listElNodesObj[i].style.zIndex = 0;
			listElNodesObj[i].style.opacity = 0;
			listElNodesObj[i].style.webkitTransform ='scale(' + (1 - (items * 0.04)) +') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
			listElNodesObj[i].style.transform ='scale(' + (1 - (items * 0.04)) +') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
		}
		
		if(listElNodesObj[currentPosition]){
			listElNodesObj[currentPosition].classList.add('stackedcards-active');
		}
		
		if(useOverlays){
			leftObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			leftObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
			rightObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			rightObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
			topObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			topObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
		} else {
			leftObj.className = '';
			rightObj.className = '';
			topObj.className = '';
			
			leftObj.classList.add('stackedcards-overlay-hidden');
			rightObj.classList.add('stackedcards-overlay-hidden');
			topObj.classList.add('stackedcards-overlay-hidden');
		}
		
		//Remove class init
		setTimeout(function() {
			obj.classList.remove('init');
		},150);
		
		
		function backToMiddle() {
	
			removeNoTransition();
			transformUi(0, 0, 1, currentElementObj); 
	
			if(useOverlays){
				transformUi(0, 0, 0, leftObj);
				transformUi(0, 0, 0, rightObj);
				transformUi(0, 0, 0, topObj);
			}
	
			setZindex(5);
	
			if(!(currentPosition >= maxElements)){
				//roll back the opacity of second element
				if((currentPosition + 1) < maxElements){
					listElNodesObj[currentPosition + 1].style.opacity = '.8';
				}
			}
		};
		
		// Usable functions
		function countElements() {
			maxElements = listElNodesObj.length;
			if(items > maxElements){
				items = maxElements;
			}
		};
		
		//Keep the active card.
		function currentElement() {
		  currentElementObj = listElNodesObj[currentPosition];  
		};
		
		//Functions to swipe left elements on logic external action.
		function onActionLeft() {
            if(!FBEnableButton) return
                
			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					leftObj.style.zIndex = '8';
					transformUi(0, 0, 1, leftObj);
	
				}
				
				setTimeout(function() {
					onSwipeLeft();
					resetOverlayLeft();
				},TRECENTO);
//                FBEventPush("onActionLeft:end")
			}
            
		};
		
		//Functions to swipe right elements on logic external action.
		function onActionRight() {
            if(!FBEnableButton) return
                
			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					rightObj.style.zIndex = '8';
					transformUi(0, 0, 1, rightObj);
				}
	
				setTimeout(function(){
					onSwipeRight();
					resetOverlayRight();
				},TRECENTO);
//                FBEventPush("onActionRight:end")
			}
		};
		
		//Functions to swipe top elements on logic external action.
		function onActionTop() {
            if(!FBEnableButton) return
                
			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					topObj.style.zIndex = '8';
					transformUi(0, 0, 1, topObj);
				}
				
				setTimeout(function(){
					onSwipeTop();
					resetOverlays();
				},TRECENTO); //wait animations end
			}
//            FBEventPush("onActionTop:end")
		};
		
		//Swipe active card to left.
		function onSwipeLeft() {
            if(!FBEnableButton) return
			removeNoTransition();
			transformUi(-1000, 0, 0, currentElementObj);
			if(useOverlays){
				transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
				transformUi(-1000, 0, 0, topObj); //Move topOverlay
				resetOverlayLeft();
			}
			currentPosition = currentPosition + 1;
            
            FBEventPush("onActionLeft:end")
			updateUi();
			currentElement();
			setActiveHidden();
            

		};
		
		//Swipe active card to right.
		function onSwipeRight() {
            if(!FBEnableButton) return
			removeNoTransition();
			transformUi(1000, 0, 0, currentElementObj);
			if(useOverlays){
				transformUi(1000, 0, 0, rightObj); //Move rightOverlay
				transformUi(1000, 0, 0, topObj); //Move topOverlay
				resetOverlayRight();
			}
	
			currentPosition = currentPosition + 1;
            
            FBEventPush("onActionRight:end")
			updateUi();
			currentElement();
			setActiveHidden();
            
            
		};
		
		//Swipe active card to top.
		function onSwipeTop() {
            if(!FBEnableButton) return
			removeNoTransition();
			transformUi(0, -1000, 0, currentElementObj);
			if(useOverlays){
				transformUi(0, -1000, 0, leftObj); //Move leftOverlay
				transformUi(0, -1000, 0, rightObj); //Move rightOverlay
				transformUi(0, -1000, 0, topObj); //Move topOverlay
				resetOverlays();
			}
	
			currentPosition = currentPosition + 1;
            FBEventPush("onActionTop:end")
			updateUi();
			currentElement();
			setActiveHidden();
		};
		
		//Remove transitions from all elements to be moved in each swipe movement to improve perfomance of stacked cards.
		function removeNoTransition() {
			if(listElNodesObj[currentPosition]){
				
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
				}
				
				listElNodesObj[currentPosition].classList.remove('no-transition');
				listElNodesObj[currentPosition].style.zIndex = 6;
			}
			
		};
	
		//Move the overlay left to initial position.
		function resetOverlayLeft() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
					setTimeout(function(){
						
						if(stackedOptions === "Top"){
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
							
							elTrans = 0;
						
						}
						
						if(!isFirstTime){
							
							leftObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
							
						}
						
						requestAnimationFrame(function(){
							
							leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
						
						});
						
					},TRECENTO);
					
					isFirstTime = false;
				}
			}
	   };
	   
		//Move the overlay right to initial position.
		function resetOverlayRight() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
					setTimeout(function(){
						
						if(stackedOptions === "Top"){+2
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
							
							elTrans = 0;
						
						}
						
						if(!isFirstTime){
							
							rightObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
							
						}
						
						requestAnimationFrame(function(){
							
							rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
						
						});
	
					},TRECENTO);
					
					isFirstTime = false;
				}
			}
	   };
	   
		//Move the overlays to initial position.
		function resetOverlays() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
	
					setTimeout(function(){
						if(stackedOptions === "Top"){
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
	
							elTrans = 0;
	
						}
						
						if(!isFirstTime){
	
							leftObj.classList.add('no-transition');
							rightObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
	
						}
						
						requestAnimationFrame(function(){
	
							leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.opacity = '0';
							
							rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
	
						});
	
					},TRECENTO);	// wait for animations time
					
					isFirstTime = false;							
				}
			}
	   };
		
		function setActiveHidden() {
			if(!(currentPosition >= maxElements)){
				listElNodesObj[currentPosition - 1].classList.remove('stackedcards-active');
				listElNodesObj[currentPosition - 1].classList.add('stackedcards-hidden');
				listElNodesObj[currentPosition].classList.add('stackedcards-active');
			}		 
		};
	
		//Set the new z-index for specific card.
		function setZindex(zIndex) {
			if(listElNodesObj[currentPosition]){
				listElNodesObj[currentPosition].style.zIndex = zIndex;
			}		 
		};
	
    // Remove element from the DOM after swipe. To use this method you need to call this function in onSwipeLeft, onSwipeRight and onSwipeTop and put the method just above the variable 'currentPosition = currentPosition + 1'. 
    //On the actions onSwipeLeft, onSwipeRight and onSwipeTop you need to remove the currentPosition variable (currentPosition = currentPosition + 1) and the function setActiveHidden

		function removeElement() {
      currentElementObj.remove();
      if(!(currentPosition >= maxElements)){
				listElNodesObj[currentPosition].classList.add('stackedcards-active');
			}		
		};
		
		//Add translate X and Y to active card for each frame.
		function transformUi(moveX,moveY,opacity,elementObj) {
			requestAnimationFrame(function(){  
				var element = elementObj;
				
				// Function to generate rotate value 
				function RotateRegulator(value) {
				   if(value/10 > 15) {
					   return 15;
				   }
				   else if(value/10 < -15) {
					   return -15;
				   }
				   return value/10;
				}
				
				if(rotate){
					rotateElement = RotateRegulator(moveX);
				} else {
					rotateElement = 0;
				}
				
				if(stackedOptions === "Top"){
					elTrans = elementsMargin * (items - 1);
					if(element){     
						element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.opacity = opacity;
					}
				} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
					
					if(element){
						element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.opacity = opacity;
					}
				
				}
			});	  
		};
	
		//Action to update all elements on the DOM for each stacked card.
		function updateUi() {
                
			requestAnimationFrame(function(){
				elTrans = 0;
				var elZindex = 5;
				var elScale = 1;
				var elOpac = 1;
				var elTransTop = items;
				var elTransInc = elementsMargin;
	
				for(i = currentPosition; i < (currentPosition + items); i++){
					if(listElNodesObj[i]){
						if(stackedOptions === "Top"){
	
							listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
	
							if(useOverlays){
								leftObj.classList.add('stackedcards-origin-top');
								rightObj.classList.add('stackedcards-origin-top');
								topObj.classList.add('stackedcards-origin-top'); 
							}
	
							elTrans = elTransInc * elTransTop;
							elTransTop--;
	
						} else if(stackedOptions === "Bottom"){
							listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
	
							if(useOverlays){
								leftObj.classList.add('stackedcards-origin-bottom');
								rightObj.classList.add('stackedcards-origin-bottom');
								topObj.classList.add('stackedcards-origin-bottom');
							}
	
							elTrans = elTrans + elTransInc;
	
						} else if (stackedOptions === "None"){
	
							listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
							elTrans = elTrans + elTransInc;
	
						}
	
						listElNodesObj[i].style.transform ='scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
						listElNodesObj[i].style.webkitTransform ='scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
						listElNodesObj[i].style.opacity = elOpac;
						listElNodesObj[i].style.zIndex = elZindex;
	
						elScale = elScale - 0.04;
						elOpac = elOpac - (1 / items);
						elZindex--;
					}
				}
	
			});
                        
                        if(currentPosition==maxElements) {
                            
                            FBEventPush("updateUI:lastElement")

                                    var element = obj;
                            element.addEventListener('touchstart', gestureStart, false);
                            element.addEventListener('touchmove', gestureMove, false);
                            element.addEventListener('touchend', gestureEnd, false);
                            
                            //Add listeners to call global action for swipe cards
                            var buttonLeft = document.querySelector('.left-action');
                            var buttonTop = document.querySelector('.top-action');
                            var buttonRight = document.querySelector('.right-action');

                            buttonLeft.removeEventListener('click', onActionLeft, false);
                            buttonTop.removeEventListener('click', onActionTop, false);
                            buttonRight.removeEventListener('click', onActionRight, false);
                                               
                            var buttonGhost = document.querySelector('.ghost-action');
                            buttonGhost.removeEventListener('click', onActionGhost, false);
                        }
                
                
                        
                        
                
            FBEventPush("updateUI:end:"+currentPosition)
		};
	
		//Touch events block
		var element = obj;
		var startTime;
		var startX;
		var startY;
		var translateX;
		var translateY;
		var currentX;
		var currentY;
		var touchingElement = false;
		var timeTaken;
		var topOpacity;
		var rightOpacity;
		var leftOpacity;
	
		function setOverlayOpacity() {
	
			topOpacity = (((translateY + (elementHeight) / 2) / 100) * -1);
			rightOpacity = translateX / 100;
			leftOpacity = ((translateX / 100) * -1);
			
	
			if(topOpacity > 1) {
				topOpacity = 1;
			}
	
			if(rightOpacity > 1) {
				rightOpacity = 1;
			}
	
			if(leftOpacity > 1) {
				leftOpacity = 1;
			}
		}
		
		function gestureStart(evt) {
            if(!FBEnableButton) return
			startTime = new Date().getTime();
			
			startX = evt.changedTouches[0].clientX;
			startY = evt.changedTouches[0].clientY;
			
			currentX = startX;
			currentY = startY;
	
			setOverlayOpacity();
			
			touchingElement = true;
			if(!(currentPosition >= maxElements)){
				if(listElNodesObj[currentPosition]){
					listElNodesObj[currentPosition].classList.add('no-transition');
					setZindex(6);
					
					if(useOverlays){
						leftObj.classList.add('no-transition');
						rightObj.classList.add('no-transition');
						topObj.classList.add('no-transition');
					}
					
					if((currentPosition + 1) < maxElements){
						listElNodesObj[currentPosition + 1].style.opacity = '1';
					}
					
					elementHeight = listElNodesObj[currentPosition].offsetHeight / 3;
				}
	
			}
			
		};
		
		function gestureMove(evt) {
            if(!FBEnableButton) return
			currentX = evt.changedTouches[0].pageX;
			currentY = evt.changedTouches[0].pageY;
			
			translateX = currentX - startX;
			translateY = currentY - startY;
	
			setOverlayOpacity();
			
			if(!(currentPosition >= maxElements)){
				evt.preventDefault();
				transformUi(translateX, translateY, 1, currentElementObj);
	
				if(useOverlays){
					transformUi(translateX, translateY, topOpacity, topObj);
	
					if(translateX < 0){
						transformUi(translateX, translateY, leftOpacity, leftObj);
						transformUi(0, 0, 0, rightObj);
	
					} else if(translateX > 0){
						transformUi(translateX, translateY, rightOpacity, rightObj);
						transformUi(0, 0, 0, leftObj);
					}
	
					if(useOverlays){
						leftObj.style.zIndex = 8;
						rightObj.style.zIndex = 8;
						topObj.style.zIndex = 7;
					}
	
				}
	
			}
			
		};
		
		function gestureEnd(evt) {
            if(!FBEnableButton) return
			if(!touchingElement){
				return;
			}
			
			translateX = currentX - startX;
			translateY = currentY - startY;
			
			timeTaken = new Date().getTime() - startTime;
			
			touchingElement = false;
			
			if(!(currentPosition >= maxElements)){
				if(translateY < (elementHeight * -1) && translateX > ((listElNodesWidth / 2) * -1) && translateX < (listElNodesWidth / 2)){  //is Top?
	
					if(translateY < (elementHeight * -1) || (Math.abs(translateY) / timeTaken > velocity)){ // Did It Move To Top?
						onSwipeTop();
					} else {
						backToMiddle();
					}
	
				} else {
	
					if(translateX < 0){
						if(translateX < ((listElNodesWidth / 2) * -1) || (Math.abs(translateX) / timeTaken > velocity)){ // Did It Move To Left?
							onSwipeLeft();
						} else {
							backToMiddle();
						}
					} else if(translateX > 0) {
						
						if (translateX > (listElNodesWidth / 2) && (Math.abs(translateX) / timeTaken > velocity)){ // Did It Move To Right?
							onSwipeRight();
						} else {
							backToMiddle();
						}
	
					}
				}
			}
		};
                           
        function onActionGhost(){
            
            
            removeNoTransition();
            if(results[currentPosition-1]==user_inputs[user_inputs.length-1]) transformUi(0, 0, 0, currentElementObj);
            else transformUi(0, 1000, 0, currentElementObj);
            currentPosition = currentPosition + 1;
            updateUi();
            currentElement();
            setActiveHidden();
        }
		
		element.addEventListener('touchstart', gestureStart, false);
		element.addEventListener('touchmove', gestureMove, false);
		element.addEventListener('touchend', gestureEnd, false);
		
		//Add listeners to call global action for swipe cards
		var buttonLeft = document.querySelector('.left-action');
		var buttonTop = document.querySelector('.top-action');
		var buttonRight = document.querySelector('.right-action');

		buttonLeft.addEventListener('click', onActionLeft, false);
		buttonTop.addEventListener('click', onActionTop, false);
		buttonRight.addEventListener('click', onActionRight, false);
                           
        var buttonGhost = document.querySelector('.ghost-action');
        buttonGhost.addEventListener('click', onActionGhost, false);
                           
                           
                           

                           
	}
	
	stackedCards();
	
});
