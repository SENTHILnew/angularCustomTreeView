import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { mockData } from './common/mocks/datasource';
import { UtilserviceService } from './common/services/utilservice.service';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { SortByPipe } from './common/pipes/sort-by.pipe';
import { ReadPopulationPipe } from './common/pipes/read-population.pipe';
describe('Appcomponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TreeNodeComponent,
        SortByPipe,
        ReadPopulationPipe
      ],
      providers: [UtilserviceService]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Appcomponent', () => {
    it('on Expand All button click', () => {
      const compiled = fixture.nativeElement;
      fixture.detectChanges();
      spyOn(component, 'expanCollapseAll').and.callThrough();
      let expandButton = fixture.debugElement.nativeElement.querySelector('#expandBtn');
      expandButton.click();
      fixture.detectChanges();
      expect(component.expanCollapseAll).toHaveBeenCalled();
    });
    it('on Collapse All button click', () => {
      const compiled = fixture.nativeElement;
      fixture.detectChanges();
      spyOn(component, 'expanCollapseAll').and.callThrough();
      let expandButton = fixture.debugElement.nativeElement.querySelector('#collapseBtn');
      expandButton.click();
      fixture.detectChanges();
      expect(component.expanCollapseAll).toHaveBeenCalledWith(false);
    });

    it('details panel should contain population in human readable format(crores", "lakhs" etc)', () => {
      const compiled = fixture.nativeElement;
      fixture.detectChanges();
      component.utility.selectedStateDetails={
        "name": "tamil nadu",
        "isExpanded": false,
        "children": [],
        "value": [
            {
                "name": "population",
                "value": "68000000"
            }
        ]
    }
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('#popDetail').innerText).toContain('6.8 Crores')
    });
  });
});
