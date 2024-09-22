import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectDetails = [
    {
      img_path:"assets/img/svg/roksaan_logo.svg",
      title:"Roksaan",
      content:"Roksaan is the home of unique and customisable greetings cards in Hong Kong, with everything on the platform sharing a special and profound connection to this wonderful place.In a nutshell, we make it easy to send really nice, personalised cards in the post; delivered directly to your door or straight to theirs. Simply pick a card, add your personal touches, and we take care of the rest.",
      stacks:"Nodejs, Express.js, MonogDB, Angular, Typescript",
      link_preview:"https://www.roksaan.com/",
      git_link:""
    },
    {
      img_path:"assets/img/svg/esankalp.webp",
      title:"E-Sankalp Retail",
      content:"Sankalp Kisan Store is a complete farming solution for online needs of farmers.Sankalp Kisan Store is a complete farming solution Multi Brand Platform which serves as a one-stop online solution for all the farming related needs of farmers. Sankalp Kisan Store aims to deliver ‘Best quality products at most competitive price and best in class farm services’ to every customer, with a vision to facilitate a better tomorrow for farmers and a mission to partner their journey towards prosperity through right products, right advice and right services. The online store offers a comprehensive range of products such as seeds, fertilizers, pesticides, specialty nutrients, and animal feeds.",
      stacks:"Nodejs, Express.js, MonogDB, Angular, Typescript",
      link_preview:"https://play.google.com/store/apps/details?id=com.esankalp",
      git_link:""
    },
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
      stacks:"Php, Mysql, Html5, Css3, Boostrap",
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
      img_path:"assets/img/png/arbitrage.png",
      title:"AMM Arbitrage",
      content:"A Smart Contract that will perform arbitrage across various Decentralised Exchanges. Written Smart Contract to perform swaps from various DEXes along with flashloan. ",
      stacks:"Solidity, Ethereum, Blockchain, Nodejs",
      link_preview:"",
      git_link:""
    }
  ]
}
