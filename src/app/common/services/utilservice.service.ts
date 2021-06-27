import { Injectable } from '@angular/core';
import { treeNode, stateDeails } from '../interfaces/treeNode.interface';
@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {

  constructor() { }

  selectedStateDetails: treeNode | undefined;

  processSourceData(nodeData: any): treeNode {
    let nodeFormated: treeNode = {
      name: nodeData.name,
      isExpanded: false,
      children: nodeData.values ? nodeData.values : []
    }
    if (nodeData.values && (nodeData.values[0].name === 'zones' || nodeData.values[0].name === 'states')) {
      nodeFormated.children = nodeData.values[0].values
    }
    if (nodeData.value) {
      nodeFormated['value'] = nodeData.value;
    }
    for (let i = 0; i < nodeFormated.children.length; i++) {
      nodeFormated.children[i] = this.processSourceData(nodeFormated.children[i]);
    }
    return nodeFormated;
  }
  toggleExpand(control: boolean, nodeFormated: treeNode): treeNode {
    nodeFormated.isExpanded = control;
    for (let i = 0; i < nodeFormated.children.length; i++) {
      nodeFormated.children[i] = this.toggleExpand(control, nodeFormated.children[i]);
    }
    return nodeFormated;
  }

  assignSelectedState(state: treeNode) {
    if (this.selectedStateDetails?.name !== state.name) {
      this.selectedStateDetails = state;
    }
    else {
      this.selectedStateDetails = undefined;
    }
  }
}