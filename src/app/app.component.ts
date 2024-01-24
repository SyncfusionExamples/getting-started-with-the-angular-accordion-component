import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccordionModule,TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccordionModule,TreeViewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  public localData: Object[] = [{
    id: '01', name: 'Local Disk (C:)',
    subChild: [
        {
            id: '01-01', name: 'Program Files'
       },
        {
            id: '01-02', name: 'Users'
         },
        {
            id: '01-03', name: 'Windows'
        },
    ]
},
{
    id: '02', name: 'Local Disk (D:)',
    subChild: [
        {
            id: '02-01', name: 'Personals',
        },
        {
            id: '02-02', name: 'Projects',
        },
    ]
},
{
    id: '03', name: 'Local Disk (E:)', icon: 'folder',
    subChild: [
        {
            id: '03-01', name: 'Pictures',
            subChild: [
                { id: '03-01-01', name: 'Wind.jpg' },
                { id: '03-01-02', name: 'Stone.jpg' }
            ]
        },
        {
            id: '03-02', name: 'Documents',
            subChild: [
              
                { id: '03-02-01', name: 'Global Warming.ppt' },
                { id: '03-02-02', name: 'Social Network.pdf' },
            ]
        },
        {
            id: '03-03', name: 'Study Materials',
            subChild: [
                { id: '03-03-01', name: 'UI-Guide.pdf' },
                { id: '03-03-02', name: 'Tutorials.zip' },
             
            ]
        },
    ]
}];
public field:Object ={ dataSource: this.localData, id: 'id', text: 'name', child: 'subChild' };
}
