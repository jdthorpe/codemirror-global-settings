import React from 'react';
import logo from "./assets/logo.svg"
import './App.css';
import { Select, Button } from "react-materialize"


const style_names = ["abcdef",
"ambiance-mobile",
"ambiance",
"base16-dark",
"base16-light",
"bespin",
"blackboard",
"cobalt",
"colorforth",
"darcula",
"dracula",
"duotone-dark",
"duotone-light",
"eclipse",
"elegant",
"erlang-dark",
"gruvbox-dark",
"hopscotch",
"icecoder",
"idea",
"isotope",
"lesser-dark",
"liquibyte",
"lucario",
"material",
"mbo",
"mdn-like",
"midnight",
"monokai",
"neat",
"neo",
"night",
"nord",
"oceanic-next",
"panda-syntax",
"paraiso-dark",
"paraiso-light",
"pastel-on-dark",
"railscasts",
"rubyblue",
"seti",
"shadowfox",
"solarized",
"ssms",
"the-matrix",
"tomorrow-night-bright",
"tomorrow-night-eighties",
"ttcn",
"twilight",
"vibrant-ink",
"xq-dark",
"xq-light",
"yeti",
"yonce",
"zenburn",
]

function App() {
  return (
	<div>
        
		<div className="heading nudge-right"> 
		<p>
		<img src={logo} className="App-logo" alt="logo" />

		<span className="title">
			<span className="red-text text-accent-4">CodeMirror</span> Settings
		</span>
		</p>
		</div>


		<div className="row">
			<div className="label col s4">
				<p> <a href="https://codemirror.net/demo/theme.html">Theme</a> </p>
			</div>
			<div className="input-field col s8">
			  <Select value="hi there">
				<option >default</option>
			  {style_names.map( name => <option >{name}</option>) }
			  </Select>
			</div>
		</div>

		<div className="row">
			<div className="label col s4">
				<p>KeyMap</p>
			</div>
			<div className="input-field col s8">
			  <Select >
				<option >default</option>
				<option >Vim</option>
				<option >Emacs</option>
				<option >SublimeText</option>
			  </Select>
			</div>
		</div>


			<div className="options-label col s4 nudge-right">
				<p>Disable key bindings</p>
			</div>


		<div className="row">

		  <div className="col s1"></div>

		  <div className="col s5">
			<ul className="collection">
			  <li className="collection-item center-align">Ctrl-X</li>
			  <li className="collection-item center-align">Ctrl-C</li>
			  <li className="collection-item center-align">Ctrl-V</li>
			</ul>
		  </div>
		  
		  
		  <div className="col s5">
				<ul className="collection">
				  <li className="collection-item center-align">Alt-X</li>
				  <li className="collection-item center-align">Alt-C</li>
				  <li className="collection-item center-align">Alt-V</li>
			   </ul>
		  </div>
		  
		  <div className="col s1"></div>

		</div>

		<div className="row nudge-left right">
			<Button className="right" waves="light" style={{marginRight: '5px'}}> Save </Button>
		</div>
		<div className="row red-text nudge-right">
			<p>Reload Page to restore key bindings</p>
		</div>
	</div>

  );
}

export default App;
