import React, { useCallback, useRef, useMemo } from "react";
import "./style/app.css";
import unfluke_logo from "./img/unfluke_logo.png";
import bell_icon from "./img/bell_icon.png";
import coin from "./img/coin.jpeg";
import profile from "./img/profile.jpg";
import HomeIcon from "./img/homeIcon.svg";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
//
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const gridOptions = {
	columnDefs: [
		{ headerName: "Rank", field: "rank", maxWidth: 100 },
		{ headerName: "Name", field: "name", minWidth: 150, flex: 1 },
		{
			headerName: "Calmar Ratio",
			field: "calmarRatio",
			minWidth: 100,
			flex: 1,
			cellRenderer: (props) => {
				// put the value in bold
				return (
					<div style={{ display: "flex" }}>
						<svg
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="green"
							className="w-5 h-5 mr-1"
							width="20px"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
							></path>
						</svg>
						<span style={{ marginLeft: "10px" }}>
							{props.value}
						</span>
					</div>
				);
			},
		},
		{
			headerName: "Overall Profit",
			field: "overallProfit",
			flex: 1,
			minWidth: 100,
		},
		{
			headerName: "Avg. Daily Profit",
			field: "avgDailyProfit",
			flex: 1,
			minWidth: 100,
		},
		{
			headerName: "Win %(Day)",
			field: "WinPercent",
			flex: 1,
			minWidth: 100,
		},
		{ headerName: "Price (Rs)", field: "price", flex: 1, minWidth: 100 },
		{
			headerName: "Action",
			field: "action",
			cellRenderer: (props) => {
				return (
					<b onClick={() => alert(`Row ${props.data.rank} clicked`)}>
						{props.value}
					</b>
				);
			},
			flex: 1,
			minWidth: 100,
		},
	],
	rowData: [
		{
			rank: 1,
			name: "Selling with re entr",
			calmarRatio: 3.96,
			overallProfit: 381845,
			avgDailyProfit: 319.54,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 2,
			name: "	strategy_name",
			calmarRatio: 3.62,
			overallProfit: 268872.5,
			avgDailyProfit: 216.31,
			WinPercent: 0.64,
			price: "500",
			action: "Buy",
		},
		{
			rank: 3,
			name: "Based on premium and",
			calmarRatio: 3.42,
			overallProfit: 255425,
			avgDailyProfit: 208.51,
			WinPercent: 0.64,
			price: "-",
			action: "View",
		},
		{
			rank: 4,
			name: "strategy_name",
			calmarRatio: 3.22,
			overallProfit: 370845,
			avgDailyProfit: 303.47,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 5,
			name: "Selling with re entr",
			calmarRatio: 3.96,
			overallProfit: 381845,
			avgDailyProfit: 319.54,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 6,
			name: "	strategy_name",
			calmarRatio: 3.62,
			overallProfit: 268872.5,
			avgDailyProfit: 216.31,
			WinPercent: 0.64,
			price: "500",
			action: "Buy",
		},
		{
			rank: 7,
			name: "	Based on premium wit",
			calmarRatio: 3.01,
			overallProfit: 135980,
			avgDailyProfit: 185.77,
			WinPercent: 0.49,
			price: "-",
			action: "View",
		},
		{
			rank: 8,
			name: "strategy_name",
			calmarRatio: 3.22,
			overallProfit: 370845,
			avgDailyProfit: 303.47,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 9,
			name: "	strategy_name",
			calmarRatio: 3.62,
			overallProfit: 268872.5,
			avgDailyProfit: 216.31,
			WinPercent: 0.64,
			price: "500",
			action: "Buy",
		},
		{
			rank: 10,
			name: "	Based on premium wit",
			calmarRatio: 3.01,
			overallProfit: 135980,
			avgDailyProfit: 185.77,
			WinPercent: 0.49,
			price: "-",
			action: "View",
		},
		{
			rank: 11,
			name: "Selling with re entr",
			calmarRatio: 3.96,
			overallProfit: 381845,
			avgDailyProfit: 319.54,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 12,
			name: "	strategy_name",
			calmarRatio: 3.62,
			overallProfit: 268872.5,
			avgDailyProfit: 216.31,
			WinPercent: 0.64,
			price: "500",
			action: "Buy",
		},
		{
			rank: 13,
			name: "Based on premium and",
			calmarRatio: 3.42,
			overallProfit: 255425,
			avgDailyProfit: 208.51,
			WinPercent: 0.64,
			price: "-",
			action: "View",
		},
		{
			rank: 14,
			name: "strategy_name",
			calmarRatio: 3.22,
			overallProfit: 370845,
			avgDailyProfit: 303.47,
			WinPercent: 0.65,
			price: "-",
			action: "View",
		},
		{
			rank: 15,
			name: "Based on premium and",
			calmarRatio: 3.42,
			overallProfit: 255425,
			avgDailyProfit: 208.51,
			WinPercent: 0.64,
			price: "-",
			action: "View",
		},
	],
};

function App() {
	const gridRef = useRef();

	const onBtnExport = useCallback(() => {
		gridRef.current.api.exportDataAsCsv();
	}, []);

	return (
		<div>
			<nav>
				<div className="nav_1">
					<img className="brandLogo" src={unfluke_logo} alt="" />
					<div className="nav_1_right">
						<div className="dropdown">
							<img className="icon" src={bell_icon} alt="" />
						</div>
						<div>
							<img className="icon icon_2" src={coin} alt="" />
						</div>
						<div className="dropdown">
							<img className="icon" src={profile} alt="" />
						</div>
					</div>
				</div>
				<div className="nav_2">
					<a href="/">LeaderBoard</a>
					<a href="/">Historical Trading</a>
					<a href="/">Historical Chart</a>
					<a href="/">Scanners</a>
					<a href="/">Alerts</a>
					<a href="/">Basic Backtest</a>
					<a href="/">Advanced Backtest</a>
					<a href="/">Pricing</a>
					<a href="/">My Earnings</a>
				</div>
			</nav>

			<div className="contents">
				<div className="pageTilte">
					<div>
						<div className="pageTitle">LeaderBoards</div>
						<div className="navigationLoc">
							<img src={HomeIcon} alt="home" height="23px" />
							<div className="pageLoc">LeaderBoards</div>
						</div>
					</div>
					<div className="downloadBtn" onClick={onBtnExport}>
						Export in CSV
					</div>
				</div>

				<div className="tableTitle">Basic Backtest</div>
				<div
					className="ag-theme-quartz" // applying the grid theme
					style={{ height: 600 }} // the grid will fill the size of the parent container
				>
					<AgGridReact
						ref={gridRef}
						columnDefs={gridOptions.columnDefs}
						rowData={gridOptions.rowData}
						rowHeight={45}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
