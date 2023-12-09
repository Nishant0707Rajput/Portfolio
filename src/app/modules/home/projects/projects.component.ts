import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectDetails = [
    {
      img_path:"assets/img/svg/tiny_pay.svg",
      title:"Tinypay",
      content:"Tinypay is a small loan website dedicated to providing accessible and transparent lending services to individuals and families in need. Its mission is simple: to empower you to overcome financial hurdles and achieve your goals. It is committed to ensuring that everyone has access to fair and responsible borrowing options.",
      stacks:"Angular, Node, Mysql, Sass, Bootstrap",
      link_preview:"",
      git_link:""
    },
    {
      img_path:"assets/img/png/dakshkisan.png",
      title:"Dakshkisan",
      content:"Daksh Kisan is committed to empowering farmers and agri-preneurs by providing access to high-quality training and educational resources. Our innovative web portal offers a comprehensive Learning Management System (LMS) with over 121 certificate courses, featuring multi-lingual videos and learning material in four languages.",
      stacks:"Pho, Mysql, Html, Css",
      link_preview:"https://dakshkisan.jk.gov.in/",
      git_link:""
    },
    {
      img_path:"assets/img/png/keypitkleen.png",
      title:"Keypitkleen",
      content:"KeypitKleen is your go-to app for finding trusted and reliable house cleaning services. Whether you need a thorough deep clean or regular maintenance, our platform connects you with skilled professionals who make your home sparkle. With easy booking and experienced cleaners, KeypitKleen takes the stress out of keeping your house fresh and tidy.",
      stacks:"Angular, Html, Sass, Material, Bootstrap",
      link_preview:"",
      git_link:""
    },
    {
      img_path:"assets/img/jpg/batman_pro.jpg",
      title:"Project Tile goes here",
      content:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks:"HTML , JavaScript, SASS, React",
      link_preview:"",
      git_link:""
    },
    {
      img_path:"assets/img/jpg/batman_pro.jpg",
      title:"Project Tile goes here",
      content:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks:"HTML , JavaScript, SASS, React",
      link_preview:"",
      git_link:""
    },
    {
      img_path:"assets/img/jpg/batman_pro.jpg",
      title:"Project Tile goes here",
      content:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks:"HTML , JavaScript, SASS, React",
      link_preview:"",
      git_link:""
    },
  ]
}
