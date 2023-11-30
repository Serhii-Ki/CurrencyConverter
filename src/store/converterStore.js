import {makeObservable, observable, action} from 'mobx';

class ConverterStore {
	dollar = 0;
	euro = 0;
	firstInputCount = 1;
	secondInputCount = 1;
	firstSelect = 'usd';
	secondSelect = 'uah';
	ratio = 2.1342;

	constructor() {
		makeObservable(this, {
			dollar: observable,
			euro: observable,
			firstInputCount: observable,
			secondInputCount: observable,
			firstSelect: observable,
			secondSelect: observable,
			ratio: observable,
			setCurrencyDollar: action,
			setCurrencyEuro: action,
			setRatio:action,
			handleCurrencyFrom: action,
			handleCurrencyTo: action,
			handleFirstInput: action,
			handleSecondInput: action,

		})
	};

	setCurrencyDollar(value) {
		this.dollar = Number(value.toFixed(2));
	};

	setCurrencyEuro(value) {
		this.euro = Number(value.toFixed(2));
	};

	setRatio(value) {
		this.ratio = value;
	};

	handleFirstInput(value) {
		this.firstInputCount = value;
		this.secondInputCount = Number(this.firstInputCount * this.ratio).toFixed(2);
	};

	handleSecondInput(value) {
		this.secondInputCount = value;
		this.firstInputCount = Number(this.secondInputCount / this.ratio).toFixed(2);
	};

	handleCurrencyFrom(value) {
		this.firstSelect = value;
	};

	handleCurrencyTo(value) {
		this.secondSelect = value;
	};
}

const converterStore = new ConverterStore();

export default converterStore;