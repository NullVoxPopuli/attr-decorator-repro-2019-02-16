import Model from 'ember-data/model';
import { attr } from '@ember-decorators/data';


export enum STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  AWAY = 'away',
  BUSY = 'busy',
}


export default class Identity extends Model {
  @attr() name?: string;
  @attr() publicKey?: Uint8Array;
  @attr() privateKey?: Uint8Array;
  @attr() onlineStatus?: STATUS;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    identity: Identity;
  }
}
