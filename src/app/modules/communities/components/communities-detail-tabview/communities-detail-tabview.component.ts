import {Component, OnInit} from '@angular/core';
import {Community} from '../../../../models/community';
import {Tour} from '../../../../models/tour';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../../../services/core/auth.service';
import {TourService} from '../../../../services/crud/tour.service';
import {CblNotificationsService} from '../../../../services/core/cbl-notifications.service';
import {NavNotificationsService} from '../../../../services/core/nav-notifications.service';
import {CommunityService} from '../../../../services/crud/community.service';
import {knownErrors} from '../../../../utility/errors/known-errors';
import {MobileDetectionService} from '../../../../services/core/mobile-detection.service';

/**
 * Component that shows a tabview for community details.
 */
@Component({
  selector: 'cbl-communities-detail-tabview',
  templateUrl: './communities-detail-tabview.component.html',
  styleUrls: ['./communities-detail-tabview.component.scss']
})
export class CommunitiesDetailTabviewComponent implements OnInit {

  public community: Community;
  public communityId: number;
  public loadingCommunity = true;
  public tourResource: Observable<Tour[]>;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router,
              private tourService: TourService,
              private mobileDetectionService: MobileDetectionService,
              private notifications: CblNotificationsService,
              private navNotifications: NavNotificationsService,
              private communityService: CommunityService) {
  }

  /**
   * Loads the requested community. If it doesn't exist, a redirect to 404 happens. If you are not a member of the community, a redirect
   * to 401 happens.
   */
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (Number(id)) {
        this.communityId = id;
        this.communityService.getCommunity(id).subscribe(community => {
          this.community = community;
          this.loadingCommunity = false;
        }, err => {
          if (err === knownErrors.UNAUTHORIZED.message) {
            this.router.navigate(['/401']);
          }
        });
        this.tourResource = this.tourService.getCommunityTours(this.communityId);
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  /**
   * Getter for the is mobile status.
   * @return True if the current user is on a mobile device.
   */
  get isMobile(): boolean {
    return this.mobileDetectionService.isMobile();
  }

}
