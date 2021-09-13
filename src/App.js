import React,{useState , useEffect} from 'react'
import './App.css';
import Editor from './editor'
function App() {
  const[html , setHtml] = useState('')
  const[css , setCss] = useState('')
  const[js , setJs] = useState('')
  const[srcDoc , setsrcDoc] = useState('')
  useEffect(()=>{
    const timeout = setTimeout(()=>{
        setsrcDoc(
         `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html> 
        `
        )
      },350)
      return () =>clearTimeout(timeout);
  },[html,css,js])
  
  return (                                                                                                                                                                                                                                                                                                                                                                                       
   <>
    
      <div className='pane-top'>
              <Editor name='HTML' language='xml' value={html} onChange={setHtml}/> 
              <Editor name='CSS' language='css' value={css} onChange={setCss}/>
              <Editor name='JS' language='javascript' value={js} onChange={setJs}/>
      </div>
      <div className='resizeable'>
          <iframe
            srcDoc = {srcDoc}
            title='output'
            sandbox='allow-scripts'
            width="100%"
            height="100%" 
          />
      </div>

   </>
  );
}

export default App;
