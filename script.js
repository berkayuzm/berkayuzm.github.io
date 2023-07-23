const aboutLine = document.querySelector("#about-line")
const aboutItem=document.querySelector("#about-item")
const experienceLine=document.querySelector("#experience-line")
const experienceItem=document.querySelector("#experience-item")
const projectLine=document.querySelector("#projects-line")
const projectItem=document.querySelector("#projects-item")
const aboutSection=document.querySelector("#about")
const aboutSectionHeight=aboutSection.getBoundingClientRect().height;
const experienceSection=document.querySelector("#experience")
const experienceSectionHeight=experienceSection.getBoundingClientRect().height;
const projectSection=document.querySelector("#projects")
const projectSectionHeight=projectSection.getBoundingClientRect().height;
console.log(aboutSectionHeight)

window.onscroll=()=>{
 controlScroll();
}
let controlScroll=()=>{
   
    if (document.documentElement.scrollTop <= aboutSectionHeight+180) { 
        aboutLine.classList.add("link-line-hover");
        aboutItem.classList.add("link-item-hover")
        experienceItem.classList.remove("link-item-hover")
        experienceLine.classList.remove("link-line-hover")
    } 
    else if(document.documentElement.scrollTop>=aboutSectionHeight+180 && document.documentElement.scrollTop<=aboutSectionHeight+experienceSectionHeight+180){
        experienceItem.classList.add("link-item-hover")
        experienceLine.classList.add("link-line-hover")
        aboutLine.classList.remove("link-line-hover");
        aboutItem.classList.remove("link-item-hover")
        projectItem.classList.remove("link-item-hover")
        projectLine.classList.remove("link-line-hover")
    }
    else{
        projectItem.classList.add("link-item-hover")
        projectLine.classList.add("link-line-hover")
        experienceItem.classList.remove("link-item-hover")
        experienceLine.classList.remove("link-line-hover")
    }
}
controlScroll();