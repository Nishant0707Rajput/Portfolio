import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatExpansionPanel } from '@angular/material/expansion';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit{
  panelOpenState: boolean = false;
  mobileWidth:boolean = false;
  count = 0;
  iconLink = "assets/img/png/batman.png";
  @ViewChild('myPanel') myPanel!: MatExpansionPanel;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait, 
        // Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        if (result.matches) {
          this.mobileWidth = true;
        } else {
          this.mobileWidth = false;
          this.myPanel?.close();
        }
      });
  }

  panelOpened() {
    if (!this.mobileWidth){
      this.myPanel?.close();
    } 
    this.panelOpenState = true;
    // console.log('Panel opened');
    // You can add your logic here when the panel is opened
  }

  panelClosed() {
    // console.log('Panel closed');
    // You can add your logic here when the panel is closed
  }
}
