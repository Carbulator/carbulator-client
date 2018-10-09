import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Community} from '../../../../models/community';
import {CommunityService} from '../../../../services/crud/community.service';
import {knownErrors} from '../../../../utility/errors/known-errors';

@Component({
  selector: 'cbl-communities-detail',
  templateUrl: './communities-detail.component.html',
  styleUrls: ['./communities-detail.component.scss']
})
export class CommunitiesDetailComponent implements OnInit {

  public community: Community;
  public loadingCommunity = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
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
        this.communityService.getCommunity(id).subscribe(community => {
          this.community = community;
          this.loadingCommunity = false;
        }, err => {
          if (err === knownErrors.UNAUTHORIZED.message) {
            this.router.navigate(['/401']);
          }
        });
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

}
