import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MomentPipe} from '../../pipes/moment.pipe';
import {MomentFilterComponent} from '../../utility/datagrid-filters/moment-filter/moment-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {TypeaheadComponent} from './components/typeahead/typeahead.component';
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';
import {ConfirmModalTextDirective} from './components/confirm-modal/confirm-modal-text.directive';
import {ConfirmModalTitleDirective} from './components/confirm-modal/confirm-modal-title.directive';
import {ConfirmModalCancelButtonTextDirective} from './components/confirm-modal/confirm-modal-cancel-button-text.directive';
import {ConfirmModalOKButtonTextDirective} from './components/confirm-modal/confirm-modal-ok-button-text.directive';
import {TourBoxComponent} from './components/tour-box/tour-box.component';
import {TourInfoModalComponent} from './components/tour-info-modal/tour-info-modal.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {ParkingPositionMapComponent} from './components/parking-position-map/parking-position-map.component';
import {FinishTourModalComponent} from './components/finish-tour-modal/finish-tour-modal.component';
import {RefuelBoxComponent} from './components/refuel-box/refuel-box.component';
import {RefuelInfoModalComponent} from './components/refuel-info-modal/refuel-info-modal.component';
import {CreateRefuelModalComponent} from './components/create-refuel-modal/create-refuel-modal.component';
import {PayoffBoxComponent} from './components/payoff-box/payoff-box.component';
import {DebtBoxComponent} from './components/debt-box/debt-box.component';
import {InfoModalComponent} from './components/info-modal/info-modal.component';
import {InfoModalTextDirective} from './components/info-modal/info-modal-text.directive';
import {PassengerSelectorComponent} from './components/passenger-selector/passenger-selector.component';
import {CommaSeparatedObjectPropertyPipe} from '../../pipes/comma-separated-object-property.pipe';
import {StartTourModalComponent} from './components/start-tour-modal/start-tour-modal.component';
import {ToursDatagridComponent} from './components/tours-datagrid/tours-datagrid.component';
import {ParkingPositionModalComponent} from './components/parking-position-modal/parking-position-modal.component';
import {CommentModalComponent} from './components/comment-modal/comment-modal.component';
import {RefuelsDatagridComponent} from './components/refuels-datagrid/refuels-datagrid.component';
import {PayoffsDatagridComponent} from './components/payoffs-datagrid/payoffs-datagrid.component';
import {RouterModule} from '@angular/router';
import {UsersDatagridComponent} from './components/users-datagrid/users-datagrid.component';
import {TaskBoxComponent} from './components/task-box/task-box.component';
import {DaysRemainingPipe} from '../../pipes/days-remaining.pipe';
import {TaskInfoModalComponent} from './components/task-info-modal/task-info-modal.component';
import {TasksDatagridComponent} from './components/tasks-datagrid/tasks-datagrid.component';
import {TaskDeleteModalComponent} from './components/task-delete-modal/task-delete-modal.component';
import {TaskFormModalComponent} from './components/task-form-modal/task-form-modal.component';
import {ConditionalPluralPipe} from '../../pipes/conditional-plural.pipe';
import {CommunitiesInviteUserModalComponent} from './components/communities-invite-user-modal/communities-invite-user-modal.component';
import {CommunitiesUserSearchComponent} from './components/communities-user-search/communities-user-search.component';
import {CommunityAlertsComponent} from './components/community-alerts/community-alerts.component';
import {KmSinceLastPayoffBarChartComponent} from './components/km-since-last-payoff-barchart/km-since-last-payoff-bar-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CostsSinceLastPayoffBarChartComponent} from './components/costs-since-last-payoff-bar-chart/costs-since-last-payoff-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    LeafletModule,
    RouterModule,
    NgxChartsModule
  ],
  declarations: [
    MomentPipe,
    MomentFilterComponent,
    TypeaheadComponent,
    ConfirmModalComponent,
    ConfirmModalTextDirective,
    ConfirmModalTitleDirective,
    ConfirmModalCancelButtonTextDirective,
    ConfirmModalOKButtonTextDirective,
    TourBoxComponent,
    TourInfoModalComponent,
    ParkingPositionMapComponent,
    FinishTourModalComponent,
    RefuelBoxComponent,
    RefuelInfoModalComponent,
    CreateRefuelModalComponent,
    PayoffBoxComponent,
    DebtBoxComponent,
    InfoModalComponent,
    InfoModalTextDirective,
    PassengerSelectorComponent,
    CommaSeparatedObjectPropertyPipe,
    DaysRemainingPipe,
    StartTourModalComponent,
    ToursDatagridComponent,
    ParkingPositionModalComponent,
    CommentModalComponent,
    RefuelsDatagridComponent,
    PayoffsDatagridComponent,
    UsersDatagridComponent,
    TaskBoxComponent,
    TaskInfoModalComponent,
    TasksDatagridComponent,
    TaskDeleteModalComponent,
    TaskFormModalComponent,
    ConditionalPluralPipe,
    CommunitiesUserSearchComponent,
    CommunitiesInviteUserModalComponent,
    CommunityAlertsComponent,
    KmSinceLastPayoffBarChartComponent,
    CostsSinceLastPayoffBarChartComponent
  ],
  exports: [
    MomentPipe,
    MomentFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    TypeaheadComponent,
    ConfirmModalComponent,
    ConfirmModalTextDirective,
    ConfirmModalTitleDirective,
    ConfirmModalCancelButtonTextDirective,
    ConfirmModalOKButtonTextDirective,
    TourBoxComponent,
    TourInfoModalComponent,
    FinishTourModalComponent,
    RefuelBoxComponent,
    CreateRefuelModalComponent,
    PayoffBoxComponent,
    DebtBoxComponent,
    InfoModalComponent,
    InfoModalTextDirective,
    PassengerSelectorComponent,
    StartTourModalComponent,
    ToursDatagridComponent,
    RefuelsDatagridComponent,
    PayoffsDatagridComponent,
    UsersDatagridComponent,
    TaskBoxComponent,
    TaskInfoModalComponent,
    TasksDatagridComponent,
    TaskDeleteModalComponent,
    TaskFormModalComponent,
    CommunitiesInviteUserModalComponent,
    CommunitiesUserSearchComponent,
    CommunityAlertsComponent,
    ParkingPositionMapComponent,
    KmSinceLastPayoffBarChartComponent,
    CostsSinceLastPayoffBarChartComponent
  ]
})
export class SharedModule {
}
