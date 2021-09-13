import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as Controllededitor} from 'react-codemirror2'
function Editor(props){
	const{
		name,
		language,
		value,
		onChange

	} = props
	function handlechange(editor , data , value){
		onChange(value)
	}
	return (
		<div className='editor'>
			<div className='editor-title'>
				<h3>{name}</h3>
				
			</div>
			<div>
				<Controllededitor
					onBeforeChange = {handlechange}
					value={value}
					className={'code-mirror-wrapper'}
					options={{
						linewrapper:true,
						lint:true,
						mode:language,
						theme:'material',
						lineNumbers:true
					}}	
					
				/>
			</div>
		</div>

		)
}
export default Editor;