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
  constructor(private moleculeservice: MoleculeService){}

  t ={
    "items": [
        {
            "name": "Pictures",
            "code": "PCTRS",
            "children": [
                {
                    "name": "Vacation",
                    "code": "VAC",
                    "children": [
                        {
                            "name": "Image 1",
                            "code": "IMG_111",
                            "children": null
                        },
                        {
                            "name": "Image 2",
                            "code": "IMG_212",
                            "children": null
                        }
                    ]
                },
                {
                    "name": "Graduation",
                    "code": "GRAD",
                    "children": [
                        {
                            "name": "Image 3",
                            "code": "grad_111",
                            "children": null
                        },
                        {
                            "name": "Image 4",
                            "code": "grad_212",
                            "children": null
                        }
                    ]
                }
            ]
        },
        {
            "name": "Videos",
            "code": "VDS",
            "children": [
                {
                    "name": "Video 1",
                    "code": "vid1",
                    "children": []
                },
                {
                    "name": "Video 2",
                    "code": "vid2",
                    "children": []
                }
            ]
        }
    ]
}

  ngOnInit(){
    this.moleculeservice.getData(1).subscribe((res: any) => {
      this.data['name'] = res.name
      this.data['items'] = [];
      res.termsrelation.forEach(el => {
        this.data['items'].push({name: el.rel, children: el.terms, level: 1, loaded: true})
      });
    });
  }

  getChildren(child) {
    this.moleculeservice.getData(2).subscribe((res: any) => {
      child['name'] = res.name
      child['items'] = [];
      res.termsrelation.forEach(el => {
        child['items'].push({name: el.rel, children: el.terms, level: 2, loaded: true})
      });
    });
  }
}
