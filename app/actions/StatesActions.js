import alt from '../alt';

class StatesActions {
  constructor() {
    this.generateActions(
      'getStatesSuccess',
      'getStatesFail'
    );
  }

  getStates() {
    $.ajax({ url: '/api/states' })
      .done((data) => {
        this.actions.getStatesSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getStatesFail(jqXhr);
      });
  }
}

export default alt.createActions(StatesActions);
