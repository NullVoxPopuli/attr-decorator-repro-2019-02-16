import Model from 'ember-data/model';
import { attr } from '@ember-decorators/data';

export default class Identity extends Model {
  @attr() name;
  @attr() publicKey;
  @attr() privateKey;
  @attr() onlineStatus;
}
