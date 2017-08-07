 
"use strict"; 
 
import React from "react"; 
import ReactDOM from "react-dom"; 
 
import FocusDetail from "./focus-detail.module.jsx"; 
 
ReactDOM.render( 
	<FocusDetail 
		title="Hello World" 
		value="This is a normal value" 
		label="This is a label">
	</FocusDetail>,
	
	document.getElementById( "root" ) 
); 
