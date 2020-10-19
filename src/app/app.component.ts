import { Component, OnInit } from '@angular/core';
import { MoleculeService } from './molecule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TreeView';
  data = {};

  parentItems = [];

  constructor(private moleculeservice: MoleculeService) { }

  ngOnInit() {
    this.moleculeservice.getData(1).subscribe((res: any) => {
      this.data['name'] = res.name;
      this.data['items'] = [];
      res.termsrelation.forEach(el => {
        this.data['items'].push({ name: el.rel, children: [], level: 1, loaded: true });
        this.parentItems.push({ name: el.rel, children: el.terms, level: 1, loaded: true });
      });
    });
  }

  getParent(parent) {
    for (let i = 0; i < this.parentItems.length; i++) {
      if (this.parentItems[i].name === parent.name) {
        if (this.data['items'][i].children.length === 0) {
          this.data['items'][i].children = this.parentItems[i].children;
        } else {
          this.data['items'][i].children = [];
        }
      }
    }
  }

  getChildren(child) {

    if ( (!(child)) || (!(child.items)) ) {
      child = {
        items: []
      };
    }

    if (child['items'].length !== 0) {
      child.items = [];
    } else {
      this.moleculeservice.getData(2).subscribe((res: any) => {
        child['name'] = res.name
        child.items = [];
        res.termsrelation.forEach(el => {
          child.items.push({ name: el.rel, children: el.terms, level: 2, loaded: true });
        });
      });
    }



  }
}
