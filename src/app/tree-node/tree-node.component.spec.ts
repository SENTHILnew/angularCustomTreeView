import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TreeNodeComponent } from './tree-node.component';
import { SortByPipe } from '../common/pipes/sort-by.pipe';
import { ReadPopulationPipe } from '../common/pipes/read-population.pipe';
import { treeNode,stateDeails } from '../common/interfaces/treeNode.interface';
import { UtilserviceService} from '../common/services/utilservice.service';
describe('TreeNodeComponent', () => {
  let component: TreeNodeComponent;
  let fixture: ComponentFixture<TreeNodeComponent>;
  let mockData:treeNode[]=[
    {
        "name": "china",
        "isExpanded": false,
        "children": [
            {
                "name": "north",
                "isExpanded": false,
                "children": [
                    {
                        "name": "punjab",
                        "isExpanded": false,
                        "children": [],
                        "value": [
                            {
                                "name": "population",
                                "value": "28000000"
                            }
                        ]
                    },
                    {
                        "name": "J&K",
                        "isExpanded": false,
                        "children": [],
                        "value": [
                            {
                                "name": "population",
                                "value": "1000000"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "south",
                "isExpanded": false,
                "children": [
                    {
                        "name": "tamil nadu",
                        "isExpanded": false,
                        "children": [],
                        "value": [
                            {
                                "name": "population",
                                "value": "67000000"
                            }
                        ]
                    },
                    {
                        "name": "kerala",
                        "isExpanded": false,
                        "children": [],
                        "value": [
                            {
                                "name": "population",
                                "value": "34000000"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
      "name": "india",
      "isExpanded": false,
      "children": [
          {
              "name": "north",
              "isExpanded": false,
              "children": [
                  {
                      "name": "punjab",
                      "isExpanded": false,
                      "children": [],
                      "value": [
                          {
                              "name": "population",
                              "value": "28000000"
                          }
                      ]
                  },
                  {
                      "name": "J&K",
                      "isExpanded": false,
                      "children": [],
                      "value": [
                          {
                              "name": "population",
                              "value": "1000000"
                          }
                      ]
                  }
              ]
          },
          {
              "name": "south",
              "isExpanded": false,
              "children": [
                  {
                      "name": "tamil nadu",
                      "isExpanded": false,
                      "children": [],
                      "value": [
                          {
                              "name": "population",
                              "value": "67000000"
                          }
                      ]
                  },
                  {
                      "name": "kerala",
                      "isExpanded": false,
                      "children": [],
                      "value": [
                          {
                              "name": "population",
                              "value": "34000000"
                          }
                      ]
                  }
              ]
          }
      ]
  },
]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeNodeComponent,
        SortByPipe,
        ReadPopulationPipe
       ],
       providers:[UtilserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('click of parent node, should display child nodes', () => {
    const compiled = fixture.nativeElement;
    component.currentNode=mockData;
    fixture.detectChanges();
    let nodeid=mockData[0].name;
    let childname=mockData[0].children[0].name;
    let button = fixture.debugElement.nativeElement.querySelector('.parentNode');
    button.click();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector(`#Node-${nodeid}-0`).innerHTML).toContain(childname);
  });

  it('default state is all are collapsed', () => {
    const compiled = fixture.nativeElement;
    component.currentNode=mockData;
    fixture.detectChanges();
    let nodeid=mockData[0].name;
    let childname=mockData[0].children[0].name;
    expect(fixture.debugElement.nativeElement.querySelector(`#Node-${nodeid}-0`).innerHTML).not.toContain(childname);
  });

  it('display details panel on click of node laste(state) node', fakeAsync(() => {
    const compiled = fixture.nativeElement;
    component.currentNode=mockData;
    fixture.detectChanges();
    spyOn(component,'toggleExpand');
    let nodeid=mockData[0].name;
    let firstElem=fixture.debugElement.nativeElement.querySelector(`#Node-${nodeid}-0`);
    let nodes= firstElem.querySelectorAll('.parentNode');
    let last= nodes[nodes.length-1];
    last.click();
    expect(component.toggleExpand).toHaveBeenCalled();
  }));
});
