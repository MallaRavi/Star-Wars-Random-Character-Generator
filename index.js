
$(document).ready(()=>{
    getChar()
    function getChar(){
        const profileId=Math.ceil(Math.random()*88)
        $.get(`https://akabab.github.io/starwars-api/api/id/${profileId}.json`,function(data){
            // console.log(profileId)
            // console.log(data.name)
            // console.log(data.gender)
            // console.log(data.species)
            $(".profile-id").text(`id: ${data.id}`);
            $(".profile-name").text(`Name: ${data.name}`);
            $(".profile-gender").text(`Gender: ${data.gender}`);
            $(".profile-species").text(`Species: ${data.species}`);
            $(".profile-imagediv")
                .empty()
                .append(`<img src='${data.image}' alt="${data.name} image" class="profile-img"></img>`)
                .attr("width","100px")
                .attr("height","200px")
                
            $(".profile-img")
                .css('width','200px')
                .css('box-shadow','5px 5px 5px #000025')
                .css('border-radius','15px')
            $(".profile-button")
                .empty()
                .append(`<button class="get-charbtn">Get Random Character</button>`)
            $(".get-charbtn")
                .css({
                    padding: '10px',
                    fontSize:'14px',
                    backgroundColor:'#845EC2',
                    color:'#FDF7FF',
                    border:'2px solid blue',
                    borderRadius:'25px',
                })
    
            $(".starwarscharacter-profile")
                .css({
                    width:'50%',
                    margin: '20px auto',
                    padding:'20px',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'30px',
                    backgroundColor:'#008F7A',
                    color:'black',
                    fontFamily:'Tahoma',
                    fontWeight:'bold',
                })
            $("body").css({
                border:'0',
                margin:'0',
                backgroundColor:'#008E9B',
                boxSizing:'border-box',
            })
            $(".get-charbtn").on("click",function(){
                console.log("button clicked")
                getChar()
            })
            
        })
    }
})