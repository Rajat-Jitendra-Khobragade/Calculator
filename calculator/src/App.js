


import { useState } from 'react'


import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <div className='container-fluid ' id="container">
        <div className='row'>

          <div className='col-md-12 d-flex justify-content-center'>
            <div className='calculator shadow ' id="calculator-div">
           
              <h2 className='text-center mt-4' id="calculator">Calculator</h2>
             
              <form action="#" className='p-4'>

                <div>
                  <input type="text" name="display" id="display" className="form-control" autoComplete='off' value={value} />
                </div>

                <div className='mt-3'>
                  <input type="button" value="C" className='button' onClick={e => setValue(" ")}  />
                  <input type="button" value="%" className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="DE" className='button' onClick={e => setValue(value.slice(0,-1))} />
                  <input type="button" value="/"  className='button' onClick={e => setValue(value + e.target.value)} />
                </div>

                <div>
                  <input type="button" value="7" className='button'  onClick={e => setValue(value + e.target.value)}  />
                  <input type="button" value="8" className='button'  onClick={e => setValue(value + e.target.value)}  />
                  <input type="button" value="9" className='button'  onClick={e => setValue(value + e.target.value)}  />
                  <input type="button" value="*" className='button'  onClick={e => setValue(value + e.target.value)}  />
                </div>

                <div>
                  <input type="button" value="4"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="5"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="6"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="-"  className='button' onClick={e => setValue(value + e.target.value)} />
                </div>

                <div>
                  <input type="button" value="1"  className='button' onClick={e => setValue(value + e.target.value)}  />
                  <input type="button" value="2"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="3"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="+"  className='button' onClick={e => setValue(value + e.target.value)} />
                </div>

                <div>
                  <input type="button" value="00" className='button' onClick={e => setValue(value + e.target.value)}   />
                  <input type="button" value="0"  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="."  className='button' onClick={e => setValue(value + e.target.value)} />
                  <input type="button" value="="  className='button' onClick={e => setValue(eval(value))} />
                </div>


              </form>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
