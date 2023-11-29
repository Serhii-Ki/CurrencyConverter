import {makeObservable, observable, action} from 'mobx';

class ConverterStore {
	dollar = 0
	euro = 0

	constructor() {
		makeObservable(this, {
			dollar: observable,
			euro: observable,
			setCurrencyDollar: action,
		})
	}

	setCurrencyDollar(value) {
		this.dollar = Number(value.toFixed(2));
	}
}

const converterStore = new ConverterStore();

export default converterStore