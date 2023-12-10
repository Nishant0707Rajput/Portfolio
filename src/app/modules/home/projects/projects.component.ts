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
      content:"Daksh Kisan is committed to empowering farmers and agri-preneurs by providing access to high-quality training and educational resources. A web portal that offers a comprehensive Learning Management System with over 121 certificate courses, featuring multi-lingual videos and learning material in four languages.",
      stacks:"Php, Mysql, Html, Css, Boostrap",
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
      img_path:"assets/img/jpg/internship_jakega.jpeg",
      title:"Internship Jakega",
      content:"An initiative by Jammu & Kashmir e-governance agency to provide internship opportunity to students. Developed Admin Panel for user and sub-admin management.",
      stacks:"Angular, Html, Sass, Material, Bootstrap",
      link_preview:"",
      git_link:""
    },
    {
      img_path:"assets/img/png/arbitrage.png",
      title:"AMM Arbitrage",
      content:"A Smart Contract that will perform arbitrage across various Decentralised Exchanges. Written Smart Contract to perform swaps from various DEXes along with flashloan. ",
      stacks:"Solidity, Ethereum, Blockchain, Nodejs",
      link_preview:"",
      git_link:""
    }
  ]
}
