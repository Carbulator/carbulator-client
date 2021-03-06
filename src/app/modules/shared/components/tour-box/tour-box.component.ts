import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../../../models/tour';

/**
 * A component that displays a tour in a box.
 */
@Component({
  selector: 'cbl-tour-box',
  templateUrl: './tour-box.component.html',
  styleUrls: ['./tour-box.component.scss']
})
export class TourBoxComponent {

  /**
   * The tour to show in the box.
   */
  @Input() tour: Tour;
  /**
   * If true, the delete button is shown in the tour detail modal.
   */
  @Input() showDeleteOption = true;

  /**
   * EventEmitter that emits the tour if it gets deleted.
   */
  @Output() delete: EventEmitter<Tour> = new EventEmitter();

  /**
   * Emits the tour if it get's deleted.
   * @param tour Deleted tour.
   */
  public onDelete(tour: Tour) {
    this.delete.emit(tour);
  }

}
