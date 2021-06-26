import { Component, OnInit } from '@angular/core';
import { mockData } from './common/mocks/datasource';
import { UtilserviceService } from './common/services/utilservice.service';
import { treeNode, stateDeails } from './common/interfaces/treeNode.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jsonData: treeNode = {} as treeNode;
  

  constructor(public utility: UtilserviceService) {

  }

  ngOnInit() {
    this.jsonData = this.utility.processSourceData(mockData);
  }

  expanCollapseAll(control: boolean) {
    this.jsonData = this.utility.toggleExpand(control, this.jsonData);
  }

}
