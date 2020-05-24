// TEST 2

// var inputs = [
// "Provo un senso diffuso di inquietudine",
// "Se posso evito di uscire di casa",
// "Mi sento turbato facilmente ed ho paura",
// "Temo che da un momento all'altro possa accadermi qualche disgrazia",
// "Mi sento a pezzi",
// "Mi tremano le gambe e le braccia",
// "Soffro di emicranie, dolori al collo e mal di schiena",
// "Mi sento debole e mi stanco con facilit&agrave",
// "Mi sento irrequieto e non riesco a stare seduto",
// "Sento il cuore battere forte",
// "Soffro di vertigini",
// "Mi sento svenire",
// "Faccio fatica a respirare",
// "Sento intorpidimento e formicolio nelle dita",
// "Soffro di mal di stomaco e di cattiva digestione",
// "Devo spesso urinare",
// "Ho le mani fredde e sudate",
// "Arrosisco facilmente",
// "Faccio fatica ad addormentarmi e ho un sonno agitato",
// "Ho degli incubi"]

var inputs = [
"I feel a diffuse sense of apprehension",
"If I can, I avoid leaving home",
"I easily get upset and I am scared",
"I am afraid that some accident may suddently happen to me at any time",
"I feel broken",
"My legs and arms tremble",
"I have migraines, neck and back pain ",
"I feel weak and I get easily tired",
"I feel agitated and I can't stay still",
"I feel that my heart beats faster",
"I suffer from vertigo",
"I feel faint",
"I struggle to breath",
"I feel numbness and tingling in the fingers",
"I have stomachache",
"I often need to urinate",
"My hands are cold and sweaty",
"I blush often",
"I struggle to fall asleep and I have a restless sleep",
"I have nightmares"]



// var score_message = ["Ansia? No grazie\nDecisamente l'ansia non \u00e8 un tuo problema. Hai un'alta capacit\u00e0 di controllo delle emozioni e molto difficilmente permetti agli eventi esterni di minacciare la tua imperturbabilit\u00e0. Sei la persona a cui chiunque affiderebbe la gestione del proprio portafoglio azionario, il rigore decisivo nella finale del campionato del mondo di calcio e perfino la guida dell'intera nazione in una situazione di emergenza. Attenzione per\u00f2. Se il tuo punteggio \u00e8 molto vicino al livello inferiore della scala (< = 21 punti) rischi di apparire una persona fredda e compassata, poco incline ad ogni tipo di slancio emotivo e con qualche difficolt\u00e0 ad avvertire ed esprimere anche le emozioni positive.",
// "Alcuni piccoli segnali di ansia. Non \u00e8 il caso di preoccuparsi.\nAlcuni piccoli segnali d'ansia, verosimilmente episodici e connessi a particolari situazioni di stress, personale o ambientale.Ricorda per\u00f2 che l'ansia non \u00e8 sempre e comunque da valutare negativamente. La capacit\u00e0 di sperimentare e contenere un moderato livello di ansia \u00e8 un importante e prezioso fattore di adattamento in grado di migliorare le proprie prestazioni in numerose circostanze, dall'apprendimento all'esecuzioni di compiti specifici. Nelle relazioni sociali pu\u00f2 inoltre rivelarsi indice di interesse, partecipazione, coinvolgimento umano e personale.",
// "Ansia di livello medio.\nTieni sotto controllo le fonti di stress. Il punteggio rivela un livello medio di ansia. La reazione ansiosa non \u00e8 per te un tipo di reazione esclusiva e ricorrente, ma occorre valutare quali fra le circostanze attuali della tua vita hanno abbassato la tua soglia di allarme e ti inducono a reagire con una certa apprensione agli eventi del tuo mondo interiore e della realt\u00e0 esterna. Sei ancora in grado di dominare le tue reazioni ansiose, che non compromettono in modo particolarmente fastidioso la qualit\u00e0 della tua vita, ma avverti il pericolo di un escalation. Tieni sotto controllo la situazione.",
// "Ansia di livello medio-alto. Soglia di Attenzione.\nIl punteggio rivela un livello medio-alto di ansia. La reazione ansiosa non \u00e8 ancora diffusa e generalizzata ma \u00e8 piuttosto innescata da situazioni specifiche, in grado di generare in te uno stato di disagio che talvolta consideri eccessivo. Probabilmente in questo periodo avverti in preoccupante crescita la quantit\u00e0 e la variet\u00e0 degli stimoli in grado di metterti in apprensione, e non sempre riesci ad impedire che la tua tensione emotiva si somatizzi, riversandosi sul tuo corpo e generando stati di malessere e disagio anche di carattere fisico.",
// "Che cosa sta accadendo nella tua vita? Il test ha rilevato un livello alto di ansia.\nIl punteggio rivela un livello alto di ansia. La reazione ansiosa tende a manifestarsi in modo diffuso e generalizzato e rischia di divenire per te una modalit\u00e0 quasi esclusiva di reazione agli stimoli. Il senso di armonia con te stesso, alcune tue potenzialit\u00e0 professionali e la tua vita sociale e sentimentale rischiano di venire parzialmente compromessi da questo stato pervasivo e fastidioso di tensione emotiva. Anche il tuo corpo viene coinvolto in questo generale stato di apprensione e non sono infrequenti manifestazioni di malessere e somatizzazioni a carico di alcuni organi. Mal di testa, disturbi all'apparato gastrointestinale, difficolt\u00e0 respiratorie, manifestazioni cutanee e dolori di varia natura possono accompagnare questo generale stato di malessere. E' forse opportuno prendere in considerazione la possibilit\u00e0 di inziare una psicoterapia."]

var score_message = [
"Anxiety? No thanks.",
"Small signals of anxiety. It is not the case to worry about it.",
"Medium level of anxiety. Keep under control the sources of stress.",
"Medium-high level of anxiety. Attention span.",
"What is happening in your life? The test has revealed an high level of anxiety.",

]

//var inputs =  [1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1]
//var results = [0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1]


var next_page = 'homet4.html'

var title = "<center>How often...</center>"


function load() {

    
    document.getElementById("title-div").innerHTML = title
    
    var divs = document.getElementById("actions-div-top");
    var string = ''
    string += '<div class="b3-action" style="cursor: pointer">Often</div>'
    string += '<div class="b4-action"  style="cursor: pointer">Almost Always</div>'
    divs.innerHTML = string;
    
    var divs = document.getElementById("actions-div-bottom");
    var string = ''
    string += '<div class="b1-action"  style="cursor: pointer">Never</div>'
    string += '<div class="b2-action"  style="cursor: pointer">Sometimes</div>'
    divs.innerHTML = string;
    
    
    
    var divs = document.getElementById("stacked-cards-block");
    var string = '<div class="stackedcards-container">'

    
    for (var i=0; i<inputs.length; i++) {
        string +=  '<div class="card-item" ><div style="position: absolute; top:20%; left:10%; width: 80%; height: 80%; font-family:'+"'Verdana'"+'; font-size: 30px; font-weight: 10;  vertical-align: middle;"><center>'+inputs[i]+'</div></div>'
    }
    
    string += '</div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay top"></div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay right"></div>'
    string += '<div class="stackedcards--animatable stackedcards-overlay left"></div>'
        
    divs.innerHTML = string;
}

load()


TIMESTEP = 100/(inputs.length)
ANIM_TIME = 500
TRECENTO = 500
BAR_UPDATE_TIME = 600

FBJustLoaded = true
FBJustEnded = false
FBEnableButton = false

var user_inputs = []

var colobarVal = 0-TIMESTEP


function FBDestroy() {
    window.location = next_page
}


function FBUpdateBar() {
    
    colobarVal = colobarVal+TIMESTEP
    
    document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow',colobarVal);
    document.getElementsByClassName('progress-bar').item(0).setAttribute('style','width:'+Number(colobarVal)+'%;')
}


function FBSaveToDB(score1, score2, score3){
    
    console.log("t1",score1,"t2",score2,"t3",score3)

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

    result = 0
    gameScore.save()
    .then((gameScore) => {
      // Execute any logic that should take place after the object is saved.
      // alert('New object created with objectId: ' + gameScore.id);
        result = 1
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      // alert('Failed to create new object, with error code: ' + error.message);
    });
    return result
}



function FBEventPush(event) {
    
    console.log(event)
    
    if(FBJustEnded) return
    if(FBJustLoaded) {
        FBJustLoaded=false
            // Loading screen
            
            window.setTimeout(function(){
                document.getElementById("loading-interface").innerHTML = "";
                document.getElementById("game-interface").style.display = "block";
                FBEventPush("updateUI:end:0");
            },500);
        

        return
    }
    
    
    if((event=="onAction1:end")||(event=="onAction2:end")||(event=="onAction3:end")||(event=="onAction4:end")) {
            
            if(!FBEnableButton) return
            FBEnableButton = false
            
            if(event=="onAction1:end") action = 1
            else if(event=="onAction2:end") action = 2
            else if(event=="onAction3:end") action = 3
            else if(event=="onAction4:end") action = 4
            
            user_inputs.push(action)
    }
        

    
    else if(event.includes("updateUI:end")){
        
        FBUpdateBar();
        window.setTimeout(function(){FBEnableButton = true;},ANIM_TIME);
 

    } else if(event=="updateUI:lastElement"){
        FBUpdateBar();
        
        FBJustEnded = true
        
        
        inputs1 = parent.document.URL.substring(parent.document.URL.indexOf('?t1=')+4,parent.document.URL.indexOf('?t2='))
        inputs2 = parent.document.URL.substring(parent.document.URL.indexOf('?t2=')+4, parent.document.URL.length);
                    
        inputs3 = user_inputs.toString()
        inputs3 = inputs3.replace(/,/g,"")
        
        out = FBSaveToDB(inputs1,inputs2,inputs3)
        
        console.log(user_inputs)
        
        score = 0
        for(i=0;i<user_inputs.length;i++) score+=user_inputs[i]
        if(score<=29) cat = 0
        else if(score<=39) cat = 1
        else if(score<=49) cat = 2
        else if(score<=61) cat = 3
        else cat = 4
       
            
        if(out==0) window.setTimeout(function(){window.alert(score_message[cat]); FBDestroy()},BAR_UPDATE_TIME)
        else window.alert("UPLOAD ERROR")
        
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
		function onAction1() {
            if(!FBEnableButton) return
                
			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					leftObj.style.zIndex = '8';
					transformUi(0, 0, 1, leftObj);
	
				}
				
				setTimeout(function() {
					onSwipe1();
					resetOverlayLeft();
				},TRECENTO);
//                FBEventPush("onActionLeft:end")
			}
            
		};
        
                //Functions to swipe left elements on logic external action.
                function onAction2() {
                    if(!FBEnableButton) return
                        
                    if(!(currentPosition >= maxElements)){
                        if(useOverlays) {
                            leftObj.classList.remove('no-transition');
                            topObj.classList.remove('no-transition');
                            leftObj.style.zIndex = '8';
                            transformUi(0, 0, 1, leftObj);
            
                        }
                        
                        setTimeout(function() {
                            onSwipe2();
                            resetOverlayLeft();
                        },TRECENTO);
        //                FBEventPush("onActionLeft:end")
                    }
                    
                };
    
                //Functions to swipe left elements on logic external action.
                function onAction3() {
                    if(!FBEnableButton) return
                        
                    if(!(currentPosition >= maxElements)){
                        if(useOverlays) {
                            leftObj.classList.remove('no-transition');
                            topObj.classList.remove('no-transition');
                            leftObj.style.zIndex = '8';
                            transformUi(0, 0, 1, leftObj);
            
                        }
                        
                        setTimeout(function() {
                            onSwipe3();
                            resetOverlayLeft();
                        },TRECENTO);
        //                FBEventPush("onActionLeft:end")
                    }
                    
                };
    
                        //Functions to swipe left elements on logic external action.
                        function onAction4() {
                            if(!FBEnableButton) return
                                
                            if(!(currentPosition >= maxElements)){
                                if(useOverlays) {
                                    leftObj.classList.remove('no-transition');
                                    topObj.classList.remove('no-transition');
                                    leftObj.style.zIndex = '8';
                                    transformUi(0, 0, 1, leftObj);
                    
                                }
                                
                                setTimeout(function() {
                                    onSwipe4();
                                    resetOverlayLeft();
                                },TRECENTO);
                //                FBEventPush("onActionLeft:end")
                            }
                            
                        };
		
		
		//Swipe active card to left.
		function onSwipe1() {
            if(!FBEnableButton) return
			removeNoTransition();
			transformUi(-1000, 0, 0, currentElementObj);
			if(useOverlays){
				transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
				transformUi(-1000, 0, 0, topObj); //Move topOverlay
				resetOverlayLeft();
			}
			currentPosition = currentPosition + 1;
            
            FBEventPush("onAction1:end")
			updateUi();
			currentElement();
			setActiveHidden();
            

		};
		
        //Swipe active card to left.
        function onSwipe2() {
            if(!FBEnableButton) return
            removeNoTransition();
            transformUi(-1000, 0, 0, currentElementObj);
            if(useOverlays){
                transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
                transformUi(-1000, 0, 0, topObj); //Move topOverlay
                resetOverlayLeft();
            }
            currentPosition = currentPosition + 1;
            
            FBEventPush("onAction2:end")
            updateUi();
            currentElement();
            setActiveHidden();
            

        };
        
        //Swipe active card to left.
        function onSwipe3() {
            if(!FBEnableButton) return
            removeNoTransition();
            transformUi(-1000, 0, 0, currentElementObj);
            if(useOverlays){
                transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
                transformUi(-1000, 0, 0, topObj); //Move topOverlay
                resetOverlayLeft();
            }
            currentPosition = currentPosition + 1;
            
            FBEventPush("onAction3:end")
            updateUi();
            currentElement();
            setActiveHidden();
            

        };
        
        
        //Swipe active card to left.
        function onSwipe4() {
            if(!FBEnableButton) return
            removeNoTransition();
            transformUi(-1000, 0, 0, currentElementObj);
            if(useOverlays){
                transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
                transformUi(-1000, 0, 0, topObj); //Move topOverlay
                resetOverlayLeft();
            }
            currentPosition = currentPosition + 1;
            
            FBEventPush("onAction4:end")
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
            if(currentPosition==maxElements) FBEventPush("updateUI:lastElement")
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
		
		
		//Add listeners to call global action for swipe cards
		var button1 = document.querySelector('.b1-action');
		var button2 = document.querySelector('.b2-action');
		var button3 = document.querySelector('.b3-action');
        var button4 = document.querySelector('.b4-action');

		button1.addEventListener('click', onAction1, false);
		button2.addEventListener('click', onAction2, false);
		button3.addEventListener('click', onAction3, false);
        button4.addEventListener('click', onAction4, false);

	}
	
	stackedCards();
	
});
