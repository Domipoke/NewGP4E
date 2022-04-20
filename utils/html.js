var pos = [
    "page",
    "slide",
    "menu"
]

class Gp4eTitle extends HTMLElement {
    constructor(props){
        super(props)
        this.innerHTML="GP4E"
        this.style.fontFamily="Roboto"
        //this.style.backgroundColor="#000000"
        this.style.color="#000000"
    }

} 
class MenuContainer extends HTMLElement {
    constructor(props){
        super(props)
        this.style.position="relative"
        this.style.top=0
        this.style.left=0
        this.style.width="100%"
        this.style.height="15vh"
        this.style.zIndex=pos.indexOf("menu")
        this.style.backgroundColor="none"
        //
        this.style.textAlign="center";
        this.style.background="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%)";
        this.style.boxShadow="0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)"

    }
}
class MenuItem extends HTMLElement {
    constructor(props){
        super(props)
        this.style.position="relative"
        this.style.padding="18px"
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
        this.style.display="block";
    }
    onmouseover() {
        this.style.boxShadow=" 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6)";
        this.style.background="rgba(255, 255, 255, 0.1)";
        this.style.color="rgba(0, 35, 122, 0.7)";
    }
    onmouseleave() {
        this.style.backgroundColor="none"
        this.style.color="rgba(0, 35, 122, 0.5)"
        this.style.boxShadow=""
    }
}


class SitePage extends HTMLElement {
    constructor(props){
        super(props)
        this.style.top=0
        this.style.width="100%"
        this.style.height="100%"
        this.style.position="relative"
        this.style.zIndex=pos.indexOf("page")
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