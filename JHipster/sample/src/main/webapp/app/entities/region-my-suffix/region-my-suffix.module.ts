import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleSharedModule } from '../../shared';
import {
    RegionMySuffixService,
    RegionMySuffixPopupService,
    RegionMySuffixComponent,
    RegionMySuffixDetailComponent,
    RegionMySuffixDialogComponent,
    RegionMySuffixPopupComponent,
    RegionMySuffixDeletePopupComponent,
    RegionMySuffixDeleteDialogComponent,
    regionRoute,
    regionPopupRoute,
} from './';

const ENTITY_STATES = [
    ...regionRoute,
    ...regionPopupRoute,
];

@NgModule({
    imports: [
        SampleSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RegionMySuffixComponent,
        RegionMySuffixDetailComponent,
        RegionMySuffixDialogComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixPopupComponent,
        RegionMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        RegionMySuffixComponent,
        RegionMySuffixDialogComponent,
        RegionMySuffixPopupComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixDeletePopupComponent,
    ],
    providers: [
        RegionMySuffixService,
        RegionMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleRegionMySuffixModule {}
