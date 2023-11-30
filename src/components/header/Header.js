import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import requests from '../../services/requests';

import './header.scss';

const Header = observer(({ converterStore }) => {
    useEffect(() => {
			requests
				.getCurrencyValue('usd', 'uah')
				.then(data => {
					converterStore.setCurrencyDollar(data.uah);
				})
				.then(() => requests.getCurrencyValue('eur', 'uah'))
                .then(data => {
                    converterStore.setCurrencyEuro(data.uah);
                })
				.catch(error => {
					console.error('Error fetching currency rates:', error)
				});
                 // eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

    return (
			<header className='header'>
				<div className='currency'>
					<div className='currency__dollar'>
						<p className='currency__count'>1 USD = {converterStore.dollar} UAH</p>
					</div>
					<div className='currency__euro'>
						<p className='currency__count'>1 EUR = {converterStore.euro} UAH</p>
					</div>
				</div>
			</header>
		)
})
export default Header
