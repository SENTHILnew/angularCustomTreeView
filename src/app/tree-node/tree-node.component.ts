import { Component, OnInit, Input } from '@angular/core';
import { treeNode } from '../common/interfaces/treeNode.interface';
import { UtilserviceService} from '../common/services/utilservice.service';
@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  isExpanded: boolean = false;

  @Input() currentNode: treeNode[] = [];
  constructor(public utility:UtilserviceService) { }

  ngOnInit(): void {
  }

  toggleExpand(node: treeNode) {
    if(node.value){
        this.utility.assignSelectedState(node)
    }
    else{
      node.isExpanded = !node.isExpanded;
      if(!node.isExpanded){
        this.utility.toggleExpand(false,node);
      }
    }
  }
  
}