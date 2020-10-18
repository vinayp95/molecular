import { Component } from '@angular/core';
import { MoleculeService } from './molecule.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TreeView';
  data = []
  constructor(private moleculeservice: MoleculeService)
  {
    this.data = moleculeservice.getData();
  }
}
