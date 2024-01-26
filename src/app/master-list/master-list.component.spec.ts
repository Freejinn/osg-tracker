// import { MasterListComponent } from "./master-list.component";
// import { ComponentFixture, TestBed } from "@angular/core/testing"
// import { PathfinderListService } from "./pathfinder-list.service";
// import { masterListMock } from "./master-list.mock";
// import { of } from "rxjs";

// describe('master list', () => {
    // let component: MasterListComponent;
    // let fixture: ComponentFixture<MasterListComponent>;
    // let service: PathfinderListService;

    // const mockPathFinderService = {
    //     getList: jest.fn(),
    // }

    // just like creating a component, you need to create the component
    // and declare in a module.
    
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations: [MasterListComponent],
//             providers: [{ provide: PathfinderListService, useValue: mockPathFinderService }]
//         });
//         fixture = TestBed.createComponent(MasterListComponent);
//         component = fixture.componentInstance;
//         service = TestBed.inject(PathfinderListService);
//         fixture.detectChanges();
//     });

//     it('should create the component', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should load the data', () => {
//         jest.spyOn(service, 'getList').mockReturnValue(of(masterListMock));
//         fixture.detectChanges();
//         component.skillParentList$.subscribe(list => {
//             expect(list).toEqual(masterListMock);
//         })
//     });
// });
