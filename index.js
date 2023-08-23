$(".openIcon").click(function(){
    $(".menu").css("left","0")
})

$(".close").click(function(){
    $(".menu").css("left","-250px")
})



$(".acc h3").click(function(){
    $(this).next().slideToggle()
    $(".acc div").not($(this).next()).slideUp()
})

window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }

  function countDownToTime(countTo) {
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);
    timeDifference = (futureDate- now);    
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }

  $("textarea").keyup(function(){
    let myLength = $(this).val().length;

    $("#chars").text(
        100 - myLength <= 0 ? "Finished" :  100 - myLength
    )
  })

