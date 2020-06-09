import React from 'react';
import { render } from 'react-dom';
import FinancialItem from "./FinancialItem";

import {Provider} from 'react-redux'
import store from "../store";
import { getData } from "../stocklComponents/utils"

import { TypeChooser } from "react-stockcharts/lib/helper";
import "./styles/ChartPage.css"

export class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		
	}
}

export default function MyChart() {

	return (
		<Provider store={store}>
			<div className="MyChart">
				<FinancialItem />
			</div>
		</Provider>
	  );
}