import { Component, OnInit } from '@angular/core';
import { MoleculeService } from './molecule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TreeView';
  data = {}
  constructor(private moleculeservice: MoleculeService) { }

  ngOnInit() {
    this.moleculeservice.getData(1).subscribe((res: any) => {
      this.data['name'] = res.name
      this.data['items'] = [];
      res.termsrelation.forEach(el => {
        this.data['items'].push({ name: el.rel, children: el.terms, level: 1, loaded: true })
      });
    });
  }

  getChildren(child) {
    if (!(child)) {
      child = {
        items: []
      }
    }

    if (child.items != 0) {
      child.items = [];
    }
    else {
      this.moleculeservice.getData(2).subscribe((res: any) => {
        // child['name'] = res.name
        child['items'] = [];
        res.termsrelation.forEach(el => {
          child['items'].push({ name: el.rel, children: el.terms, level: 2, loaded: true })
        });
      });
    }
  }
}
