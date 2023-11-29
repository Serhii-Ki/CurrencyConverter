import React, { useEffect } from 'react';
import {observer} from 'mobx-react';

import requests from '../../services/requests';

import './converter.scss';

const Converter = observer(({ converterStore }) => {
	useEffect(() => {
		requests
			.getCurrencyValue('usd', 'uah')
			.then(data => {
				console.log(data.uah)
				converterStore.setCurrencyDollar(data.uah)
			})
			.then(() => console.log('Data USD', converterStore.dollar))
			.catch(error => {
				console.error('Error fetching currency rates:', error)
			})
	}, [])

	return <div></div>
})

export default Converter
