let slot_screen = document.getElementById("slot-screen");
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let stop_btn = document.getElementsByClassName("stp-btn");
let start_btn = document.getElementById("start-brn");


let sec = 100; // slot reel rotation speed
let stopReelFlag = []; //slot reel stop flag
let reelCounts = []; //wich image to position
let slotFrameHeight; //frame size
let slotReelsHeight; //overall reel image size
let slotReelItemHeight; //size of one reel image
let slotReelStartHeight; //initial image value


//initialization
let slot = {
    init:function(){
        stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[2] = false;
        reelCounts[0] = reelCounts[1] = reelCounts[2]= 0;
    },

    //click event
    start:function(){
        slot.init();
        for (let index = 0; index < 3; index++){
            slot.animation(index);
        }
    },
    //stop button click event
    stop:function(){
        stopReelFlag[i] = true;
        if(stopReelFlag[0] && stopReelFlag[1] && stopReelFlag[2]){
            start_btn.removeAttribute("disabled");
        }
    },

    // set starting position
    resetLocationInfo:function(){
        slotFrameHeight = slot_screen.offsetHeight;
        slotReelsHeight = reels[0].offsetHeight;

    }
}