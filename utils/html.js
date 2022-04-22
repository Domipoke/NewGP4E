var pos = [
    "bgcolor",
    "bgcred","bgcgreen","bgcpurple","bgcwhite",
    "page",
    "slide",
    "menu"
]
class BgColor extends HTMLElement {
    constructor(props) {
        super(props);
        this.style.zIndex=pos.indexOf("bgcolor")
        this.style.position="relative"
        this.style.display="inline"
        this.style.overflow="none"
        this.style.width="100%"
        this.style.height="100%"

        //
        var tl=document.createElement("div") 
        var tr=document.createElement("div")
        var br=document.createElement("div") 
        var bl=document.createElement("div")
        
        tl.style.backgroundImage="linear-gradient(135deg, rgba(219,52,52,1) 0%, rgba(255,255,255,1) 100%)"
        tr.style.backgroundImage="linear-gradient(225deg, rgba(52,219,143,1) 0%, rgba(255,255,255,1) 100%)"
        br.style.backgroundImage="linear-gradient(315deg, rgba(212,212,212,1) 0%, rgba(255,255,255,1) 100%)"
        bl.style.backgroundImage="linear-gradient(315deg, rgba(212,212,212,1) 0%, rgba(255,255,255,1) 100%)"
        
        tl.style.display="block"
        tr.style.display="block"
        bl.style.display="block"
        br.style.display="block"

        tl.style.opacity="0.5"
        tr.style.opacity="0.5"
        bl.style.opacity="0.5"
        br.style.opacity="0.5"

        //tl.style.margin="0"
        //tr.style.margin="0"
        //bl.style.margin="0"
        //br.style.margin="0"

        //tl.style.padding="0"
        //tr.style.padding="0"
        //bl.style.padding="0"
        //br.style.padding="0"

        tl.style.position="absolute"
        tr.style.position="absolute"
        bl.style.position="absolute"
        br.style.position="absolute"

        tl.style.width="100%"
        tr.style.width="100%"
        bl.style.width="100%"
        br.style.width="100%"

        tl.style.height="100%"
        tr.style.height="100%"
        bl.style.height="100%"
        br.style.height="100%"

        tl.style.left="0"
        tr.style.left="0"
        bl.style.left="0"
        br.style.left="0"

        tl.style.top="0"
        tr.style.top="0"
        bl.style.top="0"
        br.style.top="0"

        tl.style.overflow="none"
        tr.style.overflow="none"
        bl.style.overflow="none"
        br.style.overflow="none"
        
        //tl.style.float="left"
        //tr.style.float="right"
        //bl.style.float="left"
        //br.style.float="right"

        tl.style.zIndex=pos.indexOf("bgcred")
        tr.style.zIndex=pos.indexOf("bgcgreen")
        bl.style.zIndex=pos.indexOf("bgcpurple")
        br.style.zIndex=pos.indexOf("bgcwhite")

        this.appendChild(tl)
        this.appendChild(tr)
        this.appendChild(br)
        this.appendChild(bl)
    }
}
class Gp4eTitle extends HTMLElement {
    constructor(props){
        super(props)
        this.innerHTML="GP4E"
    }

} 
class MenuContainer extends HTMLElement {
    constructor(props){
        super(props)
        this.style.position="relative"
        this.style.top=0
        this.style.left=0
        this.style.width="100vw"
        this.style.zIndex=pos.indexOf("menu")
        this.style.backgroundColor="none"
        this.style.display="block"
        this.style.textAlign="center";
        this.style.background="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)";
        this.style.boxShadow="0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)"

    }
}
class MenuItem extends HTMLElement {
    constructor(props){
        super(props)
        this.style.position="relative"
        //this.style.padding="18px"
        //this.style.top=0
        //this.style.left=0
        this.style.zIndex=pos.indexOf("menu")
        this.style.backgroundColor="none"
        this.style.display="inline-block"
        this.style.padding="18px";
        this.style.fontFamily= "Open Sans";
        this.style.textTransform="uppercase";
        this.style.color="rgba(0, 35, 122, 0.5)";
        this.style.fontSize="18px";
        this.style.textDecoration="none";
        this.style.cursor="default"
        //Set Text
        switch(this.getAttribute("type")){
            case "link":
                console.log(this.getAttribute("to"))
                this.setText(this.getAttribute("to"))
                break;
            case "title":
                this.setText("<gp4e-title/>")
                break;
        }
    }
    setText(t){this.innerHTML=t}
}


class SitePage extends HTMLElement {
    constructor(props){
        super(props)
        this.style.top=0
        this.style.width="100%"
        this.style.height="100%"
        this.style.position="absolute"
        this.style.display="block"
        this.style.zIndex=pos.indexOf("page")
        this.style.margin=0
        this.style.padding=0
        this.style.userSelect="none"
    }
}
class Slide extends HTMLElement {
    constructor(props){
        super(props)
        this.style.left=0
        this.style.width="100vw"
        this.style.height="100vh"
        this.style.position="relative"
        this.style.zIndex=pos.indexOf("slide")
    }
}
customElements.define("gp4e-title",Gp4eTitle)
customElements.define("gp4e-menu-container",MenuContainer)
customElements.define("gp4e-menu-item",MenuItem)
customElements.define("gp4e-page",SitePage)
customElements.define("gp4e-slide",Slide)
customElements.define("gp4e-bg",BgColor)