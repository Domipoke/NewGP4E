//#region BG Color
var pos = [
    "page",
    "bgcolor",
    "bgcgreen",
    "bgcpurple",
    "bgcred",
    "bgcwhite",
    "slide",
    "menu"
]
class BgColor extends HTMLElement {
    constructor(props) {
        super(props);
        this.style.zIndex=pos.indexOf("bgcolor")
        this.style.position="relative"
        this.style.display="inline-block"
        this.style.overflow="none"
        this.style.width="100%"
        this.style.height="100%"
        this.setAttribute("grad",45)

        //
        var r=document.createElement("div") 
        var g=document.createElement("div")
        var w=document.createElement("div") 
        var p=document.createElement("div")
        r.style.display="block"
        g.style.display="block"
        w.style.display="block"
        p.style.display="block"

        r.classList.add("r")
        g.classList.add("g")
        w.classList.add("w")
        p.classList.add("p")
        
        
        r.style.opacity=0.5
        g.style.opacity=0.6
        w.style.opacity=0.35
        p.style.opacity=0.6

        //r.style.margin="0"
        //g.style.margin="0"
        //w.style.margin="0"
        //p.style.margin="0"

        //r.style.padding="0"
        //g.style.padding="0"
        //w.style.padding="0"
        //p.style.padding="0"

        r.style.position="absolute"
        g.style.position="absolute"
        w.style.position="absolute"
        p.style.position="absolute"

        r.style.width="100%"
        g.style.width="100%"
        w.style.width="100%"
        p.style.width="100%"

        r.style.height="100%"
        g.style.height="100%"
        w.style.height="100%"
        p.style.height="100%"

        r.style.left="0%"
        g.style.left="0%"
        w.style.left="0%"
        p.style.left="0%"

        r.style.top="0%"
        g.style.top="0%"
        w.style.top="0%"
        p.style.top="0%"

        r.style.overflow="none"
        g.style.overflow="none"
        w.style.overflow="none"
        p.style.overflow="none"
        
        //r.style.float="left"
        //g.style.float="right"
        //w.style.float="left"
        //p.style.float="right"

        r.style.zIndex=pos.indexOf("bgcred")
        g.style.zIndex=pos.indexOf("bgcgreen")
        w.style.zIndex=pos.indexOf("bgcwhite")
        p.style.zIndex=pos.indexOf("bgcpurple")



        var gr = 180
        r.style.backgroundImage="linear-gradient("+((gr+90)%360)+"deg, rgba( 255,  5,  5, 1) 0%,  rgba(255,255,255,0) 100%)"
        g.style.backgroundImage="linear-gradient("+((gr+270)%360)+"deg, rgba(  52, 219, 143, 1) 0%, rgba(255,255,255,0) 100%)"
        w.style.backgroundImage="linear-gradient("+((gr+180)%360)+"deg, rgba( 255, 255, 255, 1) 0%, rgba(255,255,255,0) 100%)"
        p.style.backgroundImage="linear-gradient("+((gr)%360)+"deg,  rgba(  87,  36, 173, 1) 0%, rgba(255,255,255,0) 100%)"

        this.appendChild(r)
        this.appendChild(g)
        this.appendChild(w)
        this.appendChild(p)

        //this.rotateColor()
    }
    rotateColor() {
        this.color = setInterval(()=>{
            var gr = Number.parseInt(document.getElementsByTagName("gp4e-bg")[0].getAttribute("grad"))
            document.getElementsByTagName("gp4e-bg")[0].getElementsByClassName("r")[0].style.backgroundImage="linear-gradient("+((gr+90)%360)+"deg, rgba( 255,  5,  5, 1) 0%,  rgba(255,255,255,0) 100%)"
            document.getElementsByTagName("gp4e-bg")[0].getElementsByClassName("g")[0].style.backgroundImage="linear-gradient("+((gr+180)%360)+"deg, rgba(  52, 219, 143, 1) 0%, rgba(255,255,255,0) 100%)"
            document.getElementsByTagName("gp4e-bg")[0].getElementsByClassName("p")[0].style.backgroundImage="linear-gradient("+((gr)%360)+"deg,  rgba(  87,  36, 173, 1) 0%, rgba(255,255,255,0) 100%)"
            document.getElementsByTagName("gp4e-bg")[0].getElementsByClassName("w")[0].style.backgroundImage="linear-gradient("+((gr+270)%360)+"deg, rgba( 255, 255, 255, 1) 0%, rgba(255,255,255,0) 100%)"
            document.getElementsByTagName("gp4e-bg")[0].setAttribute("grad",(gr+1))
    
        },50)
    }
}
//#endregion
//#region 