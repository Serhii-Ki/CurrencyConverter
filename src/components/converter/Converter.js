import React, { useEffect } from 'react';
import {observer} from 'mobx-react';

import requests from '../../services/requests';

import './converter.scss';

const Converter = observer(({ converterStore }) => {
	useEffect(() => {
		requests
			.getCurrencyValue(converterStore.firstSelect, converterStore.secondSelect)
			.then(data => {
				converterStore.setRatio(data[converterStore.secondSelect]);
				converterStore.handleFirstInput(converterStore.firstInputCount);
			})
			.catch(error => {
				console.error('Error fetching currency rates:', error);
			});
			 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [converterStore.firstSelect, converterStore.secondSelect]);

	return (
		<section className='converter'>
			<h1 className='converter__title'>Currency Converter</h1>
			<div className='converter__field'>
				<select
					name='first'
					className='converter__select'
					value={converterStore.firstSelect}
					onChange={(e) => converterStore.handleCurrencyFrom(e.target.value)}
				>
					<option value='usd'>USD</option>
					<option value='uah'>UAH</option>
					<option value='eur'>EUR</option>
				</select>
				<input
					type='number'
					className='converter__input'
					value={converterStore.firstInputCount}
					onChange={(e) => converterStore.handleFirstInput(e.target.value)}
				/>
			</div>
			<div className='converter__field'>
				<select
					name='second'
					className='converter__select'
					value={converterStore.secondSelect}
					onChange={(e) => converterStore.handleCurrencyTo(e.target.value)}
				>			
					<option value='uah'>UAH</option>
					<option value='usd'>USD</option>
					<option value='eur'>EUR</option>
				</select>
				<input
					type='number'
					className='converter__input'
					value={converterStore.secondInputCount}
					onChange={(e) => converterStore.handleSecondInput(e.target.value)}
				/>
			</div>
		</section>
	)
})

export default Converter
