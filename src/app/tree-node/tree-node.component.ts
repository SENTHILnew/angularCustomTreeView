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
  constructor(private utility:UtilserviceService) { }

  ngOnInit(): void {
  }

  toggleExpand(node: treeNode) {
    if(node.value && node.value[0]){
        this.utility.assignSelectedState(node.value[0])
    }
    else{
      node.isExpanded = !node.isExpanded;
    }
  }
  
}