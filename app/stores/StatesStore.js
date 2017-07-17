import {assign} from 'underscore';
import alt from '../alt';
import StatesActions from '../actions/StatesActions';

class StatesStore {
  constructor() {
    this.bindActions(StatesActions);
    this.leadingRace = { race: 'Unknown', count: 0 };
    this.leadingBloodline = { bloodline: 'Unknown', count: 0 };
    this.amarrCount = 0;
    this.caldariCount = 0;
    this.gallenteCount = 0;
    this.minmatarCount = 0;
    this.totalVotes = 0;
    this.femaleCount = 0;
    this.maleCount = 0;
    this.totalCount = 0;
  }

  onGetStatesSuccess(data) {
    assign(this, data);
  }

  onGetStatesFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(StatesStore);
