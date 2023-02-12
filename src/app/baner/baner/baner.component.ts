import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent {
/**
 *
 */
constructor(private breakpointObserver: BreakpointObserver) {}


ngOnInit(): void {}
}
