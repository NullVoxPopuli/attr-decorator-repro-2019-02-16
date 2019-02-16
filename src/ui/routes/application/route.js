import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    const contacts = await this.store.findAll('identity', { backgroundReload: true });

    return { contacts };
  }
}
