import {Injectable} from '@angular/core';
import {ErrorMappingHttpService} from '../core/error-mapping-http.service';
import {ApiService} from '../core/api.service';
import {Observable} from 'rxjs';
import {Community} from '../../models/community';
import {map} from 'rxjs/operators';
import {Notification, NotificationType} from '../../models/notification';
import {MessageResponse} from './auth-crud.service';

/**
 * Service for performing CRUD actions on account resources.
 */
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: ErrorMappingHttpService,
              private api: ApiService) {
  }

  /**
   * Fetches all open invitations for a user from the server.
   * @return Observable that resolves to an array of notifications.
   */
  public getInvitations(): Observable<Notification[]> {
    return this.http.get(this.api.account.getOpenCommunityInvitations()).pipe(
      map(communities => {
        return communities.map(community => {
          const notification = new Notification();
          notification.subject = Community.fromJson(community.community);
          notification.timeCreated = notification.subject.timeCreated;
          notification.type = NotificationType.COMMUNITY_INVITATION;
          return notification;
        });
      })
    );
  }

  /**
   * Changes a users password.
   * @param oldPassword The old password.
   * @param newPassword The new password.
   */
  public changePassword(oldPassword: string, newPassword: string): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(this.api.account.changePassword(), {
      'old_password': oldPassword,
      'new_password': newPassword
    });
  }

}
