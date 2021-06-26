export interface treeNode {
  name: string,
  children: treeNode[],
  value?: stateDeails[],
  isExpanded: boolean
}

export interface stateDeails{
  name:string,
  value:string
}