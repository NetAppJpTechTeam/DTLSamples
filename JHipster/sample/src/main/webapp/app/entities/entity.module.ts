import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SampleRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { SampleCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { SampleLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { SampleDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { SampleTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { SampleEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SampleJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { SampleJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { SampleArticleModule } from './article/article.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SampleRegionMySuffixModule,
        SampleCountryMySuffixModule,
        SampleLocationMySuffixModule,
        SampleDepartmentMySuffixModule,
        SampleTaskMySuffixModule,
        SampleEmployeeMySuffixModule,
        SampleJobMySuffixModule,
        SampleJobHistoryMySuffixModule,
        SampleArticleModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleEntityModule {}
